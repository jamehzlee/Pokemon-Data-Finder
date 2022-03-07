let searchInputEl = document.querySelector("#search-text")
let buttonEl = document.querySelector("button")
let pokemonNameEl = document.querySelector("#name")
let typeEl = document.querySelector("#type")
let ability1El = document.querySelector("#ability1")
let ability2El = document.querySelector("#ability2")
let move1El = document.querySelector("#move1")
let move2El = document.querySelector("#move2")
let move3El = document.querySelector("#move3")
let move4El = document.querySelector("#move4")
let pokemonHeightEl = document.querySelector("#height")
let pokemonWeightEl = document.querySelector("#weight")
let localHistoryEl = document.querySelector("#localHistory")
let searchHistoryEl = document.querySelector("#searchHistory")
let searchArray = []

function getData(search) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+search+"/")
    .then(headers => headers.json())
    .then(response => {
        pokemonNameEl = response.name
        typeEl = response.types[0].type.name
        ability1El = response.abilities[0].ability.name
        ability2El = response.abilities[1].ability.name
        move1El = response.moves[0].move.name
        move2El = response.moves[1].move.name
        move3El = response.moves[2].move.name
        move4El = response.moves[3].move.name
        stats = response.stats[0].base_stat
        weight = response.weight .toFixed(2)/10 + " kgs"
        height = response.height .toFixed(2)/10 + " m"
        pokemonWeightEl = JSON.stringify(weight)
        pokemonHeightEl = JSON.stringify(height)
        displayData(search)
    })
}

function displayData(search) {
    document.querySelector("#name").innerText = pokemonNameEl.charAt(0).toUpperCase() + pokemonNameEl.slice(1)
    document.querySelector("#type").innerText = "Type: " + typeEl.charAt(0).toUpperCase() + typeEl.slice(1)
    document.querySelector("#ability1").innerText = ability1El.charAt(0).toUpperCase() + ability1El.slice(1)
    document.querySelector("#ability2").innerText = ability2El.charAt(0).toUpperCase() + ability2El.slice(1)
    document.querySelector("#move1").innerText = move1El.charAt(0).toUpperCase() + move1El.slice(1)
    document.querySelector("#move2").innerText = move2El.charAt(0).toUpperCase() + move2El.slice(1)
    document.querySelector("#move3").innerText = move3El.charAt(0).toUpperCase() + move3El.slice(1)
    document.querySelector("#move4").innerText = move4El.charAt(0).toUpperCase() + move4El.slice(1)
    document.querySelector("#height").innerText = "Height: " + height
    document.querySelector("#weight").innerText = "Weight: " + weight
}

function getVideo(search){
    let videoInfo = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="+search+"%20pokemon%20facts&key=AIzaSyAwNZ2kW0ApwqX9uW-ZJnuNgQkXePsnjCw"
    fetch(videoInfo)
        .then(response => response.json())
        .then(data => {
            let videoId = data.items[0].id.videoId
            let url = "https://youtube.com/embed/" + videoId
            let iframe = document.querySelector("iframe")
            iframe.setAttribute("src", url)
        })
}

function userHistory(search) {
    searchArray.push(search)
    localStorage.setItem("localHistory", JSON.stringify(searchArray))
    
}

function arrayToHistory(search) {
    localHistoryEl.innerHTML = ""
    let storedArray = JSON.parse(localStorage.getItem("localHistory"))
    let recentArray = storedArray.reverse()

    for (let i = 0; i < 5; i++) {
        let recentEl = document.createElement("p")
        recentEl.setAttribute("class", "column is-underlined is-size-3")
        recentEl.textContent = recentArray[i]
        localHistoryEl.append(recentEl)
    }
}

function removeSpace(nameSpacing) {
    nameSpacing = nameSpacing.toLowerCase().trim()
    nameSpacing.replace(/\s/g, "")
    return nameSpacing;
}

function run(searchName) {
    getData(searchName)
    arrayToHistory(searchName)
    getVideo(searchName)
}

localHistoryEl.addEventListener("click", function(event) {
    let pokeNamePTag = event.target
    let name = removeSpace(pokeNamePTag.textContent)

    run(name)
})

buttonEl.addEventListener("click", function() {
    let search = searchInputEl.value
    let name = removeSpace(search)

    userHistory(name)
    run(name)
})