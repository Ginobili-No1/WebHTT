<template>
    <div>
        <topNav></topNav>
<div class="row banner_1" >
        <img src="../assets/images/HaoTaiTai/productCenter.jpg" alt="" class="img-fluid bann">
    </div>
   

    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10" id="product_text">
            灶具
        </div>
        <div class="col-md-1"></div>
    </div>

    <div class="row">

        <div class="col-md-1"></div>
        <div class="col-md-10 product">
            <ul>
                <li>
                    <router-link to='cookerParticular/1'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_1.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
               <li>
                    <router-link to='cookerParticular/2'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_2.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
               <li>
                    <router-link to='cookerParticular/3'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_3.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
               <li>
                    <router-link to='cookerParticular/4'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_4.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
            </ul>
            <ul>
             <li>
                    <router-link to='cookerParticular/5'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_5.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
               <li>
                    <router-link to='cookerParticular/6'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_6.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
                <li>
                    <router-link to='cookerParticular/7'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_7.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
                <li>
                    <router-link to='cookerParticular/8'>
                        <p><img src="../assets/images/HaoTaiTai/product/372X360/cooker/cooker_8.png" alt=""></p>
                        <div>
                            <p>CXW-A363</p>
                            <p>抽油烟机</p>
                        </div>
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
                </li>
            </ul>
         

        </div>
        <div class="col-md-1"></div>
    </div>

<foot></foot>

    </div>

</template>


<style scoped>
@import '../assets/css/product.css';
</style>
<script>
import topNav from "./topNav.vue";
import carousel from "./carousel.vue";
import foot from "./foot.vue";

$(function () {
 

   

});


export default {
    components: {
    topNav,
    carousel,
    foot,
    
  }

  
    

}
</script>