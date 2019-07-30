<template>
  <b-navbar-nav class="ml-auto">
     <AppHeaderDropdown right >
      <template slot="header">
        <i class="flag-icon h5" :class="language" />
      </template>
      <template slot="dropdown">
        <b-dropdown-item v-on:click="language='flag-icon-jp'"><i class="flag-icon flag-icon-jp" /> 日本語</b-dropdown-item>
        <b-dropdown-item v-on:click="language='flag-icon-kr'"><i class="flag-icon flag-icon-kr" /> 한국어</b-dropdown-item>
        <b-dropdown-item v-on:click="language='flag-icon-gb'"><i class="flag-icon flag-icon-gb" /> English</b-dropdown-item>
      </template>
    </AppHeaderDropdown>
    <b-nav-item class="d-md-down-none">
      <i class="fa fa-bell fa-lg"></i>
      <b-badge pill variant="primary">2</b-badge>
    </b-nav-item>
    <AppHeaderDropdown right no-caret>
      
      <template slot="header">
        <img
          src="img/avatars/NoPath.png"
          class="img-avatar"
          alt="admin@bootstrapmaster.com" />
      </template>
      <template slot="dropdown">
        <b-dropdown-item v-on:click="gotoPage('/payment/normal-sign')">
          <i class="fa fa-user" /> Profile
        </b-dropdown-item>
        <b-dropdown-item><i class="fa fa-sign-out" /> Logout</b-dropdown-item>
      </template>
    </AppHeaderDropdown>
  </b-navbar-nav>
  
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { 
      itemsCount: 42,
      language: "flag-icon-gb"
    }
  },
  methods: {
    gotoPage(url){
      this.$router.push({path: url});
    },
  }

}
</script>
