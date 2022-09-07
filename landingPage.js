
document.addEventListener('DOMContentLoaded', contentLoaded)
function contentLoaded() {

    let searchButton = document.querySelector('.submit')
    searchButton.addEventListener('mouseenter',colorChange)
    searchButton.addEventListener('mouseleave',changeColor)
    function colorChange(e){
    let button = e.target
    button.style.color = 'yellow'
      
     /* if(color !== 'grey'){
        color = 'grey'
        return color
      }
      else if (color === 'grey'){
        color = 'blue'
        return color
      }*/

       }

    function changeColor(e){
      let button = e.target
      button.style.color = 'blue'
    }


    let form = document.querySelector('form')
    form.addEventListener('submit',
    listAnime)

    function listAnime(e) {
    e.preventDefault()
    let mainForm = e.target
    let animeName = e.target.input.value


      if (animeName === ''){
        alert('please input something')}
        else if (animeName !== ''){

          
      
    let animeUrl = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`
      fetch(animeUrl)
      .then(res => res.json())
      .then(data => displayer(data))
      .catch(() => console.error('error in fetching'))

      function displayer(array){
        for(let element of array.data){
          if(  (element.popularity>0) && (element.popularity<500) ){
          

            
            let li1= document.createElement('li')
            let li2=document.createElement('li')
            let li3 = document.createElement('li')
            let li4 = document.createElement('li')
            let li5=document.createElement('li')

            let div = document.createElement('div')
            div.className = 'anime_div'
            let ul=document.querySelector('ul')

            let img = document.createElement('img')
            img.src = `${element.images.jpg.image_url}`
            let a = document.createElement('a')
            a.href = `${element.url}`
          
        
            li2.textContent=`Studios:${element.studios[0].name}`
            li3.textContent = `Title:${element.title}`
            li4.textContent = `Number of episodes:${element.episodes}`
            
           /* console.log(element.genres.length)
            if(element.genres.length === 1){
              let genre =`${element.genres[0].name}` 
            if(element.genres.length ===2){
              genre = `${element.genres[0].name},${element.genres[1].name}`
            
            if(element.genres.length === 3){
              genre = `${element.genres[0].name},${element.genres[1].name},${element.genres[2].name}`
            }}} */
             
            let genre = `${element.genres[0].name}`
             li5.textContent = `Genre:${genre}`
            a.appendChild(img)
            a.appendChild(li1)
            a.appendChild(li2)
            a.appendChild(li3)
            a.appendChild(li5)
            a.appendChild(li4)
            div.append(a)
            //div.appendChild(li2)
            //div.appendChild(li3)
            //div.appendChild(li4)

            ul.append(div)}
         
       else if(element.populatiry > 400){alert('no popular anime for now in the search list')   
          }
        }
      }
        mainForm.reset()
    }
  }
}






