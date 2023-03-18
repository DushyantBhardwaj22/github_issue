var currentPage=1
function previous(){
    document.getElementById('issues').innerHTML = ""
    if(currentPage>1){
    pageNumber = --currentPage
    document.getElementsByTagName('span')[0].innerHTML = pageNumber
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then(response=>response.json())
    .then(data=>{
        for(let i=0;i<5;i++){
            document.getElementById('issues').innerHTML = document.getElementById('issues').innerHTML + `<li id="title">${data[i].title}</li>`
        }
    })
    .catch(Error=>console.log(Error))
}
    else{
        fetch(`https://api.github.com/repositories/1296269/issues?page=1&per_page=5`)
    .then(response=>response.json())
    .then(data=>{
        for(let i=0;i<5;i++){
            document.getElementById('issues').innerHTML  =  document.getElementById('issues').innerHTM + `<li id="title">${data[i].title}</li>`
        }
    }).catch(Error=>console.log(Error))
}
}
function next(){
    document.getElementById('issues').innerHTML = ""
    pageNumber = ++currentPage
    document.getElementsByTagName('span')[0].innerHTML = pageNumber
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then(response=>response.json())
    .then(data=>{
        for(let i=0;i<5;i++){
            document.getElementById('issues').innerHTML = document.getElementById('issues').innerHTML + `<li id="title">${data[i].title}</li>`
        }
    }).catch(Error=>console.log(Error))

}
