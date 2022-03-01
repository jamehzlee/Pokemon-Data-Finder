// fetch("https://store.steampowered.com/api/appdetails?appids=440")
// .then(headers => headers.json())
// .then(response => {
//     console.log(response)
// })














// elden%20ring%20trailer


let search = "GTA V trailer"
search.replace(/\s/g, "")
function getVideo(){
    let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key=AIzaSyAlM-fUBenyXh7wZecnf-yQYNTOi8mrHNM"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let singleVideoID = data.items[1].id.videoId
        console.log(singleVideoID)
    })
}
getVideo();