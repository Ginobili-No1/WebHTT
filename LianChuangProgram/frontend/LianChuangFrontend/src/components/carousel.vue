<template>
  <div>
    <div id="movebody" class="banner_1">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <!-- 指示符 -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <!-- 轮播图片 -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <router-link to='/product/heater'>
              <img src="../assets/images/HaoTaiTai/banner1.jpg">
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to='/product/lampblackMachine'>
              <img src="../assets/images/HaoTaiTai/banner2.jpg">
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to='/product/cooker'>
              <img src="../assets/images/HaoTaiTai/banner3.jpg">
            </router-link>
          </div>
        </div>
        <!-- 左右切换按钮 -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>


<script>
import $ from "jquery";
$(function() {});
export default {};
</script>

