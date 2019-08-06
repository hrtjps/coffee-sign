<template>
  <div class="app flex-row">
    <div class="w-100 position-relative">
      <div class="plan-header">
        <h1>Upgrade To {{plan.title}}</h1>
      </div>
      <hr class="mb-4" />
      <div class="row plans">
        <div class="col-12 col-sm-6 col-md-8 col-lg-8">
          <div class="content-card">
            <div class="content-header">Payment information</div>
            <b-tabs>
              <b-tab title="Card" active>
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label for="name">Credit/debit card number</label>
                      <b-input-group class="pl-3">
                        <b-form-input
                          placeholder="**** **** **** 5432"
                          autocomplete="current-password"
                        ></b-form-input>
                        <b-input-group-prepend class="mr-0">
                          <b-input-group-text class="h-auto">
                            <UserIcon icon="mastercard.png" />
                          </b-input-group-text>
                        </b-input-group-prepend>
                      </b-input-group>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 pl-lg-0">
                    <div class="d-flex align-items-end">
                      <div class="form-group">
                        <label for="name">Expiration month</label>
                        <div class="d-flex align-items-center">
                          <UserSelect
                            v-bind:value="month"
                            v-bind:items="['Month', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']"
                            @changeValue="month=$event"
                            class="mb-0"
                            style="min-width:105px"
                          />
                          <span class="mx-2">/</span>
                        </div>
                      </div>

                      <div class="form-group mr-3">
                        <label for="name">Expiration year</label>
                        <UserSelect
                          v-bind:value="year"
                          v-bind:items="years"
                          @changeValue="year=$event"
                          class="mb-0"
                          style="min-width:95px"
                        />
                      </div>
                      <div class="form-group">
                        <label for="name">CVV</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cvv"
                          placeholder="Your CVV"
                          name="cvv"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab title="PAYPAL">
                <label class="mr-3">Pay with PayPal</label>
                <a href="https://www.paypal.com">
                  <img src="img/icons/paypal.png" />
                </a>
              </b-tab>
            </b-tabs>
          </div>
          <div class="content-card">
            <div class="content-header">Billing information</div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="first_name"
                    placeholder="First Name"
                    name="first_name"
                    required
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="last_name"
                    placeholder="Last Name"
                    name="last_name"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name">Country</label>
                  <UserSelect
                    v-bind:value="country"
                    v-bind:items="countries"
                    @changeValue="country=$event"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="state"
                    placeholder="State"
                    name="state"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name">Street Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="street_addr"
                    placeholder="Street Address"
                    name="street_addr"
                    required
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name">Zip code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip_code"
                    placeholder="Zip code"
                    name="zip_code"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
          <div class="plan-card content-card">
            <div class="content-header">You're buying:</div>
            <div class="plan-card-head">
              <div class="plan-title">
                {{plan.title}}
                <UserIcon :icon="plan.title+'.png'" class="ml-3" />
              </div>
              <div>
                <span class="comments">Per month</span>
                <span class="price">
                  ${{plan.price}}
                  <sup>.00</sup>
                </span>
              </div>
            </div>
            <UserSelect
              v-bind:value="subscription"
              v-bind:items="['Monthly Subscription', 'Annual Subscription']"
              @changeValue="subscription=$event"
              class="mb-0 mt-3"
              style="min-width:105px"
            />
            <hr />
            <div class="text-center">
              <div class="limit-for-sending">Limit for Sending for Signature</div>
              <div class="limit-times">{{plan.limit}}</div>
            </div>
            <hr />
            <b-button block variant="other" v-on:click="upgradeMyPlan()">Upgrade my plan!</b-button>
            <div class="mt-3">
              By clicking "Upgrade my plan!" you agree to the
              <b-button variant="link" class="p-0">Terms and Conditions</b-button>.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import UserSelect from "../../components/UserSelect";
import axios from "axios";
import Vue from "vue";
import CxltToastr from "cxlt-vue2-toastr";
var toastrConfigs = {
  position: "top right",
  showDuration: 500,
  delay: 0,
  timeOut: 5000,
  hideDuration: 500,
  progressBar: true,
  icon: "img/icons/Info@2x.png"
};
Vue.use(CxltToastr, toastrConfigs);

export default {
  name: "UpgradeToPlan",
  components: {
    UserIcon,
    UserSelect
  },
  data() {
    return {
      plan: null,
      subscription: "Monthly subscription",
      country: "Select Country",
      countries: [],
      region: "Select Region",
      month: "Month",
      year: "Year",
      years: []
    };
  },
  created() {
    this.plan = this.$route.query.plan;
    this.id = this.$route.query.id;
    if (!this.plan.title) {
      this.$router.push({
        path: "/payment/upgrade-plan"
      });
    }
    const dt = new Date();
    const start = dt.getYear();
    for (let i = start; i < start + 10; i++) {
      this.years.push((i + 1900).toString());
    }
    axios({ method: "GET", url: "https://restcountries.eu/rest/v1/all" }).then(
      result => {
        this.countries = [];
        this.countries.push("Select Country");
        result.data.forEach(country => {
          this.countries.push(country.name);
        });
      },
      error => {
        console.error(error);
      }
    );
  },
  methods: {
    upgradeMyPlan() {
      this.$toast.success({
        title: "Congratulation!",
        message: "Selected " + this.plan.title + " plan!"
      });
      this.$router.push({
        path: "/payment/upgrade-plan",
        query: { id: this.id }
      });
    }
  }
};
</script>

<style lang="scss">
@import "./UpgradeToPlan.scss";
</style>

