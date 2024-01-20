<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 📥 Download

You can download the client, backend application, and backend image through the following methods.

:::warning Note
If you cannot access Dockerhub or experience slow connections, you can download the image files on [Baidu Cloud](./download#baidu).
:::

## Github {#github}

> Go to Github for downloads: https://github.com/blossom-editor/blossom/releases

<bl-img src="../../../imgs/deploy/download_github.png" width="200px"/>

- `backend-blossom.jar`: Backend Java package.
- `blossom-x.y.z.dmg`: MacOS ARM client.
- `blossom-x.y.z.-setup.exe`: Windows client.
- `blossom-x.y.z.-web-blog.zip`: Blog webpage deployment package.
- `blossom-x.y.z.-web-client.zip`: Client webpage deployment package.

:::tip Note
If you need Docker image files, please download them from Baidu Cloud.
:::

## Baidu Cloud {#baidu}

> Go to Baidu Cloud for downloads: https://pan.baidu.com/s/1X4ViDxJ2gm2w95XlcpSCTg?pwd=uksl
>
> Extraction code `uksl`

<bl-img src="../../../imgs/deploy/download_baidu.png" width="300px"/>

In addition to various client and backend deployment files, Baidu Cloud also includes Docker image files for download.

- `backend-blossom.jar`: Backend Java package.
- `blossom-x.y.z.dmg`: MacOS ARM client.
- `blossom-x.y.z.-setup.exe`: Windows client.
- `blossom-x.y.z.-web-blog.zip`: Blog webpage deployment package.
- `blossom-x.y.z.-web-client.zip`: Client webpage deployment package.
- `jasminexzzz-blossom-arm64-x-y-z.tar.zip`: MacOS ARM architecture Docker image.
- `jasminexzzz-blossom-amd64-x-y-z.tar.zip`: Windows/Linux Docker image.
- `mysql-8-0-31.zip`: MySQL image.

## Group Download

Join the group to contact the author for installation packages, [view group number](./contact).

## Try After Downloading {#tryuse}

[How to try it out?](../tryuse)