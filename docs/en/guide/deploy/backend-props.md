<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 配置项说明

> 文本介绍一些其他配置项，这些配置使用默认项也不影响应用使用。

<br/><br/><br/>

# 一、系统参数配置 {#sys}

## 默认用户 {#sys-user}

系统启动后，会自动初始化用户，用户表 `base_user` 会带有一个管理员用户，用户名密码为：`blos/blos`。你可以通过该用户登录后，修改用户名及各类信息，或者创建其他用户。

## 配置用户所在的地理位置 {#sys-user-location}

用户表 `base_user.location` 字段代表该用户所处的地区位置，该位置会用来查询该用户所属地区的天气，如果你要使用天气功能，那么你需要为用户配置该字段信息。更具体的文档可见: 和风天气

> 全国所有地区的位置文档：[China-City-List-latest.csv](https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv)

## 配置系统参数 {#sys-params}

系统参数表 `base_sys_param` 用于配置系统相关参数。要变更这些参数，你需要修改 `base_sys_param.param_value` 字段，下面是参数的详细说明：

:::tip 提示
大部分配置可以在客户端的[服务器配置](../setting#server)页面中进行设置，无需修改数据库。如果在数据库中修改，需要重启应用才会生效。
:::

| 参数                                 | 说明                                                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ARTICLE_LOG_EXP_DAYS                 | 文章编辑历史记录的过期天数，超过该天数的历史记录将被删除。                                                        |
| ARTICLE_RECYCLE_EXP_DAYS             | 文章回收站过期天数, 超过该天数将被删除                                                                            |
| HEFENG_KEY                           | 如果你需要使用天气功能，需要在此处配置和风天气的 KEY，具体方式见：[和风天气](../hefeng)                           |
| BACKUP_PATH                          | 文章和图片的备份路径, 参考格式: `/home/bl/backup/`                                                                |
| BACKUP_EXP_DAYS                      | 文章备份压缩包的过期天数，超过该时限的压缩包会被删除。                                                            |
| BLOSSOM_OBJECT_STORAGE_DOMAIN        | Blossom 自带文件存储地址前缀。                                                                                    |
| SERVER_MACHINE_EXPIRE                | 服务器到期日期，仅用于提醒。 YYYY-MM-DD 格式。                                                                    |
| SERVER_DOMAIN_EXPIRE                 | 域名到期日期，仅用于提醒。 YYYY-MM-DD 格式。                                                                      |
| SERVER_HTTPS_EXPIRE                  | HTTPS 证书到期日期，仅用于提醒。 YYYY-MM-DD 格式。                                                                |
| SERVER_DATABASE_EXPIRE               | 数据库到期日期，仅用于提醒。 YYYY-MM-DD 格式。                                                                    |
| 【已废弃】<br/>~~SERVER_JWT_SECRET~~ | JWT 授权的加密字符串，如果你使用 JWT 作为授权令牌，那么强烈建议修改该值！**JWT 方式的授权方式已经不再建议使用**。 |
| 【已废弃】<br/>~~WEB_ARTICLE_URL~~   | 配置你博客的访问地址。通常你只需要替换域名部分。默认值`https://www.domain.com/blossom/#/articles?articleId=`      |

:::warning 关于 BACKUP_PATH 配置项
如果你使用 Docker 进行部署，那么需要注意将该值挂载到宿主机，防止备份文件丢失。
:::

:::warning 关于 BLOSSOM_OBJECT_STORAGE_DOMAIN 配置项
在 v1.12.0 版本中，原配置文件的`project.iaas.blos.domain`参数移入到了系统参数的`BLOSSOM_OBJECT_STORAGE_DOMAIN`配置项中。

但配置文件中的配置方式仍然有效，如果自定义了`project.iaas.blos.domain`参数，则`BLOSSOM_OBJECT_STORAGE_DOMAIN`配置项会被忽略。同时在客户端配置文件访问地址也会被忽略。
:::

<br/><br/><br/>

# 后台配置项 {#props}

## 数据库脚本初始化 {#props-sql-schema}

系统启动时，会自动初始化数据库相关脚本和参数，无需手动初始化数据库。

数据库脚本文件路径：`blossom-backend/backend/src/main/resources/schema-mysql.sql`

## 数据库连接配置 {#props-sql-url}

默认的连接地址为 `127.0.0.1:3306/blossom`，你可以在 `application-prod.yml` 中修改此配置。

<bl-img src="../../../imgs/deploy/backend_application_prod.jpg" width="400px"/>

```yml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/xzzz-blossom
```

:::tip Docker 部署，该配置通常在启动命令中配置。例如：

```bash
--spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8"
```

:::

## 文件存储路径 {#props-iaas-blos}

你可以在 `application-prod.yml` 中修改 `default-path` 配置来更改文件的实际存储路径。

```yml
project:
  iaas:
    # 对象存储的类型为 blossom 提供的本地存储方式
    os-type: blossom
    blos:
      # 已不建议在配置文件中修改该值。
      domain: 'http://www.xxx.com/'
      # 请以 / 开头, / 结尾, 简短的路径在文章中有更好的显示效果, 过长一定程度会使文章内容混乱
      default-path: '/home/bl/img/'
```

:::tip Docker 部署
**如果你通过 Docker 部署，那么并不建议你修改该值，而是修改对应的挂载路径。**

该配置通常在启动命令中配置，并且文件存储 `default-path` 建议使用默认值。

```bash
--project.iaas.blos.default-path="/home/bl/img/" \
```

Docker Compose 则修改

```yml
services:
  blossom:
    environment:
      # 在该处增加如下两项
      PROJECT_IAAS_BLOS_DEFAULT_PATH: /home/bl/img/
```
:::

:::warning 注意
目前暂不支持其他公有云对象存储。
:::

:::warning 关于 project.iaas.blos.domain 配置项
在 v1.12.0 版本中，配置文件的`project.iaas.blos.domain`参数移入到了系统参数的`BLOSSOM_OBJECT_STORAGE_DOMAIN`配置项中。

但配置文件中的配置方式仍然有效，如果自定义了`project.iaas.blos.domain`参数，则`BLOSSOM_OBJECT_STORAGE_DOMAIN`配置项会被忽略。同时在客户端配置文件访问地址也会被忽略。
:::

## 修改应用端口 {#props-port}

在 `application.yml` 配置文件中，可以修改应用的访问端口。

```yml
server:
  # 修改该值来改变你的端口
  port: 9999
```

:::tip Docker 部署
该配置通常不需要修改，而是在启动命令中进行端口映射。

```bash
-p 9999:9999 \
```

Docker Compose 则修改

```yml
services:
  blossom:
    ports:
      # 修改冒号前的值
      - '9999:9999'
```

:::

## 修改授权时长 {#props-auth}

默认的授权时长为 6 小时，超过 6 小时没有使用则必须重新登录。你可以修改 `application-prod.yml` 中的以下配置来更改这个设置。

```yml
project:
  auth:
    clients:
      - client-id: blossom
        # 修改该值来改变你的授权时间，单位秒
        duration: 21600
```

:::tip Docker 部署
需要在启动命令中配置。

```bash
--project.auth.clients[0].client-id=blossom
# 修改该值来改变你的授权时间，单位秒
--project.auth.clients[0].duration=99999
```

Docker Compose 则增加如下配置

```yml
services:
  blossom:
    environment:
      # 在该处增加如下两项
      PROJECT_AUTH_CLIENTS_0_CLIENT_ID: blossom
      PROJECT_AUTH_CLIENTS_0_DURATION: 99999
```

:::

## 重置用户密码 {#reset-password}

你可以在启动时重置用户名与密码, 只需要修改如下配置项：

```yml
project:
  auth:
    default-password: 123456 # 默认密码
    password-reset: false # 启动时重置密码
```

:::tip Docker 部署
需要在启动命令中配置。

```bash
--project.auth.default-password=123456 # 该值为重置后的用户密码
--project.auth.password-reset=true
```

Docker Compose 则增加如下配置

```yml
services:
  blossom:
    environment:
      # 在该处增加如下两项
      PROJECT_AUTH_DEFAULT_PASSWORD: 123456
      PROJECT_AUTH_PASSWORD_RESET: true
```

:::

:::danger 注意！
在重置后, 你需要将配置`project.auth.password-reset=`改为`false`，否则每次启动都会重置密码！
:::

## 修改上传文件大小限制 {#props-filesize}

默认的上传大小限制是 `50MB`，主要是考虑到服务器带宽和存储空间限制。如果你是本地部署，可能会需要更大的文件存储。那么你可以修改 `application-prod.yml` 中的以下配置来更改这个设置。

```yml
spring:
  servlet:
    multipart:
      max-file-size: 50MB
      max-request-size: 50MB
```

:::tip Docker 部署
该配置通常在启动命令中配置。

```bash
--spring.servlet.multipart.max-file-size="50MB"
--spring.servlet.multipart.max-request-size="50MB"
```

Docker Compose 则增加如下配置

```yml
services:
  blossom:
    environment:
      # 在该处增加如下两项
      SPRING_SERVLET_MULTIPART_MAX_FILE_SIZE: 100MB
      SPRING_SERVLET_MULTIPART_MAX_REQUEST_SIZE: 100MB
```

:::

:::danger 警告
目前上传并没有实现分片上传，如果你上传超大文件，可能会因为网络抖动，页面切换等原因出现上传失败的情况。
:::
