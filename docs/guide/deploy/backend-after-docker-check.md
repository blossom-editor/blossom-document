## 查看配置项是否正确 {#check-prop}

你可以输入以下命令，在容器日志中查看你修改后的配置项是否正常生效：

```bash
docker logs blossom-backend
```

在启动日志的最上方会显示你配置的各项参数。

<bl-img src="../../imgs/deploy/backend-before-check.png" width="700px"/>

## 检查是否启动成功 {#check-start}

你可以输入以下命令，在容器日志中查看容器是否启动成功：

```bash
docker logs blossom-backend
```

如果日志的最底部显示以下内容，则说明容器启动成功。

<bl-img src="../../imgs/deploy/backend-success.png" width="700px"/>
