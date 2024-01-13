<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# Deme Trial

Blossom is a cloud-based note-taking software, which includes a server program that you need to deploy yourself. If you haven't decided whether you want to deploy it on your own, you can first [try it online](https://www.wangyunf.com/blossom-demo/#/settingIndex) or [download the client](./about//download),and follow the instructions below to log in and experience Blossom.

Once you [download the client](./about//download) and install it, the application will open to the login page by default, as shown in the image below:

<bl-img src="../../imgs/setting/tryuse.png"/>

**Click the 'I want to try' button below**, and a trial window will pop up. Then, click 'Login directly' to access and use the application.

<bl-img src="../../imgs/setting/tryuse1.png" width="400px"/>

:::tip 
The trial account is a read-only account, allowing you to query data but not perform specific data operations.
:::

If you find that Blossom aligns with your operating habits and use cases, or if you have any suggestions or feedback, you can [contact the author](./about/contact.html) for communication or inquire about the details of independent deployment. The author will try to provide advice and assistance based on your usage scenario.
