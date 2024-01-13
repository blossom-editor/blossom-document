<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'
import sponsors from '../../../scripts/sponsors'

onMounted(() => {
  info()
})

const members = [
  {
    avatar: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/pic/luban.png',
    name: '小贼贼子',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' }
    ]
  }
]
</script>

# 成为 Blossom 的赞助者 🤝

<br/>
<br/>
<bl-img src="../../../imgs/blossom/logo.svg" width="150px" :shadow="false" :drop-shadow="true"/>

你好！我是 Blossom 笔记软件的作者，是一名正在探索中的全职独立开发者，你可以叫我小贼。

Blossom 是一个 MIT 协议开源的笔记软件。MIT 是一个非常宽松的协议，意味着你可以随意使用该应用，修改源代码，或者通过该应用进行商业活动。

---

**Blossom 不会向你收取任何的费用，你可以永久免费使用！**

但开源软件的收益目前很难维持生活，并且项目设计，开发，测试需要大量的时间和精力，如果你愿意赞助我的工作，将非常有助于该项目的成长，并激励我长期持续下去！

你可以通过以下几种方式赞助 Blossom。

<div class="sponsor-channel">
  <div class="item">
    <bl-img src="../../../imgs/blossom/wechat.png" />
    <div class="name">微信</div>
  </div>

  <div class="item middle">
    <bl-img src="../../../imgs/blossom/ali.png" />
    <div class="name">支付宝<br/>建议您备注一个昵称</div>
  </div>
  
  <div class="item">
    <bl-img src="../../../imgs/blossom/aifadian.png" />
    <div class="name">爱发电</div>
  </div>
</div>

**无论使用哪种赞助方式，作为赞助者，你的名字都将出现在 Blossom 的 README 中**。如果你不希望展示你的名字，你也可以在赞助时留言，或通过 QQ 群(522359970)与邮箱(kuamax888@qq.com)联系我。

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
