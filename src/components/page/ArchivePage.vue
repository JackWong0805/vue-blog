<template>
  <div class="row">
    <div class="col-md-8">
      <!-- <TimeLine archivesList="archivesList"/> -->

      <!-- 归档列表 -->
      <div class="event_list">
        <div v-for="(archive, index) in archivesList" :key="index">
          <h3>{{ archive.year }}</h3>
          <section v-for="article in archive.articles" :key="article.articleId">
            <div class="event_item">
              <div class="event_date">
                <span>{{ article.date }}</span>
              </div>
              <div class="event_content">
                <em></em>
                <p>
                  <b-link
                    :to="{path:'/blog', query:{ articleId: article.articleId }}"
                    @click="linkClickHandler(article.classification)"
                  >{{ article.title }}</b-link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as articleTypes from '../../store/types/articleTypes.js'
import * as tabType from '../../store/types/tabTypes.js'

export default {
  name: 'ArchivePage',
  components: {
    // TimeLine
  },
  methods: {
    linkClickHandler (classification) {
      this.$store.commit(tabType.CHANGETABPAGE, { pageName: classification })
    }
  },
  computed: {
    archivesList () {
      return this.$store.state.archivesList
    }
  },
  mounted () {
    this.$store.dispatch(articleTypes.GETARCHIVES)

    // $(function(){
    //     $('label').click(function(){
    //         $('.event_year>li').removeClass('current');
    //         $(this).parent('li').addClass('current');
    //         var year = $(this).attr('for');
    //         $('#'+year).parent().prevAll('div').slideUp(800);
    //         $('#'+year).parent().slideDown(800).nextAll('div').slideDown(800);
    //     });
    // });
  }
}
</script>

<style scoped>
/* 归档年份 */
.event_year {
  width: 60px;
  border-bottom: 2px solid #ddd;
  text-align: center;
  float: left;
  margin-top: 10px;
}
.event_year li {
  height: 40px;
  line-height: 40px;
  background: #fff;
  margin-bottom: 1px;
  font-size: 18px;
  color: #828282;
  cursor: pointer;
}
.event_year li.current {
  width: 50px;
  background: #db6d4c url("../../assets/img/jian.png") 60px 0 no-repeat;
  color: #fff;
  text-align: left;
  padding-left: 9px;
}

/* 归档列表 */
.event_list {
  background: url("../../assets/img/dian3.png") 69px 0 repeat-y;
  margin: 10px 0 20px 0;
}

.event_list h3 {
  margin: 0 0 10px 62px;
  font-size: 2rem;
  font-family: Georgia;
  color: #db6d4c;
  padding-left: 25px;
  background: url("../../assets/img/jian.png") 0 -45px no-repeat;
  height: 38px;
  line-height: 30px;
  font-style: italic;
}

.event_list section {
  margin-bottom: 10px;
}

.event_list .event_item {
  background: url("../../assets/img/jian.png") 66px -80px no-repeat;
  display: flex;
}
.event_list .event_item .event_date {
  width: 57px;
  text-align: right;
  float: left;
  margin-top: 10px;
  margin-right: 24px;
  flex: none;
}
.event_list .event_item .event_content {
  position: relative;
  flex: 1;
  padding: 10px 15px 10px 15px;
  margin-left: 15px;

  line-height: 25px;
  text-align: left;

  background-color: #fff;
  border-bottom: 2px solid #ddd;
}

.event_list .event_item .event_content p {
  margin-bottom: 0px;
}

.event_list .event_item .event_content em {
  width: 12px;
  height: 38px;
  background: url("../../assets/img/jian.png") -21px 0 no-repeat;
  position: absolute;
  left: -10px;
  top: 0px;
}

.event_list .event_item .event_content a {
  color: #666666;
}

.event_list .event_item .event_content a:hover {
  color: #666666;
  text-decoration: none;
}
</style>
