<template>
  <b-navbar-nav class="ml-auto">
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
    return { itemsCount: 42 }
  },
  methods: {
    gotoPage(url){
      this.$router.push({path: url});
    },
  }

}
</script>
