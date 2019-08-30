<template>
    <div>
        <topNav></topNav>
    
 <div class="row banner_1" >
      <img src="../assets/images/HaoTaiTai/news.jpg" alt="" class="img-fluid bann">
    </div>



    <!-- 新闻 -->
 <div class="row title1">
        <p>新闻中心</p>
      </div>

    <div class="news">
     
      <div class="row" v-for="item in news">
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <img :src="item.newsImg" class="img-responsive news_img" alt="">
        </div>
        <div class="col-md-5">
          <div class="row" style="padding-bottom: 2%; border-bottom: 1px solid #c0c0c0;justify-content:space-between;align-items:flex-end">
            <div class="" style="padding: 0;"><h2>{{item.newsTitle}}</h2></div>
            <div class="" style="padding-right: 0;"> {{item.newsTime}}</div>
          </div>
          <div class="row" style="padding-top: 4%">{{item.newsContent}}</div>
          <div class="row" style="margin-top:5%;">

           
              <router-link class="button1" :to="item.newsRoute">More</router-link>

              
             
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>

    </div>



<foot></foot>

    </div>

</template>


<style scoped>
 @import  '../assets/css/news.css';
</style>
<script>
import topNav from "./topNav.vue";

import foot from "./foot.vue";

$(function () {
 

   

});


export default {
    components: {
    topNav,
    
    foot,
    
  },
  data:()=>{
    return{
      news:[
        {newsTitle:'如何挑选油烟机，记住这几点！',newsTime:'2019/8/1',newsRoute:'newsParticular/1',newsContent:'目前，市面上，按吸烟口分类的话，主要分为顶吸、侧吸、侧顶双吸和烟口升降式每种都会有自己特点和优势，例如：顶吸是根据做饭时油烟的运动而设计的，利用惯性排烟...',newsImg:require("../assets/images/新闻中心/新闻封面_1.png")},
        {newsTitle:'吸油烟机在厨房中，为何如此重要？',newsTime:'2019/8/22',newsRoute:'newsParticular/2',newsContent:'相信很多喜欢做饭都会考虑一个问题，如果厨房没有吸油烟机会怎样？中国菜讲究大火爆炒才够味，与此同时，这也意味着大油烟正在酝酿袭...',newsImg:require("../assets/images/新闻中心/新闻封面_2.png")},
      ]
    }
  },
  methods:{
   
    
  }
    
}
</script>