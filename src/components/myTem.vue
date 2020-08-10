<template>
  <div class="myTem">
    <div class="title">
      <slot name="title"></slot>
    </div>

    <slot name="body"> </slot>
    <slot name="code">
      <div class="textarea-wrapper">
        <pre class="content">{{ obj }}</pre>
        <textarea
          disabled
          v-model="obj"
          placeholder="请在此处输入文字..."
        ></textarea>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'myTem',
  props: ['obj']
}
</script>

<style lnag="less">
.title {
  margin: 20px 0;
}
.textarea-wrapper {
  position: relative;
  min-height: 20px;
  width: 100%;
}
.content {
  display: block;
  visibility: hidden;
  font-size: 14px;
  color: #333333;
  line-height: 1.3;
  word-wrap: break-word;
  font-family: SourceHanSansCN-Regular;
  padding: 0;
}
.textarea-wrapper textarea {
  overflow: hidden;
  resize: none;
  width: 100%;
  height: 100%;
  border: 1px solid #dadde0;
  font-family: SourceHanSansCN-Regular;
  font-size: 14px;
  color: #333333;
  line-height: 1.3;
  padding: 0px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
