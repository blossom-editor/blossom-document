<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

<div class="idea">
使用 Idea 插件部署
</div>

该部署方式适合修改代码后部署在物理机器中。

## 安装插件部署 {#install-plugin}

在 Idea 中安装插件

<bl-img src="../../imgs/deploy/idea_plugin1.png" width="400px"/>

配置目标机器地址

<bl-img src="../../imgs/deploy/idea_plugin2.png" width="700px"/>

<bl-img src="../../imgs/deploy/idea_plugin3.png" width="700px" style="margin-top:10px;"/>

新增启动项

<bl-img src="../../imgs/deploy/idea_plugin4.png" width="400px"/>

配置启动项

<bl-img src="../../imgs/deploy/idea_plugin5.png" width="700px"/>

1. 需要上传的`jar`包路径
2. 目标机器的 IP，点击右侧+号添加
3. 上传到目标机器的路径
4. 上传后执行的命令，例如执行下方的重启脚本
5. 上传前执行的编译命令

> 脚本地址：https://github.com/blossom-editor/blossom/blob/v1.5.0/blossom-backend/script/restart-springboot.sh

```bash
#!/dash
# 重启 blossom
pid=`ps aux | grep backend-blossom.jar | grep -v grep | awk '{print $2}'`
echo "进程ID : " $pid
kill -9 $pid
echo "进程" $pid "已被杀死"
echo "开始重启 backend-blossom 服务器"
# 注意修改相关 配置 // [!code error]
nohup java -jar ./backend-blossom.jar --server.port=9999 --project.iaas.blos.domain="http://192.168.31.99:9999/pic/" --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=jasmine888 &
echo "backend-blossom 正在启动,请查看日志 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓"
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
