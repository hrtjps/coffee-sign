<template>
  <div class="app flex-row">
    <div class="w-100">
      <div class="plan-header">
        <h1>Upgrade Your Plan</h1>
        <div class="switch-button" v-on:click="clickSwitch()">
          <div class="switch-item" v-bind:class="{'selected': swtich_annual}">Annual</div>
          <div class="switch-item" v-bind:class="{'selected': !swtich_annual}">Monthly</div>
        </div>
      </div>
      <hr class="mb-4"/>
      <div class="plans">
        <div class="plan-card content-card">
          <div class="plan-card-head">
            <div class="plan-title">Free</div>
            <UserIcon icon="smile.png"/>
          </div>
          <div class="plan-card-head mt-4">
            <span class="comments">Per month</span>
            <span class="price">$0<sup>.00</sup></span>
          </div>
          <hr>
          <div class="text-center">
            <div class="limit-for-sending">Limit for Sending for Signature</div>
            <div class="limit-times">5 Times total</div> 
          </div>
          <hr>
          <b-button block variant="secondary">Current plan</b-button>
        </div>
        <div class="plan-card content-card ml-3">
          <div class="plan-card-head">
            <div class="plan-title">Personnel</div>
            <UserIcon icon="personeel.png"/>
          </div>
          <div class="plan-card-head mt-4">
            <div class="comments">
              <div>Per user</div>
              <div>$120 annually</div>
            </div>
            <span class="price">${{swtich_annual?10:5}}<sup>.00</sup></span>
          </div>
          <hr>
          <div class="text-center">
            <div class="limit-for-sending">Limit for Sending for Signature</div>
            <div class="limit-times">5 Times total</div> 
          </div>
          <hr>
          <b-button block variant="other">Choose this plan</b-button>
        </div>
        <div class="plan-card content-card ml-3">
          <div class="plan-card-head">
            <div class="plan-title">Standard</div>
            <UserIcon icon="fire.png"/>
          </div>
          <div class="plan-card-head mt-4">
            <div class="comments">
              <div>per user, per month</div>
              <div>$300 annually</div>
            </div>
            <span class="price">${{swtich_annual?25:10}}<sup>.00</sup></span>
          </div>
          <hr>
          <div class="text-center">
            <div class="limit-for-sending">Limit for Sending for Signature</div>
            <div class="limit-times">30 Times total</div> 
          </div>
          <hr>
          <b-button block variant="other">Choose this plan</b-button>
        </div>
        <div class="plan-card content-card ml-3">
          <div class="plan-card-head">
            <div class="plan-title">Pro</div>
            <UserIcon icon="rocket.png"/>
          </div>
          <div class="plan-card-head mt-4">
            <div class="comments">
              <div>per user, per month</div>
              <div>$480 annually</div>
            </div>
            <span class="price">${{swtich_annual?40:20}}<sup>.00</sup></span>
          </div>
          <hr>
          <div class="text-center">
            <div class="limit-for-sending">Limit for Sending for Signature</div>
            <div class="limit-times">No Limit ∞</div> 
          </div>
          <hr>
          <b-button block variant="other">Choose this plan</b-button>
        </div>
      </div>
      <div class="plan-cancel">
        <i class="fa fa-close"></i>
        <b-button variant="link">Cancel plan</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from '../../components/UserIcon'

export default {
  name: "UpgradeYourPlan",
  components: {
    UserIcon
  },
  data() {
    return {
      swtich_annual: true,
      plans: [
        {

        }
      ]
    }

  },
  methods: {
    getFileType(fileName){ 
      return "img/add_doc/" + fileName.substr(fileName.length - 3 )+".png";
    },
    clickSwitch() {
      this.swtich_annual = !this.swtich_annual;
    }
  }
};
</script>

<style lang="scss">
@import "./UpgradeYourPlan.scss";
</style>

