import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/pages/index/index')
const ShoppingMall = () => import('@/components/pages/index/shoppingMall')
const malls = () => import('@/components/pages/goods/malls')
const Category = () => import('@/components/pages/category/category')
const Member = () => import('@/components/pages/member/member')
const Register = () => import('@/components/pages/member/register')
const Login = () => import('@/components/pages/member/login')
const Order = () => import('@/components/pages/member/order')
const sex = () => import('@/components/pages/member/sex')
const GoodsList = () => import('@/components/pages/goods/goodsList')
const goodsDetail = () => import('@/components/pages/goods/goodsDetail')
const search = () => import('@/components/pages/search/search')
const allRaise = () => import('@/components/pages/raise/allRaise')
const myraise = () => import('@/components/pages/raise/myraise')
const raiseFire = () => import('@/components/pages/raise/raiseFire')
const raiseAdd = () => import('@/components/pages/raise/raiseAdd')
const raiseUser = () => import('@/components/pages/raise/user')
const raiseDetail = () => import('@/components/pages/raise/detail')
const invitation = () => import('@/components/pages/invitation/invitation')
const rules = () => import('@/components/pages/invitation/rules')
const merchants = () => import('@/components/pages/merchants/merchants')
const endorsment = () => import('@/components/pages/detail/endorsement')
const confirm = () => import('@/components/pages/detail/confirm')
const locations = () => import('@/components/pages/detail/locations')
const choseLocation = () => import('@/components/pages/detail/choseLocation')
const myCart = () => import('@/components/pages/myCart/myCart')
const message = () => import('@/components/pages/message/message')
const messageDetail = () => import('@/components/pages/message/messageDetail')
const messageList = () => import('@/components/pages/message/messageList')
const payType = () => import('@/components/pages/pay/payType')
const forget = () => import('@/components/pages/pay/forget')
const changePassword = () => import('@/components/pages/pay/changePassword')
const userCenter = () => import('@/components/pages/userCenter/userCenter')
const wallet = () => import('@/components/pages/userCenter/wallet')
const bill = () => import('@/components/pages/userCenter/bill')
const backCard = () => import('@/components/pages/backCard/index')
const choseType = () => import('@/components/pages/backCard/choseType')
const addCart = () => import('@/components/pages/backCard/first')
const cartInfo = () => import('@/components/pages/backCard/cartInfo')
const validationPhone = () => import('@/components/pages/backCard/validationPhone')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          redirect: {
            name: 'shoppingMall'
          }
        },
        {
          path: 'shoppingMall',
          name: 'shoppingMall',
          component: ShoppingMall,
          meta: {
            keepAlive: true,
            keepAliveApp: true
          }
        },
        {
          path: 'category',
          name: 'category',
          component: Category,
          meta: {
            keepAlive: true,
            keepAliveApp: true
          }
        },
        {
          path: 'message',
          name: 'message',
          component: message,
          meta: {
            keepAlive: true,
            keepAliveApp: true
          }
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          meta: {
            keepAlive: false,
            keepAliveApp: true
          }
        },
        {
          path: 'malls',
          name: 'malls',
          component: malls,
          meta: {
            keepAlive: false,
            keepAliveApp: true
          }
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail
    },
    {
      path: '/invitation',
      name: 'invitation',
      component: invitation,
      meta: {
        keepAliveApp: true,
        keepAlive: true
      }
    },
    {
      path: '/rules',
      name: 'rules',
      component: rules,
      meta: {
        keepAliveApp: true,
        keepAlive: true
      }
    },
    {
      path: '/allRaise',
      name: 'allRaise',
      component: allRaise,
      meta: {
        keepAliveApp: true,
        keepAlive: true
      }
    },
    {
      path: '/merchants',
      name: 'merchants',
      component: merchants,
      meta: {
        keepAliveApp: true,
        keepAlive: true
      }
    },
    {
      path: '/myraise',
      name: 'myraise',
      component: myraise
    },
    {
      path: '/raiseFire',
      name: 'raiseFire',
      component: raiseFire
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/raiseAdd',
      name: 'raiseAdd',
      component: raiseAdd
    },
    {
      path: '/raiseUser',
      name: 'raiseUser',
      component: raiseUser
    },
    {
      path: '/raiseDetail',
      name: 'raiseDetail',
      component: raiseDetail
    },
    {
      path: '/endorsment',
      name: 'endorsment',
      component: endorsment
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm
    },
    {
      path: '/locations',
      name: 'locations',
      component: locations
    },
    {
      path: '/choseLocation',
      name: 'choseLocation',
      component: choseLocation
    },
    {
      path: '/myCart',
      name: 'myCart',
      component: myCart
    },
    {
      path: '/messageDetail',
      name: 'messageDetail',
      component: messageDetail
    },
    {
      path: '/messageList',
      name: 'messageList',
      component: messageList
    },
    {
      path: '/sex',
      name: 'sex',
      component: sex
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: wallet
    },
    {
      path: '/payType',
      name: 'payType',
      component: payType
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    },
    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/backCard',
      name: 'backCard',
      component: backCard
    },
    {
      path: '/choseType',
      name: 'choseType',
      component: choseType
    },
    {
      path: '/addCart',
      name: 'addCart',
      component: addCart
    },
    {
      path: '/cartInfo',
      name: 'cartInfo',
      component: cartInfo
    },
    {
      path: '/validationPhone',
      name: 'validationPhone',
      component: validationPhone
    },
    // {
    //   path: '/shoppingCart',
    //   name: 'shoppingcart',
    //   component: ShoppingCart,
    //   meta: {
    //     keepAlive: true,
    //     keepAliveApp: true
    //   }
    // },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
