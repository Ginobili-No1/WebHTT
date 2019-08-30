<template>
    <div>
        <topNav></topNav>
        <div class="row banner_1">
            <img :src="banner" alt="" class="img-responsive bann">
        </div>
        <!-- 详情页 -->
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10" id="particulars_nav">
                <div
                    class="row"
                    style="margin-bottom: 3%;box-shadow: 0px 2px 2px 0px rgba(172, 172, 172, 0.404);"
                >
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <ul>
                            <li id="s1">
                                <a href="javascript:;">产品特点</a>
                            </li>
                            <li id="s2">
                                <a href="javascript:;">技术参数</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3"></div>
                </div>
                <div class="row" id="particulars">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="father">
                            <div class="productShow_1">
                                <br>
                                <br>
                                <p>
                                    <img
                                        :src="particulars_img"
                                        class="img-responsive particulars_img"
                                        alt=""
                                    >
                                </p>
                                <br>
                                <br>
                                <p
                                    style="color: orange;font-size:2rem; text-align: center;"
                                >{{this.productContent.types}}</p>
                                <p style="font-size: 1.5rem;text-align: center;color: #1b1b1b">{{this.productContent.name}}</p>
                                <br>
                                <br>
                                
                                <p v-for="item in productContent.particulars">{{item}}</p>
                            </div>
                            <div class="productShow_2" style="display:none">
                                <br>
                                <br>
                                <p>
                                    <img
                                        :src="particulars_img"
                                        class="img-responsive particulars_img"
                                        alt=""
                                    >
                                </p>
                                <br>
                                <br>
                                <p
                                    style="color: orange;font-size:2rem; text-align: center;"
                                >{{this.productContent.types}}</p>
                                <p style="font-size: 1.5rem;text-align: center;color: #1b1b1b">{{this.productContent.name}}</p>
                                <br>
                                <br>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>型号</th>
                                            <th>{{this.productContent.types}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>净重</td>
                                            <td>{{this.productContent.weight}}</td>
                                        </tr>
                                        <tr>
                                            <td>产品尺寸</td>
                                            <td>{{this.productContent.size}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
        <foot></foot>
    </div>
</template>


<style scoped>

@import '../assets/css/product-1-1.css';
</style>
<script>
import topNav from "./topNav.vue";
import carousel from "./carousel.vue";
import foot from "./foot.vue";



$(function() {});
export default {
  components: {
    topNav,
    carousel,
    foot
  },
  data() {
    return {
      
      banner: require("../assets/images/HaoTaiTai/productCenter.jpg"),
      particulars_img: require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_1.png"),
      productList:[
          {name:'吸油烟机1号',types:'WCX-1',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机2号',types:'WCX-2',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机3号',types:'WCX-3',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机4号',types:'WCX-4',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机5号',types:'WCX-5',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机6号',types:'WCX-6',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机7号',types:'WCX-7',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机8号',types:'WCX-8',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机9号',types:'WCX-9',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机10号',types:'WCX-10',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
          {name:'吸油烟机11号',types:'WCX-11',weight:'32kg',size:'900*380*825 mm',particulars:['-自动开启纯平设计，清洁方便。','-触摸式感应开关，手势感应功能，安全时尚。','-带时钟功能，可自由调节时间。']},
      ],
     productContent : {}
    };
  },

  mounted: function() {
    switch (this.$route.path) {
      case "/lampblackMachineParticular/1":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_1.png");
         this.productContent = this.productList[0]
        

        break;
      case "/lampblackMachineParticular/2":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_2.png");
        this.productContent = this.productList[1]
       
        break;
      case "/lampblackMachineParticular/3":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_3.png");
        this.productContent = this.productList[2]
        break;
      case "/lampblackMachineParticular/4":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_4.png");
        this.productContent = this.productList[3]
        break;
      case "/lampblackMachineParticular/5":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_5.png");
        this.productContent = this.productList[4]
        break;
      case "/lampblackMachineParticular/6":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_6.png");
        this.productContent = this.productList[5]
        break;
        case "/lampblackMachineParticular/7":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_7.png");
        this.productContent = this.productList[6]
        break;
      case "/lampblackMachineParticular/8":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_8.png");
        this.productContent = this.productList[7]
        break;
      case "/lampblackMachineParticular/9":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_9.png");
        this.productContent = this.productList[8]
        break;
      case "/lampblackMachineParticular/10":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_10.png");
        this.productContent = this.productList[9]
        break;
      case "/lampblackMachineParticular/11":
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_11.png");
        this.productContent = this.productList[10]
        break;
      

      default:
        this.particulars_img = require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_1.png");
        break;
    }

    $("#particulars_nav ul li").click(function() {
      $("#particulars_nav ul li").css({ "border-bottom": "0px solid orange" });
      $(this).css({ "border-bottom": "2px solid orange" });
    });
    $("#s1").click(function() {
      $(".productShow_1").css({ display: "block" });
      $(".productShow_2").css({ display: "none" });
    });
    $("#s2").click(function() {
      $(".productShow_2").css({ display: "block" });
      $(".productShow_1").css({ display: "none" });
    });
  }
};
</script>