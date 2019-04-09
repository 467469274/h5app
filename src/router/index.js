import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/pages/index/index')
const ShoppingMall = () => import('@/components/pages/index/shoppingMall')
const Category = () => import('@/components/pages/category/category')
const ShoppingCart = () => import('@/components/pages/shoppingCart/shoppingCart')
const Member = () => import('@/components/pages/member/member')
const Register = () => import('@/components/pages/member/register')
const Login = () => import('@/components/pages/member/login')
const Order = () => import('@/components/pages/member/order')
const GoodsList = () => import('@/components/pages/goods/goodsList')
const GoodsDetail = () => import('@/components/pages/goods/goodsDetail')
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
          path: 'shoppingCart',
          name: 'shoppingCart',
          component: ShoppingCart,
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
      path: '/goodsDetail/:goodsId',
      name: 'goodsDetail',
      component: GoodsDetail,
      meta: {
        keepAliveApp: true,
        keepAlive: true
      }
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
