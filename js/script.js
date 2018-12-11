// Api key 
const apiKey='6156745b40dd41e09cdbff60d3ca579e'

// Categorizacao de dominios 
const url_base="https://newsapi.org/v2/everything?"
const dominios_tech="teverge.com,canaltech.com.br,thenextweb.com,wired"
const dominios_scie="next-big-future"
const dominios_br="https://newsapi.org/v2/top-headlines?country=br&apiKey="
const url_base2= "https://newsapi.org/v2/top-headlines?country=ar&apiKey="
const dominios_ar="google-news-ar"
const dominios_ca="https://newsapi.org/v2/top-headlines?country=ca&apiKey="
const pageSize="pageSize=5"

// Seletores
const show_tech = document.querySelector(".searchTech")
const show_scie= document.querySelector(".searchScience")
const show_br=document.querySelector(".searchBrasil")
const show_ar=document.querySelector(".searchArgentina")
const show_musics=document.querySelector(".searchMusic")
const show_ca=document.querySelector(".searchCanada")

// Funcoes
function imgNews(y) {
    let notfound= `<img src="null">`   
    let image=`<img src="${y.urlToImage}">` 
    if (image==notfound){
      let d= `<img src="img/default.jpg">`
      return d 
    } else { 
        return image 
    }                    
}

function cverDate(valor){
    let result = moment(new Date(`${valor.publishedAt}`)).format('lll')
    //console.log("aqui:", result)
    return result
}

function technology(){
	let url = `${url_base}domains=${dominios_tech}&pageSize=12&apiKey=${apiKey}`
    fetch(url)
      .then(res => res.json())
	  .then(function(data){ 
          let IhuU=data.articles
          .map(x=> `<section class="noticiadoDiaTech"<h1>${link(x)}</h1>${imgNews(x)}<h2>${x.description}</h2><p>Fonte: ${x.source.name}</p><h3>${cverDate(x)}</h3></section>`)
          .join(" ")
          show_tech.innerHTML=IhuU
      })
 }

technology()

function musics (){
    let url = `${url_base}sources=mtv-news&pageSize=9&apiKey=${apiKey}`
    fetch(url)
      .then(res => res.json())
	  .then(function(data){ 
          let bla=data.articles
          .map(x=> `<section class="noticiaMTV"<h1>${link(x)}</h1>${imgNews(x)}<h2>${x.description}</h2><p>Fonte: ${x.source.name}</p><h3>${cverDate(x)}</h3></section>`)
          .join(" ")
          show_musics.innerHTML=bla
      })
 }

musics()

function science() {
	let url = `${url_base}sources=${dominios_scie}&pageSize=6&apiKey=${apiKey}`
	fetch(url)
      .then(res => res.json())
	  .then(function(data){ 
          let vaiaparecerSim=data.articles
          .map(x=> `<section class="noticiadoDiaScienc"<h1>${link(x)}</h1>${imgNews(x)}<h2>${x.description}</h2><p>Fonte: ${x.source.name}</p><h3>${cverDate(x)}</h3></section>`)
          .join(" ")
          show_scie.innerHTML=vaiaparecerSim
      })
 }

science()

function converDate2(x){
    let y= moment(new Date(`${x.publishedAt}`)).format('LT')
    return y
}

function trendBR(){
	let url = `${dominios_br}${apiKey}&${pageSize}`
	fetch(url)
      .then(res => res.json())
	  .then(function(data){ 
          let w=data.articles
          .map(x=> `<section class="noticiaBr"<h1>${link(x)}</h1><p>Fonte: ${x.source.name}</p><h3>${converDate2(x)}</h3></section>`)
          .join(" ")
          show_br.innerHTML=w
      })
    }

trendBR()

function trendCA(){
	let url = `${dominios_ca}${apiKey}&${pageSize}`
	fetch(url)
      .then(res => res.json())
	  .then(function(data){ 
          let tatu=data.articles
          .map(x=> `<section class="noticiaCa"<h1>${link(x)}</h1><p>Fonte: ${x.source.name}</p><h3>${converDate2(x)}</h3></section>`)
          .join(" ")
          show_ca.innerHTML=tatu
      })
    }

trendCA()

function trendAR(){
	let url = `${url_base2}${apiKey}&${pageSize}`
	fetch(url)
      .then(res => res.json())
	  .then(function(data){ 
          let k=data.articles
          .map(x=> `<section class="noticiaAr"<h1>${link(x)}</h1><p>Fonte: ${x.source.name}</p><h3>${converDate2(x)}</h3></section>`)
          .join(" ")
          show_ar.innerHTML=k
      })
 }

trendAR()

function link(x){
    let zaza=`<h1><a id="el" href="${x.url}" target="_blank">${x.title}</a></h1>`
    return zaza
}

function menuzinho_Open() {
    document.getElementById("menu_lat").style.width = "191px";
}

function menuzinho_Close() {
    document.getElementById("menu_lat").style.width = "0";
}

