<template>
  <div class="app">
    <div class="app-body">
      <AppSidebar fixed>
        <AppLogo />
        <div class="p-3 side-menu">
          <div class="w-100">
            <b-button block variant="other" v-on:click="gotoStartPage()">Start Now</b-button>
            <b-button
              variant="primary"
              class="d-block d-sm-none"
              block
              style="padding-top: 0.5rem;"
              to="/payment/pricing-plan"
            >Upgrade Your Plan</b-button>
            <div class="prepare-tool-nav">
              <hr class="seperate-bar" />
              <SidebarNav :navItems="nav"></SidebarNav>
            </div>
          </div>
          <Logout></Logout>
        </div>
      </AppSidebar>
      <main class="main" v-on:click="clickMain">
        <AppHeader class="pr-3">
          <SidebarToggler ref="sidebarToggleBtn" class="d-lg-none" display="md" mobile />
          <!-- <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true /> -->
          <UpgradePlan class="d-none d-sm-block"></UpgradePlan>
          <div class="your-cur-plan">
            <span class="comments ml-3 mr-1">Your current plan:</span>
            <span>
              <UserIcon icon="smile.png" class="mr-2" />Free
            </span>
          </div>
          <div class="sign-doc-type">
            <div
              class="clickable-icon mx-1 mx-1 mx-sm-2 mx-md-2 mx-lg-4"
              v-on:click="gotoPage('/payment/document-list')"
              v-bind:class="getSelected('doc')"
            >DOCUMENTS</div>
            <div
              class="clickable-icon mx-1 mx-sm-2 mx-md-2 mx-lg-4 "
              v-on:click="gotoPage('/payment/template-list')"
              v-bind:class="getSelected('temp')"
            >TEMPLATES</div>
          </div>
          <DefaultHeaderDropdownAccnt />
          <!--<AsideToggler class="d-lg-none" mobile />-->
        </AppHeader>
        <div class="container-fluid main-container">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <span class="ml-1">&copy; 2019 CoffeeSign All rights reserved..</span>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  AsideToggler,
  Footer as TheFooter,
} from "@coreui/vue";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";
import UserIcon from "../components/UserIcon";
import UpgradePlan from "./UpgradePlan";
import Logout from "../components/Logout";
import AppLogo from "../components/AppLogo";

export default {
  name: "DocumentsContainer",
  components: {
    AppLogo,
    Logout,
    UserIcon,
    UpgradePlan,
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data() {
    return {
      nav: [
        {
          name: "Account",
          url: "/profile/account",
          icon: "fa fa-user"
        },
        {
          name: "Signature",
          url: "/signature",
          icon: "fa fa-pencil"
        },
        {
          name: "Pricing Plan",
          url: "/payment/upgrade-plan",
          icon: "fa fa-tag"
        },
        {
          name: "Branding",
          url: "/profile/custom-branding",
          icon: "fa fa-id-card"
        }
      ],
      show_tool_menu: true
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        route => route.name || route.meta.label
      );
    }
  },
  mounted() {},
  methods: {
    getSelected(doc_type) {
      if(doc_type == 'doc' && this.$router.history.current.fullPath == "/payment/document-list") {
        return "selected"
      } else if(doc_type == 'temp' && this.$router.history.current.fullPath == "/payment/template-list") {
        return "selected"
      }
      return "";
    },
    clickMain(e) {
      if (e.target.className == "main") {
        this.$refs.sidebarToggleBtn.toggle();
      }
    },
    gotoPage(page) {
      this.$router.push({ path: page });
    },
    gotoStartPage() {
      this.$router.push({
        path: "/docu-sign/add-document",
        query: { withoutModal: true }
      });
    },
  },
  watch: {
    $route(to) {
      if (to.fullPath == "/prepare") {
        this.show_tool_menu = true;
      } else {
        this.show_tool_menu = false;
      }
    }
  }
};
</script>
<style lang="scss">
@import "./PaymentContainer.scss";
</style>

