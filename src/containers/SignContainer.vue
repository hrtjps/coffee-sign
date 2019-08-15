<template>
  <div class="app">
    <div class="app-body">
      <main class="sign-main">
        <AppHeader class="sign-header">
          <AppLogoDark/>
          <div class="doc-timeline">
            <div class="timeline-item">
              <i :class="getStyle(0)" />
              <span class="timeline-title" :class="getTextStyle(0)">Check the document</span>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(1)" />
              <span class="timeline-title" :class="getTextStyle(1)">Signing</span>
              <div class="header-radio-dashline"></div>
            </div>
            <div class="timeline-item">
              <i :class="getStyle(2)" />
              <span class="timeline-title" :class="getTextStyle(3)">Complition</span>
            </div>
          </div>
          <b-button variant="link" class="mr-4">Sign Later</b-button>
          <b-button variant="other" class="px-4">Start Signing</b-button>
        </AppHeader>
        <div class="container-fluid main-container">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import {Header as AppHeader,} from "@coreui/vue";
import AppLogoDark from "../components/AppLogoDark";
export default {
  name: "SignContainer",
  components: {
    AppHeader,
    AppLogoDark,
  },
  data() {
    return {
      currentStepNo: 0,
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
  methods: {
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
@import "./SignContainer.scss";
</style>

