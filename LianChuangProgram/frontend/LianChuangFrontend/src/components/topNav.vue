<template>
 <div>
   <div class="multiplex">
    <nav class="navbar navbar-expand-md fixed-top">
        <a class="navbar-brand" href="javacsript:;"> 
            <img src="../assets/images/HaoTaiTai/logo.png" class="img-responsive mobileLogo" style="padding-top:auto; width:100%" alt="">
            <img src="../assets/images/HaoTaiTai/logo.png" class="img-responsive pcLogo" style="padding-top:auto; " alt=""></a>

        <!-- 按钮边框 -->
        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
                data-state=0>
            <!-- 方框里面三条线 -->
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" style="text-align:center; margin:0 auto" id="collapsibleNavbar">
            <ul class="navbar-nav" id="nav1">
                <li class="nav-item">
                   
                </li>
                <li class="nav-item">
                     <router-link class="nav-link" to='/index'>首页</router-link>
                </li>
                <li class="nav-item" id="product"> 
                    <a class="nav-link">产品中心</a>
                    <div class="mobile_nav">

                            <router-link class="nav-link" to='/product/lampblackMachine'>油烟机</router-link>
                            <router-link class="nav-link" to='/product/heater'>热水器</router-link>
                            
                            <router-link class="nav-link" to='/product/cooker'>灶具</router-link>

                    </div>





                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to='/cultureAlter'>公司简介</router-link>

                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to='/news'>新闻中心</router-link>

                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to='/join'>招商加盟</router-link>

                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to='/contact'>联系我们</router-link>

                </li>

            </ul>




        </div>



    </nav>


           <ul class="hide_nav">

        <li><router-link class="nav-link" to='/product/lampblackMachine'>油烟机</router-link></li>
        <li><router-link class="nav-link" to='/product/heater'>热水器</router-link></li>
        
        <li><router-link class="nav-link" to='/product/cooker'>灶具</router-link></li>

                </ul>

</div>

 </div>
</template>


<style scoped>
    
</style>


<script>
import $ from "jquery";


$(function() {

 
});
export default {
    mounted:()=>{
        
         $(".hide_nav").hide()
    $(".mobile_nav").hide()
    // $(".navbar-toggler").click(function () {
    //     var tt = $(".navbar-toggler").data("state");

    //     if (tt === 0) {
    //         $(".navbar").css({"background-color": "white"})

    //         $(".navbar-toggler").data("state", 1);

    //     } else {
    //         $(".navbar").css({"background-color": "transparent"})
    //         $(".navbar-toggler").data("state", 0);
    //     }
    // });


    var result_pc = window.matchMedia('(min-width:768px)');

    var result_mobile = window.matchMedia('(max-width:768px)');

    if (result_pc.matches) {
        // pc端
        //tt2记录， 用于控制nav1的背景色
        var tt2 = 0 ;
       

        $(".navbar").mouseover(function () {

            $(".navbar").css("background-color","white")


        });




         $(".navbar").mouseout(function () {
             if (tt2 === 0) {
                $(".navbar").css("background-color","transparent")

             }
         });



        $("#product").click(function () {

             $(".hide_nav").slideToggle("normal")
            if (tt2 === 0){
            tt2 = 1;
            }else if(tt2 === 1){
                tt2 = 0
            }

            });
       $("#product").mouseout(function () {

       })



    } else if (result_mobile.matches) {

        // 移动端

        
        $("#nav1 li").css("flex-wrap","wrap");
        $(".navbar").css("background-color","white");

        $("#product").click(function () {
           $(".mobile_nav").slideToggle("normal")



        });
       

    }

    }
};
</script>

