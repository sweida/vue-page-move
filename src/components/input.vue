<template>

  <cube-page title="Input">
    <div slot="content">
      <cube-input
        :type="type"
        placeholder="please type here..."
        :disabled="disabled"
        :readonly="readonly"
        :clearable="useClear"
        :autocomplete="true"
        :eye="eye"
        v-model="value"
      ></cube-input>
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
      type: 'password',
      value: '',
      disabled: false,
      useClear: true,
      readonly: false,
      isPwd: true,
      showEye: true,
      pwdVisible: true,
      reverse: false
    }
  },
  computed: {
    eye() {
      if (this.isPwd && this.showEye) {
        return {
          open: this.reverse ? !this.pwdVisible : this.pwdVisible,
          reverse: this.reverse
        }
      } else {
        return false
      }
    }
  },
  methods: {
    updateDisabled(val) {
      this.disabled = val
    },
    updateReadonly(val) {
      this.readonly = val
    },
    updateUseClear(val) {
      this.useClear = val
    },
    updatePwd(val) {
      this.isPwd = val
      this.type = this.isPwd ? 'password' : 'text'
    },
    updateShowEye(val) {
      this.showEye = val
    },
    updatePwdVisible(val) {
      this.pwdVisible = val
    },
    updateReverse(val) {
      this.reverse = val
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
