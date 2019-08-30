<template>
 <div>
     <div class="mobileFootNav">
         <div>
             <ul class="navbar-nav">
                 <li style="height:5px;border-top: 0.5px dashed rgb(131, 131, 131 ,0.5)"></li>
                 <li class="nav-item">
                     <a  class="nav-link" id="mobileFootSonNavButton"><div class="left">产品中心</div><div class="right">></div></a>
                     
                     <div class="mobileFootSonNav">
                        <router-link class="nav-link" to='/product/lampblackMachine'>油烟机</router-link>
                        <router-link class="nav-link" to='/product/heater'>热水器</router-link>
                        <router-link class="nav-link" to='/product/cooker'>灶具</router-link>
                        

                     </div>
                 </li>
                <li class="nav-item">
                     <router-link to="/cultureAlter" class="nav-link"><div class="left">公司简介</div><div class="right">></div></router-link>
                 </li>
                 <li class="nav-item">
                     <router-link to="/news" class="nav-link"><div class="left">新闻中心</div><div class="right">></div></router-link>
                 </li>
                 <li class="nav-item">
                     <router-link to="/join" class="nav-link"><div class="left">招商加盟</div><div class="right">></div></router-link>
                 </li>
                 <li class="nav-item">
                     <router-link to="contact" class="nav-link"><div class="left">联系我们</div><div class="right">></div></router-link>
                 </li>
             </ul>
         </div>
     </div>
     <div class="footerColor">
        <div class="row" id="footer">
            <div class="col-md-1"></div>
            <div class="col-md-10">

                <div class="row">
                       <div class="col-md-2">
                        
                    </div>
                    <div class="col-md-2">
                        <h5><router-link to='/cultureAlter'>公司简介</router-link></h5> <br>
                        <div style="letter-spacing: 2px">culture</div>
                        <br>

                        

                    </div>
                    <div class="col-md-2">
                        <h5><router-link to='/news'>新闻中心</router-link></h5> <br>
                        <div style="letter-spacing: 2px">news</div>
                        <br>

                        

                    </div>
                    <div class="col-md-2">
                        <h5><router-link to='/join'>招商加盟</router-link></h5> <br>
                        <div style="letter-spacing: 2px">join</div>
                        <br>

                        

                    </div>
                    <div class="col-md-2">
                        <h5><router-link to='/contact'>联系我们</router-link></h5> <br>
                        <div style="letter-spacing: 2px">contact us</div>
                        <br>
                        
                        

                    </div>
                    
                        
                    
                    
                    <div class="col-md-2">
                       <img src='../assets/images/首页/图层 5.png' style="margin-top: 0%; width:100px;height:100px">
                        
                        

                    </div>
                    
                    
                    <div class="col-md-2">
                      <div style="text-align: center;">  Copringht ©2019  好太太厨卫公司</div>
                        <a href="http://www.beian.miit.gov.cn/" style="color:#838383">粤ICP备19093619号-1</a href="">
                    </div>
                </div>
                <div class="row" style="text-align:center;">
                    <div class="row" style="width:100%;  justify-content: center;">
                        <a href="javascript:;">商务QQ：945626023</a> &nbsp;  &nbsp;&nbsp;<br>
                      <a href="javascript:;">电话：0757-29293455</a> &nbsp;&nbsp; &nbsp;  <br>
                       <a href="javascript:;">地址：佛山市顺德区容桂扁滘工业区华美路1号</a>   <br>
                       </div>
                     <div class="row" style="width:100%;   justify-content: center;">
                         <a href="http://www.beian.miit.gov.cn/" style="text-align:center;">粤ICP备19093619号-1</a><br><br>
                     </div>
                </div>
            </div>

            <div class="col-md-1"></div>
        </div>

        <!-- <div class="row footer2" style="border-top:1px solid #c0c0c0"></div> -->
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
        
        
    var result_pc = window.matchMedia('(min-width:768px)');

    var result_mobile = window.matchMedia('(max-width:768px)');

    if (result_pc.matches) {
$(".mobileFootNav").hide();


    }else if (result_mobile.matches) {
$(".mobileFootNav").show();
     $(".mobileFootSonNav").hide();
 $("#mobileFootSonNavButton").click(function(){
     
            $(".mobileFootSonNav").slideToggle("normal")
        })


    }
    }
};
</script>

