<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
   info()
})
</script>

<div class="docker">Use Dockerhub public image</div>

Blossom depends on `JDK8` + `MySQL8`. If you are slow to pull the image, you can also download the image file through [Baidu Netdisk] (../about/download#baidu).

## [Optional] Pull the MySQL image and start {#pull-mysql}

If the database is already installed, you can skip this step.

```bash
docker pull mysql:8.0.31
```

Start the image and pay attention to the mounting path, otherwise the data will be lost after the container is deleted.

```bash
docker run\
-d \
--name mysql \
#[Optional modification] Database root user’s password // [!code warning]
-e MYSQL_ROOT_PASSWORD=jasmine888 \
-p 3306:3306 \
#[Requires modification] Mount the database file saving path. // [!code error]
# Note: Just change the path before the colon to a path on the device where your Docker is located. Do not modify the content after the colon. // [!code error]
-v /usr/local/docker/mysql/data:/var/lib/mysql \// [!code error]
-v /usr/local/docker/mysql-files/log:/var/lib/mysql-files \// [!code error]
-v /usr/local/docker/mysql/log:/var/log/mysql \// [!code error]
mysql:8.0.31
```

If you are using Windows, the `\` after each line of command may not be recognized, so you need to write the command as one line, as follows:

```bash
docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=jasmine888 -p 3306:3306 -v /usr/local/docker/mysql/data:/var/lib/mysql -v /usr/local/docker/mysql-files/ log:/var/lib/mysql-files -v /usr/local/docker/mysql/log:/var/log/mysql mysql:8.0.31
```

:::warning note
If the command is wrong: 1. Please delete the comments in the command. 2. Delete the slash `\` after each line. 3. Write all commands on one line.
:::

## Create database {#create-database}

Regardless of whether you have installed a database before, you need to create a database in MySQL. The database name needs to be the same as the database name configured with the parameter `--spring.datasource.url` in the command to start the container. If you do not need to customize the database name, You can create a database directly using the following statement.

```sql
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

:::tip Tips
If you don't know how to create a database, check out [How to create a database in Docker](./faq#how-create-database).
:::

## Pull application image {#pull-image}

```
docker pull jasminexzzz/blossom:latest
```

Start the application container and pay attention to modifying the content marked with a red background.

```bash
docker run -d \
   # Container name
   --name blossom-backend \
   # Specify port mapping
   -p 9999:9999 \
   #[Needs modification] Mount image saving path. If it is a windows environment, you can use /c/home/bl/ to specify the disk // [!code error]
   # Note: Just change the path before the colon to a path on the device where your Docker is located. Do not modify the content after the colon. // [!code error]
   -v /home/bl/:/home/bl/ \// [!code error]
   #Start image name
   jasminexzzz/blossom:latest \
   #[Requires modification] Configure database access address // [!code error]
   --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" \// [!code error]
   #[Optional modification] Configure database user name // [!code warning]
   --spring.datasource.username=root \// [!code warning]
   #[Optional modification] Configure database password // [!code warning]
   --spring.datasource.password=jasmine888// [!code warning]
```

:::warning note
If the command is wrong: 1. Please delete the comments in the command. 2. Delete the slash `\` after each line. 3. Write all commands on one line.
:::

The Windows platform cannot recognize the `\` after the command, so you need to enter the following command on the console:

```bash
docker run -d --name blossom-backend -p 9999:9999 -v /home/bl/:/home/bl/ jasminexzzz/blossom:latest --project.iaas.blos.domain="http://127.0. 0.1:9999/pic/" --project.iaas.blos.default-path="/home/bl/img/" --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom ?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=jasmine888
```

:::danger warning
Pay attention to modifying the file mounting path of the configuration item `-v /home/bl/:/home/bl/`, otherwise the saved image information will be deleted when the container is deleted**.
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