<template>
    <div>
        <form action="" v-on:submit.prevent="getUsername">
                <input type="text" v-model="user" placeholder="username">
                <button type="submit" @click.prevent="username"><router-link to="/chat">SIGN UP</router-link></button>
        </form>
    </div>
</template>
<script>
var socket = io('chat');
import io from 'socket.io-client';
export default {
  data() {
    return {
      socket: io("localhost:3001"),
      usernames:[],
      user:'',
    };
  },
  methods:{

  username(e){
    this.socket.emit('sendUsername',  this.user);
    console.log("klik")
    this.$router.push('/chat');
     },

  }
}
</script>

<style>

</style>