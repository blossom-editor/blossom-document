<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

:::tip
本文转载自：强有力的实力丶《群辉 Blossom 部署教程》
:::

> 以下内容基于群辉 7.1 部署，7.2 版本应该稍微简单一点
>
> 下面这个流程我已经反复实践过多次，可顺利部署完成

## 一、配置数据库

### 1.在群辉套间中搜索 MariaDB,安装并配置密码

<br/>
<bl-img src="../../imgs/deploy/qunhui1/image.png" width="700px"/>

### 2.安装 phpmyadmin 套件（可用 ssh 方式代替）

<br/>
<bl-img src="../../imgs/deploy/qunhui1/image_20231222_103229_233.png" width="700px"/>

> 如果不想安装此套件，也可以使用 ssh 方式进行配置（具体 SSH 连接登录过程就不赘述了，既然选择了这种方式，应该肯定知道怎么操作）

### 3.修改相关配置并创建 blossom 数据库

#### phpmyadmin 方式

> 打开 phpmyadmin 套件并登录，用户名：root 密码：安装 MariaDB 是配置的密码，

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_104217_45.png" width="700px"/>

> 登录后点击 SQL，并粘贴以下内容

```sql
UPDATE mysql.user SET Host='%' WHERE User='root' and Host='localhost';

flush privileges;

CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_105256_435.png" width="700px"/>

> 执行完成后出现以下结果表示数据库访问权限及 blossom 数据库创建成功

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_105410_932.png" width="700px"/>
<br/>

#### ssh 方式

> 依次执行一下代码

```
1. mysql -uroot -p
提示数据密码时，数据创建数据库时的密码后回车（这里输入密码不会显示，输入完成后回车即可）
```

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_105901_101.png" width="700px"/>

```
此时已经进入数据库，依次执行以下命令
1. UPDATE mysql.user SET Host='%' WHERE User='root' and Host='localhost';
（修改root用户允许访问主机，%表示任意主机）
2. flush privileges;
（更新步骤一配置）
3. CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
（创建blossom数据库）
4. exit;
（退出MariaDB数据库）
```

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_110648_99.png" width="700px"/>

## 二、部署 Blossom

### 创建映射文件夹

> 主要保存图片，防止容器删除或升级导致图片丢失
> 在 docker 文件夹下依次创建 blossom->bl->img 文件夹（文件夹均为上一级子目录）
>
> 你也可以选择自己喜欢的文件夹进行上传但是要记住路径

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_112937_169.png" width="700px"/>

### 拉取镜像

> docker pull jasminexzzz/blossom:latest

### 启动容器

> 以下命令中 XXXX 表示需要配置的端口号，如无特殊需求可用默认端口号 9999

```bash
sudo docker run -d --name blossom-backend -p xxxx:9999 -v /volume1/docker/blossom/bl/:/home/bl/ jasminexzzz/blossom:latest --project.iaas.blos.domain="http://群辉IP:xxxx/pic/" --project.iaas.blos.default-path="/home/bl/img/" --spring.datasource.url="jdbc:mysql://群辉IP:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=数据库密码
```

> 比如例如我的环境：群辉 IP:192.168.1.3，使用端口 9111，数据库密码 Xx@159357 则命令如下：

```bash
sudo docker run -d --name blossom-backend -p 9111:9999 -v /volume1/docker/blossom/bl/:/home/bl/ jasminexzzz/blossom:latest --project.iaas.blos.domain="http://192.168.1.3:9111/pic/" --project.iaas.blos.default-path="/home/bl/img/" --spring.datasource.url="jdbc:mysql://192.168.1.3:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=Xx@159357
```

> 🔴 这里需要格外注意的一个地方是图片地址问题，应该很多小伙伴群辉都做了内网穿透或者 ddns 之类的，部署成功后页面可以正常访问到系统，但是所有上传的图片访问异常，所以如果想内网穿透后公网使用该项目，上述配置中图片地址部分一定要填写实际的访问地址，例如：内网穿透后的访问地址为：http://xxx.xxx.xxx:xxxx,则project.iaas.blos.domain这里一定要配置为http://xxx.xxx.xxx:xxxx/pic/

> 执行配置好的命令，出现一行随机字符后表示容器启动成功

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_141621_181.png" width="700px"/>

### 查看日志

> sudo docker logs blossom-backend
>
> 如果运行后出现下图状态，则表示服务启动成功
>
> <bl-img src="../../imgs/deploy/qunhui1/image_20231222_142115_708.png" width="700px"/>

> 除上述情况外，还可能出现如下情况，是由于 MariaDB 版本不支持数据库初始化中的语句，导致系统初始化失败

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_141930_965.png" width="700px"/>
<br/>

#### 临时解决方案

1. 下载该文件: https://pan.baidu.com/s/1CWqVFF8P9MDGtWeZ6FQlpQ?pwd=mmfj （在作者基础上语句上适配了 MariaDB）

2. 使用群辉 FileStation 将上述上传到群辉中

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_143208_857.png" width="700px"/>

3. 查看文件位置，并记录/volume1/homes/xxxxx/schema-mysql.sql

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_143357_283.png" width="700px"/>

4. 查看 blossom-backend 容器 ID
   > sudo docker ps 框选中即为容器 ID(d1cd24a8f25b)

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_143644_535.png" width="700px"/>

5. 替换容器中数据库初始化文件
   > sudo docker cp 步骤 3 中文件位置 容器 ID:/application/BOOT-INF/classes/
   >
   > 完整命令如下（替换容器中数据库初始化文件）
   >
   > sudo docker cp /volume1/homes/xxxxx/schema-mysql.sql d1cd24a8f25b:/application/BOOT-INF/classes/

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_144232_183.png" width="700px"/>

6. 重启容器

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_144333_415.png" width="700px"/>

> 重启完成后再次 sudo docker logs blossom-backend 查看日志无报错
> 希望作者可以在下版本中修复一下该问题

## 三、登录测试

> 在浏览器中输入
>
> http://群辉 IP:配置端口/editor/#/settingindex （网页客户端）
>
> http://群辉 IP:配置端口/blog/#/home （博客地址）
>
> 例如我的为：http://192.168.1.3:9111/editor/#/settingindex 访问后可跳转至网页客户端登录页面

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_145047_15.png" width="700px"/>
> 服务器地址为：http://192.168.1.3:9111
>
> 用户名、密码均为 blos
>
> 登录成功后如下图，至此 blossom 部署完成

<bl-img src="../../imgs/deploy/qunhui1/image_20231222_145336_89.png" width="700px"/>

## 四、说明

> 如果需要公网访问该应用，请做好内网穿透、域名解析、反向代理等相关操作
>
> 解析完成后需要重新删除容器并重新按最新按照实际情况修改启动命令中的地址信息
>
> 这里需要额外注意的就是 img 图片地址，需要确保配置的地址可以访问到该图片
