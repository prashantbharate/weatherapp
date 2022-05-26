
//src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed" 


function getdata() {
  let city = document.querySelector("#city").value;
  // alert(city)
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e08d833080a8f4d0aee7372815770ac`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      // console.log(res.main)
      append(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function append(data) {
  let container = document.querySelector("#container");
  let map= document.querySelector("#gmap_canvas");
  container.innerHTML = null;

  let city = document.createElement("p");
  city.innerText = "City Name Is" + " " + data.name;

  let mintemp = document.createElement("p");
  //temp-273
  mintemp.innerText = "Minimum Temperature F" + " " + data.main.temp_min;

  let maxtemp = document.createElement("p");
  maxtemp.innerText = "Maximum Temperature F" + " " + data.main.temp_max;

  let current = document.createElement("p");
  current.innerText = "Temperature F" + " " + data.main.temp;

  let humadity = document.createElement("p");
  humadity.innerText = " Humidity " + " " + data.main.humidity;

  container.append(city, mintemp, maxtemp, current, humadity);

  map.src=`http://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
