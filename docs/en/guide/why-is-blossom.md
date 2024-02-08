<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# Why use <span style="color:#779649;font-weight: bold;">Blossom</span>？

> Blossom：means <span class="blossom-translate">**The blooming of flowers**</span>.
>
> Writing is akin to the nourishing touch of rain, dew, and nutrients; ultimately, it unfolds the author's thoughts and knowledge into a blossoming, fruitful outcome.

## What is Blossom？ {#what-is-blossom}

Blossom is a note-taking software that requires private deployment. Although it is positioned as a cloud-based application, you can still deploy it locally, ensuring that data and images are stored on your device without relying on any external image hosting or object storage.

<bl-img src="../../imgs/home/device.png" :shadow="false"/>

- <span style="color:#779649;font-weight: bold;">Client</span>：Supports deployment on Windows and ARM architecture for Mac, as well as being deployable as a web application.
- <span style="color:#EAB412;font-weight: bold;">Mobile Client</span>：Responsive web and mobile interface primarily designed for mobile use, also serving as a blog accessible to everyone.
- <span style="color:#307DEF;font-weight: bold;">Server</span>：The server supports deployment within Docker.

::: tip 
If you'd like to give it a try, you can check out [Demo Trial](./tryuse).
:::

## Why is Blossom？ {#why-is-blossom}

As an open-source software, Blossom has no intention, nor capability, to compete with mature note-taking software in the market. It simply offers a new choice.

### Special pages {#special-page}

Blossom has not adopted a software layout and page design similar to Notion because there are already many software with similar interfaces in the market. If you're feeling aesthetically fatigued with these software, perhaps you can give Blossom a try.

### Comprehensive file relationships {#references}

When using certain software, especially those from public cloud providers, you may encounter the following frustrating scenarios:

1. I have many images, but I don't know if they are in use. I want to delete them, but I'm afraid to do so.
2. One image is used in multiple articles. When the image needs an update, I have to modify each article separately.
3. I accidentally deleted an image, causing issues with the display of my articles. Retrieving the image is a difficult and cumbersome process.
4. Which images have I uploaded and used? I wish there was a gallery-like feature to view and manage them.

If you have these concerns, perhaps you can give Blossom a try. Blossom offers comprehensive **image management**，**protection against accidental deletion**，and **bidirectional linking between images and articles**.You can easily see which articles use specific images and replace them with just one click.

<bl-img src="../../imgs/pic/pic_reference.png" width="500px"/>

### Quick Migration {#easy-transfer}

All images are independent of any third-party image hosting and storage. They are only stored on the deployed device ; You can write in [Markdown](./markdown) with non-destructive syntax extensions,content created here can be displayed correctly in any Markdown software.

All images and articles support one-click [backup and export](./article#backup),making migration easy within minutes. The exported files can seamlessly be opened with local software like VS Code or Obsidian.

### Additional Features {#multifunction}

- 📅 [Schedule](./plan)
- 🏷️ [To-Do](./todo)
- 🎫 [QuickNote](./note)
- 🍅 [Pomodoro Timer](./article#tomato)
- 🧰 Multi-user support, word count statistics, word count trend chart, editing heatmap, weather forecast, theme settings, and more...

Blossom boasts a wealth of features, serving not only as a knowledge management tool but also as a comprehensive and practical utility for simultaneous multi-user usage.

### Blog & Mobile Client {#blog}

Comes with a responsive [blog page](./deploy/blog), Blossom features comprehensive article management, PV/UV access statistics, and categorized topics. It can help you establish a dynamic blogging system.

The blog is more than just a blog; upon logging in, you can view all your planned schedules, to-do lists, and notes. The blog also functions as a mobile client.

### API

Blossom also provides a backend access API interface. If you are a developer, you can develop your own blog using the API.

<style scoped>
.blossom-translate {
  color:#779649;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}

.blossom-translate:hover {
  color:#DAB655;
  text-decoration: underline;
}
</style>
