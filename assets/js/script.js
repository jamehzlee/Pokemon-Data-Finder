fetch("https://store.steampowered.com/api/appdetails?appids=440")
.then(headers => headers.json())
.then(response => {
    console.log(response)
})