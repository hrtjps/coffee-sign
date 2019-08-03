<template>
  <div class="app flex-row">
    <div class="w-100">
      <h1>Pricing Plan</h1>
      <hr class="mb-4" />
      <div class="personal-plan content-card">
        <div>
          <div class="payment-header">Personal Monthly Plan</div>
          <div class="d-flex align-items-center">
            <UserIcon icon="mastercard.png" />
            <span class="mastercard ml-2">MasterCard ****5432</span>
            <b-button variant="link" class="ml-2" v-on:click="editPaymentMethod()">Edit Card</b-button>
          </div>
          <div class="comments">Next Payment: $0.87 on June 1, 2019</div>
        </div>
        <div>
          <div>
            <span class="comments">Available:</span>
            <strong>2/3</strong>
          </div>
          <b-progress :value="30" :max="100" class="mb-3"></b-progress>
          <b-button variant="other" style="width: 186px" v-on:click="upgradePlan()">Upgrade Plan</b-button>
        </div>
      </div>
      <h1 class="mt-5">Payment History</h1>
      <hr class="mb-4" />
      <div class="payment-history">
        <div class="history-header comments">
          <div class="other-fields">Date</div>
          <div class="other-fields">TYPE</div>
          <div class="other-fields">TRANSACTION</div>
          <div class="other-fields">AMOUNT</div>
          <div class="receipt">RECEIPT</div>
        </div>
        <div class="content-card history-item">
          <div class="other-fields">May 1, 2019</div>
          <div class="other-fields">Invoice</div>
          <div class="other-fields">INV19857462</div>
          <div class="other-fields">$0.87</div>
          <div class="receipt">
            <b-button variant="link">View PDF</b-button>
          </div>
        </div>
        <div class="content-card history-item">
          <div class="other-fields">May 1, 2019</div>
          <div class="other-fields">Invoice</div>
          <div class="other-fields">INV19857462</div>
          <div class="other-fields">$0.87</div>
          <div class="receipt">
            <b-button variant="link">View PDF</b-button>
          </div>
        </div>
        <div class="content-card history-item">
          <div class="other-fields">May 1, 2019</div>
          <div class="other-fields">Invoice</div>
          <div class="other-fields">INV19857462</div>
          <div class="other-fields">$0.87</div>
          <div class="receipt">
            <b-button variant="link">View PDF</b-button>
          </div>
        </div>
      </div>
      <div class="plan-cancel">
        <b-button variant="link">Show more invoices</b-button>
      </div>
    </div>
    <b-modal id="modal-1" ref="edit-payment-method-modal" hide-footer size="lg">
      <div class="payment-modal">
        <h1>Edit payment method</h1>
        <form class="w-100 mt-5">
          <div class="form-group">
            <label for="name">Select payment method</label>
            <select class="form-control" id="purpose">
              <option>Purpose of using</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="name">Credit/debit card number</label>
            <b-input-group class="pl-3">
              <b-form-input placeholder="**** **** **** 5432" autocomplete="current-password"></b-form-input>
              <b-input-group-prepend class="mr-0">
                <b-input-group-text class="h-auto">
                  <UserIcon icon="mastercard.png" />
                </b-input-group-text>
              </b-input-group-prepend>
            </b-input-group>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">Expiration month</label>
                <input
                  type="text"
                  class="form-control"
                  id="first_name"
                  placeholder="Expiration month"
                  name="first_name"
                  required
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">Expiration year</label>
                <input
                  type="text"
                  class="form-control"
                  id="last_name"
                  placeholder="Expiration year"
                  name="last_name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">First Name</label>
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
                <label for="name">Last Name</label>
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
          <div class="form-group">
            <label for="name">Billing address</label>
            <input
              type="text"
              class="form-control"
              id="company"
              placeholder="Enter your billing address"
              name="company"
              required
            />
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">Zip code</label>
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  placeholder="Zip code"
                  name="company"
                  required
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">Country/Region</label>
                <select class="form-control" id="purpose">
                  <option>Select Country</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <i class="fa fa-close"></i>
            <button class="btn btn-link mr-3">Revert</button>
            <button type="submit" class="btn btn-primary min-width-124px">Save</button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";

export default {
  name: "PricingPlan",
  components: {
    UserIcon
  },
  data() {
    return {
      countries: [],
      swtich_annual: true,
      plans: [{}]
    };
  },
  methods: {
    getFileType(fileName) {
      return "img/add_doc/" + fileName.substr(fileName.length - 3) + ".png";
    },
    clickSwitch() {
      this.swtich_annual = !this.swtich_annual;
    },
    editPaymentMethod() {
      this.$refs["edit-payment-method-modal"].show();
    },
    upgradePlan() {
      this.$router.push({ path: "/payment/upgrade-plan" });
    }
  }
};
</script>

<style lang="scss">
@import "./PricingPlan.scss";
</style>

