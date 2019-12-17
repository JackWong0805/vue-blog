<template>
  <b-card class="centered">
    <div class="aboutMe">
      <h4>
        <strong>关于我</strong>
      </h4>
      <hr />
      <p class="indent-2">
        老王不老，今年25岁。
      </p>
      <p class="indent-2">
        大学学的电气工程，毕业后在一家电气公司从事广州地铁MCC和低压400V配电自控系统的工作。
      </p>
      <p class="indent-2">
        后来辞职出来自学了编程，在一家街机游戏公司做了一年半。现在在另一家公司从事3D软件的开发工作。
      </p>
      <p class="indent-2">
        平时爱好不多，喜欢徒步，喜欢爬山。梦想是成为一名懂美术的程序。
      </p>
      <p class="font-weight-bold">
        联系方式:
      </p>
      <p class="indent-2">
        邮箱: wangshade@hotmail.com
      </p>
      <p class="indent-2">
        其它:
        <b-link href="https://github.com/JackWong0805" target="_blank">
          <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </b-link>
        <b-link href="https://blog.csdn.net/sinat_25415095" target="_blank">
          <svg t="1575705563233" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="1489"
          xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
            <path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D" p-id="1490"></path>
          </svg>
        </b-link>
      </p>
    </div>

    <!-- <b-card-img src="/static/coder_guy.png" style="max-width: 20rem;"/>  -->
    <br />
    <div class="aboutSite">
      <h4>
        <strong>关于本站</strong>
      </h4>
      <hr />
      <p class="indent-2">
        一个属于自己的一个小天地。
      </p>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.indent-2 {
  text-indent: 2em;
}
</style>
