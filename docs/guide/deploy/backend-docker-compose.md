<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

<div class="docker">
使用 Docker Compose
</div>

Blossom 依赖 `JDK8` + `Mysql8`

该方式适合没有安装过 MYSQL 的场景，可以使用 Docker Compose 连同 MySQL 一起拉取构建，这是最简单快捷的部署方式。

## 确认是否安装 Docker Compose {#check-docker-compose}

执行下方命令，查看是否安装了 Docker Compose，如果安装的较新版本的 Docker，通常会默认安装 Docker Compose。

```bash
docker-compose --version
```

## 创建 `blossom-mysql8.yaml` 文件 {#create-yaml-file}

下方是 docker compose 示例文件，你需要创建一个 `blossom-mysql8.yaml` 文件，然后将下列内容复制到文件中，**并且修改其中标识为红色背景的内容**。

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
      # 【需修改】挂载图片保存路径，如果是windows环境，可以使用/c/home/bl/img/来指定磁盘 // [!code error]
      - /d/blossom/bl/:/home/bl/ // [!code error]
    environment:
      SPRING_PROFILES_ACTIVE: prod
      # 配置数据库访问地址
      SPRING_DATASOURCE_URL: jdbc:mysql://blmysql:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8
      # 【需修改】配置数据库用户名 // [!code error]
      SPRING_DATASOURCE_USERNAME: root // [!code error]
      # 【需修改】配置数据库密码 // [!code error]
      SPRING_DATASOURCE_PASSWORD: jasmine888 // [!code error]
      # 【需修改】配置图片上传后对应生成的访问 URL，需要以/pic/结尾。注意，该访问域名(IP:端口)需要与访问后台的域名(IP:端口)相同 // [!code error]
      PROJECT_IAAS_BLOS_DOMAIN: http://localhost:9999/pic/ // [!code error]
      # 配置图片保存的磁盘路径，并在 volumes 中将该路径挂载为本地路径，如上方 volumes 中的示例
      PROJECT_IAAS_BLOS_DEFAULT-PATH: /home/bl/img/
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
    restart: on-failure:3
    # 【需修改】注意挂载路径 // [!code error]
    volumes:
      - /d/blossom/Docker/mysql/data:/var/lib/mysql // [!code error]
      - /d/blossom/Docker/mysql/log:/var/log/mysql // [!code error]
      - /d/blossom/Docker/mysql/mysql-files/log:/var/lib/mysql-files // [!code error]
    environment:
      MYSQL_DATABASE: blossom
      # 【需修改】需要与 services.blossom.environment.SPRING_DATASOURCE_PASSWORD 相同 // [!code error]
      MYSQL_ROOT_PASSWORD: jasmine888 // [!code error]
      LANG: C.UTF-8
      TZ: Asia/Shanghai
    ports:
      - "3306:3306"
    networks:
      - blossomnet
    healthcheck:
      test: ["CMD", "mysqladmin", "-uroot", "-pjasmine888", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 3s
      retries: 12
```

该 Docker Compose 包含 MySQL，MySQL 容器在初始化时会自动创建数据库 Blossom，但你需要挂载 MySQL 文件到宿主机，防止数据丢失。

Docker Compose 文件可前往 [blossom-mysql8.yam](https://github.com/blossom-editor/blossom/blob/dev/docker/compose/blossom-mysql8.yaml) 进行查看。

## 启动 Docker Compose {#start-docker-compose}

在 `blossom-mysql8.yaml` 文件所在路径下执行以下命令，然后请耐心等待镜像拉取和启动。

```
docker compose -f blossom-mysql8.yaml up -d
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
  border-radius: 8px;
}
</style>
