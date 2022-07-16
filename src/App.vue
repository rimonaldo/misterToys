<template >
  <section class="main-layout">
    <user-login @login="login" @getLoggedInUser="getLoggedInUser" @logout="logout" @signup="signup" />
    <app-header />
    <RouterView />
    <app-footer class="footer full" />
  </section>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/header.vue';
import appFooter from './components/footer.vue';
import appHome from './views/home.vue';
import userLogin from './components/user.login.vue';
import { userService } from './services/user.service.js'
import { computed } from '@vue/runtime-core';

export default {
  components: {
    appHeader,
    appFooter,
    appHome,
    userLogin,
  },
  data() {
    return {
      labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
      // toy: { "_id": "t101", "name": "Talking Doll", "price": 123, "labels": ["Doll", "Battery Powered", "Baby"], "createdAt": Date.now(), "inStock": true },
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' })

  },
  methods: {
    // Signup
    signup(user) {
      userService.signup(user)
        .then(() => {
          // swal({
          //   icon: 'success',
          //   title: "Signed up succsesfuly!",
          // })
        })
        .catch(() => {
          // swal({
          //   icon: 'error',
          //   title: "oopps...could not signup",
          //   text: 'Please try again later'
          // });
        })
    },
    // Login
    async login(credentials) {
      try {
        const user = await userService.login(credentials)
        this.$store.dispatch({ type: 'setLoggedUser', user })
      } catch (err) {
        console.log('err', err);
        throw new Error(err)
      }
    },
    // Logout
    logout() {
      console.log('logout')
      userService.logout().then(res => console.log('logedout', res))
      this.$store.dispatch({type:'logout'})
    },
  },
  computed: {
    user(){
      return this.$store.getters.user
    }
  },
}

</script>

<style>
</style>
