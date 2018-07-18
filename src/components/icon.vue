<template>

  <cube-page type="button-view" title="Button">
    <div slot="content">
      <h5>cube-ui隐藏图标</h5>
      <div class="iconBox">
        <i class="cubeic-eye-invisible"></i>
        <i class="cubeic-eye-visible"></i>
        <i class="cubeic-square-right"></i>
        <i class="cubeic-select"></i>
        <i class="cubeic-pulldown"></i>
        <i class="cubeic-pullup"></i>
        <i class="cubeic-more"></i>
        <i class="cubeic-back"></i>
        <i class="cubeic-arrow"></i>
        <i class="cubeic-close"></i>
        <i class="cubeic-warn"></i>
        <i class="cubeic-question"></i>
        <i class="cubeic-right"></i>
        <i class="cubeic-wrong"></i>
        <i class="cubeic-info"></i>
        <i class="cubeic-remove"></i>
        <i class="cubeic-add"></i>
        <i class="cubeic-share"></i>
        <i class="cubeic-no-wifi"></i>
        <i class="cubeic-smile"></i>
        <i class="cubeic-sad"></i>
        <i class="cubeic-email"></i>
        <i class="cubeic-game"></i>
        <i class="cubeic-wifi"></i>
        <i class="cubeic-hot"></i>
        <i class="cubeic-notification"></i>
        <i class="cubeic-delete"></i>
        <i class="cubeic-vip"></i>
        <i class="cubeic-mute"></i>
        <i class="cubeic-danger"></i>
        <i class="cubeic-volume"></i>
        <i class="cubeic-bad"></i>
        <i class="cubeic-mobile-phone"></i>
        <i class="cubeic-aim"></i>
        <i class="cubeic-navigation"></i>
        <i class="cubeic-safe-pay"></i>
        <i class="cubeic-tag"></i>
        <i class="cubeic-lock"></i>
        <i class="cubeic-unlock"></i>
        <i class="cubeic-edit"></i>
        <i class="cubeic-scan"></i>
        <i class="cubeic-qr-code"></i>
        <i class="cubeic-calendar"></i>
        <i class="cubeic-time"></i>
        <i class="cubeic-red-packet"></i>
        <i class="cubeic-star"></i>
        <i class="cubeic-setting"></i>
        <i class="cubeic-home"></i>
        <i class="cubeic-credit-card"></i>
        <i class="cubeic-mall"></i>
        <i class="cubeic-microphone"></i>
        <i class="cubeic-search"></i>
        <i class="cubeic-good"></i>
        <i class="cubeic-alert"></i>
        <i class="cubeic-picture"></i>
        <i class="cubeic-message"></i>
        <i class="cubeic-phone"></i>
        <i class="cubeic-location"></i>
        <i class="cubeic-like"></i>
        <i class="cubeic-camera"></i>
        <i class="cubeic-person"></i>
        <i class="cubeic-round-border"></i>
        <i class="cubeic-important"></i>
        <i class="cubeic-ok"></i>
        <i class="cubeic-square-border"></i>
      </div>
      <cube-button @click="showToast">show toast</cube-button>
    </div>
  </cube-page>

</template>

<script>
import CubePage from './page.vue'
export default {
  components: {
    CubePage
  },
  name: 'HelloWorld',
  data () {
    return {
      value: '',
      toastTxt: 'cube toast content'
    }
  },
  methods: {
    showToast () {
      this.$router.push({path:'/button'})
      // this.$createToast({
      //   txt: this.toastTxt
      // }).show()
    }
  }
}
</script>

<style scoped>
.iconBox{
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 40px;
  display: flex;
  flex-wrap: wrap;
}
.iconBox i{
  font-size: 40px;
  margin: 7px;
}
h5{
  font-size: 30px;
  text-align: center;
  line-height: 40px
}

</style>
