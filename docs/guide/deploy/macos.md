<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# MacOS 安装客户端

解决 Mac 安装软件的已损坏，无法打开。 您应该将它移到废纸篓问题。

## 允许任何来源开启

苹果从 MacOS Sierra 10.12 开始，已经去除了允许【**任何来源**】的选项，如果不开启任何来源的选项，会直接影响到无法运行的第三方应用。

打开【**启动台**】，选择【**终端**】，输入如下内容：

```bash
sudo spctl  --master-disable
```

然后回车，继续输入密码（密码输入时是不可见的），然后回车。

接着打开【**系统偏好设置**】，选择【**安全性与隐私**】，选择【**通用**】，可以看到【**任何来源**】已经选定。

<bl-img src="../../imgs/mac/any_source.png" width="700px"/>

然后打开文件进行安装。

## 仍然提示已损坏，无法打开

如果仍然出现该错误，接下来用这种方法：

在终端粘贴复制输入命令（注意最后有一个空格）：

```bash
sudo xattr -r -d com.apple.quarantine
```

然后将安装包拖入到终端中，会得到如下：

```bash
sudo xattr -r -d com.apple.quarantine /Users/xzzz/Downloads/blossom-1.6.0.dmg

```

然后按回车，如果提示输入密码，则输入密码。然后重新打开安装软件进行安装，安装好后就可以正常使用了。

## 如果仍然提示，请继续尝试

如果提示命令错误，可以继续尝试一下方式

- 把命令中的 `-r` 删除后再尝试。
- 把命令中的 `-r -d` 改为 `-rd`。
