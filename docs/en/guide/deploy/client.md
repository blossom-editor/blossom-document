# Web Client

If you prefer not to use the desktop client, you can also utilize the web-based client. You can check the [online demo](https://www.wangyunf.com/blossom-demo/#/settingIndex)for reference.

## Built-in Web Client {#backstage}

Starting from version 1.10.0, deploying the backend will include a built-in web client. The client can be accessed in the browser using the following address:

```bash
IP:Port(Domain)/editor/#/settingindex
```

---

For example, if the IP address and port are '192.168.11.11:9999', then you can access the blog at:

```bash
http://192.168.11.11:9999/editor/#/settingindex
```

If the domain name is 'http://www.abc.com', then you can access the blog at:

```bash
http://www.abc.com/editor/#/settingindex
```

If there is a reverse proxy configured with a path such as /bl/, then you would access the blog using the following URL:

```bash
http://www.abc.com/bl/editor/#/settingindex
```

:::danger <span style="color:#ea483f">Attention!</span>
This address is the access address for the webpage, not the login address! It is the address filled in the browser address bar!
<bl-img src="../../../imgs/deploy/client-url.png" width="700px"/>
:::

## Deploy web client separately {#independent }

### Download

Go to [download address](../about/download) to download the file 'blossom x.y.z web client. zip'.

### Deployment method

Extract 'blossom x.y.z web client. zip' to the server directory. In this case, the file is extracted in the path '/usr/local/xzzz/blossom/demo/'.

Configure Nginx, below is an example configuration:

```bash
# [To be modified] Configure client resource access path // [!code error]
location /blossom-demo/ {
        # [To be modified] Path where configuration resources are located // [!code error]
        alias                   /usr/local/xzzz/blossom/demo/; // [!code error]
        try_files               $uri $uri/ /index.html;
        index                   index.html index.htm;
        gzip                    on;
        gzip_buffers            32 4k;
        gzip_comp_level         6;
        gzip_min_length         100;
        gzip_types              application/javascript text/css text/xml font/ttf font/otf image/svg+xml;
        gzip_disable            "MSIE [1-6]\.";
        gzip_vary               on;
}

```

:::tip Prompt
The complete Nginx example can be viewed: [How to configure Nginx](./faq#how-config-nginx)
:::
