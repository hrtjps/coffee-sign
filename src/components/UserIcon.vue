<template>
  <img
    v-bind:src="'img/icons/'+icon_name"
    v-bind:class="button?'icon-hover':''"
    @mouseover="hoverIcon()"
    @mouseleave="leaveIcon()"
  />
</template>

<script>
export default {
  name: "UserIcon",
  props: {
    button: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: true,
      default: "add-recipien"
    },
    width: {
      type: Number,
      default: 18
    },
    height: {
      type: Number,
      default: 18
    }
  },
  data() {
    return {
      hover: false,
      icon_name: this.icon,
      icon_only_name: this.icon.substring(0, this.icon.length - 4),
      icon_type: this.icon.substring(this.icon.length - 4)
    };
  },
  methods: {
    hoverIcon() {
      if (!this.button) return;
      this.icon_name = this.icon_only_name + "_active" + this.icon_type;
    },
    leaveIcon() {
      if (!this.button) return;
      this.icon_name = this.icon_only_name + this.icon_type;
    }
  }
};
</script>

<style lang="scss">
.icon-hover:hover {
  cursor: pointer;
}
</style>
