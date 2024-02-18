<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/pic/blosteam/xiaozzzi.png',
    name: '小贼贼子',
    title: '创建人',
    links: [
      { icon: 'github', link: 'https://github.com/xiaozzzi' },
    ]
  },
  {
    avatar: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/pic/blosteam/T1anjiu.jpg',
    name: 'Tianjiu',
    title: '项目成员、英文译者',
    links: [
      { icon: 'github', link: 'https://github.com/T1anjiu' },
    ]
  }
]
</script>

# 项目成员

参与项目成员，以及重大贡献者。

<VPTeamMembers size="small" :members="members" />
