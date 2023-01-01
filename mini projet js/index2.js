var c = document.querySelector('#blabla')
function create(path ,titre ,price ,c){
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
     let span = document.createElement('span');
     let cardbody = document.createElement('div')
     cardbody.setAttribute("class","card-body")

    img.src = path;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu)
    span.setAttribute("class" ,"card-title fw-bold ms-4 pb-2")
    span.appendChild(document.createTextNode(price +"$"));
    p.setAttribute("class","card-texte fw-bolder fs-4 texte-center")
    cardbody.setAttribute('class' , 'text-black');
    img.setAttribute("class" ,"card-img-top h-75");
    div.appendChild(img);
    cardbody.appendChild(p);
    cardbody.appendChild(span);
    div.appendChild(cardbody)
     div.setAttribute("class","card w-100")
     div.setAttribute("id","card")
    c.appendChild(div)
}
getcoures(content).forEach((v) => {
    create(v.path , v.title ,v.price , c);
    
});