<template>
  <div
    class="split-carousel"
    :style="{padding:`0 ${arrowAreaWidth}${cssUnit}`}">
    <!-- carousel container -->
    <div
      @mouseenter="autoplay && hoverCancelPlay && cancelPlay()"
      @mouseleave="autoplay && hoverCancelPlay && play()"
      class="split-carousel--content">
      <div
        class="split-carousel--content--container"
        :class="{[`split-carousel--content--container__${itemAlign}`] : isStaticMode}"
        :style="{
          'width':`${isStaticMode ? 'auto':`${(itemWidthWithSpace)*(displayAmount+2)}${cssUnit}`}`,
          'margin-left': `${isStaticMode ? 0 :-(itemWidthWithSpace)}${cssUnit}`,
          'height':`${height}${cssUnit}`
        }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* play */
    speed: {
      type: Number,
      default: 500
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    hoverCancelPlay: {
      type: Boolean,
      default: false
    },
    playDirection: {
      default: 'ltr',
      validator (val) {
        return ['rtl', 'ltr'].indexOf(val) !== -1
      }
    },
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    /* style unit */
    cssUnit: {
      type: String,
      default: 'px'
    },
    height: {
      type: Number,
      default: 80
    },
    /* arrow controller */
    arrowAreaWidth: {
      type: Number,
      default: 0
    },
    arrowVisible: {
      type: String,
      default: 'enable',
      validator (value) {
        return ['enable', 'always'].indexOf(value) !== -1
      }
    },
    /* item */
    timingFunction: {
      type: String,
      default: 'ease'
    },
    displayAmount: {
      type: Number,
      default: 4
    },
    itemWidth: {
      type: Number,
      default: 120
    },
    itemAlign: {
      validator (value) {
        return ['center', 'left', 'right'].indexOf(value) !== -1
      },
      default: 'center'
    },
    showArrows: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.initCarousel()
    setTimeout(() => {
      this.isInit = true
      if (this.autoplay) {
        this.play()
      }
    }, 16)
    /* fix animation effect while broswer tabs switch(broswer would stop to painting while the page is hidden) */
    document.addEventListener(
      'visibilitychange',
      this.handlePageVisiblityChange
    )
  },
  destroyed () {
    this.cancelPlay()
    clearTimeout(this.timer)
    document.removeEventListener(
      'visibilitychange',
      this.handlePageVisiblityChange
    )
  },
  data () {
    return {
      itemSpace: 0,
      itemList: [],
      itemStageIndexList: [],
      index: this.initialIndex,
      containerWidth: 'auto',
      isReseting: false,
      isUnavailable: false,
      isInit: false,
      timer: null,
      autoplayTimer: null,
      isPageVisible: true
    }
  },
  computed: {
    itemAmount () {
      return this.itemList.length
    },
    itemWidthWithSpace () {
      return this.itemWidth + this.itemSpace
    },
    isStaticMode () {
      return this.itemAmount <= this.displayAmount
    },
    isNeedReset () {
      return (
        this.itemAmount > this.displayAmount &&
          this.itemAmount === this.displayAmount + 1
      )
    },
  },
  watch: {
    autoplay () {
      if (this.autoplay) {
        this.play()
      } else {
        this.cancelPlay()
      }
    },
    displayAmount () {
      this.initCarousel()
    },
    itemWidth () {
      this.initCarousel()
    },
    arrowAreaWidth () {
      this.initCarousel()
    }
  },
  methods: {
    initCarousel () {
      let containerWidth = window.getComputedStyle(this.$el).width
      containerWidth = Number.parseInt(containerWidth)
      let space =
          (containerWidth - this.displayAmount * this.itemWidth) /
          (this.displayAmount - 1)
      if (Math.abs(containerWidth - this.itemWidth) < 1) {
        space = 0
      }
      if (process.env.NODE_ENV !== 'production') {
        if (space < 0) {
          throw Error(`
                      item space has computed as a negative value:${space},
                      itemWith * displayAmount should less than the width of carousel container,
                      please adjust container width and item width
                    `)
        }
      }
      this.itemSpace = space
    },
    getItems () {
      let list = []
      if (this.$slots.default !== void 0) {
        list = this.$slots.default.filter(item => item.tag !== void 0)
      }
      this.itemList = list
    },
    setIndex (index) {
      if (this.isReseting || this.isUnavailable) return
      let toRight = index > this.index
      if (
        !this.loop &&
          (index < 0 || index > this.itemAmount - this.displayAmount)
      ) {
        return
      }

      if (index < 0) {
        index = this.itemAmount - 1
      }
      if (index >= this.itemAmount) {
        index %= this.itemAmount
      }

      this.index = index
      this.updateStageIndexList(toRight)
    },
    updateItems () {
      this.getItems()
      this.updateStageIndexList()
    },
    /* caculate order of carousel items */
    updateStageIndexList (toRight) {
      if (!this.isStaticMode) {
        let indexList = []
        for (let i = 0; i < this.displayAmount + 2; i++) {
          indexList[i] = this.index - 1 + i
          if (indexList[i] < 0) {
            indexList[i] += this.itemAmount
          }
          if (indexList[i] >= this.itemAmount) {
            indexList[i] %= this.itemAmount
          }
        }
        /*
            when item amount equal display amount plus 1,
            to ensure animation visual effects,
            need to reset edge item position by carousel's next move direction
          */
        if (this.isNeedReset && this.isInit) {
          clearTimeout(this.timer)
          this.isReseting = true
          this.isUnavailable = true
          if (toRight) {
            this.itemStageIndexList.splice(0, 1, -1)
            this.timer = setTimeout(() => {
              this.itemStageIndexList = indexList
              this.isReseting = false
              this.isUnavailable = false
            }, 16)
          } else {
            let cloneList = indexList.slice()
            cloneList[0] = -1
            this.itemStageIndexList = cloneList
            this.isReseting = false
            this.timer = setTimeout(() => {
              this.isReseting = true
              this.itemStageIndexList = indexList
              this.timer = setTimeout(() => {
                this.isReseting = false
                this.isUnavailable = false
              }, 16)
            }, this.speed)
          }
        } else {
          if (this.isInit) {
            this.$emit('change', this.index)
          }
          this.itemStageIndexList = indexList
        }
      }
    },
    play () {
      clearTimeout(this.autoplayTimer)
      this.autoplayTimer = setTimeout(() => {
        if (this.playDirection === 'ltr') {
          this.setIndex(this.index + 1)
        } else {
          this.setIndex(this.index - 1)
        }
        this.play()
      }, this.interval)
    },
    cancelPlay () {
      clearTimeout(this.autoplayTimer)
    },
    handlePageVisiblityChange () {
      if (document.visibilityState === 'hidden') {
        this.isPageVisible = false
      }
      if (document.visibilityState === 'visible') {
        setTimeout(() => {
          this.isPageVisible = true
        })
      }
    }
  }
}
</script>

<style>
.split-carousel {
  font-size: 0;
  position: relative;
  overflow: hidden;
}
.split-carousel--content {
  width: 100%;
  padding: 1px;
  overflow: hidden;
}
.split-carousel--content--container {
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-duration: 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: relative;
}
.split-carousel--content--container__left {
  text-align: left;
}
.split-carousel--content--container__center {
  text-align: center;
}
.split-carousel--content--container__right {
  text-align: right;
}
</style>
