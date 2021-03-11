<template>
    <div>
        <div v-if="error" class="error">{{error.message}}</div>
        <h1>Log in</h1>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="Enter email" v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="Enter password" v-model="password">
            </div>
            <button class="submit" type="submit">Log in</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
require('firebase/auth')
export default {
    data (){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async pressed() {
            try {

               const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
               console.log(val)
                this.$router.replace({name: 'Secret'})

            } catch (err) {
                console.log(err)

            }
        }
    }

}
</script>