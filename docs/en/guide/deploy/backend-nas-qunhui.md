<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
   info()
})
</script>

# Synology tutorial for creating blossom

:::tip
This article is reprinted from: Blackcurrant and Lilac "Synology Tutorial on Creating Blossom"
:::

## 1. Install database

1.1 Open Synology Package Center, search for "MariaDB" and click to install.

<bl-img src="../../imgs/deploy/qunhui/WechatIMG142.jpg" width="700px" :shadow="false"/>

1.2 During installation, you will be asked to fill in a password. Note that the password must contain uppercase and lowercase letters, numbers, and special symbols. Note that previously installed mysql database may cause the 3306 port to be duplicated and cannot be installed. Please modify the port of the previous mysql database.

1.3 After the installation is complete, open the MariaDB database and check to enable TCP/IP connection

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_10.48.54.png" width="700px" :shadow="false"/>

1.4 Open the Synology Control Panel - Terminal and SNMP and check to enable the ssh function. The default port does not need to be modified.

<bl-img src="../../imgs/deploy/qunhui/3.png" width="700px" :shadow="false"/>

1.5 Use the command `ssh aaa@x.x.x.x -p 22` (aaa Synology login name, x.x.x.x Synology ip 22ssh port) on the computer in the terminal (windows (win+r input cmd) mac search "terminal") and press Enter Enter the Synology password to enter ssh.

<bl-img src="../../imgs/deploy/qunhui/5.png" width="700px" :shadow="false"/>

1.6 Enter `mysql -u root -p` in ssh. After pressing Enter, you will be asked to enter the password created by MariaDB and enter the mysql command; enter `use mysql` to use the database; continue to follow the steps and enter `UPDATE mysql.global_priv SET Host=' %' WHERE User='root'; flush privileges;`These two commands enable the database to support remote access.

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_11.25.36.png" width="700px" :shadow="false"/>

<bl-img src="../../imgs/deploy/qunhui/{43B47497-2715-5F39-3B1C-85E7447CE8C6}.png" width="700px" :shadow="false"/>

The complete command is as follows:

```sql
mysql -u root -p

use mysql;

UPDATE mysql.global_priv SET Host='%' WHERE User='root';

flush privileges;
```

1.7 Enter the following command to create a database instance. At this point, the database operation has been created.

```sql
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

Note: Remember to add `;` at the end of the Sql command

## 2. Install blomssom

2.1 In Synology File Management, create the blossom folder under the docker directory, create the bl folder under the blossom folder, and continue to create img under the bl folder. Set the everyone user permissions to all permissions in the properties of the blossom folder.

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_12.26.04.png" width="700px" :shadow="false"/>

<bl-img src="../../imgs/deploy/qunhui/7.png" width="700px" :shadow="false"/>

2.2 Use the command cd / on ssh to switch to the initial directory; use the command cd volume1 to go to the Synology root directory, and use the command cd docker/blossom to switch to the blossom directory.

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_12.34.41.png" width="700px" :shadow="false"/>

2.3 Enter in the blossom directory

```bash
sudo docker run -d --net=host --name blossom-backend -p 9999:9999 -v /volume1/docker/blossom/bl/:/home/bl/ jasminexzzz/blossom:latest --project.iaas.blos .domain="http://127.0.0.1:9999/pic/" --project.iaas.blos.default-path="/home/bl/img/" --spring.datasource.url="jdbc:mysql ://xx.xx.xx.xx:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password= aaaa
```

<bl-img src="../../imgs/deploy/qunhui/10.png" width="700px" :shadow="false"/>

Change xx.xx.xx.xx in the above document to your Synology IP, change aaaa to the password of your database, and then execute the command

The execution of the above command requires root user permissions. Add sudo before the command and enter the current user's password after execution, not the root password.

2.4 After inputting, wait for the command to be completed, then enter sudo docker logs blossom-backend to check whether the installation is successful and the installation log. Generally, the following log appears, which means that you have completed the installation and you can use it.

<bl-img src="../../imgs/deploy/qunhui/{C9AE41DA-73D1-26E8-EDCC-411494B5AE26}.png" width="700px" :shadow="false"/>

## 3. Other reference materials

- blossom official address: https://www.wangyunf.com/blossom-doc/
- Reference installation address: https://zhuanlan.zhihu.com/p/670492453

## 4.Thank you

Finally, I would like to thank the big guys in the group for their help, @小贼贼子大佬 for his help and @随风大佬 for his Qunhui installation tutorial.
