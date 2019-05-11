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
const dc = () => import('@/components/pages/member/dc')
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
const myCollect = () => import('@/components/pages/myCart/myCollect')
const message = () => import('@/components/pages/message/message')
const messageDetail = () => import('@/components/pages/message/messageDetail')
const messageList = () => import('@/components/pages/message/messageList')
const payType = () => import('@/components/pages/pay/payType')
const forget = () => import('@/components/pages/pay/forget')
const forgetpassword = () => import('@/components/pages/pay/forgetpassword')
const changePassword = () => import('@/components/pages/pay/changePassword')
const userCenter = () => import('@/components/pages/userCenter/userCenter')
const wallet = () => import('@/components/pages/userCenter/wallet')
const bill = () => import('@/components/pages/userCenter/bill')
const backCard = () => import('@/components/pages/backCard/index')
const choseType = () => import('@/components/pages/backCard/choseType')
const addCart = () => import('@/components/pages/backCard/first')
const cartInfo = () => import('@/components/pages/backCard/cartInfo')
const validationPhone = () => import('@/components/pages/backCard/validationPhone')
const myShop = () => import('@/components/pages/myShop/myShop')
const iwillOpen = () => import('@/components/pages/member/iwillOpen')
const shopInfo = () => import('@/components/pages/myShop/shopInfo')
const earnings = () => import('@/components/pages/myShop/earnings')
const shopevaluate = () => import('@/components/pages/myShop/shopevaluate')
const record = () => import('@/components/pages/myShop/record')
const shopevaluateDetail = () => import('@/components/pages/myShop/shopevaluateDetail')
const earningsFailed = () => import('@/components/pages/myShop/earningsFailed')
const serviceSet = () => import('@/components/pages/set/index')
const aboutUs = () => import('@/components/pages/set/aboutUs')
const opinion = () => import('@/components/pages/set/opinion')
const setSize = () => import('@/components/pages/set/setSize')
const remind = () => import('@/components/pages/set/remind')
const security = () => import('@/components/pages/set/security')
const commentsDetail = () => import('@/components/pages/comments/commentsDetail')
const cencelOrder = () => import('@/components/pages/myShop/cencelOrder')
const fl = () => import('@/components/pages/fl/fl')
const managemant = () => import('@/components/pages/managemant/index')
const addGoods = () => import('@/components/pages/managemant/addGoods')
const setPassword = () => import('@/components/pages/member/setPassword')
const qrcode = () => import('@/components/pages/member/qrcode')

//新增页面
//到账页面
const account = () => import('@/components/pages/order/account')
//冻结页面
const freeze = () => import('@/components/pages/order/freeze')
//转出页面
const rollOut = () => import('@/components/pages/order/rollOut')
const zc = () => import('@/components/pages/order/zc')
//体现页面
const withdraw = () => import('@/components/pages/order/withdraw')

//提现页面
const getMoney = () => import('@/components/pages/order/getMoney')
const buygold = () => import('@/components/pages/order/buygold')

//签到页面
const signIn = () => import('@/components/pages/order/signIn')
//今日订单
const todayOrder = () => import('@/components/pages/order/todayOrder')
//订单详情
const orderDetail = () => import('@/components/pages/order/orderDetail')
const nowOrder = () => import('@/components/pages/order/todayOrder')


//卖出订单模块
const saleOrder = () => import('@/components/pages/order/saleOrder')

//买入订单
const buyOrder = () => import('@/components/pages/order/buyOrder')
//卖出订单
const sellOrder = () => import('@/components/pages/order/sellOrder')


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


//我的订单模块
const myOrder = () => import('@/components/pages/order/myOrder')


