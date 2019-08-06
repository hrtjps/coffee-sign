<template>
  <div class="app flex-row" ref="fileform">
    <div class="w-100">
      <h1>Personal Information</h1>
      <hr class="mb-4" />
      <div class="profile-header content-card">
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
              <UserIcon icon="fb.png" class="mr-1 mr-sm-3" />
            </b-button>
            <b-button variant="link" class="p-0 h-100">
              <UserIcon icon="g_plus.png" class="mr-1 mr-sm-3" />
            </b-button>
            <b-button variant="link" class="p-0 h-100">
              <UserIcon icon="line_disabled.png" class="mr-1 mr-sm-3" />
            </b-button>
            <b-button variant="link" class="p-0 h-100">
              <UserIcon icon="talk_disabled.png" />
            </b-button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 pr-md-0">
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
                  >Please input Frist Name</div>
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
            <div class="row">
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
            <div class="row">
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
            <button v-on:click="getStarted()" class="btn btn-primary w-100">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import UserSelect from "../../components/UserSelect";
export default {
  name: "Account",
  components: {
    UserIcon,
    UserSelect
  },
  data() {
    return {
      form_data: {
        error_flag: false,
        first_name: "",
        last_name: "",
        purpose: "Purpose of using",
        company: "",
        employee: "Employee",
        title: "",
        industry: "Select Industry"
      }
    };
  },
  methods: {
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
    }
  }
};
</script>

<style lang="scss">
@import "./Account.scss";
</style>

