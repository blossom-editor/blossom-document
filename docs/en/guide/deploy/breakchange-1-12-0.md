<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# Important changes regarding v1.12.0

If you are upgrading from a version before v1.12.0, you need to understand the following changes.

## Modify file access address configuration

In versions before v1.12.0, the following parameters need to be configured in the startup command or Docker script:

```bash
docker run -d \
  # [To be modified] The access URL generated after uploading the configuration image should end with/pic/. Note that the access URL needs to be the same as the domain name and port for accessing the backend
  --project.iaas.blos.domain="http://127.0.0.1:9999/pic/" \

# If it is a Docker composite, the following content needs to be configured
services:
  blossom:
    environment:
      PROJECT_IAAS_BLOS_DOMAIN: http://localhost:9999/pic/
```

---

In version v1.12.0, configuration can be directly performed in the client's Settings ->Server Configuration ->File Access Address.

:::tip Prompt
The old configuration method is still valid. If you add a command, the content in the command will be used first.
:::

<bl-img src="../../../imgs/setting/server.png" width="550px"/>

## Changing Blog Configuration Methods

Before version `v1.12.0`, details such as the IPC record number, public network security record number, blog name, and blog logo needed to be customized by modifying the `config.js` configuration file.

However, starting from version `v1.12.0`, you can directly configure these settings in the client's **Settings** -> **Blog Configuration**.

:::tip Note
The configuration method in `config.js` remains valid but will prioritize the content configured in the client.

Configuration items in `config.js` will be removed in future versions.
:::

<bl-img src="../../../imgs/setting/blog.png" width="550px"/>
