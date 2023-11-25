<script>
export default {
  data(){
    return{
      username:"",
      password:"",
      error:""
    }
  },
  computed:{
    getName(){
      return this.username.trim()!==null ? "Welcome to our page! \n Enter username to login": "Hello,"+this.username;
    },
    getPassword(){
      if (
          this.password.trim().length <= 6 ||
          !/\d/.test(this.password) ||
          !/[a-zA-Z]/.test(this.password) ||
          !/[!@#$%^&*(),.?":{}|<>]/.test(this.password)
      ) {
        this.error = "Password should contain at least 1 number, 1 character, 1 special character, and be at least 7 characters long.";
        return false;
      }
      this.error = "";
      return true;
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <h1>{{ username!==""?  "Hello, "+username : "Enter username!" }}</h1>
   <div class="container" style="justify-content: center">
     <div>
       <div class="user">
         <label for="username">Enter your username:</label>
         <input type="text" id="username" v-model="username">
       </div>
       <div class="pass">
         <label for="password">Enter your password:</label>
         <input type="text" id="password" v-model="password">
       </div>
       <button v-if="password !='' && username!=''" @click="getPassword()">Login</button>
       <button disabled v-else>Enter user and pass</button>
     </div>

   </div>

    <p class="error">{{error}}</p>
  </div>
</template>

<style scoped>
.wrapper{
  width:900px;
  height: 500px;
  border-radius: 50px;
  padding: 20px;
  background:#1f0f24 ;
  text-align: center;
  color:white;
}

input{
  margin-top:30px;
  background: transparent;
  border:0;
  border-bottom: 2px solid #110813;
  color:#fcfcfc;
  font-size: 14px;
  padding:5px 8px;
  outline: none;
}
input:focus{
  border-bottom-color: #6e2d7d ;
}
.error{
  color:#d03039;
}
h1{
  text-align: center;
  margin-bottom: 20px;
}
p{
  text-align: center;
}
.user{
  padding: 20px;
}
.pass{
  padding: 20px;
}
button:disabled{
  background: #967d30;
  cursor:not-allowed;
}
button{
  justify-content: center;
  height: 40px;
  background:#e3bc4b ;
  color: #fff ;
  border-radius :10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
button:hover{
  transform: scale(1,1)  translateY(-5px);
}
.container{
  display: flex;
}
</style>