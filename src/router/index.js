import Vue from 'vue'
import VueRouter from 'vue-router'
import AlLink from '@/components/AlLink.vue'
import AlButton from '@/components/AlButton.vue'
import AlInput from '@/components/AlInput.vue'
import AlSwitch from '@/components/AlSwitch.vue'
import AlFormItem from '@/components/AlFormItem.vue'
import AlForm from '@/components/AlForm.vue'
import AlContainer from '@/components/AlContainer.vue'
import AlDialog from '@/components/AlDialog.vue'

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
