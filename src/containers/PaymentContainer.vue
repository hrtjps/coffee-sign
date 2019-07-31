<template>
  <div class="app">
    <div class="app-body">
      <AppSidebar fixed>
        <b-link class="navbar-brand header" to="/#">
          <img class="navbar-brand-full" src="img/logo3x.png" width="125" height="41" alt="Coffee Sign">
        </b-link>
        <div class="p-3 side-menu">
          <div class="w-100">
            <b-button block variant="other">Start Now</b-button>
            <div class="prepare-tool-nav" >
              <hr class="seperate-bar"/>
              <SidebarNav :navItems="nav"></SidebarNav>              
            </div>
          </div>
          <div class="w-100">
            <hr class="seperate-bar"/>
            <b-button block variant="trans">
              <i class="fa fa-sign-out fa-lg"></i> Logout
            </b-button>
          </div>
        </div>
      </AppSidebar>
      <main class="main">
        <AppHeader class="pr-3">
          <SidebarToggler class="d-lg-none" display="md" mobile />
          <!-- <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true /> -->
          <UpgradePlan></UpgradePlan>
          <span class="comments ml-3 mr-1">Your current plan: </span>
          <span>
            <UserIcon icon="smile.png" /> Free
          </span>
          <div class="ml-auto">
            <b-button variant="trans" class="mr-5"><span class="comments">DOCUMENTS</span></b-button>
            <b-button variant="trans"><span class="comments">TEMPLATES</span></b-button>
          </div>
          <DefaultHeaderDropdownAccnt/>
          <!--<AsideToggler class="d-lg-none" mobile />-->
        </AppHeader>
        <div class="container-fluid main-container">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
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
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdown from './DefaultHeaderDropdown'
import DefaultHeaderDropdownNotif from './DefaultHeaderDropdownNotif'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import DefaultHeaderDropdownMssgs from './DefaultHeaderDropdownMssgs'
import DefaultHeaderDropdownTasks from './DefaultHeaderDropdownTasks'
import UserIcon from '../components/UserIcon'
import UpgradePlan from './UpgradePlan'

export default {
  name: 'DocumentsContainer',
  components: {
    UserIcon,
    UpgradePlan,
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdown,
    DefaultHeaderDropdownMssgs,
    DefaultHeaderDropdownNotif,
    DefaultHeaderDropdownTasks,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: [
        {
          name: 'Account',
          url: '/payment/normal-sign',
          icon: 'fa fa-user'
        },
        {
          name: 'Signature',
          url: '/payment/action-required',
          icon: 'fa fa-pencil'
        },
        {
          name: 'Pricing Plan',
          url: '/payment/pricing-plan',
          icon: 'fa fa-tag'
        },
        {
          name: 'Branding',
          url: '/base/carousels',
          icon: 'fa fa-pencil'
        },
      ],
      show_tool_menu: true
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  },
  mounted() {
    
  },
  methods: {
    gotoPage(page) {
      this.$router.push({path: page});
    }
  },
  watch: {
    $route (to) {
      if(to.fullPath == '/prepare') {
        this.show_tool_menu = true;
      } else {
        this.show_tool_menu = false;
      }
    }
  }

}
</script>
<style lang="scss">
@import './PaymentContainer.scss';

</style>

