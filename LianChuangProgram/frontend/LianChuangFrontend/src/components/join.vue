<template>
    <div>
        <topNav></topNav>
        <div class="row banner_1">
            <img src="../assets/images/HaoTaiTai/join.jpg" alt="" class="img-fluid bann">
        </div>
        <!-- 加盟详情 -->
        <div class="row join_page">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="row title1">
                    <p>招商加盟</p>
                </div>
                <div class="row join_down">
                    <div class="row" style="width: 100%">
                        <div class="col-md-1"></div>
                        <div class="col-md-10">
                            <div class="pcForm" role="form">
                                <div class="form-row">
                                    <div class="col-sm-3"></div>
                                    <label class="col-sm-2 control-label joinLabel">
                                        <img src="../assets/images/招商加盟/申请加盟icon1.png" alt="">姓名:
                                    </label>
                                    <div class="col-sm-4">
                                        <input
                                            class="form-control"
                                            id="name"
                                            type="text"
                                            placeholder=""
                                            name="name"
                                        >
                                    </div>
                                    <div class="col-sm-3"></div>
                                </div>
                                <div class="form-row">
                                    <div class="col-sm-3"></div>
                                    <label class="col-sm-2 control-label joinLabel">
                                        <img src="../assets/images/招商加盟/申请加盟icon2.png" alt="">电话:
                                    </label>
                                    <div class="col-sm-4">
                                        <input
                                            class="form-control"
                                            id="phone"
                                            type="text"
                                            name="phone"
                                            placeholder=""
                                        >
                                    </div>
                                    <div class="col-sm-3"></div>
                                </div>

                                <div class="form-row">
                                <div class="col-sm-3"></div>
                                <label class="col-sm-2 control-label joinLabel">
                                    <img src="../assets/images/招商加盟/申请加盟icon3.png" alt="">邮箱:
                                </label>
                                <div class="col-sm-4">
                                    <input
                                        class="form-control"
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder=""
                                    >
                                </div>
                                <div class="col-sm-3"></div>
                            </div>
                            <div class="form-row">
                                    <div class="col-sm-3"></div>
                                    <label class="col-sm-2 control-label joinLabel">
                                        <img src="../assets/images/招商加盟/申请加盟icon4.png" alt="">地址:
                                    </label>
                                    <div class="col-sm-4">
                                        <input
                                            class="form-control"
                                            id="adress"
                                            type="text"
                                            name="adress"
                                            placeholder=""
                                        >
                                    </div>
                                    <div class="col-sm-3"></div>
                                </div>

                            </div>
                            






                            <div class="joinForm" role="form">
                                <div class="form-row">
                                    <label class="col-sm-1 control-label form_left">
                                        <img src="../assets/images/招商加盟/申请加盟icon1.png" alt="">姓名:
                                    </label>
                                    <div class="col-sm-4">
                                        <input
                                            class="form-control"
                                            id="name"
                                            type="text"
                                            placeholder=""
                                            name="name"
                                        >
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <label class="col-sm-1 control-label form_left" for="">
                                        <img src="../assets/images/招商加盟/申请加盟icon2.png" alt="">电话:
                                    </label>
                                    <div class="col-sm-4">
                                        <input
                                            class="form-control"
                                            id="phone"
                                            type="text"
                                            name="phone"
                                            placeholder=""
                                        >
                                    </div>
                                    <div class="col-sm-1"></div>
                                </div>
                                <div class="form-row">
                                    <label class="col-sm-1 control-label form_left" for="">
                                        <img src="../assets/images/招商加盟/申请加盟icon3.png" alt="">邮箱:
                                    </label>
                                    <div class="col-sm-4">
                                        <input
                                            class="form-control"
                                            id="email"
                                            type="text"
                                            name="email"
                                            placeholder=""
                                        >
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <label class="col-sm-1 control-label form_left" for="">
                                        <img src="../assets/images/招商加盟/申请加盟icon4.png" alt="">地址:
                                    </label>
                                    <div class="col-sm-4">
                                        <input
                                            class="form-control"
                                            id="adress"
                                            type="text"
                                            name="adress"
                                            placeholder=""
                                        >
                                    </div>
                                    <div class="col-sm-1"></div>
                                </div>
                                <div class="form-row">
                                    <div class="col-sm-1"></div>
                                    <div
                                        class="col-sm-10"
                                        style="color: #c0c0c0; font-size:0.3rem;"
                                    >请填写您真是信息，我们会在24小时内联系您。</div>
                                    <div class="col-sm-1"></div>
                                </div>
                                <div class="form-row">
                                    <button class="join_button" value="提交信息">提交信息</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
        <foot></foot>
    </div>
</template>
<style scoped>
@import "../assets/css/join.css";
</style>
<script>
import topNav from "./topNav.vue";

import foot from "./foot.vue";

export default {
  components: {
    topNav,

    foot
  },

  methods: {},
  mounted: () => {
    $(".join_button").click(function() {
      var csrftoken = Cookies.get("csrftoken");
      console.log(csrftoken);

      $.ajax({
        url: "api/join/",
        type: "POST",
        data: {
          name: $("#name").val(),
          email: $("#email").val(),
          adress: $("#adress").val(),
          phone: $("#phone").val()
        },
        headers: {
          "X-CSRFTOKEN": csrftoken
        },
        dataType: "JSON",
        success: function() {
          alert("提交成功！");
        },
        error: function(err) {
          alert("提交失败，请确保你是否填写完整信息");
        }
      });
    });
  }
};
</script>
