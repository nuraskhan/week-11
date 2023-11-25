<script>
export default {
  data(){
    return {
      city:"",
      error:"",
      info:null
    }
  },
  computed:{
    cityName(){
      return "\""+this.city +"\""
    },
    showTemp(){
      return "Temperature: "+(Math.round(this.info.main.temp-273));
    },
    showFeelsLike(){
      return "Temperature: "+(Math.round(this.info.main.feels_like-273));
    },
    showMinTemp(){
      return "Minimal temperature: "+(Math.round(this.info.main.temp_min-273));
    },
    showMaxTemp(){
      return "Maximal temperature: "+(Math.round(this.info.main.temp_max-273));
    }
  },
  methods:{
    getWeather(){
      if(this.city.trim().length<=2){
        this.error ="We need city name which length more than 2 symbols:(";
        return false;
      }
      this.error="";
      this.fetchWeather();

    },

    fetchWeather(){
      let name = this.city;
      let apiKey = 'sDPEUxZ4XGdueK0v/a/RLQ==cONwiPpC7Jj4OdqB'; // Replace with your actual API key
      let lat = 76.8829;
      let lon=43.2380;
      let currentDate = new Date();
      let API_key = '4f0a975feff25624464f0d5dc0a5dd85';
      let temperature = undefined;
      let mainW = undefined;
      let cityApi=fetch('https://api.api-ninjas.com/v1/city?name=' + name, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(result => {
        console.log(result);
        let js = result[0];
        if(js !== undefined){
          lat = js.latitude;
          lon = js.longitude;
          console.log(lat);
          console.log(lon);
        }else{
          alert("City doesn't found")
        }
      })
      .then(()=>{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&date=${currentDate}&appid=${API_key}`;
        let w = fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              this.info=data;
            })
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }
  }

}
</script>

<template>
  <div class="wrapper">
    <h1>Weather app </h1>
    <p>Show the weather of {{city==="" ?"in your city": cityName}}</p>
<!--    <input type="text" v-on:input="this.city=$event.target.value" placeholder="Enter the city name." >-->
<!--    <input type="text" @input="this.city=$event.target.value" placeholder="Enter the city name." >-->
    <input type="text" v-model="city" placeholder="Enter the city name." >
    <button v-if="city != '' " @click="getWeather()">Show the weather</button>
    <button disabled v-else>Enter name of city</button>
    <p class="error">{{error}}</p>
    <div v-if="info != null">
      <p>{{showTemp}}</p>
      <p>{{showFeelsLike}}</p>
      <p>{{showMinTemp}}</p>
      <p>{{showMaxTemp}}</p>
    </div>
  </div>
</template>

<style scoped>
.error{
  color:#d03039;
}

.wrapper{
  width:900px;
  height: 500px;
  border-radius: 50px;
  padding: 20px;
  background:#1f0f24 ;
  text-align: center;
  color:white;
}
.wrapper h1{
  margin-top: 50px
}
.wrapper p{
  margin-top: 20px
}
.wrapper input {
  margin-top:30px;
  background: transparent;
  border:0;
  border-bottom: 2px solid #110813;
  color:#fcfcfc;
  font-size: 14px;
  padding:5px 8px;
  outline: none;
}
.wrapper input:focus{
  border-bottom-color: #6e2d7d ;
}
.wrapper button:disabled {
  background: #967d30;
  cursor:not-allowed;
}
.wrapper button{
  background:#e3bc4b ;
  color: #fff ;
  border-radius :10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.wrapper button:hover{
  transform: scale(1,1)  translateY(-5px);
}
</style>
