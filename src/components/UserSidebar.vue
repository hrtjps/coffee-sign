<template>
  <nav class="sidebar-nav">
    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-y="scrollHandle">
      <ul class="nav">
        <template v-for="(item, index) in navItems">
          <template v-if="item.children">
            <!-- First level dropdown -->
            <UserSidebarNavDropdown
              :key="index"
              :name="item.name"
              :url="item.url"
              :icon="item.icon"
              :added_class="item.added_class"
            >
              <template v-for="(childL1, index1) in item.children">
                <template v-if="childL1.children">
                  <!-- Second level dropdown -->
                  <UserSidebarNavDropdown
                    :key="index1"
                    :name="childL1.name"
                    :url="childL1.url"
                    :icon="childL1.icon"
                  >
                    <li
                      :key="index2"
                      class="nav-item"
                      v-for="(childL2, index2) in childL1.children"
                    >
                      <UserSidebarNavLink
                        :name="childL2.name"
                        :url="childL2.url"
                        :icon="childL2.icon"
                        :badge="childL2.badge"
                        :variant="childL2.variant"
                        :attributes="childL2.attributes"
                      />
                    </li>
                  </UserSidebarNavDropdown>
                </template>
                <template v-else>
                  <UserSidebarNavItem :key="index1" :classes="item.class">
                    <UserSidebarNavLink
                      :name="childL1.name"
                      :url="childL1.url"
                      :icon="childL1.icon"
                      :badge="childL1.badge"
                      :variant="childL1.variant"
                      :attributes="childL1.attributes"
                    />
                  </UserSidebarNavItem>
                </template>
              </template>
            </UserSidebarNavDropdown>
          </template>
          <template v-else>
            <UserSidebarNavItem :key="index" :classes="item.class">
              <UserSidebarNavLink
                :name="item.name"
                :url="item.url"
                :icon="item.icon"
                :badge="item.badge"
                :variant="item.variant"
                :attributes="item.attributes"
              />
            </UserSidebarNavItem>
          </template>
        </template>
      </ul>
      <slot></slot>
    </VuePerfectScrollbar>
  </nav>
</template>

<script>
import UserSidebarNavDropdown from "./UserSidebarNavDropdown";
import UserSidebarNavLink from "./UserSidebarNavLink";
import UserSidebarNavItem from "./UserSidebarNavItem";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "UserSidebar",
  components: {
    VuePerfectScrollbar,
    UserSidebarNavDropdown,
    UserSidebarNavLink,
    UserSidebarNavItem
  },
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    psSettings: () => {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX:
          getComputedStyle(document.querySelector("html")).direction !== "rtl",
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0 })
      };
    }
  },
  methods: {
    scrollHandle(evt) {
      // console.log(evt)
    }
  }
};
</script>
<style lang="scss">
@import "./UserSidebar.scss";
</style>
