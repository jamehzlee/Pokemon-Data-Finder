let searchInput = document.querySelector("#search-text");
let button = document.querySelector(".button")


function getData(search) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+search+"/")
    .then(headers => headers.json())
    .then(response => {
        console.log(response)
        let name = response.name
        console.log(name)
        let type = response.types[0].type.name
        console.log(type)
        let ability1 = response.abilities[0].ability.name
        console.log(ability1)
        let ability2 = response.abilities[1].ability.name
        console.log(ability2)
        let move1 = response.moves[0].move.name
        console.log(move1)
        let move2 = response.moves[1].move.name
        console.log(move2)
        let move3 = response.moves[2].move.name
        console.log(move3)
        let move4 = response.moves[3].move.name
        console.log(move4)
        let stats = response.stats[0].base_stat
        console.log(stats)
        let weight = response.weight 
        console.log(weight)
    });
}
function getVideo(){
    let search = searchInput.value;
    console.log(search);
    // update search variable to be value of search box
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

function run() {
    let search = searchInput.value;
    search = search.toLowerCase().trim();
    search.replace(/\s/g, "")
    console.log(search)
    
    getData(search);
    // getVideo();
}

button.addEventListener("click", run)