<template>
    <div>
        <h1>Register</h1>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="Enter email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="Enter password">
            </div>
            <button class="submit" type="submit">Register</button>
        </form>

    </div>
</template>

<script>
import firebase from 'firebase'
require('firebase/auth')
export default {
    methods: {
        async pressed(){
            try {
            const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            console.log(user)
            this.$router.replace({name: 'Secret'})

            } catch (err) {
                console.log(err)

            }
        }
    },
    data () {
        return {
            email: '',
            password: '',
            error: '',
        }
    }

}
</script>