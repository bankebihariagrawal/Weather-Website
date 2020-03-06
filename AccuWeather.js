//in this code we fetch the data from our API (AccuWeather) 
class weather{
 constructor(){
    this.APIkey = "FPeJLO6leU4TuvG1zZCBBYVHGLaqcNQz";
    this.weatherURL = "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }

async updateCity(city){
    const cityDets = await this.getCity(city);
    const cityWeather = await this.getWeather(cityDets.Key);
return{cityDets,cityWeather};
}
async getCity(city){
const query = `?apikey=${this.APIkey}&q=${city}`;
const response =await fetch(this.cityURL+ query);
const data =await response.json();
   
return data[0];
}
async getWeather(id){
    const query = `${id}?apikey=${this.APIkey}`;
    const response = await fetch(this.weatherURL + query);
    const data =  await response.json();
    return data[0];
}
}
