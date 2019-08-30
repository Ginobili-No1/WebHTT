<template>
    <div>
        <topNav></topNav>
<div class="row banner_1" >
        <img src="../assets/images/HaoTaiTai/productCenter.jpg" alt="" class="img-fluid bann">
    </div>
   

    <div class="row" style="margin-top: 3rem;">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="row title1">
                    <p> {{this.productSelected.productClass}}  </p>
                </div>
            
        </div>
        <div class="col-md-1"></div>
    </div>

    <div class="row">

        <div class="col-md-1"></div>
        <div class="col-md-10 product">
            <div v-for="item in productSelected.productList">
                <router-link :to="item.productRoute">
                        <p><img :src="item.productImg" alt=""></p>
                            <p>{{item.productType}}</p>
                            <p>{{item.productName}}</p>
                       
                        <p>
                            <button class="pro_button">了解更多</button>
                        </p>
                    </router-link>
            </div>


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
    
  },
  data:()=>{
      return{
          product:[
              {productClass:'油烟机',productList:[
                    {productName:'抽油烟机1号',productType:'CWX-1',productRoute:'lampblackMachineParticular/1',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_1.png")},
                    {productName:'抽油烟机2号',productType:'CWX-2',productRoute:'lampblackMachineParticular/2',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_2.png")},
                    {productName:'抽油烟机3号',productType:'CWX-3',productRoute:'lampblackMachineParticular/3',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_3.png")},
                    {productName:'抽油烟机4号',productType:'CWX-4',productRoute:'lampblackMachineParticular/4',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_4.png")},
                    {productName:'抽油烟机5号',productType:'CWX-5',productRoute:'lampblackMachineParticular/5',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_5.png")},
                    {productName:'抽油烟机6号',productType:'CWX-6',productRoute:'lampblackMachineParticular/6',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_6.png")},
                    {productName:'抽油烟机7号',productType:'CWX-7',productRoute:'lampblackMachineParticular/7',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_7.png")},
                    {productName:'抽油烟机8号',productType:'CWX-8',productRoute:'lampblackMachineParticular/8',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_8.png")},
                    {productName:'抽油烟机9号',productType:'CWX-9',productRoute:'lampblackMachineParticular/9',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_9.png")},
                    {productName:'抽油烟机10号',productType:'CWX-10',productRoute:'lampblackMachineParticular/10',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_10.png")},
                    {productName:'抽油烟机11号',productType:'CWX-11',productRoute:'lampblackMachineParticular/11',productImg:require("../assets/images/HaoTaiTai/product/372X360/lampblackMachine/lampblackMachine_11.png")}
                
              ]},
              {productClass:'热水器',productList:[
                   {productName:'热水器1号',productType:'HWX-1',productRoute:'heaterParticular/1',productImg:require("../assets/images/HaoTaiTai/product/372X360/heater/heater_1.png")},
                   {productName:'热水器2号',productType:'HWX-2',productRoute:'heaterParticular/2',productImg:require("../assets/images/HaoTaiTai/product/372X360/heater/heater_2.png")},
                   {productName:'热水器3号',productType:'HWX-3',productRoute:'heaterParticular/3',productImg:require("../assets/images/HaoTaiTai/product/372X360/heater/heater_3.png")},
                   {productName:'热水器4号',productType:'HWX-4',productRoute:'heaterParticular/4',productImg:require("../assets/images/HaoTaiTai/product/372X360/heater/heater_4.png")},
                   {productName:'热水器5号',productType:'HWX-5',productRoute:'heaterParticular/5',productImg:require("../assets/images/HaoTaiTai/product/372X360/heater/heater_5.png")},
                   {productName:'热水器6号',productType:'HWX-6',productRoute:'heaterParticular/6',productImg:require("../assets/images/HaoTaiTai/product/372X360/heater/heater_6.png")},
                    
              ]},
              {productClass:'灶具',productList:[
                    {productName:'灶具1号',productType:'ZWX-1',productRoute:'cookerParticular/1',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_1.png")},
                    {productName:'灶具2号',productType:'ZWX-2',productRoute:'cookerParticular/2',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_2.png")},
                    {productName:'灶具3号',productType:'ZWX-3',productRoute:'cookerParticular/3',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_3.png")},
                    {productName:'灶具4号',productType:'ZWX-4',productRoute:'cookerParticular/4',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_4.png")},
                    {productName:'灶具5号',productType:'ZWX-5',productRoute:'cookerParticular/5',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_5.png")},
                    {productName:'灶具6号',productType:'ZWX-6',productRoute:'cookerParticular/6',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_6.png")},
                    {productName:'灶具7号',productType:'ZWX-7',productRoute:'cookerParticular/7',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_7.png")},
                    {productName:'灶具8号',productType:'ZWX-8',productRoute:'cookerParticular/8',productImg:require("../assets/images/HaoTaiTai/product/372X360/cooker/cooker_8.png")},
              ]},
          ],
          productSelected:{}
      }
  },
   mounted: function() {
       
    switch (this.$route.path) {
        case "/product/lampblackMachine":
            this.productSelected = this.product[0];
            
            break;
        case "/product/heater":
            this.productSelected = this.product[1];
            
            break;
        case "/product/cooker":
            this.productSelected = this.product[2];
            
            break;    
    }},
    //mounted和watch分别是在第一次和后面路由改变的时候，分别赋值对应的数据
   watch: {
  '$route' (to, from) {

        switch (this.$route.path) {
            
        case "/product/lampblackMachine":
            this.productSelected = this.product[0];
            
            break;
        case "/product/heater":
            this.productSelected = this.product[1];
            
            break;
        case "/product/cooker":
            this.productSelected = this.product[2];
            
            break;    
    }


  }}

  
    

}
</script>