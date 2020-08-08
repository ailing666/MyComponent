// 导入组件
import AlLink from './AlLink.vue'
import AlButton from './AlButton.vue'
import AlInput from './AlInput.vue'
import AlSwitch from './AlSwitch.vue'
import AlFormItem from './AlFormItem.vue'
import AlForm from './AlForm.vue'
import AlContainer from './AlContainer.vue'
import AlDialog from './AlDialog.vue'
// Vue构造函数
export default function (Vue) {
  // 注册组件 Al-link
  Vue.component(AlLink.name, AlLink)
  // 注册组件 Al-button
  Vue.component(AlButton.name, AlButton)
  // 注册组件 Al-input
  Vue.component(AlInput.name, AlInput)
  // 注册组件 Al-switch
  Vue.component(AlSwitch.name, AlSwitch)
  // 注册组件 Al-form-item
  Vue.component(AlFormItem.name, AlFormItem)
  // 注册组件 Al-form
  Vue.component(AlForm.name, AlForm)
  // 注册组件 Al-container
  Vue.component(AlContainer.name, AlContainer)
  // 注册组件 Al-dialog
  Vue.component(AlDialog.name, AlDialog)
}
