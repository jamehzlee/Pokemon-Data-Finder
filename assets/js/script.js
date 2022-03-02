let searchInput = document.querySelector("#search-text");
let button = document.querySelector(".button")

function getData() {
    let search = searchInput.value;
    console.log(search)
    fetch("https://pokeapi.co/api/v2/pokemon/"+search+"/")
    .then(headers => headers.json())
    .then(response => {
        console.log(response)
        let currentPokemon = response.abilities[0].ability.name
        console.log(currentPokemon)
        let currentPokemon1 = response.abilities[1].ability.name
        console.log(currentPokemon1)
    });
}

function getVideo(){
    let search = searchInput.value;
    console.log(search);
    // update search variable to be value of search box
    search.trim()
    search.replace(/\s/g, "")
    let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key=AIzaSyAwNZ2kW0ApwqX9uW-ZJnuNgQkXePsnjCw"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let singleVideoID = data.items[1].id.videoId
        console.log(singleVideoID)
    })
}

function run() {
    getData();
    // getVideo();
}

button.addEventListener("click", run)