//我的粉丝模块
const myFans = () => import('@/components/pages/message/myFans/myFans')
//直接粉丝
const directFans = () => import('@/components/pages/message/myFans/directFans')
//间接粉丝
const indirect = () => import('@/components/pages/message/myFans/indirect')
const addClass = () => import('@/components/pages/class/addClass')
const classList = () => import('@/components/pages/class/classList')
const addSon = () => import('@/components/pages/class/addSon')
Vue.use(Router)
const router = new Router({
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
      path: '/setPassword',
      name: 'setPassword',
      component: setPassword
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
      component: allRaise
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
      path: '/qrcode',
      name: 'qrcode',
      component: qrcode
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
      path: '/dc',
      name: 'dc',
      component: dc
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
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: forgetpassword
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
      path: '/account',
      name: 'account',
      component: account
    },
    //冻结的页面
    {
      path: '/freeze',
      name: 'freeze',
      component: freeze
    },
    //转出
    {
      path: '/rollOut',
      name: 'rollOut',
      component: rollOut
    },
    {
      path: '/zc',
      name: 'zc',
      component: zc
    },
    //提现
    {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw
    },
    //提现
    {
      path: '/getMoney',
      name: 'getMoney',
      component: getMoney
    },
    {
      path: '/buygold',
      name: 'buygold',
      component: buygold
    },
    //签到
    {

      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    //我要代言模块
    //支付成功
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: paySuccess
    },
    //支付失败
    {
      path: '/payFail',
      name: 'payFail',
      component: payFail
    },
    //支付
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    //今日订单
    {

      path: '/todayOrder',
      name: 'todayOrder',
      component: todayOrder
    },
    {
      path: '/nowOrder',
      name: 'nowOrder',
      component: nowOrder
    },


    //全部订单
    {
      path: '/allOrder',
      name: 'allOrder',
      component: allOrder
    },
    //我的订单
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    },
    {

      path: '/myFans',
      name: 'myFans',
      component: myFans,
      children: [
        {
          path: '/directFans',
          name: 'directFans',
          component: directFans
        },
        {
          path: '/indirect',
          name: 'indirect',
          component: indirect
        }
      ]
    },
    {
      path: '/saleOrder',
      name: 'saleOrder',
      component: saleOrder
    },
    {
      path: '/buyOrder',
      name: 'buyOrder',
      component: buyOrder
    },
    //卖出订单
    {
      path: '/sellOrder',
      name: 'sellOrder',
      component: sellOrder
    },
    {
      path: '/validationPhone',
      name: 'validationPhone',
      component: validationPhone
    },
    {
      path: '/myCollect',
      name: 'myCollect',
      component: myCollect
    },
    {
      path: '/myShop',
      name: 'myShop',
      component: myShop
    },
    {
      path: '/shopInfo',
      name: 'shopInfo',
      component: shopInfo
    },
    {
      path: '/earnings',
      name: 'earnings',
      component: earnings
    },
    {
      path: '/iwillOpen',
      name: 'iwillOpen',
      component: iwillOpen
    },
    {
      path: '/earningsFailed',
      name: 'earningsFailed',
      component: earningsFailed
    },
    {
      path: '/shopevaluate',
      name: 'shopevaluate',
      component: shopevaluate
    },
    {
      path: '/shopevaluateDetail',
      name: 'shopevaluateDetail',
      component: shopevaluateDetail
    },
    {
      path: '/serviceSet',
      name: 'serviceSet',
      component: serviceSet
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/opinion',
      name: 'opinion',
      component: opinion
    },
    {
      path: '/setSize',
      name: 'setSize',
      component: setSize
    },
    {
      path: '/remind',
      name: 'remind',
      component: remind
    },
    {
      path: '/security',
      name: 'security',
      component: security
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/commentsDetail',
      name: 'commentsDetail',
      component: commentsDetail
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
    {
      path: '/cencelOrder',
      name: 'cencelOrder',
      component: cencelOrder
    },
    {
      path: '/fl',
      name: 'fl',
      component: fl
    },
    {
      path: '/managemant',
      name: 'managemant',
      component: managemant
    },
    {
      path: '/addClass',
      name: 'addClass',
      component: addClass
    },
    {
      path: '/classList',
      name: 'classList',
      component: classList
    },
    {
      path: '/addSon',
      name: 'addSon',
      component: addSon
    },
    {
      path: '/addGoods',
      name: 'addGoods',
      component: addGoods
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
