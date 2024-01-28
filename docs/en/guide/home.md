<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# Home {#home}

## Responsive page design {#window}

The homepage will display different content based on different window sizes.

### The minimum size {#window-s}

<br/>
<bl-theme-img light-img="../../imgs/home/home_light_s.png" dark-img="../../imgs/home/home_dark_s.png"/>

### The style for 1080p resolution {#window-m}

<br/>
<bl-theme-img light-img="../../imgs/home/home_light.png" dark-img="../../imgs/home/home_dark.png"/>

### The style for 4K resolution {#window-l}

<br/>
<bl-theme-img light-img="../../imgs/home/home_light_4k.png" dark-img="../../imgs/home/home_dark_4k.png"/>

## Greeting {#greetings }

<bl-img src="../../imgs/home/home_hello.png" width="350px" :shadow="false"/>

1. A simple greeting that changes according to the time.
2. Purely decorative, decorations around the notebook will change based on the time.

## Weather & Avatar {#weather }

<bl-img src="../../imgs/weather/weather.png" width="400px" :shadow="false"/>
<bl-img src="../../imgs/blossom/luban.png" width="150px" />

1. Weather forecast feature, utilizing the free API from [HeFeng Weather](https://www.qweather.com/),For specific details, refer to the [HeFeng Weather](./hefeng),also you can use other weather API。
2. Avatar of the currently logged-in user.

## Word Count {#stat-word}

<bl-img src="../../imgs/home/stat_word.png" width="700px" />

This is a line chart that monthly aggregates the total word count of articles. The statistics are updated every 10 minutes, and each user's information is independent. Click the <span style='color:#E3A300;font-weight: bold;'>refresh button in the orange box</span> above the chart to update. Click the <span style='color:#3894E4;font-weight: bold;'>line button in the blue box</span> to edit the historical data of the chart.

Here is the page for editing word counts.

<bl-img src="../../imgs/home/stat_word_editor.png" width="700px" />

::: tip 
Editing the word count for the current month is invalid and will be overwritten by the automatically calculated word count.
:::

## Article and Image Statistics {#stat-count}

<bl-img src="../../imgs/home/stat_count.png" width="190px" :shadow="false" />

The top section displays the number of articles and the total word count, while the bottom section shows the number of images and the total size of images. This statistics are real-time and refreshes each time you enter the homepage.

## Flow Request Count {#stat-flow}

<bl-img src="../../imgs/home/stat_flow.png" width="700px" :shadow="false"  />

Server request count statistics, with each data point representing a 30-minute interval.

- <span style="color:#779649;font-weight: bold;">Request</span>：The total number of requests within a 30-minute interval
- <span style="color:#E3A300;font-weight: bold;">Average Response Time</span>：The average response time of the server within a 30-minute interval (in milliseconds)

The traffic statistics are real-time, but the time does not include the time taken for transmission between the server and the client. It solely represents the time taken for the server to process requests.

## Daily Article Edit Count Heatmap {#stat-heatmap}

<bl-img src="../../imgs/home/stat_heatmap.png" width="700px" :shadow="false"  />

The daily article edit count for the last 6 months, updated every 5 minutes.

## "Bookmarked Articles {#star}

<bl-img src="../../imgs/home/star.png" width="450px" :shadow="false"  />

List of bookmarked articles, each article presented in the form of a ticket.

If the article is a 【public article】,the left <span style='color:red;font-weight: bold;'>red section</span> will display an additional barcode. Clicking on the left side of the ticket (ticket stub) will open the article in the blog (requires [blog deployment](./deploy/blog)), while clicking on the right side of the ticket will open a new application window to view the article.

The right <span style='color:#E3A300;font-weight: bold;'>yellow sections</span> include:

- `U(UV)`: The user visit count for the article.
- `L(Like)`: The number of likes for the article.
- `W(Word Count)`: The word count for the article.

If the article is not public, typically both UV and LIKE counts are 0.

> Check [How to Make an Article Public?](./article#article-open)

Clicking the button in the upper right corner allows you to switch between different styles for displaying bookmarks, as shown in the image below:

<bl-img src="../../imgs/home/star1.png" width="450px" :shadow="false"  />

## Article Topics {#subject}

<bl-img src="../../imgs/home/subjects.png" width="430px" :shadow="false"  />

Topic-specific articles, usually grouped under a common theme.

At the top of the topic is the name of the topic, which is the name of the folder for this topic. Below that, you'll find the total word count of all articles in the topic and the date of the last updated article in the topic. On the right side of the topic is the topic image, with the bottom-right corner representing the theme color of the topic.

> Check [How to Create a Topic?](./article#create-subject)

Clicking the button in the upper right corner allows you to switch between different styles for displaying bookmarks, as shown in the image below:

<bl-img src="../../imgs/home/subjects1.png" width="430px" :shadow="false"  />

## To-Do {#todos}

<bl-img src="../../imgs/home/todos.png" width="650px"  />

Quick View of [To-Do List](./todo) on the Homepage.

## Website Bookmarks {#webs}

<bl-img src="../../imgs/home/web.png" width="350px" :shadow="false"  />

At the top of the Website Bookmarks section, you can perform operations such as adding and refreshing bookmarks.

<bl-img src="../../imgs/home/web_title.png" width="350px" />

Clicking the 'Add' button will display the following interface:

<bl-img src="../../imgs/home/web_add.png" width="350px" />

When using Website Bookmarks, there are some considerations:

- The website needs to have a favicon. You can choose the system's default icon or provide an image link in the icon address.
- Websites are categorized as daily, work, and other. The grouping feature is not currently supported.
- Right-clicking on an added website bookmark allows you to modify it.

Clicking on the top-right corner of the software (to the left of the minimize button) opens a pop-up box where you can access your website bookmarks. This way, if you need to open a website while using other features, you don't have to go back to the homepage.
## Settings and Image Upload {#aside-upload}

<div style="display:flex;">
<bl-img src="../../imgs/home/file_upload.png" width="60px" />
<div>
At the bottom left corner of the software, in the red box, there is a quick entry for image uploading. Files uploaded here, due to the inability to select folders, will be uploaded to the '🌌 Default Folder' in the photo wall.

The '🌌 Default Folder' is a default folder provided by the system. This folder cannot be deleted. If you haven't created any folders and haven't specified a path for the article's folder, then all images will be stored in this folder. For more information about image management, refer to the [Gallery](./picture) feature.

The toggle button at the bottom left corner allows you to switch between Day and Night modes.

The bottom-left corner also features a settings button that opens the login page, system settings, and other functionalities. For more detailed instructions, refer to [Settings](./setting).

</div>
</div>
