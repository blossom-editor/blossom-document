<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# MacOS Installation

Resolve that the Mac installation software is damaged and cannot be opened. You should move it to the wastebasket issue.

## Allow any source to open

Starting from MacOS Sierra 10.12, Apple has removed the option to allow 【**any source**】. If the option for any source is not enabled, it will directly affect third-party applications that cannot run.

Open the【**System Preferences**】，select 【**Security and Privacy**】，and enter the following information:

```bash
sudo spctl  --master-disable
```

Then press enter, continue entering the password (which is not visible when entering), and then press enter.

After opening 【**System Preferences**】，select【**Security & Privacy**】，then choose【**General**】，You will see that 【**Any source**】is already selected.

<bl-img src="../../../imgs/mac/any_source.png" width="700px"/>

Then proceed to open the file for installation.

## Still Getting "Damaged" Error and Unable to Open?

If you continue to encounter this error, try the following method:

Copy and paste the following command into the terminal (note the space at the end):

```bash
sudo xattr -r -d com.apple.quarantine
```

Then drag the installation package into the terminal. You will get something like this:

```bash
sudo xattr -r -d com.apple.quarantine /Users/xzzz/Downloads/blossom-1.6.0.dmg

```

Press Enter. If prompted for a password, enter it. Then reopen the installation software for installation. After installation, you should be able to use it normally.

## If You Still Encounter Issues, Please Continue Trying

If you still encounter errors, you can try the following:

- Remove the  `-r` from the command and try again.
- Remove the  `-r -d`  in the command to `-rd`。
