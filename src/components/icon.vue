<template>
<cube-page title="cube-ui隐藏图标">
  <div slot="content">
    <div class="iconBox">
      <i class="cubeic-eye-invisible" @click="tip('cubeic-eye-invisible')"></i>
      <i class="cubeic-eye-visible" @click="tip('cubeic-eye-visible')"></i>
      <i class="cubeic-square-right" @click="tip('cubeic-square-right')"></i>
      <i class="cubeic-select" @click="tip('cubeic-select')"></i>
      <i class="cubeic-pulldown" @click="tip('cubeic-pulldown')"></i>
      <i class="cubeic-pullup" @click="tip('cubeic-pullup')"></i>
      <i class="cubeic-more" @click="tip('cubeic-more')"></i>
      <i class="cubeic-back" @click="tip('cubeic-back')"></i>
      <i class="cubeic-arrow" @click="tip('cubeic-arrow')"></i>
      <i class="cubeic-close" @click="tip('cubeic-close')"></i>
      <i class="cubeic-warn" @click="tip('cubeic-warn')"></i>
      <i class="cubeic-question" @click="tip('cubeic-question')"></i>
      <i class="cubeic-right" @click="tip('cubeic-right')"></i>
      <i class="cubeic-wrong" @click="tip('cubeic-wrong')"></i>
      <i class="cubeic-info" @click="tip('cubeic-info')"></i>
      <i class="cubeic-remove" @click="tip('cubeic-remove')"></i>
      <i class="cubeic-add" @click="tip('cubeic-add')"></i>
      <i class="cubeic-share" @click="tip('cubeic-share')"></i>
      <i class="cubeic-no-wifi" @click="tip('cubeic-no-wifi')"></i>
      <i class="cubeic-smile" @click="tip('cubeic-smile')"></i>
      <i class="cubeic-sad" @click="tip('cubeic-sad')"></i>
      <i class="cubeic-email" @click="tip('cubeic-email')"></i>
      <i class="cubeic-game" @click="tip('cubeic-game')"></i>
      <i class="cubeic-wifi" @click="tip('cubeic-wifi')"></i>
      <i class="cubeic-hot" @click="tip('cubeic-hot')"></i>
      <i class="cubeic-notification" @click="tip('cubeic-notification')"></i>
      <i class="cubeic-delete" @click="tip('cubeic-delete')"></i>
      <i class="cubeic-vip" @click="tip('cubeic-vip')"></i>
      <i class="cubeic-mute" @click="tip('cubeic-mute')"></i>
      <i class="cubeic-danger" @click="tip('cubeic-danger')"></i>
      <i class="cubeic-volume" @click="tip('cubeic-volume')"></i>
      <i class="cubeic-bad" @click="tip('cubeic-bad')"></i>
      <i class="cubeic-mobile-phone" @click="tip('cubeic-mobile-phone')"></i>
      <i class="cubeic-aim" @click="tip('cubeic-aim')"></i>
      <i class="cubeic-navigation" @click="tip('cubeic-navigation')"></i>
      <i class="cubeic-safe-pay" @click="tip('cubeic-safe-pay')"></i>
      <i class="cubeic-tag" @click="tip('cubeic-tag')"></i>
      <i class="cubeic-lock" @click="tip('cubeic-lock')"></i>
      <i class="cubeic-unlock" @click="tip('cubeic-unlock')"></i>
      <i class="cubeic-edit" @click="tip('cubeic-edit')"></i>
      <i class="cubeic-scan" @click="tip('cubeic-scan')"></i>
      <i class="cubeic-qr-code" @click="tip('cubeic-qr-code')"></i>
      <i class="cubeic-calendar" @click="tip('cubeic-calendar')"></i>
      <i class="cubeic-time" @click="tip('cubeic-time')"></i>
      <i class="cubeic-red-packet" @click="tip('cubeic-red-packet')"></i>
      <i class="cubeic-star" @click="tip('cubeic-star')"></i>
      <i class="cubeic-setting" @click="tip('cubeic-setting')"></i>
      <i class="cubeic-home" @click="tip('cubeic-home')"></i>
      <i class="cubeic-credit-card" @click="tip('cubeic-credit')"></i>
      <i class="cubeic-mall" @click="tip('cubeic-mall')"></i>
      <i class="cubeic-microphone" @click="tip('cubeic-microphone')"></i>
      <i class="cubeic-search" @click="tip('cubeic-search')"></i>
      <i class="cubeic-good" @click="tip('cubeic-good')"></i>
      <i class="cubeic-alert" @click="tip('cubeic-alert')"></i>
      <i class="cubeic-picture" @click="tip('cubeic-picture')"></i>
      <i class="cubeic-message" @click="tip('cubeic-message')"></i>
      <i class="cubeic-phone" @click="tip('cubeic-phone')"></i>
      <i class="cubeic-location" @click="tip('cubeic-location')"></i>
      <i class="cubeic-like" @click="tip('cubeic-like')"></i>
      <i class="cubeic-camera" @click="tip('cubeic-camera')"></i>
      <i class="cubeic-person" @click="tip('cubeic-person')"></i>
      <i class="cubeic-round-border" @click="tip('cubeic-round-border')"></i>
      <i class="cubeic-important" @click="tip('cubeic-important')"></i>
      <i class="cubeic-ok" @click="tip('cubeic-ok')"></i>
      <i class="cubeic-square-border" @click="tip('cubeic-square-border')"></i>
    </div>
    <cube-button @click="goRouter">Go Button</cube-button>
  </div>
</cube-page>
</template>

<script>
import CubePage from './page.vue'
export default {
  components: {
    CubePage
  },
  data() {
    return {
    }
  },
  methods: {
    tip(data) {
      this.$createToast({
        type: 'correct',
        txt: data
      }).show()
    },
    goRouter() {
      this.$router.push({
        path: '/button'
      })
    }
  }
}
</script>

<style scoped>
.iconBox {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 40px;
  display: flex;
  flex-wrap: wrap;
}

.iconBox i {
  font-size: 40px;
  margin: 7px;
}

h5 {
  font-size: 30px;
  text-align: center;
  line-height: 40px
}
</style>
