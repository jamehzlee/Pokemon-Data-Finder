fetch("https://api.opendota.com/api/matches/271145478")
.then(headers => headers.json())
.then(response => {
    console.log(response)
})