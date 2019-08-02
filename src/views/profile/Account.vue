<template>
  <div class="app flex-row" ref="fileform">
    <div class="w-100">
      <h1>Personal Information</h1>
      <hr class="mb-4" />
      <div class="profile-header">
        <div class="user-happy">
          <img src="img/avatars/NoPath@2x.png" />
          <div class="ml-3">
            <div class="user-name">Suzanne Thompson</div>
            <span class="comments">email_example@mail.com</span>
            <div>
              <b-button variant="link" class="p-0 mt-3 h-100">Change Avatar</b-button>
            </div>
          </div>
        </div>
        <div class="user-connection">
          <div class="connect-social">Connect social networks</div>
          <div class="socials">
            <b-button variant="link" class="p-0 h-100">
              <UserIcon icon="fb.png" class="mr-3" />
            </b-button>
            <b-button variant="link" class="p-0 h-100">
              <UserIcon icon="g_plus.png" class="mr-3" />
            </b-button>
            <b-button variant="link" class="p-0 h-100">
              <UserIcon icon="line_disabled.png" class="mr-3" />
            </b-button>
            <b-button variant="link" class="p-0 h-100">
              <UserIcon icon="talk_disabled.png" />
            </b-button>
          </div>
        </div>
      </div>
      <hr class="mb-4" />
      <div class="row">
        <div class="col-md-4">
          <div class="content-card">
            <div class="content-header">
              <strong>Change Password</strong>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="cur_pwd"
                placeholder="Current Password*"
                name="cur_pwd"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="new_pwd"
                placeholder="New Password*"
                name="new_pwd"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="confirm_pwd"
                placeholder="Confirm New Password*"
                name="confirm_pwd"
                required
              />
            </div>
            <div class="form-group mb-0">
              <b-button variant="primary" block>Save Changes</b-button>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="content-card">
            <div class="content-header">
              <strong>Company & Job Title</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
export default {
  name: "Account",
  components: {
    UserIcon
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "./Account.scss";
</style>

