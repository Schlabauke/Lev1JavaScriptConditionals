console.log("Hutinni!")
/* Lev1_1 Conditionals / Lev1_3 Conditionals*/
let getAge = document.getElementById("getAge")
let eingabe = document.getElementById("eingabe")

function checkAge() {
    if (eingabe.value >= 18) {
        console.log(true)
        getAge.innerHTML = "volljährig";
    } else {
        console.log(false)
        getAge.innerHTML = "minderjährig";
    }
};


/* Lev1_2 conditionals 
Bei einer Qualität zwischen 8 und 10 soll das Ergebnis 'super' sein.
Bei einer Qualität zwischen 6 und 7 soll das Ergebnis 'gut' sein.
Bei einer Qualität zwischen 3 und 5 soll das Ergebnis 'okay' sein.
Bei einer Qualität zwischen 0 und 2 soll das Ergebnis 'schlecht'*/
let sunny = document.getElementById("sunny")
let cloudy = document.getElementById("cloudy")

function getWeather() {
    if (sunny.value >= 8 && sunny.value <= 10) {
        cloudy.innerHTML = "Super Wetter!"
    } else if (sunny.value >= 6 && sunny.value <= 7) {
        cloudy.innerHTML = "Gutes Wetter"
    }
    else if (sunny.value >= 3 && sunny.value <= 5) {
        cloudy.innerHTML = "Wetter ist okay!"
    }
    else {
        cloudy.innerHTML = "Schlechtes Wetter!"
    }
};





