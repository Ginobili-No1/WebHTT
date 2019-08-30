<template>
    <div>
        <topNav></topNav>
        <carousel></carousel>
        <!-- 移动端模拟手机机菜单 -->
        <div class="row" id="mobileNav_2">
            <div class="col-md-1"></div>
            <div class="col-md-10" style="box-shadow: 0px 6px 6px -6px #e0e0e0">
                <div class="row" id="nav2">
                    <ul>
                        <li>
                            <router-link to="/product/lampblackMachine">油烟机</router-link>
                        </li>
                        <li>
                            <router-link to="/product/cooker">灶具</router-link>
                        </li>
                        <li>
                            <router-link to="/product/heater">热水器</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
        <!-- 虚线 -->
        <!-- <div class="row" id="solid">
        <div class="col-md-1"></div>
        <div class="col-md-10">


        </div>

        <div class="col-md-1"></div>
        </div>-->
        <!-- 新品专区 企业宣传 -->
        <div class="row" id="propagate" style="margin-bottom: 3%;margin-top:3%">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="row index_text">
                    <div class="col-md-6">
                        <p>
                            <span>新品</span>专区
                        </p>
                    </div>
                    <div class="col-md-6">
                        <p>
                            <span>企业</span>宣传
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <a href="javascript:;">
                            <img
                                src="../assets/images/HaoTaiTai/新品专区.jpg"
                                class="img-responsive"
                                style="width: 100%"
                                alt=""
                            >
                        </a>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <!-- 小轮播 -->
                            <div id="movebody">
                                <div id="demo1" class="carousel slide" data-ride="carousel">
                                    <!-- 指示符 -->
                                    <ul class="carousel-indicators">
                                        <li data-target="#demo1" data-slide-to="0" class="active"></li>
                                        <li data-target="#demo1" data-slide-to="1"></li>
                                        <li data-target="#demo1" data-slide-to="2"></li>
                                    </ul>
                                    <!-- 轮播图片 -->
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <router-link to="/product/cooker">
                                                <img src="../assets/images/HaoTaiTai/企业宣传1.jpg">
                                            </router-link>
                                        </div>
                                        <div class="carousel-item">
                                            <router-link to="/product/lampblackMachine">
                                                <img src="../assets/images/HaoTaiTai/企业宣传2.jpg">
                                            </router-link>
                                        </div>
                                        <div class="carousel-item">
                                            <router-link to="/product/heater">
                                                <img src="../assets/images/HaoTaiTai/企业宣传3.jpg">
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 橙色 -->
                        <div class="" id="orange">
                            <div class="orangeLeft">
                                <div>
                                    <router-link to="/culture">
                                        <img src="../assets/images/首页/公司简介img.jpg" alt="">
                                    </router-link>
                                </div>
                            </div>
                            <div class="orangeM"></div>
                            <div class="orangeRight">
                                <div>
                                    <router-link to="/contact">
                                        <img src="../assets/images/首页/联系我们img.jpg" alt="">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
        <!-- 品牌优势 -->
        <div class="row" id="advantage">
            <div class="mid">
                <div class="text2">BRAND ADVANTAGE</div>
                <br>
                <div class="text1">
                    <div class="sild"></div>品牌优势
                    <div class="sild"></div>
                </div>
            </div>
            <!-- 哎 -->
            <ul class="adv">
                <li>
                    <a href="javascript:;">
                        <p class="adv_icon">
                            <img src="../assets/images/首页/shangbiao.png" alt="">
                        </p>
                        <p class="adv_text">商标全覆盖</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="adv_icon">
                            <img src="../assets/images/首页/gouwu.png" alt="">
                        </p>
                        <p class="adv_text">一站式购物</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="adv_icon">
                            <img src="../assets/images/首页/weibiaoti-1-copy.png" alt="">
                        </p>
                        <p class="adv_text">培训人员支持</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="adv_icon">
                            <img src="../assets/images/首页/shidashuju.png" alt="">
                        </p>
                        <p class="adv_text">十大品牌</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="adv_icon">
                            <img src="../assets/images/首页/protection-target.png" alt="">
                        </p>
                        <p class="adv_text">区域保护政策</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="adv_icon">
                            <img src="../assets/images/首页/fandianjuli.png" alt="">
                        </p>
                        <p class="adv_text">加盟优惠返点</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="adv_icon">
                            <img src="../assets/images/首页/3crenzheng.png" alt="">
                        </p>
                        <p class="adv_text">3C产品质量认证</p>
                    </a>
                </li>
            </ul>
            <img
                src="../assets/images/HaoTaiTai/品牌优势背景.jpg"
                class="img-responsive"
                alt=""
                id="advantage"
            >
        </div>
        <!-- 联系我们 -->
        <div style="text-align: center; margin-top: 6%;">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10 text3">CONTACT US</div>
                <div class="col-md-1"></div>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10 text4">
                    <div class="sild"></div>
                    <div class="text4Son">联系我们</div>
                    <div class="sild"></div>
                </div>
                <div class="col-md-1"></div>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="row nav3 pcIndexIcon">
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <p>
                                        <img src="../assets/images/首页/dingwei.png" alt="">
                                    </p>
                                    <p>佛山市顺德区容桂扁滘工业区华美路1号</p>
                                </a>
                            </li>&nbsp;
                            &nbsp;
                            <li>
                                <a href="javascript:;">
                                    <p>
                                        <img src="../assets/images/首页/dianhua(1).png" alt="">
                                    </p>
                                    <p>0757-29293455</p>
                                </a>
                            </li>&nbsp;
                            &nbsp;
                            <li>
                                <a href="javascript:;">
                                    <p>
                                        <img src="../assets/images/首页/dianziyoujian.png" alt="">
                                    </p>
                                    <p>945626023@qq.com</p>
                                </a>
                            </li>&nbsp;
                            &nbsp;
                            <li>
                                <a href="javascript:;">
                                    <p>
                                        <img src="../assets/images/首页/qq(1).png" alt="">
                                    </p>
                                    <p>945626023</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="row nav3 mobileIndexIcon">
                        <div class="row">
                            <div class="left">
                                <img src="../assets/images/首页/dingwei.png" alt="">
                            </div>
                            <div class="middle"></div>
                            <div class="right">
                                <img src="../assets/images/首页/dianhua(1).png" alt="">
                            </div>
                        </div>
                        <div class="row" style="margin-bottom:7%">
                            <div class="left">
                                <div class="mobileIndexIconText">佛山市顺德区容桂扁滘工业区华美路1号</div>
                            </div>
                            <div class="middle"></div>
                            <div class="right">
                                <div class="mobileIndexIconText">0757-29293455</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="left">
                                <img src="../assets/images/首页/dianziyoujian.png" alt="">
                            </div>
                            <div class="middle"></div>
                            <div class="right">
                                <img src="../assets/images/首页/qq(1).png" alt="">
                            </div>
                        </div>
                        <div class="row" style="margin-bottom:20%">
                            <div class="left">
                                <div class="mobileIndexIconText">
                                    945626023<br>@qq.com
                                </div>
                            </div>
                            <div class="middle"></div>
                            <div class="right">
                                <div class="mobileIndexIconText">
                                    945626023
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<style scoped>
@import "../assets/css/index.css";
</style>
<script>
import topNav from "./topNav.vue";
import carousel from "./carousel.vue";
import foot from "./foot.vue";

export default {
  components: {
    topNav,
    carousel,
    foot
  }
};
</script>


