<template>
  <cube-page type="dialog-view" title="Dialog">
    <div slot="content">
      <cube-button @click="showAlert">Dialog - type</cube-button>
      <cube-button @click="showBtn">Dialog - btn</cube-button>
      <cube-button @click="showClose">Dialog - show close</cube-button>
      <cube-button @click="showSlot">Dialog - slot</cube-button>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from './page.vue'

  export default {
    components: {
      CubePage
    },
    methods: {
      showAlert() {
        this.dialog = this.$createDialog({
          type: 'alert',
          title: '我是标题',
          content: '我是内容',
          icon: 'cubeic-alert'
        })
        this.dialog.show()
      },
      showBtn() {
        this.dialog = this.$createDialog({
          type: 'confirm',
          icon: 'cubeic-alert',
          title: '我是标题',
          content: '我是内容',
          confirmBtn: {
            text: '确定按钮',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消按钮',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击确认按钮'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击取消按钮'
            }).show()
          }
        })
        this.dialog.show()
      },
      showClose() {
        this.dialog = this.$createDialog({
          type: 'alert',
          icon: 'cubeic-alert',
          showClose: true,
          title: '标题',
          onClose: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击关闭按钮'
            }).show()
          }
        })
        this.dialog.show()
      },
      showSlot() {
        this.dialog = this.$createDialog({
          type: 'alert',
          confirmBtn: {
            text: '我知道了',
            active: true
          }
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title': true
              },
              slot: 'title'
            }, [
              createElement('div', {
                'class': {
                  'my-title-img': true
                }
              }),
              createElement('p', '附近车少,优选出租车将来接您')
            ]),
            createElement('p', {
              'class': {
                'my-content': true
              },
              slot: 'content'
            }, '价格仍按快车计算')
          ]
        })
        this.dialog.show()
      }
    },

  }
</script>
