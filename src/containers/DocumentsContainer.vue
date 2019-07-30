<template>
  <div class="app" v-bind:class="[(currentStepNo == 2) ? 'app-width-full': '']">
    <div class="app-body">
      <AppSidebar fixed>
        <b-link class="navbar-brand header" to="/">
          <img class="navbar-brand-full" src="img/logo3x.png" width="125" height="41" alt="Coffee Sign">
        </b-link>
        <div class="p-3 side-menu">
          <div class="w-100">
            <b-button block variant="primary">Close and go to Home page</b-button>
            <div class="prepare-tool-nav" v-if="show_tool_menu">
              <hr class="seperate-bar"/>
              <SidebarNav :navItems="nav"></SidebarNav>              
            </div>
          </div>
          <div class="w-100">
            <hr class="seperate-bar"/>
            <b-button block variant="trans" class="text-left">
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
          <div class="ml-auto d-flex">
            <div class="timeline-item">
              <i :class="getStyle(0)"/>
              <span class="timeline-title" :class="getTextStyle(0)">Upload document</span>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(1)"/>
              <span class="timeline-title" :class="getTextStyle(1)">Add Recipients</span>
              <div class="header-radio-dashline" ></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(2)"/>
              <span class="timeline-title" :class="getTextStyle(2)">Prepare</span>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(3)"/>
              <span class="timeline-title" :class="getTextStyle(3)">Review</span>
            </div>
          </div>
          <DefaultHeaderDropdownAccnt/>
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
    <b-modal id="modal-1" ref="welcome-modal" hide-footer hide-header size="lg">
      <div class="welcome-modal">
        <div class="welcome-header ">
          <img class="navbar-brand-full" src="img/logo3x.png" alt="" height="65" width="200">
        </div>
        <div class="welcome-body">
          <h1>Welcome!</h1>
          <div class="subtitle">Now you can use easy and simple digital signatuers</div>
          <div class="summary">Now you can use easy and simple digital signatuers</div>
          <form class="w-100">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="first_name" placeholder="First Name" name="first_name" required>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="last_name" placeholder="Last Name" name="last_name" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <select class="form-control" id="purpose" >
                <option>Purpose of using</option>
                <option>For My Personnel use</option>
                <option>For My Business</option>
              </select>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="company" placeholder="Company" name="company" required>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <select class="form-control" id="purpose">
                    <option value="" disabled="" selected="">Employee</option>
                    <option value="1">0-5</option>
                    <option value="2">6-10</option>
                    <option value="3">11-20</option>
                    <option value="4">21-50</option>
                    <option value="5">51-100</option>
                    <option value="6">101-300</option>
                    <option value="7">301-1000</option>
                    <option value="8">More then 1000</option>                   
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="job_title" placeholder="Job Title" name="job_title" required>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <select class="form-control" id="purpose">
                    <option value="">Select Industry</option>
                    <option value="1">Accounting &amp; Tax Accounting</option>
                    <option value="2">Business Services / Consulting Business Services</option>
                    <option value="3">Construction - General Construction</option>
                    <option value="4">Construction - Home Builder Real Estate - Construction</option>
                    <option value="5">Debt Settlement Debt Settlement/Loan Modification</option>
                    <option value="6">Education Education</option>
                    <option value="7">Financial Services - Banking Banking</option>
                    <option value="8">Financial Services - Credit Unions Credit Unions</option>
                    <option value="9">Financial Services - Other Financial Services</option>
                    <option value="10">Financial Services - Wealth &amp; Asset Management Wealth Management</option>
                    <option value="11">Government - City Government - City</option>
                    <option value="12">Government - County Government - County</option>
                    <option value="13">Government - Federal Government - National</option>
                    <option value="14">Government - State Government - State</option>
                    <option value="15">Healthcare - Health Plans &amp; Payers Insurance - Health</option>
                    <option value="16">Healthcare - Providers Healthcare - Providers</option>
                    <option value="17">HR Staffing HR Staffing</option>
                    <option value="18">Insurance - Agents / Brokers Insurance - Agency</option>
                    <option value="19">Insurance - Carriers Insurance - Carriers</option>
                    <option value="20">Legal Legal</option>
                    <option value="21">Life Sciences - Medical Devices Life Sciences - Medical Devices</option>
                    <option value="22">Life Sciences - Other Life Sciences - Other</option>
                    <option value="23">Life Sciences - Pharmaceuticals Life Sciences - Pharmaceuticals</option>
                    <option value="24">Life Sciences - Wholesale Distributors Life Sciences -
                        Wholesale/Distributor</option>
                    <option value="25">Manufacturing </option>
                    <option value="26">Mortgage Broker Real Estate - Mortgage</option>
                    <option value="27">Not For Profit</option>
                    <option value="28">Real Estate - Agent Real Estate - Agent</option>
                    <option value="29">Real Estate - Broker/Owner Real Estate - Broker/Owner</option>
                    <option value="30">Real Estate - Commercial Real Estate - Commercial</option>
                    <option value="31">Real Estate - Property Management Real Estate - Property Management
                    </option>
                    <option value="32">Retail Retail</option>
                    <option value="33">Sports &amp; Entertainment Travel &amp; Leisure</option>
                    <option value="34">Technology - General Technology</option>
                    <option value="35">Technology - Startup Technology</option>
                    <option value="36">Telecommunications</option>
                    <option value="37">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Get Started</button>
          </form>
        </div>
      </div>
    </b-modal>
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
import UpgradePlan from './UpgradePlan'

