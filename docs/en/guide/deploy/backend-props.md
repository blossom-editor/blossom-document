<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# Configuration Description

> The text introduces some other configuration items, which use default items and do not affect application usage.

<br/><br/><br/>

# 1.System parameter configuration {#sys}

## Default User {#sys-user}

After the system starts up, it will automatically initialize a user. The user table `base_user` will have an administrator user with the username and password: `blos/blos`. You can log in with this user to modify the username and various information, or create other users.

## Configure the geographical location of the user {#sys-user-location}

The user table's `base_user.location` field represents the geographical location of the user. This location is used to query the weather of the user's region. If you intend to use the weather functionality, you need to configure this field for the user. For more detailed documentation, please refer to HeWeather.

> Location documents for all regions across the country : [China-City-List-latest.csv](https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv)

> World cities list : [countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database) (To be honest, I don't know if global weather queries are feasible in this program)

## Configure system parameters {#sys-params}

The system parameter table `base_sys_param` is used to configure system-related parameters. To change these parameters, you need to modify the `base_sys_param.param_value` field. Below is a detailed explanation of the parameters:

:::tip 提示
Most configurations can be set on the [Server Configuration](../setting#server)page of the client without modifying the database. If you make modifications in the database, you need to restart the application for the changes to take effect.
:::

| Parameter                           | Description                                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ARTICLE_LOG_EXP_DAYS                | Number of days until the expiration of article editing history records. Historical records older than this will be deleted. |
| ARTICLE_RECYCLE_EXP_DAYS            | Number of days until articles in the recycle bin expire and are deleted.                                           |
| HEFENG_KEY                          | Configuration key for using the weather feature. You need to configure the key for HeFeng Weather here. Refer to: [HeFeng Weather](../hefeng) |
| BACKUP_PATH                         | Backup path for articles and images, in the format: `/home/bl/backup/`                                              |
| BACKUP_EXP_DAYS                     | Number of days until the expiration of article backup compression packages. Compressed packages older than this will be deleted. |
| BLOSSOM_OBJECT_STORAGE_DOMAIN       | Prefix for Blossom's built-in file storage address.                                                                |
| SERVER_MACHINE_EXPIRE               | Expiration date of the server, for reminder purposes only. Format: YYYY-MM-DD                                       |
| SERVER_DOMAIN_EXPIRE                | Expiration date of the domain, for reminder purposes only. Format: YYYY-MM-DD                                       |
| SERVER_HTTPS_EXPIRE                 | Expiration date of the HTTPS certificate, for reminder purposes only. Format: YYYY-MM-DD                             |
| SERVER_DATABASE_EXPIRE              | Expiration date of the database, for reminder purposes only. Format: YYYY-MM-DD                                     |
| **[Deprecated]**<br/>~~SERVER_JWT_SECRET~~ | Encryption string for JWT authorization. If you use JWT as an authorization token, it is strongly recommended to change this value! **JWT authorization is no longer recommended.** |
| **[Deprecated]**<br/>~~WEB_ARTICLE_URL~~   | Configuration for the access address of your blog. Typically, you only need to replace the domain part. Default value: `https://www.domain.com/blossom/#/articles?articleId=`      |

:::warning About the BACKUP_PATH Configuration Item
If you deploy using Docker, make sure to mount this value to the host machine to prevent backup file loss.
:::

:::warning About the BLOSSOM_OBJECT_STORAGE_DOMAIN Configuration Item
In version v1.12.0, the original `project.iaas.blos.domain` parameter from the configuration file has been moved to the `BLOSSOM_OBJECT_STORAGE_DOMAIN` configuration item in system parameters.
However, the configuration method in the configuration file remains valid. If you have customized the `project.iaas.blos.domain` parameter, the `BLOSSOM_OBJECT_STORAGE_DOMAIN` configuration item will be ignored. Additionally, the access address in the client configuration file will also be ignored.
:::

<br/><br/><br/>

# Backend Configuration Items {#props}

## Database Script Initialization {#props-sql-schema}

The system automatically initializes database-related scripts and parameters during startup, eliminating the need for manual database initialization.

Database script file path: `blossom-backend/backend/src/main/resources/schema-mysql.sql`

## Database Connection Configuration {#props-sql-url}

The default connection address is `127.0.0.1:3306/blossom`, and you can modify this configuration in `application-prod.yml`.

<bl-img src="../../../imgs/deploy/backend_application_prod.jpg" width="400px"/>

```yml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/xzzz-blossom
```

:::tip Docker deployment, which is typically configured in the startup command. For example:

```bash
--spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8"
```

:::

## File storage path {#props-iaas-blos}

You can modify the 'default path' configuration in 'application prod. yml' to change the actual storage path of the file.

```yml
project:
  iaas:
    # The type of object storage provided by Blossom is local storage.
    os-type: blossom
    blos:
      # It is not recommended to modify this value in the configuration file.
      domain: 'http://www.xxx.com/'
      # Please start with /, end with /, and short paths have better display effects in articles. Excessively long paths may confuse the content of the article.
      default-path: '/home/bl/img/'
```

:::tip Docker deployment
**If you deploy through Docker, it is not recommended to modify the value, but to modify the corresponding mounting path**

This configuration is usually configured in the startup command, and it is recommended to use default values for file storage 'default path'.

```bash
--project.iaas.blos.default-path="/home/bl/img/" \
```

For Docker Compose, make the following modifications:

```yml
services:
  blossom:
    environment:
      # Add the following two lines here
      PROJECT_IAAS_BLOS_DEFAULT_PATH: /home/bl/img/
```
:::

:::warning Attention!
Currently, other public cloud object storage is not supported.
:::

:::warning About the project.iaas.blos.domain configuration item
In version 1.12.0, the 'project. iaas. blos. domain' parameter in the configuration file was moved to the 'BLOSSOM' parameter in the system parameter_ OBJECT_ STORAGE_ In the DOMAIN ` configuration item.

But the configuration method in the configuration file is still valid. If the 'project. iaas. blos. domain' parameter is customized, then 'BLOSSOM'_ OBJECT_ STORAGE_ The DOMAIN ` configuration item will be ignored. At the same time, the access address in the client configuration file will also be ignored.
:::

## Modify application port {#props-port}

In the 'application. yml' configuration file, the access port of the application can be modified.

```yml
server:
  # Change this value to modify your port
  port: 9999
```

:::tip Docker Deployment
This configuration typically does not need to be modified but rather port mapping is done in the startup command.

```bash
-p 9999:9999 \
```

For Docker Compose, modify:

```yml
services:
  blossom:
    ports:
      # Modify the value before the colon
      - '9999:9999'
```

:::

## Modify Authorization Duration {#props-auth}

The default authorization duration is 6 hours. If there is no activity for more than 6 hours, re-login is required. You can modify the following configuration in `application-prod.yml` to change this setting.

```yml
project:
  auth:
    clients:
      - client-id: blossom
        # Change this value to modify your authorization time, in seconds
        duration: 21600
```

:::tip Docker Deployment
Configuration is required in the startup command.

```bash
--project.auth.clients[0].client-id=blossom
# Modify this value to change your authorization time, in seconds
--project.auth.clients[0].duration=99999
```

For Docker Compose, add the following configuration:

```yml
services:
  blossom:
    environment:
      # Add the following two items here
      PROJECT_AUTH_CLIENTS_0_CLIENT_ID: blossom
      PROJECT_AUTH_CLIENTS_0_DURATION: 99999
```

:::

## Resetting User Password {#reset-password}

You can reset the username and password at startup by modifying the following configuration:

```yml
project:
  auth:
    default-password: 123456 # Default password
    password-reset: false # Reset password at startup
```

:::tip Docker Deployment
Configuration is required in the startup command.

```bash
--project.auth.default-password=123456 # The value for the reset user password
--project.auth.password-reset=true
```

For Docker Compose, add the following configuration:

```yml
services:
  blossom:
    environment:
      # Add the following two items here
      PROJECT_AUTH_DEFAULT_PASSWORD: 123456
      PROJECT_AUTH_PASSWORD_RESET: true
```

:::

:::danger Warning!
After resetting, you need to change the configuration `project.auth.password-reset=` to `false`, otherwise the password will be reset every time you start!
:::

## Modifying Upload File Size Limit {#props-filesize}

The default upload size limit is `50MB`, mainly considering server bandwidth and storage space limitations. If you are deploying locally and may need a larger file storage, you can modify the following configuration in `application-prod.yml` to change this setting.

```yml
spring:
  servlet:
    multipart:
      max-file-size: 50MB
      max-request-size: 50MB
```

:::tip Docker Deployment
This configuration is usually configured in the startup command.

```bash
--spring.servlet.multipart.max-file-size="50MB"
--spring.servlet.multipart.max-request-size="50MB"
```

For Docker Compose, add the following configuration:

```yml
services:
  blossom:
    environment:
      # Add the following two items here
      SPRING_SERVLET_MULTIPART_MAX_FILE_SIZE: 100MB
      SPRING_SERVLET_MULTIPART_MAX_REQUEST_SIZE: 100MB
```

:::

:::danger Warning!
Currently, chunked uploading is not implemented. If you upload a very large file, uploading may fail due to network jitter, page switching, and other reasons.
:::
