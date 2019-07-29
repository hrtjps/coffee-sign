import Vue from 'vue'
import Router from 'vue-router'

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Views - Documents
const DocumentsContainer = () => import('@/containers/DocumentsContainer')
const AddDocuments = () => import('@/views/document/AddDocuments')
const AddRecipients = () => import("@/views/document/AddRecipients")
const Prepare = () => import("@/views/document/Prepare")
const Review = () => import("@/views/document/Review")

// Container and Views of Pricing and Payment
const PaymentContainer = () => import('@/containers/PaymentContainer')
const NormalSign = () => import('@/views/payment/NormalSigin')
const ActionRequired = () => import('@/views/payment/ActionRequired')
const UpgradeYourPlan = () => import('@/views/payment/UpgradeYourPlan')
const PricingPlan = () => import('@/views/payment/PricingPlan')

Vue.use(Router)

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      redirect: "/add-document",
      name: "Documents",
      component: DocumentsContainer,
      children: [
        {
          path: "add-document",
          name: "AddDocument",
          component: AddDocuments
        },
        {
          path: "add-recipients",
          name: "AddRecipients",
          component: AddRecipients
        },
        {
          path: "prepare",
          name: "Prepare",
          component: Prepare
        },
        {
          path: "review",
          name: "Review",
          component: Review
        },

      ]
    },
    {
      path: '/payment',
      redirect: '/payment/normal-sign',
      name: 'Payment',
      component: PaymentContainer,
      children: [
        {
          path: 'normal-sign',
          name: 'Normal Sign',
          component: NormalSign
        },
        {
          path: 'action-required',
          name: 'Action Required',
          component: ActionRequired
        },
        {
          path: 'upgrade-plan',
          name: 'Upgrade Your Plan',
          component: UpgradeYourPlan
        },
        {
          path: 'pricing-plan',
          name: 'Pricing Plan',
          component: PricingPlan
        },
        
      ]
    },
    {
      path: "/pages",
      redirect: "/pages/404",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404
        },
        {
          path: "500",
          name: "Page500",
          component: Page500
        },
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "register",
          name: "Register",
          component: Register
        }
      ]
    }
  ]
});
