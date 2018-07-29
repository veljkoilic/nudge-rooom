<template>
     <div>             
        <audio hidden id="audio" controls>
            <source  src="../assets/nudge.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
        </audio>
    
        <h1>Users:</h1>

        <ul> 
            <li v-for="user in usernames" :key="user.sessionid">
            <a href="#" v-on:click.prevent="getUser(user)"> {{user.user}}</a>
            </li>
        </ul>
    </div>
 
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            socket : io('localhost:3001'),
            user:'',
            usernames:[],
            clickedUserId:''
        }
    },
    methods:{
        getUser(user){
        var audio = document.getElementById('audio');
          this.clickedUserId = user.sessionid;
            for(var i = 0; i<this.usernames.length; i ++){
                if(this.clickedUserId == this.usernames[i].sessionid){
                    audio.play();
                }
            }
        },
    },
    mounted(){
        this.socket.on('newConnection', (data) => {
        this.usernames.push(data);
        console.log("hi")
        });
    }
}
</script>

<style>
ul{
    list-style-type: none;
    text-decoration: none;
}
li{
    color:#00ff00;
}
</style>