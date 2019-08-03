import Vue from "vue";
import Router from "vue-router";

// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
const Login = () => import("@/views/pages/Login");
const Register = () => import("@/views/pages/Register");

// Views - Documents
const DocumentsContainer = () => import("@/containers/DocumentsContainer");
const AddDocuments = () => import("@/views/document/AddDocuments");
const AddRecipients = () => import("@/views/document/AddRecipients");
const Prepare = () => import("@/views/document/Prepare");
const Review = () => import("@/views/document/Review");

// Container and Views of Pricing and Payment
const PaymentContainer = () => import("@/containers/PaymentContainer");
const NormalSign = () => import("@/views/payment/NormalSigin");
const DocumentList = () => import("@/views/payment/DocumentList");
const UpgradeYourPlan = () => import("@/views/payment/UpgradeYourPlan");
const PricingPlan = () => import("@/views/payment/PricingPlan");
const UpgradeToPlan = () => import("@/views/payment/UpgradeToPlan");
const Account = () => import("@/views/profile/Account");
const CustomBranding = () => import("@/views/profile/CustomBranding");
const Signature = () => import("@/views/profile/Signature");

Vue.use(Router);

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
        }
      ]
    },
    {
      path: "/profile",
      redirect: "/profile/account",
      name: "Profile",
      component: PaymentContainer,
      children: [
        {
          path: "account",
          name: "NormalSign",
          component: Account
        },
        {
          path: "custom-branding",
          name: "CustomBranding",
          component: CustomBranding
        }
      ]
    },

    {
      path: "/signature",
      redirect: "/signature/signature",
      name: "SigntureStamp",
      component: PaymentContainer,
      children: [
        {
          path: "signature",
          name: "Signature",
          component: Signature
        }
      ]
    },
    {
      path: "/payment",
      redirect: "/payment/normal-sign",
      name: "Payment",
      component: PaymentContainer,
      children: [
        {
          path: "normal-sign",
          name: "NormalSign",
          component: NormalSign
        },
        {
          path: "document-list",
          name: "DocumentList",
          component: DocumentList
        },
        {
          path: "upgrade-plan",
          name: "UpgradeYourPlan",
          component: UpgradeYourPlan
        },
        {
          path: "pricing-plan",
          name: "PricingPlan",
          component: PricingPlan
        },
        {
          path: "upgrade-to-plan",
          name: "UpgradeToPlan",
          component: UpgradeToPlan
        }
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
