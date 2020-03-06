//In this we take city from user and get the data about weather 
const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const detail = new weather();
const image = document.querySelector('.image');
const icons = document.querySelector('.icon');

form.addEventListener('submit' , e=>{
    e.preventDefault();
    const city = form.city.value.trim(); 
    form.reset();
    detail.updateCity(city)
     .then( data => update(data))
     .catch(err => console.log(err));

     localStorage.setItem('city' , city);
             
    });

   const update = (data) => {
    const cityDets = data.cityDets;
    const weather = data.cityWeather;
    card.classList.remove('d-none');     
   
 console.log(cityDets,weather);
   details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
   <h5 class="my-3">${weather.WeatherText}</h5>
   <div class="display-4 my-4">
   <span>${weather.Temperature.Metric.Value}</span>
   <span>&deg;C</span>
    `;
  if(weather.IsDayTime){
  image.setAttribute('src','./img/day.svg');
  }
  else{
      image.setAttribute('src' , './img/night.svg');
  }

 const iconimage = weather.WeatherIcon;

 icons.innerHTML = `<img src="./img/icons/${iconimage}.svg" alt="">`

}; 
//if localstorage variable exists
if(localStorage.getItem('city'))
{
    detail.updateCity(localStorage.getItem('city'))
    .then(data => update(data))
    .catch(err => console.log(err));
}