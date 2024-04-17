<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => info())
</script>

# 🛠️ Settings

You can enter the settings page in the bottom left corner of the software, including login and other functions.

:::tip Note
This section only introduces configuration items that need special attention. For more content, please go to the client to view.
:::

## Quick Configuration {#quick}

Quick configuration allows you to configure your file access address and blog address more conveniently and quickly.

Click the bell button in the upper right corner.

<bl-img src="../../imgs/setting/caution.png" width="200px"/>

Click the quick configuration in the lower right corner of the pop-up box.

<bl-img src="../../imgs/setting/caution-popover1.png" width="350px"/>

You will enter the following page.

<bl-img src="../../imgs/setting/quick-setting-pic.png" width="650px"/>

Click "Yes", and the image access address will be automatically configured as [login+`/pic`]. Then enter the blog configuration. There are two ways to access the blog:

1. Use the built-in blog.
2. Use the independently deployed blog.

### Built-in Blog

Usually, click "Confirm to use the built-in blog" to complete the configuration. The built-in blog is provided by default to users with USER_ID 1. If you want to modify this default value, you can refer to [Blog/Mobile Page](./deploy/blog).

In the blog preview on the right, you can see the user ID of the current blog configuration, which is convenient for checking with the current login user ID.

<bl-img src="../../imgs/setting/quick-setting-blog.png" width="650px"/>

### Independently Deployed Blog

If you use an independently deployed blog, you need to fill in the article access address of the blog. When you correctly fill in the blog address, the blog preview will be displayed as shown below, showing the user ID configured for the blog, making it easy to check with the current login user ID.

<br/>
<bl-img src="../../imgs/setting/quick-setting-blog-custom.png" width="650px"/>

After clicking "Confirm," you can use it normally.

<bl-img src="../../imgs/setting/quick-setting-completed.png" width="650px"/>

## Client Configuration {#client}

Please check on the client.

## Server Configuration {#server}

<br/>
<bl-img src="../../imgs/setting/server.png" width="550px"/>

### File Access Address <Badge type="danger" text="Important" />{#pic-url}

All uploaded files will be accessed using this address, which is very important and can be set using the [Quick Configuration](./setting#quick) button.

:::danger Warning!
If you modify the file access address after uploading the image, the old image will still be accessed through the old address. If your old address is unavailable, all old images will be inaccessible.

**Please be cautious when modifying your access address or domain!**
:::

### HeFeng Weather Key {#hefeng}

If you need to use the weather function, after obtaining the weather key, you can configure it here. After configuration, you can refresh the weather on the homepage. For more information, please check [HeFeng Weather](./hefeng).

## Blog Configuration {#blog}

Various configurations of the blog are performed on the client. If the configuration does not take effect after configuration, it is recommended to refresh the cache and view it.

:::tip How to refresh the cache?
Press `F12` to open the console, and select the disable cache button. **After configuration is complete, change it back to unselected.**
<bl-img src="../../imgs/setting/disabled-cache.png" width="550px"/>
:::

## Modify Personal Information {#upd-userinfo}

You can modify the personal information of the currently logged-in user.

If you use the weather function, you need to modify the weather forecast city. For more information, please check [HeFeng Weather](./hefeng).

## Change Login Password {#upd-password}

Change the password of the currently logged-in user.

## Add User {#add-user}

You can add a user account, and only administrators can add it. If the added user is a read-only user, the user only has query permissions.

The administrator can also view the account information of all users.

## Theme setting {#theme }

In the top right corner of the page, you can go to the theme Settings:

<bl-img src="../../imgs/setting/theme.png" width="350px"/>

Here you can set the theme style of the software, as follows:

<bl-img src="../../imgs/setting/theme1.png" width="400px"/>
<br/>
<bl-img src="../../imgs/setting/theme2.png" width="400px"/>
<br/>
<bl-img src="../../imgs/setting/theme3.png" width="400px"/>
