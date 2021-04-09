window.addEventListener('load', () =>{

let long;
let lat;
let myIcon = document.querySelector(".icon");
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree= document.querySelector(".temperature-degree");
let locationTimeZone = document.querySelector(".location-timeZone");
 

 if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat = position.coords.latitude;
 
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=VFUVD9FGBHM9AE44HGFKYHRAQ`;
  
      fetch(api)
      .then(response =>{
      return response.json();
      })
      .then(data=>{
        console.log(data);
        const { temp, icon, conditions } = data.currentConditions;
        const { description, timezone } = data;
        //set dom elements from the api
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = description;
        locationTimeZone.textContent = timezone;
        myIcon.textContent = icon;

      });
    });
   }
});