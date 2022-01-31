async function getWeather() {
    let temp;
    const api = await fetch("https://api.open-meteo.com/v1/forecast?latitude=59.78&longitude=5.49&hourly=temperature_2m&current_weather=true");
    const json = await api.json();
    temp = json.current_weather.temperature;

// Skjekker om temp er noe.
    if (temp) {
        document.getElementById("temp").innerHTML = "Det er " +temp + "°C no.";
    }
    
// Får iformasjon om kva bilde som skal brukes.
    if (temp >= 20 ) {
        document.getElementById("vær").innerHTML = '<h2>20°C - Grader</h2><img class="størelse" id="shadow" src="Images/20-grader.jpg" alt="20-G">';
    }

    else if (temp < 20 && temp >= 15) {
        document.getElementById("vær").innerHTML = '<h2>15°C - Grader</h2><img class="størelse" id="shadow" src="Images/15-grader.jpg" alt="15-G">';
    }

    else {
        document.getElementById("vær").innerHTML = '<h2>10°C - Grader</h2><img class="størelse" id="shadow" src="Images/10-grader.jpg" alt="10-G">';
    }

}
getWeather();