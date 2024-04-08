# 数据迁移

本文介绍如何在更换设备时迁移 Blossom

:::danger 注意
为保证数据安全，请在迁移成功后再删除旧设备的所有数据。
:::

## 一、数据库

### 导出数据库文件 {#export-db }

将 blossom 导出到当前执行命令路径下(路径可以是任意路径)，文件名可自定义，例如：`blossom_backup.sql`。

```sql
mysqldump -u root -p blossom > blossom_backup.sql
```

:::tip Docker 导出数据库
首先进入到数据库容器，然后执行命令，本例子在 /home/bl 路径下执行相关命令

```sql
mysqldump -u root -p blossom > blossom_backup.sql
```

然后回到宿主机，执行 docker 命令，将容器内的文件复制到宿主机

```bash
// 注意
// 将下方的 19ceb326c 替换成你容器的名称
// 将下方的 /home/bl/blossom_back.sql 替换成你在容器内的备份路径
// 将下方的 /home/backup 替换成你宿主机的某个路径
docker cp 19ceb326c:/home/bl/blossom_back.sql /home/backup
```

:::

:::info 提示
你也可以使用其他可视化工具导出数据库，会更加方便。
:::

### 导入数据库文件 {#import-db }

在新设备上安装数据库后，复制 blossom_backup.sql 文件到设备路径下，执行以下命令

```sql
-- 将当前路径下的  blossom_backup.sql 导入到 blossom
mysql -u root -p blossom < blossom_backup.sql
```

:::tip Docker 导入数据库
将备份文件导入到容器

```bash
// 注意
// 将下方的 19ceb326c 替换成你容器的名称
// 将下方的 /home/backup:blossom_back.sql 替换成你宿主机存放备份文件的路径
// 将下方的 /home/bl 替换成你在容器内的备份路径
docker cp /home/backup:blossom_back.sql 19ceb326c:/home/bl
```

然后进入到容器的 /home/bl 路径下，执行以下命令

```sql
mysql -u root -p blossom < blossom_backup.sql
```

:::

导入后检查数据库数据是否正确。

:::warning 注意
如果使用 Docker，不建议复制数据库的挂载文件，可能会有意料之外的错误出现。
:::

## 二、迁移图片 {#migration-pic }

将保存图片的迁移到新设备，可以将图片文件夹压缩后复制到新设备解压，注意路径要与原设备路径相同。

:::warning 注意
如果使用 Docker，挂载路径可以不同，但容器内的路径不能改变。
:::

例如启动容器时的命令如下：

```bash
docker run -d
  # 设置容器的挂载路径
  # 冒号后的路径不可以变更，冒号前的路径可以变更
  -v /home/bltest/:/home/bl/
```

迁移时，将挂载的文件夹 `/home/bltest/` 压缩后复制到新设备解压即可。

## 三、在新设备部署应用 {#deploy }

最后在新设备部署应用即可。

## 四、修改旧链接地址 {#update-old-data }

:::tip 提示
**如果你使用固定的域名访问，并且在迁移后访问域名无变化，则无需关注本步骤**。

如果你使用 IP 访问，并且在更换设备后 IP 出现变化，你需要修改文章中的图片链接。
:::

你需要链接到数据库，依次执行以下语句。注意，执行前，不要删除备份文件！以防修改失败时还原数据库。

```sql
-- 将下方的地址替换成【旧】的图片地址前缀
set @old_domain = 'https://blossom.xxxxold.xxx/pic';
-- 将下方的地址替换成【新】的图片地址前缀
set @new_domain = 'https://blossom.xxxxnew.xxx/pic';

update blossom_article set markdown = REPLACE(markdown, @old_domain, @new_domain),html = REPLACE(html, @old_domain, @new_domain) where markdown LIKE concat('%',@old_domain,'%');

update blossom_article_open set markdown = REPLACE(markdown, @old_domain, @new_domain),html = REPLACE(html, @old_domain, @new_domain) where markdown LIKE concat('%',@old_domain,'%');

update blossom_article_reference set target_url = REPLACE(target_url, @old_domain, @new_domain) where target_url LIKE concat('%',@old_domain,'%');

update blossom_picture set url = REPLACE(url, @old_domain, @new_domain) where url LIKE concat('%',@old_domain,'%');
```

然后进入客户端，修改服务器设置中的文件访问地址，以及博客配置中的文章查看地址。

<br/>
<bl-img src="../../imgs/setting/server.png" width="550px"/>

<br/>
<bl-img src="../../imgs/setting/blog.png" width="550px"/>
