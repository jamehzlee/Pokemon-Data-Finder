let searchArray = []
let searchInput = document.querySelector("#search-text")
let button = document.querySelector(".button")
let pokemonName = document.querySelector("#name")
let type = document.querySelector("#type")
let ability1 = document.querySelector("#ability1")
let ability2 = document.querySelector("#ability2")
let move1 = document.querySelector("#move1")
let move2 = document.querySelector("#move2")
let move3 = document.querySelector("#move3")
let move4 = document.querySelector("#move4")
let pokemonHeight = document.querySelector("#height")
let pokemonWeight = document.querySelector("#weight")

function getData(search) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+search+"/")
    .then(headers => headers.json())
    .then(response => {
        console.log(response)
        pokemonName = response.name
        type = response.types[0].type.name
        ability1 = response.abilities[0].ability.name
        ability2 = response.abilities[1].ability.name
        move1 = response.moves[0].move.name
        move2 = response.moves[1].move.name
        move3 = response.moves[2].move.name
        move4 = response.moves[3].move.name
        stats = response.stats[0].base_stat
        weight = response.weight .toFixed(2)/10 + " kilograms"
        height = response.height .toFixed(2)/10 + " meters"
        pokemonWeight = JSON.stringify(weight)
        pokemonHeight = JSON.stringify(height)
        displayData()
    })
}

function displayData() {
    document.querySelector("#name").innerText = pokemonName.charAt(0).toUpperCase()+pokemonName.slice(1);
    document.querySelector("#type").innerText = "Type: " + type.charAt(0).toUpperCase()+type.slice(1);
    document.querySelector("#ability1").innerText = ability1.charAt(0).toUpperCase()+ability1.slice(1);
    document.querySelector("#ability2").innerText = ability2.charAt(0).toUpperCase()+ability2.slice(1);
    document.querySelector("#move1").innerText = move1.charAt(0).toUpperCase()+move1.slice(1);
    document.querySelector("#move2").innerText = move2.charAt(0).toUpperCase()+move2.slice(1);
    document.querySelector("#move3").innerText = move3.charAt(0).toUpperCase()+move3.slice(1);
    document.querySelector("#move4").innerText = move4.charAt(0).toUpperCase()+move4.slice(1);
    document.querySelector("#height").innerText = "Height: " + height;
    document.querySelector("#weight").innerText = "Weight: " + weight;
}

function getVideo(){
    let search = searchInput.value;
    console.log(search);
    search.trim()
    search.replace(/\s/g, "")
    let videoInfo = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="+search+"%20facts&key=AIzaSyAwNZ2kW0ApwqX9uW-ZJnuNgQkXePsnjCw"
    fetch(videoInfo)
    .then(response => response.json())
    .then(data => {
        let videoId = data.items[0].id.videoId
        let url = "https://youtube.com/embed/"+videoId
        let iframe = document.querySelector("iframe")
        console.log(data)
        iframe.setAttribute("src", url)
        console.log(iframe)

    })
}

function userHistory(search){
    searchArray.push(search);
    localStorage.setItem("searches", JSON.stringify(searchArray));
    let history = localStorage.getItem("searches");
    console.log(history);
}

function run() {
    let search = searchInput.value;
    search = search.toLowerCase().trim();
    search.replace(/\s/g, "")
    userHistory(search);
    getData(search);
    console.log(search)
    // getVideo();
}

button.addEventListener("click", run)