## 查看配置项是否正确 {#check-prop}

你可以输入以下命令，在容器日志中查看你修改后的配置项是否正常生效：

```bash
docker logs blossom-backend
```

在启动日志的最上方会显示你配置的各项参数。

<bl-img src="../../imgs/deploy/backend-before-check.png" width="700px"/>

## 检查是否启动成功 {#check-start}

### 方法一：查看日志

你可以输入以下命令，在容器日志中查看容器是否启动成功：

```bash
docker logs blossom-backend
```

如果日志的最底部显示以下内容，则说明容器启动成功。

<bl-img src="../../imgs/deploy/backend-success.png" width="700px"/>

### 方法二：直接访问

比方你部署在本地，则可以访问`127.0.0.1:9999`，如果返回以下内容，则说明部署成功。

```json
{
  "code": "AUTH-40101",
  "msg": "无效的授权信息",
  "ex": "无效的授权信息",
  "data": null
}
```

该提示意为你没有登录，现在就可以使用客户端登录使用了。

<!-- 或者访问`127.0.0.1:9999/sys/alive`，返回一下内容则为成功。

```json
{
  "code": "20000",
  "msg": "成功",
  "data": "这里是 [blossom-backend] 服务器 [dev] 环境"
}
``` -->