export default {
  name: 'DocumentsContainer',
  components: {
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
      currentStepNo: 0,
      nav: [
        {
          name: 'Roger Waters',
          url: '/',
          icon: 'fa fa-user',
          children: [
            {
              name: 'Signature',
              url: '/base/breadcrumbs',
              icon: 'fa fa-pencil'
            },
            {
              name: 'Full Name',
              url: '/base/cards',
              icon: 'fa fa-user'
            },
            {
              name: 'Company',
              url: '/base/cards',
              icon: 'fa fa-building'
            },
            {
              name: 'Title',
              url: '/base/carousels',
              icon: 'fa fa-briefcase'
            },
            {
              name: 'Text',
              url: '/base/collapses',
              icon: 'fa fa-file-text'
            },
            {
              name: 'Date Signed',
              url: '/base/jumbotrons',
              icon: 'fa fa-calendar'
            },
            {
              name: 'Check box',
              url: '/base/list-groups',
              icon: 'fa fa-check-square'
            },
            {
              name: 'Radio Button',
              url: '/base/list-groups',
              icon: 'fa fa-dot-circle-o'
            },
            {
              name: 'Dropdown',
              url: '/base/list-groups',
              icon: 'fa fa-toggle-down'
            },
            {
              name: 'Attachments',
              url: '/base/list-groups',
              icon: 'fa fa-paperclip'
            },
          ]
        },
        {
          name: 'Barrett Nash-Willi',
          url: '/buttons',
          icon: 'fa fa-user',
          children: [
            {
              name: 'Buttons',
              url: '/buttons/standard-buttons',
              icon: 'fa fa-user'
            },
          ]
        },
        {
          name: 'Barrett Nash-Willi',
          url: '/editors',
          icon: 'fa fa-user',
          
          children: [
            {
              name: 'Code Editors',
              url: '/editors/code-editors',
              icon: 'fa fa-code',
            },
          ]
        }],
      show_tool_menu: false
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
    this.$refs['welcome-modal'].show();
    this.setOptions();
  },
  methods: {
    gotoPage(page) {
      this.$router.push({path: page});
    },
    getStyle(no) {
      if(this.currentStepNo == no) {
        return 'fa fa-circle-o ready'
      } else if(this.currentStepNo > no ) {
        return 'fa fa-check-circle ready'
      } else {
        return 'fa fa-circle-o waiting'
      }
    },
    getTextStyle(no) {
      if(this.currentStepNo >= no) {
        return ''
      } else {
        return 'waiting'
      }
    },
    setOptions() {
      console.log(this.$router);
      if(this.$router.history.current.fullPath == '/add-document') {
        this.currentStepNo = 0;
      } else if(this.$router.history.current.fullPath == '/add-recipients') {
        this.currentStepNo = 1;
      } else if(this.$router.history.current.fullPath == '/prepare') {
        this.currentStepNo = 2;
      } else if(this.$router.history.current.fullPath == '/review') {
        this.currentStepNo = 3;
      } 

      if(this.$router.history.current.fullPath == '/prepare') {
        this.show_tool_menu = true;
      } else {
        this.show_tool_menu = false;
      }
    }
  },
  watch: {
    $route () {
      this.setOptions();
    }
  }

}
</script>
<style lang="scss">
@import './DocumentsContainer.scss';
</style>

