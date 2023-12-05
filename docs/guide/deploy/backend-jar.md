<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

<div class="jar">
使用 Jar 包部署
</div>

该种方式适合物理机中已经有 `JDK8` + `MySQL8`，仅需要 Jar 包进行部署的场景。

## 创建数据库 {#create-database}

你需要在 MySQL 中先创建一个数据库，数据库名称需要与启动参数 `--spring.datasource.url` 配置的数据库名称相同，如果不需要自定义数据库名称，你可以直接使用如下语句创建数据库：

```sql
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

## 下载 Jar 包 {#dowload-jar}

前往下载 Jar 包：https://github.com/blossom-editor/blossom/releases

## 部署 Jar 包 {#deploy-jar}

将 Jar 包上传到服务器中，在 Jar 包所在路径下使用如下命令进行部署。如果使用 Windows，需要把每一行末尾的`\`删除，并将所有命令写成一行。

```bash
java -jar ./backend-blossom.jar \
  # 如果 9999 端口已被占用，注意修改// [!code warning]
 --server.port=9999 \// [!code error]
  #【需修改】配置图片保存的磁盘路径// [!code error]
 --project.iaas.blos.default-path="/home/bl/img" \// [!code error]
  #【需修改】配置图片上传后对应生成的访问URL，需要以/pic/结尾。注意，该访问URL需要与访问后台的域名和端口相同 // [!code error]
 --project.iaas.blos.domain="http://192.168.31.99:9999/pic/" \// [!code error]
  #【需修改】配置数据库访问地址// [!code error]
 --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" \// [!code error]
  #【需修改】配置数据库用户名// [!code error]
 --spring.datasource.username=root \// [!code error]
  #【需修改】配置数据库密码// [!code error]
 --spring.datasource.password=jasmine888 &// [!code error]
```

:::warning 注意
如果命令错误：1. 请将命令中的注释删除。2. 将每一行后的斜杠`\`删除。3. 将所有命令写为一行。
:::

参数说明：

| 参数                             | 说明                                                                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| --server.port                    | 【可修改】应用端口                                                                                                    |
| --project.iaas.blos.domain       | 【需修改】配置图片上传后对应生成的访问 URL 前缀，需要以/pic/结尾。**注意，该访问 URL 需要与访问后台的域名和端口相同** |
| --project.iaas.blos.default-path | 【需修改】配置图片保存的磁盘路径                                                                                      |
| --spring.datasource.url          | 【需修改】配置数据库访问地址                                                                                          |
| --spring.datasource.username     | 【需修改】配置数据库用户名                                                                                            |
| --spring.datasource.password     | 【需修改】配置数据库密码                                                                                              |

## 使用脚本部署 {#use-sh}

除了使用上述命令启动 Jar 包之外，你也可以使用如下脚本，该脚本会自动关闭当前运行的后台程序，并重启当前路径下的 Jar 包。

> 脚本地址：https://github.com/blossom-editor/blossom/blob/dev/blossom-backend/script/restart-springboot.sh

```bash
#!/dash
# 重启 blossom
pid=`ps aux | grep backend-blossom.jar | grep -v grep | awk '{print $2}'`
echo "进程ID : " $pid
kill -9 $pid
echo "进程" $pid "已被杀死"
echo "开始重启 backend-blossom 服务器"
# 注意修改相关参数，与上方介绍的相同 // [!code error]
nohup java -jar ./backend-blossom.jar --server.port=9999 --project.iaas.blos.domain="http://192.168.31.99:9999/pic/" --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=jasmine888 &
echo "backend-blossom 正在启动,请查看日志 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓"
```

<!--@include: ./backend-after-check.md-->

<!--@include: ./backend-after-download.md-->

<style scoped>
.jar {
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
