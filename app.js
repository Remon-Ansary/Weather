var button =document.querySelector('.button')
var inputValue = document.querySelector('.inputValue');
var Name = document.querySelector('.Name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity= document.querySelector('.humidity');

button.addEventListener('click',() => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=095f1e3d13c80cf2df80ffbfd78abeb3`)

            .then(response => response.json())
            .then(data => {
                var nameValue = data['name'];
                var tempValue = data['main']['temp'];
                var descValue = data['weather'][0]['description'];
                var humidityValue =  data['main']['humidity'];


                Name.innerHTML = 'Location: '+nameValue;
                desc.innerHTML = 'Weather: ' +descValue;
                temp.innerHTML = 'Temperature: '+(tempValue/10).toFixed(1); 
                humidity.innerHTML = 'Humidity: '+humidityValue;
            })







            .catch(err => alert("Wrong city name"));

    })