
document.addEventListener('DOMContentLoaded', contentLoaded)
function contentLoaded() {

    let searchButton = document.querySelector('.submit')
    let form = document.querySelector('form')
    form.addEventListener('submit',
    listAnime)

    function listAnime(e) {
        e.preventDefault()
        let mainForm = e.target
      let animeName = e.target.input.value
      
    let animeUrl = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`
      fetch(animeUrl)
      .then(res => res.json())
      .then(data => displayer(data))
      .catch(() => console.error('error in fetching'))

      function displayer(array){
        for(let element of array.data){
            console.log(element)

            
            let li1= document.createElement('li')
           // let li2=document.createElement('li')
            let li3 = document.createElement('li')
            let li4 = document.createElement('li')

            let div = document.createElement('div')
            div.className = 'anime_div'
            let ul=document.querySelector('ul')

            let img = document.createElement('img')
            img.src = `${element.images.jpg.image_url}`
            let a = document.createElement('a')
            a.href = `${element.url}`
            a.appendChild(img)
            li1.appendChild(a)

            li3.textContent = `Title:${element.title}`
            li4.textContent = `Number of episodes:${element.episodes}`
          
            a.appendChild(img)
            a.appendChild(li1)
            a.appendChild(li3)
            a.appendChild(li4)
            div.appendChild(a)
            //div.appendChild(li2)
            //div.appendChild(li3)
            //div.appendChild(li4)

            ul.appendChild(div)





        }
      }





        mainForm.reset()
    }



}








