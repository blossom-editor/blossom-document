<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter,withBase } from 'vitepress'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})

const router = useRouter()

const toRoute = (route) => {
  router.go(withBase(route))
}

</script>

# Deploy Blossom

:::danger Before learning how to deploy, please make sure to read the following content:

Due to the need for some simple professional knowledge in deploying an independent server, if you do not understand how to deploy the project on a machine or Docker, it is recommended to [try](../tryuse) the application first. If you find it suitable for your needs, you can [join the group or consult the author](../about/contact) on how to install and deploy.

:::

The author recommends using HTTPS + domain name to access your server. Domain name prices are usually between 20~40 CNY per year, and HTTPS certificates can be obtained for free. This way, when accessing images, the domain name will be used instead of the IP address. When you change servers, you don't need to modify the image paths again.

Blossom runs smoothly on a server with 2 cores, 2GB of RAM, and 2M~3M bandwidth. So the total cost of a server + domain name is approximately 100~200 CNY per year. This is not much different from the membership fees of other note-taking software, and the data is more secure and controllable. When you don't want to use it as a cloud note, you can still use it as a locally deployed application<span style="color:#A9A9A9">(_Blossom provides a full export function, which can modify the note image links to local image paths_).</span>

## How to Deploy Backend? {#how-to-deploy-backend}

Blossom depends on `JDK8` + `Mysql8`. You can choose a deployment method that suits you from below. You can also refer to articles written by other users:

> [Go to view the deployment methods for environments like Nas](./backend-other)

<div class="deploy-type">
  <div class="item docker" @click="toRoute('/guide/deploy/backend-docker')">
    <div class="title">Use Dockerhub Public Image</div>
    <p class="desc">Backend application image without a database, suitable for situations where MySQL is already installed.</p>
  </div>
  <div class="item docker" @click="toRoute('/guide/deploy/backend-docker-compose')">
    <div class="title">Build with Docker Compose</div>
    <p class="desc">Suitable for situations where MySQL is not installed. Can pull and deploy the MySQL image together.</p>
    <div class="tag">Recommended</div>
  </div>
</div>

<div class="deploy-type">
  <div class="item idea" @click="toRoute('/guide/deploy/backend-jar')">
    <div class="title">Deploy with Jar Package</div>
    <p class="desc">Suitable for environments with existing JDK + MySQL. The backend application can be deployed with just a command or script.</p>
  </div>
  <div class="item idea" @click="toRoute('/guide/deploy/backend-idea')">
    <div class="title">Deploy with Idea Plugin</div>
    <p class="desc">Suitable for developers who modify the source code and deploy it to the server.</p>
  </div>
</div>

<div class="deploy-type">
</div>

## How to Deploy Web? {#how-to-deploy-web}

<div class="deploy-type">
  <div class="item client" @click="toRoute('/guide/deploy/client')">
    <div class="title">Web Version of the Client</div>
    <p class="desc">Learn how to deploy the web version of the client.</p>
  </div>
  <div class="item blog" @click="toRoute('/guide/deploy/blog')">
    <div class="title">Blog Page</div>
    <p class="desc">Learn how to deploy a blog and how to customize the configuration.</p>
  </div>
</div>

## Backend Configuration Parameters {#backend-props}

Please go to [Backend Configuration Items](./backend-props) for details.

## Frequently Asked Questions {#faq}

Please go to [FAQ](./faq) for details.

<style scoped>
.deploy-type {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;
}

.deploy-type .item {
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  margin: 10px 0;
  transition: 0.3s;
  cursor: pointer;
  transition: box-shadow 0.3s;
  position: relative;
}

.deploy-type .item:hover {
  box-shadow: 0 0 5px #939393;
}

.deploy-type .item .title {
  font-size: 18px;
  font-weight:500;
}

.deploy-type .item .tag {
  position: absolute;
  font-size:14px;
  top:-10px;
  right:-20px;
  color: #FFFFFF;
  padding: 2px 10px;
  background-color:var(--vp-c-indigo-3);
  border-radius: 20px;
}

.deploy-type .desc {
  font-size: 13px;
  color: #FFFFFF;
  margin:5px 0 0 0;
  font-weight:300;
}


.deploy-type .docker {
  background: #1C8DEA2D;
  background-image:linear-gradient(135deg,#33CFD4,#5151E5C0);
}

.deploy-type .idea {
  background: #D333561E;
  background-image:linear-gradient(135deg,#FD658673,#0D24B9B9);
}

.deploy-type .client {
  background-image: linear-gradient(135deg,#869F61,#acbb78);
}

.deploy-type .client .title {
  color: #ffffff;
}

.deploy-type .blog {
  background-image: linear-gradient(to bottom right, #3e464e, #212121);
}

.deploy-type .blog .title {
  color: #ffffff;
}
</style>
