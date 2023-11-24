<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>


## Q: 图片上传后在照片墙中无法显示

检查访问后台的域名(IP:端口)是否与 `--project.iaas.blos.domain` 配置的相同，如果访问后台的域名中包含代理路径，则 `--project.iaas.blos.domain` 也要增加代理路径。

正常配置如下：

```shell
# 访问后台的域名
https://www.xxx.com/

# project.iaas.blos.domain 需要配置为如下值:
--project.iaas.blos.domain=https://www.xxx.com/pic/
```

如果配置了代理路径，例如在 nginx 进行了如下配置：

```shell
# blossom 服务器
location /bl/ {
        proxy_pass              http://127.0.0.1:9999/;
        client_max_body_size    50m;
        proxy_set_header        x-forwarded-for $remote_addr;
}
```

那么需要将配置修改为

```shell
# 访问后台的域名
https://www.xxx.com/bl

# project.iaas.blos.domain 需要配置为如下值:
--project.iaas.blos.domain=https://www.xxx.com/bl/pic/
```

## Q: 项目启动后未找到数据库，后台出现 Unknown database 'blossom'错误

查看 MySQL 中是否创建了对应数据库，若未创建数据库，可以使用如下语句创建数据库。

```
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

```

## Q: 使用 Docker 部署时，备份或导出文件未在配置的文件夹目录中。

检查表中的 BACKUP_PATH 配置的路径是否挂载到了宿主机中。
