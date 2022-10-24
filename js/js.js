let getJsonFile = (pathToFile) => {
    let request = new XMLHttpRequest();
    
    request.open("GET", pathToFile, false);
    request.send(null);
    
    let my_JSON_object = JSON.parse(request.responseText);
    
    return my_JSON_object;
  };
  const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/"); 
  let divpos = document.getElementById('divpos');
  /*Возвращает ссылку на элемент по его идентификатору (ID);
   идентификатор является строкой, которая может быть использована для идентификации элемента;
   она может быть определена при помощи атрибута id в HTML или из скрипта.*/
 
 
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
  /*Свойство интерфейса Element innerHTML устанавливает или получает HTML или XML разметку дочерних элементов.*/
 }

  draw (allEmoji);

  document.querySelector('#search').oninput = function()  
  /*Метод возвращает первый Documentэлемент в документе, который соответствует указанному селектору или группе селекторов.
  Если совпадений не найдено, возвращается. querySelector()Element ноль*/  
  {
    let value = this.value.trim();
    /*функция this которое в нестрогом режиме всегда является ссылкой на объект, а в строгом режиме может принимать любое значение.*/

    /*Метод trim() удаляет пробельные символы с начала и конца строки.*/

    newEmoji = allEmoji.filter(emoji => emoji.title.includes(value));
    /*Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.*/
    draw(newEmoji);

  }
  
  
