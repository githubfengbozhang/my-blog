<template>
  <div>
    <div class="background-result">
      <el-form
        ref="form"
        :model="form"
        label-width="120px"
      >
        <el-form-item label="背景类型">
          <el-radio-group v-model="form.imgType">
            <el-radio :label="0">url</el-radio>
            <el-radio :label="1">radial-gradient</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="repeat">
          <el-radio-group v-model="form.reseatType">
            <el-radio :label="0">repeat</el-radio>
            <el-radio :label="1">no-repeat</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="background-size">
          <el-radio-group v-model="form.size">
            <el-radio :label="0">size</el-radio>
            <el-radio :label="1">no-size</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="result">
        <div
          v-if="form.imgType === 0"
          :style="resultImgStyle"
        >
        </div>
        <div
          v-else
          :style="resultRadialRadialStyle"
        />
      </div>
    </div>
    <div style="width:100%;">
      <h3>CSS代码</h3>
      <div class="language-css extra-class">
        <pre class="language-css"><code ref="code-container"></code></pre>
      </div>
    </div>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  name: 'CSSBackground',
  data () {
    return {
      form: {
        imgType: 0,
        reseatType: 0,
        size: 0
      },
      resultImgStyle: null,
      resultRadialRadialStyle: null
    }
  },
  watch: {
    form: {
      immediate: true,
      handler (value) {
        const { imgType, reseatType, size } = value;
        if (imgType === 0) {
          this.resultImgStyle = {
            width: `500px`,
            height: `300px`,
            backgroundImage: `url("/avatar.png")`
          }
          if (reseatType === 0) {
            this.resultImgStyle['backgroundRepeat'] = `repeat`
          } else {
            this.resultImgStyle['backgroundRepeat'] = `no-repeat`
          }
          if (size === 0) {
            this.resultImgStyle['backgroundSize'] = `300px 100px`
          } else {
            this.$delete(this.resultImgStyle, 'backgroundSize')
          }
          this.$refs['code-container'].innerHTML = Prism.highlight(`.result-img-style{
            width:500px;
            height:300px;
            background-image:url("/avatar.png");
            ${reseatType === 0 ? 'background-repeat:repeat;' : 'background-repeat:no-repeat;'}
            ${size === 0 ? 'background-size:300px 100px' : ''}
          }`, Prism.languages.css)
        } else {
          this.resultRadialRadialStyle = {
            width: '500px',
            height: '300px',
            backgroundImage: 'radial-gradient(20px at left top,transparent 10px,#00adb5 10px)'
          }
          if (reseatType === 0) {
            this.resultRadialRadialStyle['backgroundRepeat'] = 'repeat'
          } else {
            this.resultRadialRadialStyle['backgroundRepeat'] = 'no-repeat'
          }
          if (size === 0) {
            this.resultRadialRadialStyle['backgroundSize'] = '60px 60px'
          } else {
            this.$delete(this.resultRadialRadialStyle, 'backgroundSize')
          }
          this.$refs['code-container'].innerHTML = Prism.highlight(`.result-radial-radial-style{
            width:500px;
            height:300px;
            background-image:radial-gradient(20px at left top,transparent 10px,#00adb5 10px);
            ${reseatType === 0 ? 'background-repeat:repeat;' : 'background-repeat:no-repeat;'}
            ${size === 0 ? 'background-size:300px 100px' : ''}
          }`, Prism.languages.css)
        }
      },
      deep: true
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.background-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>