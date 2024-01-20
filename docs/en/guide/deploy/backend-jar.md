<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

<div class="jar">
Deploying with Jar Package
</div>

This method is suitable for scenarios where a physical machine already has `JDK8` + `MySQL8` installed, and only the Jar package is needed for deployment.

## Create Database {#create-database}

You need to create a database in MySQL first. The database name needs to be the same as the one configured in the startup parameter `--spring.datasource.url`. If you don't need to customize the database name, you can directly use the following statement to create the database:

```sql
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

## Download Jar Package {#dowload-jar}

Go to the following link to download the Jar package:https://github.com/blossom-editor/blossom/releases

## Deploy Jar Package {#deploy-jar}

Upload the Jar package to the server and use the following command in the directory where the Jar package is located. If using Windows, remove the `\` at the end of each line and write all commands in one line.

```bash
java -jar ./backend-blossom.jar \
  # If port 9999 is already in use, modify it carefully// [!code warning]
 --server.port=9999 \// [!code error]
  #【Modify Required】Configure the disk path for saving images// [!code error]
 --project.iaas.blos.default-path="/home/bl/img" \// [!code error]
  #【Modify Required】Configure the database access address// [!code error]
 --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" \// [!code error]
  #【Modify Required】Configure the database username// [!code error]
 --spring.datasource.username=root \// [!code error]
  #【Modify Required】Configure the database password// [!code error]
 --spring.datasource.password=jasmine888 &// [!code error]
```

:::warning Caution
If the command is incorrect: 1. Remove the comments in the command. 2. Remove the backslash `\` at the end of each line. 3. Write all commands on one line.
:::

Parameter explanation:

| Parameter                        | Description                      |
| -------------------------------- | -------------------------------- |
| --server.port                    | 【Can be modified】Application port|
| --project.iaas.blos.default-path | 【Modify Required】Configure the disk path for saving images|
| --spring.datasource.url          | 【Modify Required】Configure the database access address|
| --spring.datasource.username     | 【Modify Required】Configure the database username|
| --spring.datasource.password     | 【Modify Required】Configure the database password|

## Deploy Using Script {#use-sh}

In addition to starting the Jar package with the above command, you can also use the following script. This script will automatically close the currently running background program and restart the Jar package in the current path.

> Script link:https://github.com/blossom-editor/blossom/blob/dev/blossom-backend/script/restart-springboot.sh

```bash
#!/dash
# Restart blossom
pid=`ps aux | grep backend-blossom.jar | grep -v grep | awk '{print $2}'`
echo "Process ID: " $pid
kill -9 $pid
echo "Process" $pid "has been killed"
echo "Restarting the backend-blossom server"
# Remember to modify related parameters, same as above introduction // [!code error]
nohup java -jar ./backend-blossom.jar --server.port=9999 --spring.datasource.url="jdbc:mysql://192.168.31.99:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=jasmine888 &
echo "backend-blossom is starting, please check the log ↓↓↓↓↓↓↓↓↓↓↓↓↓↓"
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
