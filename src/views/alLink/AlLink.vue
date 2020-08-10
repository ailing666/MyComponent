<template>
  <div class="al-link">
    <h2>Link 文字链接</h2>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <my-link href="http://www.baidu.com"></my-link>
    </div>
    <!-- 自定义文字 -->
    <div>
      <h3>自定义文字</h3>
      <my-link>自定义文字</my-link>
    </div>
    <!-- 是否显示下划线 -->
    <div>
      <h3>是否显示下划线</h3>
      <my-link>默认显示</my-link>
      <my-link :underline="false">隐藏</my-link>
      <!--html-->
      <div class="textarea-wrapper">
        <pre class="content">{{ data.link }}</pre>
        <textarea
          disabled
          v-model="data.link"
          placeholder="请在此处输入文字..."
        ></textarea>
      </div>
    </div>
    <!-- 样式 -->
    <div>
      <h3>样式</h3>
      <my-link type="default">默认样式</my-link>
      <my-link type="primary">默认样式</my-link>
      <my-link type="success">成功样式</my-link>
      <my-link type="warning">警告样式</my-link>
      <my-link type="danger">危险样式</my-link>
      <my-link type="info">提示样式</my-link>
      <div class="textarea-wrapper">
        <pre class="content">{{ data.style }}</pre>
        <textarea
          disabled
          v-model="data.style"
          placeholder="请在此处输入文字..."
        ></textarea>
      </div>
    </div>
    <!-- Attributes -->
    <div>
      <h5>Attributes</h5>
      <table border>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>type</td>
          <td>按钮类型</td>
          <td>string</td>
          <td>primary/success/warning/danger/info</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>-</td>
          <td>False</td>
        </tr>

        <tr>
          <td>事件名</td>
          <td>说明</td>
          <td>事件参数</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>click</td>
          <td>点击事件</td>
          <td>原生事件参数</td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <h5>插槽:</h5>
      <table border>
        <tr>
          <th>插槽名</th>
          <th>说明</th>
        </tr>

        <tr>
          <td>default</td>
          <td>文本区域</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'al-link',
  data () {
    return {
      data: {
        link: `       <my-link>默认显示</my-link>
       <my-link :underline="false">隐藏</my-link>`,
        style: `      <my-link type="default">默认样式</my-link><br/>
      <my-link type="primary">默认样式</my-link><br/>
      <my-link type="success">成功样式</my-link><br/>
      <my-link type="warning">警告样式</my-link><br/>
      <my-link type="danger">危险样式</my-link><br/>
      <my-link type="info">提示样式</my-link>`
      }
    }
  },
  methods: {}
}
</script>

<style lang="less">
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
