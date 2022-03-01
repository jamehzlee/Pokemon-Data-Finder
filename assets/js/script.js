let searchInput = document.querySelector("#search-text");
let button = document.querySelector(".button")

fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000")
.then(headers => headers.json())
.then(response => {
    console.log(response)
  let currentPokemon = response.results[0].name
    console.log(currentPokemon)
})

function getVideo(){
    // get value of search box
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
