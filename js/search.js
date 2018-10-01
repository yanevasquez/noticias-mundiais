const url_base="https://newsapi.org/v2/everything?q="
const api_Key='6156745b40dd41e09cdbff60d3ca579e'

//Seletores
const news_search= document.querySelector(".returnSearch")
const inputext = document.querySelector("#entrada")
const bnt1= document.querySelector('#btn')


//Evento e chamada de funções
bnt1.addEventListener("click", function(e){
    e.preventDefault()
    const grep= inputext.value;
    allSearch(`${url_base}${grep}&apiKey=${api_Key}&pageSize=10`)

})

function allSearch(url){
    fetch(url)
        .then(res=> res.json())
        .then(json=> ShowNewsSearch(json))      
}

function ShowNewsSearch(AllSearch){
    let str = AllSearch.articles
        .map(x=> `<h1>${linksNews(x)}</h1><h3>${x.source.name}</h3><h2>${x.publishedAt}</h2>`)
        .join(" ")
        news_search.innerHTML=str
}
 
function linksNews(x){
    let foundYOU=`<a id="el" href="${x.url}" target="_blank" onclick= ShowNewsSearch(x)>${x.title}</a>`
    return foundYOU
}

function hideUpdate(){
    let y = document.getElementById('atualiza');
    if (y.style.display==='none') {
        y.style.display='flex';
    } else {
        y.style.display='flex';
    }
}
