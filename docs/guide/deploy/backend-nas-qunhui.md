# 群晖创建 blossom 教程

:::tip
本文转载自：黑醋栗和丁香《群晖创建 blossom 教程》
:::

## 1.安装数据库

1.1 打开群晖套件中心，搜索“MariaDB”点击安装。

<bl-img src="../../imgs/deploy/qunhui/WechatIMG142.jpg" width="700px" :shadow="false"/>

1.2 安装时，会让你填写密码，注意密码必须包含大小写，数字，特殊符号。注意以前安装了 mysql 数据库可能导致 3306 端口重复，无法安装，请修改以前 mysql 数据库的端口.

1.3 安装完成后，打开 MariaDB 数据库，勾选启用 TCP/IP 连接

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_10.48.54.png" width="700px" :shadow="false"/>

1.4 打开群晖控制面板--终端机和 SNMP 勾选启用 ssh 功能，默认端口无需修改。

<bl-img src="../../imgs/deploy/qunhui/3.png" width="700px" :shadow="false"/>

1.5 在电脑上在终端机（windows(win+r 输入 cmd) mac 搜索“终端” ） 用命令`ssh aaa@x.x.x.x -p 22`(aaa 群晖登录名，x.x.x.x 群晖 ip 22ssh 端口) 回车后输入群晖密码进入 ssh。

<bl-img src="../../imgs/deploy/qunhui/5.png" width="700px" :shadow="false"/>

1.6 在 ssh 输入`mysql -u root -p`，回车后会让你输入 MariaDB 创建的密码，进入 mysql 命令； 输入`use mysql`使用数据库；继续按照步骤输入`UPDATE mysql.global_priv SET Host='%' WHERE User='root'; flush privileges;`两个命令使数据库支持远程访问。

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_11.25.36.png" width="700px" :shadow="false"/>

<bl-img src="../../imgs/deploy/qunhui/{43B47497-2715-5F39-3B1C-85E7447CE8C6}.png" width="700px" :shadow="false"/>

完整命令如下:

```sql
mysql -u root -p

use mysql;

UPDATE mysql.global_priv SET Host='%' WHERE User='root';

flush privileges;
```

1.7 输入以下命令创建数据库实例，到此位置数据库操作已创建完成。

```sql
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```

注意：记得执行 Sql 命令末尾加`;`

## 2.安装 blomssom

2.1 在群晖文件管理中，docker 目录下创建 blossom 文件夹，在 blossom 文件夹下创建 bl 文件夹，继续在 bl 文件夹下面创建 img.在 blossom 文件夹属性中设置 everyone 用户权限为所有权限。

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_12.26.04.png" width="700px" :shadow="false"/>

<bl-img src="../../imgs/deploy/qunhui/7.png" width="700px" :shadow="false"/>

2.2 在 ssh 上用命令 cd /切换到初始目录；用命令 cd volume1 到群晖根目录下，用命令 cd docker/blossom 切换到 blossom 目录下

<bl-img src="../../imgs/deploy/qunhui/iShot_2023-12-09_12.34.41.png" width="700px" :shadow="false"/>

2.3 在 blossom 目录下输入

```bash
sudo docker run -d --net=host --name blossom-backend -p 9999:9999 -v /volume1/docker/blossom/bl/:/home/bl/ jasminexzzz/blossom:latest --project.iaas.blos.domain="http://127.0.0.1:9999/pic/" --project.iaas.blos.default-path="/home/bl/img/" --spring.datasource.url="jdbc:mysql://xx.xx.xx.xx:3306/blossom?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&allowMultiQueries=true&useSSL=false&&serverTimezone=GMT%2B8" --spring.datasource.username=root --spring.datasource.password=aaaa
```

<bl-img src="../../imgs/deploy/qunhui/10.png" width="700px" :shadow="false"/>

将上面文档中 xx.xx.xx.xx 修改为你的群晖的 ip,将 aaaa 修改为你数据库的密码 后再执行命令

上面命令执行是需要 root 用户权限执行，在命令前加入 sudo 执行后输入当前用户的密码，不是 root 的密码

2.4 输入完后等待命令完成后，输入 sudo docker logs blossom-backend 查看是否安装成功和安装日志,一般出现如下日志代表你已安装完成，就可以使用了。

<bl-img src="../../imgs/deploy/qunhui/{C9AE41DA-73D1-26E8-EDCC-411494B5AE26}.png" width="700px" :shadow="false"/>

## 3.其他参考资料

- blossom 官方地址：https://www.wangyunf.com/blossom-doc/
- 参考安装地址：https://zhuanlan.zhihu.com/p/670492453

## 4.感谢

最后感谢群里大佬的解囊相助，@小贼贼子大佬的帮助和@随风大佬的群晖安装教程
