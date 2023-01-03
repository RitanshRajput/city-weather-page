let result = document.getElementById("result") ;
let searchbtn = document.getElementById("search-btn") ;
let cityRef = document.getElementById("city") ;

let getweather = () => {                          //🔸function to fetch weather details from api and dsiplay them
  let cityValue = cityRef.value ;

  if(cityValue.length == 0) {                     //🔸if input field is Empty. 
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>` ;
  }
  else {                                          //🔸if input field is NOT empty.

  let url = `https://api.openweathermap.org/data/2.5weather?q=${cityValue}&appid=${key}&units=metric` ;
  cityRef.value = "" ;                           //🔸 Clear the input field

  fetch(url)
  .then((resp) => resp.json())
  .then((data) =>{                               //🔸If city name is valid 
    console.log(data) ;
    console.log(data.weather[0].icon) ;
    console.log(data.weather[0].main) ;
    console.log(data.weather[0].description) ;
    console.log(data.name) ;
    console.log(data.main) ;
    console.log(data.main.temp_min) ;
    console.log(data.main.temp_max) ;
    result.innerHTml = `
        <h2>${data.name} </h2>
        <h4 class="weather">${data.weather[0].main} </h4>
        <h4 class="desc">${data.weather[0].description} </h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176; </h1>
        <div class="temp-container"> 
        <div>
           <h4 class="title">min </h4>
           <h4 class="temp>${data.main.temp_min} &#176;</h4>"
        </div>
        <div>
           <h4 class="title">max </h4>
           <h4 class="temp>${data.main.temp_max}&#176; </h4>"
        </div>
        <div>
        `
})
  .catch(() => {              //🔸If city name is NOT valid 
    result.innerHTML = `<h3 class="msg">City not found</h3>`;   
    })  ;
  }
};

searchbtn.addEventListener("click", getweather) ;
window.addEventListener("load", getweather) ;