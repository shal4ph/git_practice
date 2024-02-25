function displayWeather(city){

    let message;
    if(city == "New York"){
message = "best mosam";
    }
    else if (city == "los angeles"){
        message = "hopt";
    }
    else {
        message = "pleasant";
    }
    return message;
}
console.log(displayWeather("los angeles"));