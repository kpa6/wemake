<template>
  <main :class="$style.container">
    <div
      v-if="loading"
      :class="$style.loading"
    >
      Loading, please wait...
    </div>
    <AppHeader />
    <fieldset
      v-if="error"
      :class="$style.errorContainer"
    >
      <legend :class="$style.errorContainer_title">
        Error
      </legend>
      <span>{{ error }}</span>
    </fieldset>
    <Repos
      v-if="isAuthenticated && !error"
      :repos="repos"
    />
    <fieldset
      v-else-if="!error"
      :class="$style.login"
    >
      <legend>Sign in</legend>
      <form
        @submit.prevent="login"
      >
        <div :class="$style.login_title">
          Please sign in to see list of public repositories
        </div>
        <button
          :class="$style.login_button"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </fieldset>
    <figure :class="$style.author">
      Created by
      <a href="https://github.com/kpa6">
        https://github.com/kpa6,
      </a> source code:
      <a href="https://github.com/kpa6/wemake">
        https://github.com/kpa6/wemake
      </a>
    </figure>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Getter } from 'vuex-class'

import * as firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from '~/config/firebaseConfig'
import Repos from '~/components/Repos.vue'
import AppHeader from '~/components/AppHeader.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faExternalLinkAlt)

@Component({
  'components': { Repos, AppHeader },
})

export default class Index extends Vue {
  @Getter('repos/repos') repos

  @Getter('repos/isAuthenticated') isAuthenticated

  @Getter('general/error') error

  @Getter('general/loading') loading

  beforeCreate () {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig.config)
    }
  }

  async login () {
    try {
      await this.$store.dispatch('repos/login')
      await this.$store.dispatch('repos/loadRepos')
    } catch (error) {
      await this.$store.dispatch('general/clearLoading')
      await this.$store.dispatch('general/setError', error.message)
    }
  }
}
</script>

<style lang="scss" module>
@import '~/scss/variables';

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(216, 216, 216, 0.95);
  cursor: wait;
  z-index: $loading_zindex;
}

.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 310px;
  height: 40px;
  border: 1px solid $color-black;
  text-align: center;
  padding: 10px 15px 15px;

  &_title {
    margin-bottom: 5px;
  }

  &_button {
    background: $button-color-green;
    cursor: pointer;
    box-shadow: 0 0 1px -1px $color-black;
    font-size: $button-font-size;
    padding: 5px 10px;
    border-radius: 10px;
    color: $color-white;
    outline: 0;
  }
}

.errorContainer {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin: auto;
  max-width: 300px;
  text-align: center;
  border: 1px solid $color-red;
  color: $color-red;
  transform: translateY(-50%);

  &_title {
    text-align: left;
    padding: 0 3px;
    color: $color-red;
  }
}

.author {
  position: absolute;
  bottom: 20px;
  color: $text-color-black;
  width: 100%;
  left: 0;
  right: 0;
  text-align: center;

  a {
    color: $text-color-black;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}

</style>
