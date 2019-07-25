<template>
  <div class="app">
    <div class="app-body">
      <AppSidebar fixed>
        <b-link class="navbar-brand header" to="#">
          <img class="navbar-brand-full" src="img/logo3x.png" width="125" height="41" alt="Coffee Sign">
        </b-link>
        <div class="p-3 side-menu">
          <div class="w-100">
            <b-button block variant="primary">Close and go to Home page</b-button>
            <b-button block variant="other">Close and go to Home page</b-button>
            <b-button block variant="trans">Close and go to Home page</b-button>
            <b-button block variant="outline-primary">Close and go to Home page</b-button>
            <b-button block variant="link">Close and go to Home page</b-button>
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
          <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
          <b-button variant="primary" class="ml-3"  v-b-modal.modal-1>Upgrade Your Plan</b-button>
          <b-form-radio-group
            id="basicCustomRadios1"
            name="customRadioInline1" class="d-none d-xl-inline ml-auto">
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="1" checked>
              <label class="custom-control-label" for="customRadioInline1">Upload document</label>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="2" >
              <label class="custom-control-label" for="customRadioInline2">Add Recipients</label>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" value="3">
              <label class="custom-control-label" for="customRadioInline3">Prepare</label>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline4" name="customRadioInline1" class="custom-control-input" value="4">
              <label class="custom-control-label" for="customRadioInline4">Review</label>
            </div>
          </b-form-radio-group>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="d-md-down-none">
              <i class="fa fa-bell fa-lg"></i>
              <b-badge pill variant="primary">2</b-badge>
            </b-nav-item>
            <DefaultHeaderDropdownAccnt/>
          </b-navbar-nav>
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
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
                    <option>Employee</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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
                    <option>Select Industry</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdown from './DefaultHeaderDropdown'
import DefaultHeaderDropdownNotif from './DefaultHeaderDropdownNotif'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import DefaultHeaderDropdownMssgs from './DefaultHeaderDropdownMssgs'
import DefaultHeaderDropdownTasks from './DefaultHeaderDropdownTasks'

export default {
  name: 'DocumentsContainer',
  components: {
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
      nav: nav.items
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
  }
}
</script>
