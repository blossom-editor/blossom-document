<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 配置项说明

> 文本介绍一些其他配置项，这些配置即使使用默认项也不影响应用使用。

## 系统参数配置 {#sys}

### 默认用户 {#sys-user}

系统启动后，会自动初始化用户，用户表 `base_user` 会带有一个管理员用户，用户名密码为：`blos/blos`。你可以通过该用户登录后，修改用户名及各类信息，或者创建其他用户。

### 配置用户所在的地理位置 {#sys-user-location}

用户表 `base_user.location` 字段代表该用户所处的地区位置，该位置会用来查询该用户所属地区的天气，如果你要使用天气功能，那么你需要为用户配置该字段信息。更具体的文档可见: 和风天气

> 全国所有地区的位置文档：[China-City-List-latest.csv](https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv)

### 配置系统参数 {#sys-params}

系统参数表 `base_sys_param` 用于配置系统相关参数。要变更这些参数，你需要修改 `base_sys_param.param_value` 字段，下面是参数的详细说明：

:::tip 提示
大部分配置可以在客户端的[服务器配置](../setting#server)页面中进行设置，无需修改数据库。
:::

- `WEB_ARTICLE_URL`：如果你使用博客功能进行公网访问，那么此处需要配置你博客的访问地址。通常你只需要替换域名部分。默认值`https://www.domain.com/blossom/#/articles?articleId=`

- `ARTICLE_LOG_EXP_DAYS`：文章编辑历史记录的过期天数，超过该天数的历史记录将被删除。默认 30 天。

- `HEFENG_KEY`：如果你需要使用天气功能，需要在此处配置和风天气的 KEY，具体方式见：[和风天气](../hefeng)。

- `BACKUP_PATH`：文章和图片的备份路径, 参考格式: `/home/bl/backup/`

:::tip 提示
如果你使用 Docker 进行部署，那么该值建议与容器启动时的`--project.iaas.blos.default-path`参数拥有共同的父目录，并将父目录挂载到宿主机。例如：

当 docker 参数： `--project.iaas.blos.default-path` = `/home/bl/img/`

那么该参数推荐配置为： `BACKUP_PATH`：`/home/bl/backup/`

然后将`/home/bl/`目录挂载到宿主机。
:::

- `BACKUP_EXP_DAYS`：文章备份压缩包的过期天数，超过该时限的压缩包会被删除。

- `SERVER_JWT_SECRET`：字符串 JWT 授权的加密字符串，如果你使用 JWT 作为授权令牌，那么强烈建议修改该值！可以替换成任意其他字符串，你可以使用一个随机的 SHA1 或 UUID。

::: warning 注意
JWT 方式的授权方式已经不再建议使用。
:::

- `SERVER_MACHINE_EXPIRE`：服务器到期日期，仅用于提醒。请使用 YYYY-MM-DD 格式。

- `SERVER_DOMAIN_EXPIRE`：域名到期日期，仅用于提醒。请使用 YYYY-MM-DD 格式。

- `SERVER_HTTPS_EXPIRE`：HTTPS 证书到期日期，仅用于提醒。请使用 YYYY-MM-DD 格式。

- `SERVER_DATABASE_EXPIRE`：数据库到期日期，仅用于提醒。请使用 YYYY-MM-DD 格式。

## 后台配置文件 {#props}

### 数据库脚本初始化 {#props-sql-schema}

系统启动时，会自动初始化数据库相关脚本和参数，无需手动初始化数据库。

数据库脚本文件路径：`blossom-backend/backend/src/main/resources/schema-mysql.sql`

### 数据库连接配置 {#props-sql-url}

:::tip 提示
如果你使用 Docker 部署，该配置通常在启动命令中配置。例如：

```bash
--spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8"
```

:::

默认的连接地址为 `127.0.0.1:3306/blossom`，你可以在 `application-prod.yml` 中修改此配置。

<bl-img src="../../imgs/deploy/backend_application_prod.jpg" width="400px"/>

```yml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/xzzz-blossom
```

### 访问地址与文件存储 {#props-iaas-blos}

:::tip 提示
如果你使用 Docker 部署，该配置通常在启动命令中配置，并且文件存储 `default-path` 建议使用默认值。

```bash
--project.iaas.blos.domain="http://127.0.0.1:9999/pic/" \
--project.iaas.blos.default-path="/home/bl/img/" \
```

:::

你可以在 `application-prod.yml` 中修改 `domain` 以及 `default-path` 配置。

```yml
project:
  iaas:
    # 对象存储的类型为 blossom 提供的本地存储方式
    os-type: blossom
    blos:
      # 请以 /pic/ 结尾, 如果你在 nginx 中配置有代理, 注意别忘了添加你的代理路径
      # 注意：在下方示例中, /bl 即为 nginx 反向代理路径, 如果你的访问路径中不包含反向代理或路径不同, 请酌情删除或修改
      domain: 'https://www.domain.com/bl/pic/'
      # 请以 / 开头, / 结尾, 简短的路径在文章中有更好的显示效果, 过长一定程度会使文章内容混乱
      default-path: '/home/bl/img/'
```

`domain`：填写你的访问路径，并以`/pic/` 结尾，`/pic/` 是查看图片的接口名称。

`default-path`：填写你服务器保存图片的根目录。

:::warning 注意
目前暂不支持其他公有云对象存储。
:::

### 修改应用端口 {#props-port}

:::tip 提示
如果你使用 Docker 部署，该配置通常不需要修改，而是在启动命令中进行端口映射。

```bash
-p 9999:9999 \
```

:::

在 `application.yml` 配置文件中，可以修改应用的访问端口。

```yml
server:
  # 修改该值来改变你的端口
  port: 9999
```

### 修改授权时长 {#props-auth}

默认的授权时长为 6 小时，超过 6 小时没有使用则必须重新登录。你可以修改 `application-prod.yml` 中的以下配置来更改这个设置。

```yml
project:
  auth:
    clients:
      - client-id: blossom
        # 修改该值来改变你的授权时间，单位秒
        expire: 21600
```

### 修改上传文件大小限制 {#props-filesize}

:::tip 提示
如果你使用 Docker 部署，该配置通常在启动命令中配置。

```bash
--spring.servlet.multipart.max-file-size="50MB"
--spring.servlet.multipart.max-request-size="50MB"
```

:::

默认的上传大小限制是 `50MB`，主要是考虑到服务器带宽和存储空间限制。如果你是本地部署，可能会需要更大的文件存储。那么你可以修改 `application-prod.yml` 中的以下配置来更改这个设置。

```yml
spring:
  servlet:
    multipart:
      max-file-size: 50MB
      max-request-size: 50MB
```

:::danger 警告
目前上传并没有实现分片上传，如果你上传超大文件，可能会因为网络抖动，页面切换等原因出现上传失败的情况。
:::

## 更多技术细节 {#props-more}

后台是一个很简单的 SpringBoot 应用，默认使用基于 Caffeine 存储的本地有状态 Token。

流量监控使用 Alibaba Sentinel，并在此之上拓展了一些功能 expand-sentinel，如将流量日志解析为图表的一些接口。

后台还带有一个简易的链路追踪功能 expand-tracker，脱胎于笔者过去开发的一个链路追踪框架，尽管作为一个流量较小的单体应用拥有此功能意义不大，但仍然能在日志中标识一次请求的全部日志。

目前对象存储支持阿里云 OSS，腾讯云 COS，华为云 OBS，七牛云 KODO，但这些后台功能并未进行完善的测试，以及在客户端的照片墙功能中未完成对应的开发，所以并未放开。后续有精力可能会完善这部分内容。
