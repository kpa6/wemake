<template>
  <div :class="$style.repos">
    <div :class="$style.repos_titles">
      <span :class="$style.repos_title">Name</span>
      <span :class="$style.repos_title">Created</span>
      <span :class="$style.repos_title">Updated</span>
      <span :class="$style.repos_title">Url</span>
    </div>
    <div :class="$style.repos_items">
      <figure
        v-for="repo in repos"
        :key="repo.id"
        :class="$style.repos_item"
      >
        <span :class="$style.repos_item_row">{{ repo.name }}</span>
        <span :class="$style.repos_item_row">
          {{ new Date(repo.created_at).toUTCString() }}
        </span>
        <span :class="$style.repos_item_row">
          {{ new Date(repo.updated_at).toUTCString() }}
        </span>
        <a
          target="_blank"
          :href="repo.html_url"
          :class="$style.repos_item_row"
        >
          <font-awesome-icon icon="external-link-alt" />
        </a>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// @vue/component
@Component({
  'components': { FontAwesomeIcon },
})

export default class Repo extends Vue {
  @Prop()
  repos!: object[]
}

</script>

<style lang="scss" module>
@import '~/scss/variables';
@import '~/scss/mixins';

.repos {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;

  &_titles {
    display: flex;
    padding: 0 10px 10px;
    border-bottom: 1px solid $color-black;
  }

  &_title {
    @include dotted();

    width: 30%;
    text-align: left;

    &:last-child {
      text-align: center;
      width: 10%;
    }
  }

  &_items {
    margin-top: 0;
  }

  &_item {
    display: flex;
    margin: 0;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid $color-black;

    &:hover {
      background-color: rgb(200, 200, 200);
    }

    &_row {
      @include dotted();

      width: 30%;

      &:last-child {
        text-align: center;
        width: 10%;
        color: $text-color-black;
      }
    }
  }
}
</style>
