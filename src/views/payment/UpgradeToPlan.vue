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
                  <input
                    type="text"
                    class="form-control"
                    id="country"
                    placeholder="Country"
                    name="country"
                    required
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
                  <div class="col-md-4 col-lg-2 pl-lg-0 pr-lg-0">
                    <div class="form-group">
                      <label for="name">Expiration month</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exp_month"
                        placeholder="Exp. month"
                        name="exp_month"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2 pr-lg-0">
                    <div class="form-group">
                      <label for="name">Expiration year</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exp_ear"
                        placeholder="Exp. year"
                        name="exp_year"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-2">
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
              </b-tab>
              <b-tab title="PAYPAL">Paypal Info</b-tab>
            </b-tabs>
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

export default {
  name: "UpgradeToPlan",
  components: {
    UserIcon
  },
  data() {
    return {
      plan: null
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
    console.log(this.plan);
  },
  methods: {
    upgradeMyPlan() {
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

