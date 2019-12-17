<template>
  <!-- 文章概要 -->
  <div>
    <b-card tag="article">
      <b-card-title>
        <b-link
          :to="{path:'/blog', query:{ articleId: post.articleId }}"
        >{{ post.title }}</b-link>
      </b-card-title>

      <b-card-text>{{ post.summary }}</b-card-text>

      <span class="classifiction">
        <b-link
          :to="{ path: classificationRouter }"
        >{{ classificationChineseName }}</b-link>
      </span>
      <span class="time">{{ time }}</span>
    </b-card>
  </div>
</template>

<script>
import dateutil from '../../utils/date'

export default {
  name: 'ArticleSummary',
  props: ['article'],
  data () {
    return {
      post: this.article
    }
  },
  computed: {
    classificationChineseName () {
      if (this.post.classification === 'life') {
        return '生活'
      } else if (this.post.classification === 'technology') {
        return '技术'
      } else {
        return 'Bug'
      }
    },
    classificationRouter () {
      return '/' + this.post.classification
    },
    time () {
      return dateutil.dateStringToShow(this.post.time)
      // return this.post.time.format('yyyy-MM-dd HH:mm:ss')
    }
  }
}
</script>

<style scoped>
.classifiction {
  padding-left: 20px;
  background: url("../../assets/img/tag.png") no-repeat center;
  background-position: 0 4px;

  line-height: 16px;
  margin-right: 8px;
}

.time {
  padding-left: 20px;
  background: url("../../assets/img/time.png") no-repeat center;
  background-position: 0 4px;

  line-height: 16px;
}

a {
  color: #212529;
}

a:hover {
  text-decoration: none;
  color: #1767b7;
}
</style>
