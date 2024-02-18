<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/pic/blosteam/xiaozzzi.png',
    name: 'xiaozzzi',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/xiaozzzi' },
    ]
  },
  {
    avatar: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/pic/blosteam/T1anjiu.jpg',
    name: 'Tianjiu',
    title: 'Member、Translator',
    links: [
      { icon: 'github', link: 'https://github.com/T1anjiu' },
    ]
  }
]
</script>

# Our Team

Project members, and significant contributors.

<VPTeamMembers size="small" :members="members" />
