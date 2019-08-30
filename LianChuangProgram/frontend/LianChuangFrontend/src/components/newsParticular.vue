<template>
    <div>
        <topNav></topNav>
         <div class="row banner_1" >
      <img src="../assets/images/HaoTaiTai/news.jpg" alt="" class="img-fluid bann">
    </div>
        <!-- 新闻详细页 -->
        <div class="news_page row">
            <div class="col-md-2"></div>
            <div class="col-md-8 page">
                <div class="row title">
                    <div class="col-md-10">{{newsSelected.newsTitle}}</div>
                    <div class="col-md-2">{{newsSelected.newsTime}}</div>
                </div>
                <div class="row index">
                    <div class="col-md-1"></div>
                    <div class="col-md-10"> 
                        <img
                            :src="newsSelected.newsImg"
                            class="img-responsive news_img"
                            alt=""
                        >
                    </div>
                    <div class="col-md-1"></div>
                </div>
                <div class="row news_text">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {{newsSelected.newsContent}}
                    
                    
                    </div>
            </div>
            <div class="col-md-2"></div>
        </div>
        <foot></foot>
    </div>
</template>


<style scoped>
@import "../assets/css/newsPage1.css";
</style>
<script>
import topNav from "./topNav.vue";
import carousel from "./carousel.vue";
import foot from "./foot.vue";

$(function() {
  
});

export default {
  components: {
    topNav,
    carousel,
    foot
  },
  data: () => {
    return {
      newsParticulars: [
        {
          newsTitle: "如何挑选油烟机，记住这几点！",
          newsTime: "2019/8/1",
          newsContent:
            "目前，市面上，按吸烟口分类的话，主要分为顶吸、侧吸、侧顶双吸和烟口升降式每种都会有自己特点和优势，例如：顶吸是根据做饭时油烟的运动而设计的，利用惯性排烟；而侧吸则可在最短距离，瞬间吸烟，油烟不上脸;侧顶双吸正好将两者的优势完美结合在一起；烟口升降式可以在保障最精简的美感设计上，隐藏掉捕烟口。然而，无论是哪种类型的烟机，都会在厨房中扮演着举足轻重的作用。在挑选时，可以用以下的内容作为参考点，再根据自家厨房的装修风格或者做菜习惯而做出抉择。1.	大吸力要想净享厨房生活，就首先得劲。俗话说“民以食为天”，爆炒、香煎、油炸、蒸煮……中国人的烹饪方式复杂多样。多油、猛火，往往产生高油烟。而你在选择抽油烟机的时候，还在因为没有标准而犹豫不决吗？相信那这篇文章一定会帮到你做出判断。",
          newsImg: require("../assets/images/新闻中心/新闻详情_1.png")
        },
        {
          newsTitle: "吸油烟机在厨房中，为何如此重要？",
          newsTime: "2019/8/22",
          newsContent:
            "相信很多喜欢做饭都会考虑一个问题，如果厨房没有吸油烟机会怎样？中国菜讲究大火爆炒才够味，与此同时，这也意味着大油烟正在酝酿袭来。没有吸油烟机的厨房可能会是一个“噩耗”，油烟弥漫缭绕，如硝烟战场一般，特别是在现代化不同城镇家庭，更是忌讳这个问题。也许有人会有更加偏激的想法，没有油烟机就跟做饭说“拜拜”吧。确实如此，据科学研究，厨房油烟成分复杂，含有300多种有害物质。油烟会影响皮肤，出现面色泛黄、毛孔粗大等问题。在这个追求颜值的时代，谁又愿意冒这个险去牺牲呢。大部分的年轻人都因为这点，把厨房拒之门外了。所以一部好的油烟机是人们“重返”厨房的关键。好厨房一定是一个干净的地方，只有这样才会有好心情，才会更加享受“美味”生活。不要让油腻打扰到烹饪的兴致。烟机让出摆脱油腻，重拾“家”美味的厨房生活。随着人们居住条件也在不断完善，净享”无烟，干净利索的厨房环境成为每个家庭的追求，抽油烟机在厨房里的角色越来越重要。",
          newsImg: require("../assets/images/新闻中心/新闻详情_2.png")
        }
      ],
      newsSelected: {}
    };
  },
  
  mounted: function() {
     console.log(this.$route)
    switch (this.$route.path) {
      case "/newsParticular/1":
          this.newsSelected = this.newsParticulars[0]
          break;
      case "/newsParticular/2":
          this.newsSelected = this.newsParticulars[1]
          break;
    default:
        break;
    }
  }
};
</script>