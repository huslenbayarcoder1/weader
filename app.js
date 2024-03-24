var input=document.getElementsByTagName('input')[0];
var country=document.querySelector('.country');
var temp=document.querySelector('.temp');
var desc=document.querySelector('.desc');
var speed=document.querySelector('.speed');
function srch(){
    var city=input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd&fbclid=IwAR1vExrAOaCDUXnYN7c8iiliq4bGSn53T7v43Q7v-x_OcAYlgrx-rBq7Fh0`).then(
        response=>response.json()
    ).then(
        weather=>{
            console.log(weather);
            console.log(weather.name);
            country.innerText=weather.name;
            console.log(weather.main.temp)
            temp.innerText=weather.main.temp
            console.log(weather.wind.speed)
            speed.innerText=weather.wind.speed
            document.getElementsByTagName('img')[0].style.width="200px"
            console.log(weather.weather[0].description)
            desc.innerText=weather.weather[0].description
            switch(weather.weather[0].main){
                case "Clouds":
                    document.getElementsByTagName('img')[0].src="clouds1.jpg"
                    break;
                case "Haze":
                        document.getElementsByTagName('img')[0].src="haze.jpg"
                        break;
                case "Clear":
                        document.getElementsByTagName('img')[0].src="clear.png"
                        break;
                case "sunny cloud":
                        document.getElementsByTagName('img')[0].src="sunny cloud.png"
                        break;
                case "snowy":
                        document.getElementsByTagName('img')[0].src="snowy.png"
                        break;
                case "raining sunny":
                        document.getElementsByTagName('img')[0].src="raining sunny cloud.png"
                        break;
            }
        }
    )
}
// FETCH()-> api ruuu huselt yavuulna
// promise -> nanad hariu irne gesen amlalt
// .then ()-> promise
// respose-> 200: approved, erne if,404 irehgui
//json()-> zambraaagui medeeleliig  tsegtstei garj irne
//fetch('https://fakestoreapi.com/products').then(
   
 //)
   // product =>{
        //console.log(product[0].title)
        //console.log(product[product.length-1].rating.rate)
   // }
