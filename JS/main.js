// // -----------------Today Variables--------------
// var firstDay = document.getElementById("firstDay");
// var firstDate = document.getElementById("firstDate");
// var nameOfCite= document.getElementById("nameOfCite");
// var firstDegree= document.getElementById("firstDegree");
// var firstMonth = document.getElementById("firstMonth");
// var firstImg = document.getElementById("firstImg");
// var firstCondition = document.getElementById("firstCondition");
// var humidty = document.getElementById("humidty");
// var wind = document.getElementById("wind");
// var windDirection= document.getElementById("windDirection");

// // ---------------------- Tmw Vars + after Tmw----------------------

// var secDegree = document.getElementsByClassName("secDegree");
// var secSmallDegree = document.getElementsByClassName("secSmallDegree");
// var thirdCondition = document.getElementsByClassName("thirdCondition");
// var secImg = document.getElementsByClassName("secImg");
// var searchInput = document.getElementById("searchInput")
// // --------------------------------------------END-VARS---------------------------


// // -------------------API---------------------


// async function getForecastData(region ){
//     var forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f242afa63aac40e78ae74734231608&q=07112${region}&days=3`);
//     var forecastData = await forecastResponse.json();
//     return forecastData ;
// }
// function displayToday(Data){
//     nameOfCite.innerHTML=Data.location.name ;
//     firstDegree.innerHTML = Data.current.temp_c + "<sup>o</sup>C";
//     firstCondition.innerHTML = Data.current.condition.text;
//     humidty.innerHTML = Data.current.humidity + " %";
//     wind.innerHTML = Data.current.wind_kph + " km/h" ;
//     windDirection = Data.current.wind_dir ;
//     firstImg.setAttribute("src",Data.current.condition.icon);
// }
// function dispalytmw(Data){
//     for(i=0;i<2 ;i++){
//         secDegree[i].innerHTML=Data.forecast.forecastday[i+1].day.maxtemp_c;
//         secSmallDegree[i].innerHTML=Data.forecast.forecastday[i+1].day.mintemp_c;
//         thirdCondition[i].innerHTML=Data.forecast.forecastday[i+1].day.condition.text;
//         secImg[i].setAttribute("src" , Data.forecast.forecastday[i+1].day.condition.icon);
//     }
// }
// async function startApp(city="paris"){
//     var forecastData = await getForecastData(city);
//     displayToday(forecastData)
//     dispalytmw(forecastData);
// }
// startApp();

//     searchInput.addEventListener("input" , function(){
//         startApp(searchInput.value)
//     })







// -----------------Today Variables--------------
var firstDay = document.getElementById("firstDay");
var firstDate = document.getElementById("firstDate");
var nameOfCite= document.getElementById("nameOfCite");
var firstDegree= document.getElementById("firstDegree");
var firstMonth = document.getElementById("firstMonth");
var firstImg = document.getElementById("firstImg");
var firstCondition = document.getElementById("firstCondition");
var humidty = document.getElementById("humidty");
var wind = document.getElementById("wind");
var windDirection= document.getElementById("windDirection");

// ---------------------- Tmw Vars + after Tmw----------------------

var secDegree = document.getElementsByClassName("secDegree");
var secSmallDegree = document.getElementsByClassName("secSmallDegree");
var thirdCondition = document.getElementsByClassName("thirdCondition");
var secImg = document.getElementsByClassName("secImg");
var searchInput = document.getElementById("searchInput")
var secDay = document.getElementsByClassName("secDay")
// --------------------------------------------END-VARS---------------------------


// -------------------API---------------------


async function getForecastData(Citzn){
    var forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f242afa63aac40e78ae74734231608&q=07112${Citzn}&days=3`);
    var forecastData = await forecastResponse.json();
    return forecastData ;
}
async function displayToday(Data="Alexandria"){
    var Data= await getForecastData(Data);
    if(!Data.error){
        let todayName= new Date()
        firstDay.innerHTML = todayName.toLocaleDateString("en-US" , {weekday:"long"})
        firstDate.innerHTML = todayName.getDate();
        firstMonth.innerHTML= todayName.toLocaleDateString("en-US" , {month: "long"});
        nameOfCite.innerHTML=Data.location.name ;
        firstDegree.innerHTML = Data.current.temp_c + "<sup>o</sup>C";
        firstCondition.innerHTML = Data.current.condition.text;
        humidty.innerHTML = Data.current.humidity + " %";
        wind.innerHTML = Data.current.wind_kph + " km/h" ;
        windDirection = Data.current.wind_dir ;
        firstImg.setAttribute("src","https:" + Data.current.condition.icon);
    }

}
async function dispalytmw(myData="Alexandria"){
    var myData= await getForecastData(myData);
    if(!myData.error){
        for(i=0;i<2 ;i++){
            let  tmwDate = new Date(myData.forecast.forecastday[i+1].date);
            secDay[i].innerHTML=tmwDate.toLocaleDateString("en-US" , {weekday:("long")});
            secDegree[i].innerHTML=myData.forecast.forecastday[i+1].day.maxtemp_c;
            secSmallDegree[i].innerHTML=myData.forecast.forecastday[i+1].day.mintemp_c;
            thirdCondition[i].innerHTML=myData.forecast.forecastday[i+1].day.condition.text;
            secImg[i].setAttribute("src" , "https:" + myData.forecast.forecastday[i+1].day.condition.icon);
        }
        }
    
}

    displayToday()
    dispalytmw();

    
searchInput.addEventListener("input" , function(){
    dispalytmw(searchInput.value)
    displayToday(searchInput.value)
})


`
ده البروتوتايب 

function Instructor (name , age , salary , gender){
    this.name = name ; 
    this.age = age ; 
    this.salary = salary ; 
    this. gender = gender ;
}

Instructor.prototype.playingTennis=function(){
    console.log("playing tennis Very well")
}

let kerollosNabil = new Instructor("Kerollos Nabil" , 27 , 12000 , "Male")
let felopatirNabil = new Instructor("Felopatir Nabil" , 20 , 19000 , "Male")

console.log(felopatirNabil)
`
`
class Instructor {

 ده الشوجار سينتاكس بتاع الكلاس بديل البرووتوتايب
 
    constructor(name , gender , salary){
        this.name= name ; 
        this.gender= gender ; 
        this.salary= salary ; 
    }

    eat(){
        console.log("Hello Bessoooo")
    }
}

let ahmedBahnassy = new Instructor("ahmed" , "male" , 12000)

console.log(ahmedBahnassy)
`