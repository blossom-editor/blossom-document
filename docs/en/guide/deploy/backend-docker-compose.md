<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
   info()
})
</script>

<div class="docker">Using Docker Compose</div>

Blossom depends on `JDK8` + `MySQL8`. If you are slow to pull the image, you can also download the image file through [Baidu Netdisk] (../about/download#baidu).

This method is suitable for scenarios where MYSQL has not been installed. It will be deployed together with MySQL. This is the simplest and fastest deployment method.

## Confirm whether Docker Compose is installed {#check-docker-compose}

Execute the following command to check whether Docker Compose is installed. If a newer version of Docker is installed, Docker Compose will usually be installed automatically.

```bash
docker-compose --version
```

## Create `blossom-mysql8.yaml` file {#create-yaml-file}

Below is a docker compose sample file. You need to create a `blossom-mysql8.yaml` file, then copy the following content into the file, <span style="color:red">** and modify the content marked with a red background **</span>.

```yml:line-numbers
version: "3.8"

networks:
   blossomnet:
     driver:
       bridge

services:
   blossom:
     image: jasminexzzz/blossom:latest
     container_name: blossom-backend
     volumes:
       # [Requires modification] // [!code error]
       # Change the part before the colon (:) to a path of the device where you run docker. Do not modify the content after the colon. // [!code error]
       # If it is a windows environment, you can use /c/home/bl/img/ to specify the disk // [!code error]
       - /d/blossom/bl/:/home/bl/ // [!code error]
     environment:
       SPRING_DATASOURCE_URL: jdbc:mysql://blmysql:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8
       SPRING_DATASOURCE_USERNAME: root
       # [Optional modification] Configure the database password. If you change the yellow part below, you must also modify it // [!code warning]
       SPRING_DATASOURCE_PASSWORD: jasmine888 // [!code warning]
     ports:
       - "9999:9999"
     networks:
       - blossomnet
     healthcheck:
       test: ["CMD", "curl", "-f", "http://localhost:9999/sys/alive"]
       interval: 30s
       timeout: 10s
       retries: 3
       start_period: 5s
     restart: always
     depends_on:
       blmysql:
         condition: service_healthy
   blmysql:
     image: mysql:8.0.31
     container_name: blossom-mysql
     restart:on-failure:3
     volumes:
       # [Modification required] Change the part before the colon (:) to a path of the device where you run docker. Do not modify the content after the colon. // [!code error]
       - /d/blossom/Docker/mysql/data:/var/lib/mysql // [!code error]
       - /d/blossom/Docker/mysql/log:/var/log/mysql // [!code error]
       - /d/blossom/Docker/mysql/mysql-files/log:/var/lib/mysql-files // [!code error]
     environment:
       MYSQL_DATABASE: blossom
       # [Optional modification] This change also needs to modify the yellow part above. Needs to be the same as services.blossom.environment.SPRING_DATASOURCE_PASSWORD // [!code warning]
       MYSQL_ROOT_PASSWORD: jasmine888 // [!code warning]
       LANG: C.UTF-8
       TZ: Asia/Shanghai
     ports:
       - "3306:3306"
     networks:
       - blossomnet
     healthcheck:
       # [Optional modification] If the database password "MYSQL_ROOT_PASSWORD" above is modified, the password after -p below also needs to be modified // [!code warning]
       test: ["CMD", "mysqladmin", "-uroot", "-pjasmine888", "ping", "-h", "localhost"]
       interval: 10s
       timeout: 3s
       retries: 12
```

This Docker Compose contains MySQL, and the MySQL container automatically creates the database Blossom when it is initialized.

Docker Compose source files can be viewed at [blossom-mysql8.yaml](https://github.com/blossom-editor/blossom/blob/dev/docker/compose/blossom-mysql8.yaml).

## Start Docker Compose {#start-docker-compose}

Execute the following command in the path where the `blossom-mysql8.yaml` file is located, and then please wait patiently for the image to be pulled and started.

```bash
docker compose -f blossom-mysql8.yaml up -d
# If the command does not work, you can try the following command
docker-compose -f blossom-mysql8.yaml up -d
```

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