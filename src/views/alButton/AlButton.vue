<template>
  <div class="al-button">
    <!-- 基本用法 -->
    <myTem :obj="buttonObj.base">
      <template #title>
        基本用法
      </template>
      <template #body>
        <div>
          <my-button></my-button>
          <my-button>我是按钮</my-button>
        </div>
      </template>
      <template #code> </template>
    </myTem>
    <!-- 样式 -->
    <myTem :obj="buttonObj.style">
      <template #title>
        样式
      </template>
      <template #body>
        <my-button type="warning">warning</my-button>
        <my-button type="danger">danger</my-button>
        <my-button type="success">success</my-button>
        <my-button type="info">info</my-button>
      </template>
      <template #code> </template>
    </myTem>
    <!-- 是否禁用 -->
    <myTem :obj="buttonObj.disabled">
      <template #title>
        样式
      </template>
      <template #body>
        <my-button type="warning" disabled>禁用</my-button>
        <my-button type="danger" :disabled="false">启用</my-button>
      </template>
      <template #code> </template>
    </myTem>
    <!-- 点击事件 -->
    <myTem :obj="buttonObj.click">
      <template #title>
        点击事件
      </template>
      <template #body>
        <my-button type="warning" @btnClick="btnClick">点我啊</my-button>
      </template>
      <template #code> </template>
    </myTem>
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
    </table>

    <h5>事件</h5>
    <table border>
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>事件参数</th>
      </tr>

      <tr>
        <td>click</td>
        <td>点击事件</td>
        <td>原生事件参数</td>
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
</template>

<script>
export default {
  name: 'al-button',
  data () {
    return {
      buttonObj: {
        base: `          <my-button></my-button>
          <my-button>我是按钮</my-button>`,
        style: `         <my-button type="warning">warning</my-button>
        <my-button type="danger">danger</my-button>
        <my-button type="success">success</my-button>
        <my-button type="info">info</my-button>`,
        disabled: `       <my-button type="warning" disabled>禁用</my-button>
        <my-button type="danger" :disabled="false">启用</my-button>`,
        click: `          <my-button type="warning" @btnClick="btnClick">点我啊</my-button>`
      }
    }
  },
  methods: {
    btnClick () {
      window.console.log(event)
    }
  }
}
</script>

<style></style>
