fetch("https://pokeapi.co/api/v2/")
.then(headers => headers.json())
.then(response => {
    console.log(response)
})
