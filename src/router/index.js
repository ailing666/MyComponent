import Vue from 'vue'
import VueRouter from 'vue-router'
import AlLink from '@/views/alLink/AlLink.vue'
import AlButton from '@/views/alButton/AlButton.vue'
import AlInput from '@/views/alInput/AlInput.vue'
import AlSwitch from '@/views/alSwitch/AlSwitch.vue'
import AlFormItem from '@/views/alFormItem/AlFormItem.vue'
import AlForm from '@/views/alForm/AlForm.vue'
import AlContainer from '@/views/alContainer/AlContainer.vue'
import AlDialog from '@/views/alDialog/AlDialog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/alLink'
  },
  {
    path: '/alLink',
    component: AlLink,
    meta: {
      title: '文字链接'
    }
  },
  {
    path: '/alButton',
    component: AlButton,
    meta: {
      title: '按钮'
    }
  },
  {
    path: '/alInput',
    component: AlInput,
    meta: {
      title: '输入框'
    }
  },
  {
    path: '/alSwitch',
    component: AlSwitch,
    meta: {
      title: '开关'
    }
  },
  {
    path: '/alFormItem',
    component: AlFormItem,
    meta: {
      title: '表单项'
    }
  },
  {
    path: '/alForm',
    component: AlForm,
    meta: {
      title: '表单'
    }
  },
  {
    path: '/alContainer',
    component: AlContainer,
    meta: {
      title: '容器'
    }
  },
  {
    path: '/alDialog',
    component: AlDialog,
    meta: {
      title: '弹出框'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
