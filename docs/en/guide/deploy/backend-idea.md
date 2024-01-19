<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

<div class="idea">
Deploying with IntelliJ IDEA Plugin
</div>

This deployment method is suitable for deploying on physical machines after modifying the code.

## Install Plugin Deployment {#install-plugin}

Install the plugin in IntelliJ IDEA.

<bl-img src="../../imgs/deploy/idea_plugin1.png" width="400px"/>

Configure the target machine address.

<bl-img src="../../imgs/deploy/idea_plugin2.png" width="700px"/>

<bl-img src="../../imgs/deploy/idea_plugin3.png" width="700px" style="margin-top:10px;"/>

Add a new startup item.

<bl-img src="../../imgs/deploy/idea_plugin4.png" width="400px"/>

Configure the startup item.

<bl-img src="../../imgs/deploy/idea_plugin5.png" width="700px"/>

1. Path to the `jar` file to be uploaded.
2. IP address of the target machine, add using the + button on the right.
3. Path on the target machine to upload to.
4. Command to execute after uploading, for example, execute the restart script below.
5. Compilation command to execute before uploading.

> Script link: [restart-springboot.sh](https://github.com/blossom-editor/blossom/blob/v1.5.0/blossom-backend/script/restart-springboot.sh)

```bash
#!/dash
# Restart blossom
pid=`ps aux | grep backend-blossom.jar | grep -v grep | awk '{print $2}'`
echo "Process ID: " $pid
kill -9 $pid
echo "Process" $pid "has been killed"
echo "Restarting the backend-blossom server"
# Remember to modify related configurations // [!code error]
nohup java -jar ./backend-blossom.jar --server.port=9999 --project.iaas.blos.domain="http://192.168.31.99:9999/pic/" --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=jasmine888 &
echo "backend-blossom is starting, please check the log ↓↓↓↓↓↓↓↓↓↓↓↓↓↓"
```

<!--@include: ./backend-after-check.md-->

<!--@include: ./backend-after-download.md-->

<style scoped>
.idea {
  width:100%;
  height:60px;
  color: #fff;
  background-image:linear-gradient(135deg,#FE4612 0%,#8536A5 50%,#2042E6 100%);
  font-size: 40px;
  line-height: 60px;
  padding-left:20px;
  border-radius: 2px;
}
</style>
