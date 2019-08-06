<template>
  <div class="app">
    <div class="app-body">
      <AppSidebar fixed>
        <AppLogo></AppLogo>
        <div class="p-3 side-menu">
          <div class="w-100">
            <b-button block variant="primary" v-on:click="gotoPage('/landing')">Cancel</b-button>

            <b-button
              variant="primary"
              class="d-block d-sm-none"
              block
              to="/payment/pricing-plan"
            >Upgrade Your Plan</b-button>
            <div class="prepare-tool-nav" v-if="show_tool_menu">
              <hr class="seperate-bar" />
              <!-- <SidebarNav :navItems="nav"></SidebarNav> -->
              <UserSidebar :navItems="nav"></UserSidebar>
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
          <div class="doc-timeline">
            <div class="timeline-item">
              <i :class="getStyle(0)" />
              <span class="timeline-title" :class="getTextStyle(0)">Upload document</span>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(1)" />
              <span class="timeline-title" :class="getTextStyle(1)">Add Recipients</span>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(2)" />
              <span class="timeline-title" :class="getTextStyle(2)">Prepare</span>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(3)" />
              <span class="timeline-title" :class="getTextStyle(3)">Review</span>
            </div>
          </div>
          <DefaultHeaderDropdownAccnt />
        </AppHeader>
        <div class="container-fluid main-container">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside />
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <span class="ml-1">&copy; 2019 CoffeeSign All rights reserved..</span>
      </div>
    </TheFooter>
    <b-modal id="modal-1" ref="welcomemodal" @hide="hideModal" hide-footer hide-header size="lg">
      <div class="welcome-modal">
        <div class="welcome-header">
          <img class="navbar-brand-full" src="img/dark@3xvv.png" alt height="65" width="200" />
        </div>
        <div class="welcome-body">
          <h1>Welcome!</h1>
          <div class="subtitle">Now you can use easy and simple digital signatures</div>
          <div class="summary">You can use 5 times for FREE</div>
          <div class="w-100">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="first_name"
                    placeholder="First Name"
                    name="first_name"
                    v-bind:class="{'input-error': isError(form_data.first_name)}"
                    v-model="form_data.first_name"
                  />
                  <div
                    v-if="isError(form_data.first_name)"
                    class="error-text"
                  >Please input First Name</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="last_name"
                    placeholder="Last Name"
                    name="last_name"
                    v-bind:class="{'input-error': isError(form_data.last_name)}"
                    v-model="form_data.last_name"
                  />
                  <div v-if="isError(form_data.last_name)" class="error-text">Please input Last Name</div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <UserSelect
                :value="form_data.purpose"
                :items="['Purpose of using', 'My Personnel use', 'My Business']"
                @changeValue="changePurposeValue"
              />
            </div>
            <div class="row" v-if="form_data.purpose != 'My Personnel use'">
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="company"
                    placeholder="Company"
                    name="company"
                    v-model="form_data.company"
                  />
                  <!-- v-bind:class="{'input-error': isError(form_data.company)}"
                  <div v-if="isError(form_data.company)" class="error-text">Please input Company</div>-->
                </div>
              </div>
              <div class="col-sm-6">
                <UserSelect
                  v-bind:value="form_data.employee"
                  v-bind:items="[
                  'Employee',
                  '0-5',
                  '6-10',
                  '11-20',
                  '21-50',
                  '51-100',
                  '101-300',
                  '301-1000',
                  'More then 1000']"
                  @changeValue="changeEmployeeValue"
                />
              </div>
            </div>
            <div class="row" v-if="form_data.purpose != 'My Personnel use'">
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="job_title"
                    placeholder="Job Title"
                    name="job_title"
                    v-model="form_data.title"
                  />
                  <!-- v-bind:class="{'input-error': isError(form_data.title)}" -->
                  <!-- <div v-if="isError(form_data.title)" class="error-text">Please input Job Title</div> -->
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <UserSelect
                    v-bind:value="form_data.industry"
                    @changeValue="changeIndustryValue"
                    v-bind:items="[
                    'Select Industry',
                    'Accounting &amp; Tax Accounting',
                    'Business Services / Consulting Business Services',
                    'Construction - General Construction',
                    'Construction - Home Builder Real Estate - Construction',
                    'Debt Settlement Debt Settlement/Loan Modification',
                    'Education Education',
                    'Financial Services - Banking Banking',
                    'Financial Services - Credit Unions Credit Unions',
                    'Financial Services - Other Financial Services',
                    'Financial Services - Wealth &amp; Asset Management Wealth Management',
                    'Government - City Government - City',
                    'Government - County Government - County',
                    'Government - Federal Government - National',
                    'Government - State Government - State',
                    'Healthcare - Health Plans &amp; Payers Insurance - Health',
                    'Healthcare - Providers Healthcare - Providers',
                    'HR Staffing HR Staffing',
                    'Insurance - Agents / Brokers Insurance - Agency',
                    'Insurance - Carriers Insurance - Carriers',
                    'Legal Legal',
                    'Life Sciences - Medical Devices Life Sciences - Medical Devices',
                    'Life Sciences - Other Life Sciences - Other',
                    'Life Sciences - Pharmaceuticals Life Sciences - Pharmaceuticals',
                    'Life Sciences - Wholesale Distributors Life Sciences - Wholesale/Distributor',
                    'Manufacturing',
                    'Mortgage Broker Real Estate - Mortgage',
                    'Not For Profit',
                    'Real Estate - Agent Real Estate - Agent',
                    'Real Estate - Broker/Owner Real Estate - Broker/Owner',
                    'Real Estate - Commercial Real Estate - Commercial',
                    'Real Estate - Property Management Real Estate - Property Management',
                    'Retail Retail',
                    'Sports &amp; Entertainment Travel &amp; Leisure',
                    'Technology - General Technology',
                    'Technology - Startup Technology',
                    'Telecommunications',
                    'Other']"
                  />
                </div>
              </div>
            </div>
            <button v-on:click="getStarted()" class="btn btn-primary w-100">Get Started</button>
          </div>
        </div>
      </div>
    </b-modal>
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
  Breadcrumb
} from "@coreui/vue";
import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdown from "./DefaultHeaderDropdown";
import DefaultHeaderDropdownNotif from "./DefaultHeaderDropdownNotif";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";
import DefaultHeaderDropdownMssgs from "./DefaultHeaderDropdownMssgs";
import DefaultHeaderDropdownTasks from "./DefaultHeaderDropdownTasks";
import UpgradePlan from "./UpgradePlan";
import Logout from "../components/Logout";
import UserSelect from "../components/UserSelect";
import AppLogo from "../components/AppLogo";
import UserSidebar from "../components/UserSidebar";
export default {
  name: "DocumentsContainer",
  components: {
    UserSidebar,
    AppLogo,
    UserSelect,
    Logout,
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
  data() {
    return {
      currentStepNo: 0,
      confirmed: false,
      form_data: {
        error_flag: false,
        first_name: "",
        last_name: "",
        purpose: "Purpose of using",
        company: "",
        employee: "Employee",
        title: "",
        industry: "Select Industry"
      },
      nav: [
        {
          name: "Roger Waters",
          url: "/",
          icon: "fa fa-user",
          added_class: "User1-style",
          children: [
            {
              name: "Signature",
              url: "/base/breadcrumbs",
              icon: "fa fa-pencil"
            },
            {
              name: "Full Name",
              url: "/base/cards",
              icon: "fa fa-user"
            },
            {
              name: "Company",
              url: "/base/cards",
              icon: "fa fa-building"
            },
            {
              name: "Title",
              url: "/base/carousels",
              icon: "fa fa-briefcase"
            },
            {
              name: "Text",
              url: "/base/collapses",
              icon: "fa fa-file-text"
            },
            {
              name: "Date Signed",
              url: "/base/jumbotrons",
              icon: "fa fa-calendar"
            },
            {
              name: "Attachments",
              url: "/base/list-groups",
              icon: "fa fa-paperclip"
            }
          ]
        },
        {
          name: "Barrett Nash-Willi",
          url: "/buttons",
          icon: "fa fa-user",
          added_class: "User2-style",
          children: [
            {
              name: "Buttons",
              url: "/buttons/standard-buttons",
              icon: "fa fa-user"
            }
          ]
        },
        {
          name: "Barrett Nash-Willi",
          url: "/editors",
          icon: "fa fa-user",
          added_class: "User3-style",
          children: [
            {
              name: "Code Editors",
              url: "/editors/code-editors",
              icon: "fa fa-code"
            }
          ]
        }
      ],
      show_tool_menu: false
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
  mounted() {
    this.confirmed = false;
    if (!this.$route.query.withoutModal) {
      this.$refs["welcomemodal"].show();
    }
    this.setOptions();
  },
  methods: {
    clickMain(e) {
      if (e.target.className == "main") {
        console.log(e);
        this.$refs.sidebarToggleBtn.toggle();
      }
    },
    hideModal(e) {
      if (!this.confirmed) {
        e.preventDefault();
        this.gotoPage("/landing");
      }
    },
    getStarted() {
      this.form_data.error_flag = true;
      if (this.isError(this.form_data.first_name)) return;
      if (this.isError(this.form_data.last_name)) return;
      this.confirmed = true;
      this.$refs["welcomemodal"].hide();
    },
    changePurposeValue(e) {
      this.form_data.purpose = e;
    },
    changeIndustryValue(e) {
      this.form_data.industry = e;
    },
    changeEmployeeValue(e) {
      this.form_data.employee = e;
    },
    isError(value) {
      return (
        this.form_data.error_flag &&
        (value === undefined ||
          value === null ||
          (typeof value === "object" && Object.keys(value).length === 0) ||
          (typeof value === "string" && value.trim().length === 0))
      );
    },
    gotoPage(page) {
      this.$router.push({ path: page });
    },
    getStyle(no) {
      if (this.currentStepNo == no) {
        return "fa fa-circle-o ready";
      } else if (this.currentStepNo > no) {
        return "fa fa-check-circle ready";
      } else {
        return "fa fa-circle-o waiting";
      }
    },
    getTextStyle(no) {
      if (this.currentStepNo >= no) {
        return "";
      } else {
        return "waiting";
      }
    },
    setOptions() {
      if (this.$router.history.current.fullPath == "/docu-sign/add-document") {
        this.currentStepNo = 0;
      } else if (
        this.$router.history.current.fullPath == "/docu-sign/add-recipients"
      ) {
        this.currentStepNo = 1;
      } else if (
        this.$router.history.current.fullPath == "/docu-sign/prepare"
      ) {
        this.currentStepNo = 2;
      } else if (this.$router.history.current.fullPath == "/docu-sign/review") {
        this.currentStepNo = 3;
      }

      if (this.$router.history.current.fullPath == "/docu-sign/prepare") {
        this.show_tool_menu = true;
      } else {
        this.show_tool_menu = false;
      }
    }
  },
  watch: {
    $route() {
      this.setOptions();
    }
  }
};
</script>
<style lang="scss">
@import "./DocumentsContainer.scss";
</style>

