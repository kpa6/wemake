<template>
  <header :class="$style.header">
    <span>Github public repositories list</span>
    <div
      v-if="isAuthenticated"
      :class="$style.header_userblock"
    >
      <span :class="$style.header_username">{{ name }}</span>
      <img
        :src="avatar"
        :class="$style.header_avatar"
      >
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Getter } from 'vuex-class'

@Component({})

export default class AppHeader extends Vue {
  @Getter('repos/isAuthenticated') isAuthenticated

  @Getter('repos/name') name

  @Getter('repos/avatar') avatar
}
</script>

<style lang="scss" module>
@import '~/scss/variables';

.header {
  width: 100%;
  height: 55px;
  line-height: 55px;
  padding: 0 10px;
  background: rgb(245, 245, 245);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;

  &_userblock {
    margin: 0;
  }

  &_username,
  &_avatar {
    vertical-align: middle;
  }

  &_avatar {
    width: 30px;
    border-radius: 100%;
    height: auto;
    margin-left: 5px;
  }
}
</style>
