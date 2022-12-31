let weather = {
    "apikey" : "7f27214484dc61d89cc71da5d61378ec",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            +"&units=metric&appid=7f27214484dc61d89cc71da5d61378ec"
            
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Cuaca di " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".desc").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humid").innerText = "Kelembapan: " + humidity + "%";
        document.querySelector(".wind").innerText = "Kecepatan Angin: " + speed + " km/jam";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Bandung");

// 7f27214484dc61d89cc71da5d61378ec