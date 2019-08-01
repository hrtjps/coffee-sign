<template>
  <div class="w-100">
    <hr class="seperate-bar" />
    <b-button block variant="trans" class="text-left">
      <UserIcon icon="logout_header.png" class="mr-3"></UserIcon>Logout
    </b-button>
  </div>
</template>

<script>
import UserIcon from "./UserIcon";
export default {
  name: "Logout",
  components: {
    UserIcon
  }
};
</script>
