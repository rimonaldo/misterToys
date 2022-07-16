<template>
    <section>

        <h1 v-if="user">
            <span>{{ user.username }}</span>
            <button @click="logout">logout</button>
        </h1>
        <form v-else-if="!isSignup" class="login-box" @submit.prevent="login">
            <!-- <input placeholder="Username" type="text" v-model="user.username">
            <input placeholder="Password" type="text" v-model="user.password"> -->
            <button>login</button>
            <button @click="signup">Signup</button>
        </form>
        <div v-else>
            <form @submit.prevent="submitSignup">
                <input placeholder="fullname" type="text" v-model="credentials.fullname">
                <input placeholder="username" type="text" v-model="credentials.username">
                <input placeholder="Password" type="text" v-model="credentials.password">
                <button>Signup</button>
                <button @click.prevent="isSignup = !isSignup">sign in</button>
            </form>
        </div>

    </section>


</template>
 <script>
import { Input } from 'postcss';

export default {
    name: 'ProjectApp',
    data() {
        return {
            isSignup: false,
            credentials: {
                username: '',
                password: null,
            }

        }
    },
    methods: {
        async login(ev) {
            try {
                this.$swal.fire({
                    title: 'Login Form',
                    html: `<input type="text" id="login" class="swal2-input" >
                            <input type="password" id="password" class="swal2-input" >`,
                    confirmButtonText: 'Sign in',
                    focusConfirm: false,
                    preConfirm: () => {
                        const username = this.$swal.getPopup().querySelector('#login').value
                        const password = this.$swal.getPopup().querySelector('#password').value
                        if (!username || !password) {
                            this.$swal.showValidationMessage(`Please enter login and password`)
                        }
                        return { username, password }
                    }
                }).then((result) => {               
                    this.credentials.username = result.value.username
                    this.credentials.password = result.value.password
                    this.$emit('login', this.credentials)
                    console.log();
                })
            } catch {

            } finally {

            }
        },
        getLoggedInUser() {
            this.$emit('getLoggedInUser')
        },
        logout() {

            this.$emit('logout')
        },
        signup() {
            // this.$swal('Hello Vue world!!!');
            this.isSignup = true
        },
        submitSignup() {
            this.$emit('signup', this.credentials)
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
};
</script>
 <style>
 </style>