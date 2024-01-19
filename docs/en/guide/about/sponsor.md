<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'
import sponsors from '../../scripts/sponsors'

onMounted(() => {
  info()
})

const members = [
  {
    avatar: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/pic/luban.png',
    name: '小贼贼子',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' }
    ]
  }
]
</script>

# 🤝 Become a Sponsor of Blossom

<br/>
<br/>
<bl-img src="../../imgs/blossom/logo.svg" width="150px" :shadow="false" :drop-shadow="true"/>

Hello! I am the author of Blossom note-taking software, a full-time independent developer exploring new possibilities. You can call me Little Thief.

Blossom is an MIT-licensed open-source note-taking software. The MIT license is very permissive, meaning you can freely use the application, modify the source code, or engage in commercial activities using the application.

---

**Blossom will not charge you any fees; you can use it permanently for free!**

However, sustaining a livelihood through open-source software is challenging, and the design, development, and testing of the project require a significant amount of time and effort. If you are willing to sponsor my work, it will greatly contribute to the growth of the project and motivate me to continue the long-term development!

You can sponsor Blossom in several ways.

<div class="sponsor-channel">
  <div class="item">
    <bl-img src="../../imgs/blossom/wechat.png" />
    <div class="name">WeChat</div>
  </div>

  <div class="item middle">
    <bl-img src="../../imgs/blossom/ali.png" />
    <div class="name">Alipay<br/>Suggest including a nickname</div>
  </div>
  
  <div class="item">
    <bl-img src="../../imgs/blossom/aifadian.png" />
    <div class="name">Aifadian</div>
  </div>
</div>

**Regardless of the sponsorship method, as a sponsor, your name will appear in the README of Blossom**. If you do not want your name to be displayed, you can leave a message during sponsorship or contact me through QQ group (522359970) or email (kuamax888@qq.com).

---

<bl-sponsor/>

<style scoped>

.sponsor-channel {
display:flex;flex-direction: row;justify-content: space-between;overflow:scroll;
padding: 16px 16px 10px 16px;
}

.sponsor-channel .item {
max-width:31%;
}

.sponsor .middle {
  margin-left:10px;
  margin-right:10px;
}

.sponsor-channel .item .name {
  width: 100%;
  font-size: 15px;
  color: #9E9E9E;
  text-align: center;
  margin-top: 10px;
}
</style>
