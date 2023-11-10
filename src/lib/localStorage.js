function setItem(name, value){
    localStorage.setItem(name, value);

}
function getItem(name){
    localStorage.getItem(name)
}

function removeItem(name){
    localStorage.removeItem(name)
}

function setNewItem(){
    // localStorage.setItem(itemName,itemValue)
    var currentDate = new Date,
    dformat = [currentDate.getMonth()+1,
               currentDate.getDate(),
               currentDate.getFullYear()].join('/')+' '+
              [currentDate.getHours(),
               currentDate.getMinutes(),
               currentDate.getSeconds()].join(':');
    console.log(currentDate,'coucou')

  let options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  let formattedDate = currentDate.toLocaleDateString('fr-FR', options)
  console.log('allo',formattedDate,'coucou')
}

export default localStorage