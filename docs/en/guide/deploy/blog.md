<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# Blog Deployment

<br/>
<bl-img src="../../../imgs/blog/home.png"/>

<div style="display:flex;flex-direction: row;justify-content: flex-start;overflow-x:scroll;padding:  10px;margin-top:20px;">
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../../imgs/blog/home_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../../imgs/blog/article_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../../imgs/plan/plan_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../../imgs/todo/todo_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../../imgs/note/note_m.png" width="230px" /></div>
</div>

In addition to accessing public articles, the blog also provides access to various functions on mobile devices.

## Built-in Blog {#backstage}

Starting from version `1.10.0`, the backend deployment comes with a built-in blog page, accessible at: 

```bash
IP:Port(Domain)/blog/#/home
```

---

For example, if the IP address and port are '192.168.11.11:9999', then you can access the blog at:

```bash
http://192.168.11.11:9999/blog/#/home
```

If the domain name is 'http://www.abc.com', then you can access the blog at:

```bash
http://www.abc.com/blog/#/home
```

If there is a reverse proxy configured with a path such as `/bl/`, then you would access the blog using the following URL:

```bash
http://www.abc.com/bl/blog/#/home
```

:::danger Attention!
The default blog displays public article information for user ID 1, but allows all users to log in to the blog. If you need to modify the default display user, please refer to [Modify Blog Configuration](./blog#update-config) below.

<!-- Due to the wide range of usage scenarios, Blossom cannot cover all testing, so if you encounter problems when using the built-in blog, you can choose to deploy it separately. -->

:::

## Independent Blog Deployment {#independent }

If multiple users need to use the blog function, separate deployment is required. The blog configuration for each user is independent and can have different logos, blog names, IPC record numbers, and other information.

### File Download

Go to the [download page](../about/download) to download the `blossom-x.y.z-web-blog.zip` file.

### Proxy Deployment

Unzip `blossom-x.y.z-web-blog.zip` to the server directory. In this example, the files are extracted to the `/usr/local/xzzz/blossom/blog/` path.

Taking Nginx as an example:

```bash
# [To be modified] Configure client resource access path // [!code error]
location /blossom-blog/ {
        # [To be modified] Path where configuration resources are located // [!code error]
        alias                   /usr/local/xzzz/blossom/blog/; // [!code error]
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

## Modifying Blog Configuration {#update-config}

After decompressing the file, there will be a 'config. js' file under the decompression path, which can be modified for personalized configuration.

:::tip Prompt
If deployed through Docker, you can make modifications by mounting files. You need to add the following configuration in the Docker run command:

```bash
# Change the section before the colon (:) to a path on the device where you are running Docker, without modifying the content after the colon. // [!code error]
-v /d/blossom/dev/config.js:/application/BOOT-INF/classes/static/blog/config.js
```

If using Docker Compose deployment, it needs to be added at the location shown below:

```yaml
services:
  blossom:
    image: jasminexzzz/blossom:latest
    container_name: blossom-backend
    volumes:
      - /d/blossom/bl/:/home/bl/
      # Add to this location// [!code error]
      - /d/blossom/dev/config.js:/application/BOOT-INF/classes/static/blog/config.js
```

Then create the config.js file in the corresponding directory, and then copy the [Configuration File Content] (./blog#config-content) below to the file.
:::

### Configuration file content{#config-content}

<!--
// [!code warning]
// [!code error]
 -->

<span style="color:red">**Modify the content marked with a red background below**。</span>If you need to mount the config.js file in Docker, please copy the following content into the file.

:::danger Important changes
In version v1.12.0, various blog configurations are already supported through the client. [Go to View] (../setting#blog).

In future versions, the configuration items in the configuration file will be gradually removed, and it is recommended to use client configuration.
:::

```javascript
window.blconfig = {
  SYS: {
    // Modifying this value can change the name of the top left corner of the webpage
    NAME: 'Blossom',
    // Public network security number(only Chinese need)
    GONG_WANG_AN_BEI: '',
    // ICP Record number(only Chinese need)
    ICP_BEI_AN_HAO: '',
    // E-mail
    EMAIL: ''
  },
  THEME: {
    LOGO_STYLE: {
      // Rounding settings for the logo in the upper left corner
      'border-radius': '50%'
    },
    // Is the theme folder displayed in a special style
    SUBJECT_TITLE: true
  },
  DOMAIN: {
    // You must modify this item if you deploy the blog independently // [!code error]
    // No need to modify if mounted as the built-in blog configuration for the backend // [!code error]
    // Fill this value with your backend access address, which should be the same as the address entered on the Blossom client login page // [!code error]
    PRD: 'http://localhost:9999', // [!code error]
    // Fill this value with the user ID that you want to open the blog for // [!code error]
    USER_ID: 1 // [!code error]
  },
  /**
   * You can fill in your own website information, which will be displayed in the 'More' button at the top right corner, and under 'All Articles' on the homepage
   * NAME: Website name
   * URL: Website address
   * LOGO: Website logo address
   */
  LINKS: [
    // Below is an example
    // {
    //   NAME: 'Blossom Dual-Chain Note Software',
    //   URL: 'https://www.wangyunf.com/blossom-doc/index.html',
    //   LOGO: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/head/blossom_logo.png'
    // }
  ]
}
```

## Log in to the Blog {#login}

You can navigate to the blog's login page by clicking on the logo at the top left corner more than 7 times consecutively. Most of the functionalities and interaction logic in the blog are designed to adapt to mobile device screens.

:::tip Prompt
The complete Nginx example can be viewed: [How to configure Nginx](./faq#how-config-nginx)
:::

## Configure the Blog Address on the Client Side {#client}

You can refer to the [Quick Configuration](../setting#quick).
