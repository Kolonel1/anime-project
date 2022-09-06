

fetch('https://api.jikan.moe/v4/anime?q=naruto&sfw')
.then(response => response.json())
.then(object => {for(let element of object.data){
    console.log(element)
}})








