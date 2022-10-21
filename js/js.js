let getJsonFile = (pathToFile) => {
    let request = new XMLHttpRequest();
    
    request.open("GET", pathToFile, false);
    request.send(null);
    
    let my_JSON_object = JSON.parse(request.responseText);
    
    return my_JSON_object;
  };
  const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/"); 
  let divpos = document.getElementById('divpos');
 function draw(massiv) {
  let str = '';
  divpos.innerHTML = '';
  for(let i = 0; i < massiv.length; i++){
       str +=
      `<div class="card">
        <p>${massiv[i].symbol}</p>
        <h1>${massiv[i].title}</h1>
        <h2>${massiv[i].keywords}</h2>
      </div>`;
  }
  divpos.innerHTML = str;
 }

  draw (allEmoji);

  document.querySelector('#search').oninput = function(){
    let value = this.value.trim();
    newEmoji = allEmoji.filter(emoji => emoji.title.includes(value));
    draw(newEmoji);
  }
  