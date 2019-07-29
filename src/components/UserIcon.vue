<template>
  <img v-bind:src="'img/icons/'+icon" class="p-0 m-0">
</template>

<script>
export default {
  name: 'UserIcon',
  props: {
    icon: {
      type: String,
      required: true,
      default: 'add-recipien'
    },
    width: {
      type: Number,
      default: 18
    },
    height: {
      type: Number,
      default: 18
    }
  }
}
</script>
