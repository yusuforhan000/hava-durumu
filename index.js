const url ='https://api.openweathermap.org/data/2.5/'
const key ='61c6e1993eeafe77e4ca2e8db38969ad'

const setQuery = (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
        getResult(searchBar.value)
        console.log(e.keyCode)
       
    }
    
        
}


const getResult = (cityName) => {
    let query ="${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr"
    fetch(query)
    .then(weather => {
        return weather .json ()
    })
    .then(displayResult)

}
const displayResult =(result) => {
    console.log(result);
}




const searchBar = document.getElementById('cityInput')
searchBar.addEventListener('keypress',setQuery)
