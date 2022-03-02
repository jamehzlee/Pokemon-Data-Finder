let searchInput = document.querySelector("#search-text");
let button = document.querySelector(".button")

function getData() {
    let search = searchInput.value
    let search2 = search.toLowerCase()
    
    console.log(search2)
    fetch("https://pokeapi.co/api/v2/pokemon/"+search+"/")
    .then(headers => headers.json())
    .then(response => {
        console.log(response)
        let ability1 = response.abilities[0].ability.name
        console.log(ability1)
        let ability2 = response.abilities[1].ability.name
        console.log(ability2)
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
    getData();
    // getVideo();
}

button.addEventListener("click", run)