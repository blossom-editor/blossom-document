## 安装客户端并登录 {#install}

部署成功后即可使用客户端登录，Blossom 提供了两种客户端。

1. [下载 PC 桌面客户端](../about/download)。
2. 使用自带的网页客户端。

> 网页客户端地址为: `IP:端口(域名)/editor/#/settingindex`
>
> ---
>
> 例如 IP:端口为`127.0.0.1:9999`，则访问 `http://127.0.0.1:9999/editor/#/settingindex`
>
> 例如域名为`http://www.abc.com`，则访问`http://www.abc.com/editor/#/settingindex`
>
> 如果有配置反向代理路径，如`/bl/`，则访问`http://www.abc.com/bl/editor/#/settingindex`

:::danger <span style="color:#ea483f">注意！</span>
这个地址是网页的的访问地址，不是登录地址！是填写在浏览器地址栏的地址！
<bl-img src="../../../imgs/deploy/client-url.png" width="700px"/>
:::

打开客户端后，会进入登录页面。

<bl-img src="../../../imgs/setting/login.png" width="700px"/>

在上方输入后台的访问地址，然后使用默认用户名密码进行登录

- 用户名为`blos`，密码为`blos`

:::danger <span style="color:#ea483f">注意！</span>
访问地址中不包含`/editor/#/settingindex`!!!
:::

登录后建议将默认用户修改用户名和密码后，做为你的主账号使用，**因为后台自带的博客端仅支持用户 ID 为`1`的用户**。

> 查看[如何修改及创建用户?](../setting)

## 快速设置 {#quick-setting}

如果你是初次使用，那么在页面的右上角会看到如下提示。

<bl-img src="../../../imgs/setting/caution.gif" width="300px"/>

点击黄色闪烁图标，会进入如下页面。

<bl-img src="../../../imgs/setting/caution-popover.png" width="400px"/>

点击上方任意一个红色框，即可开始快速配置。

<bl-img src="../../../imgs/setting/quick-setting-pic.png" width="650px"/>

点击【是】，进入博客配置。

<bl-img src="../../../imgs/setting/quick-setting-blog.png" width="650px"/>

通常情况下点击【确认使用自带博客】，即可配置完成。

- 更多关于快速设置的功能可查阅[设置](../setting)。
- 更多关于博客的配置信息可查阅[博客/移动端页面](./blog)。

<bl-img src="../../../imgs/setting/quick-setting-completed.png" width="650px"/>
