## Install the Client and Log In {#install}

After successfully deploying, you can use the client to log in. Blossom provides two types of clients:

1. [Download the PC Desktop Client](../about/download).
2. Use the built-in web client.

> The web client address is: `IP:Port(domain)/editor/#/settingindex`
>
> ---
>
> For example, if the IP:Port is `127.0.0.1:9999`, visit `http://127.0.0.1:9999/editor/#/settingindex`
>
> For example, if the domain is `http://www.abc.com`, visit `http://www.abc.com/editor/#/settingindex`
>
> If you have configured a reverse proxy path, like `/bl/`, visit `http://www.abc.com/bl/editor/#/settingindex`

:::danger <span style="color:#ea483f">Attention!</span>
This address is for accessing the web, not the login address! Enter it in the browser's address bar!
<bl-img src="../../imgs/deploy/client-url.png" width="700px"/>
:::

When you open the client, you will enter the login page.

<bl-img src="../../imgs/setting/login.png" width="700px"/>

Enter the access address of the backend in the top, then log in using the default username and password.

- Username: `blos`, Password: `blos`

:::danger <span style="color:#ea483f">Attention!</span>
The access address does not include `/editor/#/settingindex`!!!
:::

After logging in, it's recommended to change the default user's username and password to use it as your main account, **because the built-in blog part of the backend only supports users with ID `1`**.

> See [How to Modify and Create Users?](../setting)

## Quick Setup {#quick-setting}

If you are a first-time user, you will see the following prompt in the upper right corner of the page.

<bl-img src="../../imgs/setting/caution.gif" width="300px"/>

Click on the flashing yellow icon to enter the following page.

<bl-img src="../../imgs/setting/caution-popover.png" width="400px"/>

Click on any red box above to start quick configuration.

<bl-img src="../../imgs/setting/quick-setting-pic.png" width="650px"/>

Click on [Yes] to enter the blog configuration.

<bl-img src="../../imgs/setting/quick-setting-blog.png" width="650px"/>

Usually, clicking on [Confirm using the built-in blog] will complete the configuration.

- For more about quick setup features, see [Settings](../setting).
- For more information about blog configuration, see [Blog/Mobile Page](./blog).

<bl-img src="../../imgs/setting/quick-setting-completed.png" width="650px"/>
