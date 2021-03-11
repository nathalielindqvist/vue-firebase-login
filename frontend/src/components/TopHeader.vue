<template>
    <div>
        Logged in
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <button id="logOut" @click="signOut">Sign out</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
require('firebase/auth')
export default {
    created(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.loggedIn = true
            } else {
                this.loggedIn = false
            }
        })
    },
    data () {
        return {
            loggedIn: false
        }
    },
    methods: {
        async signOut(){
            try {

                const data = await firebase.auth().signOut();
                console.log(data)
                this.$router.replace({name: "Login"})

            } catch (err) {
                console.log(err)
            }

        }
    }

}
</script>