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


//新增页面
//到账页面
const account = () => import('@/components/pages/order/account')
//冻结页面
const freeze = () => import('@/components/pages/order/freeze')
//转出页面
const rollOut = () => import('@/components/pages/order/rollOut')
//体现页面
const withdraw = () => import('@/components/pages/order/withdraw')

//今日订单
const todayOrder = () => import('@/components/pages/order/todayOrder')


//卖出订单模块
const saleOrder = () => import('@/components/pages/order/saleOrder/saleOrder')
//待卖订单
const averageOrder = () => import('@/components/pages/order/saleOrder/averageOrder')
//进行中
const proceedOrder = () => import('@/components/pages/order/saleOrder/proceedOrder')
//结束订单
const finishOrder = () => import('@/components/pages/order/saleOrder/finishOrder')

//买入订单
const buyOrder = () => import('@/components/pages/order/buyOrder')



//我要代言页面
//支付成功
const paySuccess = () => import('@/components/pages/represent/paySuccess')
//支付失败
const payFail = () => import('@/components/pages/represent/payFail')
//支付
const pay = () => import('@/components/pages/represent/pay')



//全部订单模块
//等待支付
const allOrder = () => import('@/components/pages/order/allOrder')
const obligation = () => import('@/components/pages/order/allOrder/obligation')
//已发货
const shipped = () => import('@/components/pages/order/allOrder/shipped')
//配送中
const distribution = () => import('@/components/pages/order/allOrder/distribution')
//已完成
const accomplish = () => import('@/components/pages/order/allOrder/accomplish')
//已取消
const cancel = () => import('@/components/pages/order/allOrder/cancel')


//我的订单模块
const myOrder = () => import('@/components/pages/order/myOrder/myOrder')
//全部订单
const myAllOrder = () => import('@/components/pages/order/myOrder/myAllOrder')
//待支付
const payment = () => import('@/components/pages/order/myOrder/payment')
//待发货
const shipments = () => import('@/components/pages/order/myOrder/shipments')
//待收货
const harvest = () => import('@/components/pages/order/myOrder/harvest')
//待评价
const evaluate = () => import('@/components/pages/order/myOrder/evaluate')


//我的粉丝模块
const myFans = () => import('@/components/pages/message/myFans/myFans')
//直接粉丝
const directFans = () => import('@/components/pages/message/myFans/directFans')
//间接粉丝
const indirect = () => import('@/components/pages/message/myFans/indirect')
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
    //到账的页面路由
    {
      path:'/account',
      name: 'account',
      component: account
    },
    //冻结的页面
    {
      path:'/freeze',
      name: 'freeze',
      component: freeze
    },
    //转出
    {
      path:'/rollOut',
      name: 'rollOut',
      component: rollOut
    },
    //提现
    {
      path:'/withdraw',
      name: 'withdraw',
      component: withdraw
    },

    //我要代言模块
    //支付成功
    {
      path:'/paySuccess',
      name: 'paySuccess',
      component: paySuccess
    },
    //支付失败
    {
      path:'/payFail',
      name: 'payFail',
      component: payFail
    },
    //支付
    {
      path:'/pay',
      name: 'pay',
      component: pay
    },
    //今日订单
    {
      
      path:'/todayOrder',
      name: 'todayOrder',
      component: todayOrder
    },
    //全部订单
    {
      path:'/allOrder',
      name: 'allOrder',
      component: allOrder,
      children:[
        {
          path:'/obligation',
          name: 'obligation',
          component: obligation
        },
        {
          path:'/shipped',
          name: 'shipped',
          component: shipped
        },
        {
          path:'/accomplish',
          name: 'accomplish',
          component: accomplish
        },
        {
          path:'/distribution',
          name: 'distribution',
          component: distribution
        }
        ,{
          path:'/cancel',
          name: 'cancel',
          component: cancel
        }
      ]
    },
    //我的订单
    {
      path:'/myOrder',
      name: 'myOrder',
      component: myOrder,
      children:[
        {
          path:'/myAllOrder',
          name: 'myAllOrder',
          component: myAllOrder
        },
        
        {
          path:'/payment',
          name: 'payment',
          component: payment
        },
        {
          path:'/shipments',
          name: 'shipments',
          component: shipments
        },
        
        {
          path:'/harvest',
          name: 'harvest',
          component: harvest
        },
        {
          path:'/evaluate',
          name: 'evaluate',
          component: evaluate
        },
      ]
    },
    {
      
      path:'/myFans',
      name: 'myFans',
      component: myFans,
      children:[
        {
          path:'/directFans',
          name: 'directFans',
          component: directFans
        },
        {
          path:'/indirect',
          name: 'indirect',
          component: indirect
        }
      ]
    },
    {
      path:'/saleOrder',
      name: 'saleOrder',
      component: saleOrder,
      children:[
        {
          path:'/averageOrder',
          name: 'averageOrder',
          component: averageOrder
        },
        {
          
          path:'/proceedOrder',
          name: 'proceedOrder',
          component: proceedOrder
        },
        {
          path:'/finishOrder',
          name: 'finishOrder',
          component: finishOrder
        }
      ]
    },
    {
      path:'/buyOrder',
      name: 'buyOrder',
      component: buyOrder
    },
    //
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
