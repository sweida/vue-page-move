<template>
  <cube-page type="button-view" title="Button">
    <div slot="content">
      <cube-button icon="cubeic-right">Button With Icon</cube-button>
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
      this.$createToast({
        txt: this.toastTxt
      }).show()
    }
  }
}
</script>

<style scoped>
.cube-btn{
  margin-bottom: 40px;
}

</style>
