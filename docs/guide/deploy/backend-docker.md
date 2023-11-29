<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

<div class="docker">使用 Dockerhub 公共镜像</div>

Blossom 依赖 `JDK8` + `Mysql8`。如果你拉取镜像缓慢，也可以通过[百度网盘下载](../about/download#baidu)镜像文件。

## 【可选】拉取 MySQL 镜像并启动 {#pull-mysql}

如果已安装数据库，可以跳过该步骤。

```bash
docker pull mysql:8.0.31
```

启动镜像，注意挂载路径，否则容器删除后数据将丢失

```bash
docker run \
-d \
--name mysql \
#【可选修改】数据库 root 用户的密码 // [!code warning]
-e MYSQL_ROOT_PASSWORD=jasmine888 \
-p 3306:3306 \
#【需修改】挂载数据库文件保存路径。 // [!code error]
# 注意：只需要将冒号前的路径改为你 Docker 所在设备的路径，不要修改冒号后面的内容。 // [!code error]
-v /usr/local/docker/mysql/data:/var/lib/mysql \ // [!code error]
-v /usr/local/docker/mysql-files/log:/var/lib/mysql-files \ // [!code error]
-v /usr/local/docker/mysql/log:/var/log/mysql \ // [!code error]
mysql:8.0.31
```

如果你使用的是 Windows，可能无法识别每一行命令后的`\`，所以你需要将命令写为一行，如下：

```bash
docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=jasmine888 -p 3306:3306 -v /usr/local/docker/mysql/data:/var/lib/mysql -v /usr/local/docker/mysql-files/log:/var/lib/mysql-files -v /usr/local/docker/mysql/log:/var/log/mysql mysql:8.0.31
```

## 创建数据库 {#create-database}

无论你是否曾经安装过数据库，你都需要在 MySQL 中创建一个数据库，数据库名称需要与启动容器命令中参数--spring.datasource.url 配置的数据库名称相同，如果不需要自定义数据库名称，你可以直接使用如下语句创建数据库：

```sql
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

## 拉取应用镜像 {#pull-image}

```
docker pull jasminexzzz/blossom:latest
```

启动应用容器，注意修改其中标识为红色背景的内容。

```bash:line-numbers{6,11,15,17,19}
docker run -d \
  # 容器名称
  --name blossom-backend \
  # 指定端口映射
  -p 9999:9999 \
  #【需修改】挂载图片保存路径，如果是 windows 环境，可以使用 /c/home/bl/ 来指定磁盘 // [!code error]
  # 注意：只需要将冒号前的路径改为你 Docker 所在设备的路径，不要修改冒号后面的内容。 // [!code error]
  -v /home/bl/:/home/bl/ \ // [!code error]
  # 启动的镜像名称
  jasminexzzz/blossom:latest \
  #【需修改】配置图片上传后对应生成的访问URL，需要以/pic/结尾。注意，该访问URL需要与访问后台的域名和端口相同 // [!code error]
  --project.iaas.blos.domain="http://127.0.0.1:9999/pic/" \ // [!code error]
  # 配置图片保存的磁盘路径，请使用 -v 将该路径挂载为本地路径，如上方示例
  --project.iaas.blos.default-path="/home/bl/img/" \
  #【需修改】配置数据库访问地址 // [!code error]
  --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&& // [!code error]serverTimezone=GMT%2B8" \ // [!code error]
  #【可选修改】配置数据库用户名 // [!code warning]
  --spring.datasource.username=root \ // [!code warning]
  #【可选修改】配置数据库密码 // [!code warning]
  --spring.datasource.password=jasmine888 // [!code warning]
```

如果你使用的是 Windows，需要在控制台输入下列命令

```bash
docker run -d --name blossom-backend -p 9999:9999 -v /home/bl/:/home/bl/ jasminexzzz/blossom:latest --project.iaas.blos.domain="http://127.0.0.1:9999/pic/" --project.iaas.blos.default-path="/home/bl/img/" --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=jasmine888
```

:::danger 警告
注意修改配置项 `-v /home/bl/:/home/bl/` 的文件挂载路径，**否则容器删除的同时会删除保存的图片信息**。
:::

<!--@include: ./backend-after-docker-check.md-->

<!--@include: ./backend-after-download.md-->

<style scoped>
.docker {
  width:100%;
  height:60px;
  color: #fff;
  background-image:linear-gradient(135deg,#1D63ED 0%,#1D62EDBA 50%,#1D62ED4F 100%);
  font-size: 40px;
  line-height: 60px;
  padding-left:20px;
  border-radius: 2px;
}
</style>
