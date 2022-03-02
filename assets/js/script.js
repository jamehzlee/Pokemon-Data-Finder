let searchInput = document.querySelector("#search-text");
let button = document.querySelector(".button")


function getData(search) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+search+"/")
    .then(headers => headers.json())
    .then(response => {
        let name = response.name
        let type = response.types[0].type.name
        let ability1 = response.abilities[0].ability.name
        let ability2 = response.abilities[1].ability.name
        let move1 = response.moves[0].move.name
        let move2 = response.moves[1].move.name
        let move3 = response.moves[2].move.name
        let move4 = response.moves[3].move.name
        let stats = response.stats[0].base_stat
        let weight = response.weight 
    });
}

function getVideo(){
    let search = searchInput.value;
    console.log(search);
    search.trim()
    search.replace(/\s/g, "")
    let videoInfo = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key=AIzaSyAwNZ2kW0ApwqX9uW-ZJnuNgQkXePsnjCw"
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

let searchArray = [];
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
    console.log(search)
    userHistory(search);
    // getData(search);
    // getVideo();
}

button.addEventListener("click", run)
