let arryPetsList = Pet.allPets;
const cardsContainer =  document.getElementById('cardsContainer');

cardsContainer.addEventListener('click', handleClick);

function handleClick(event) {
  let targetElement = event.target;
  if(targetElement.nodeName === 'IMG'){
    let object = Pet.allPets.filter(function (petObject) {
      return petObject.id == targetElement.id;
    });
    localStorage.setItem( 'selectedPet', JSON.stringify(object));

  }
  window.location.href = '/pet.html' ;
}


function render (array){
  clear ();
  renderObjects(array);
}

function clear (){
  document.getElementById('cardsContainer').innerHTML = '';
}


// arryPetsList[0].getPetsList()



function handleSubmit (event) {
  event.preventDefault();
  let type = event.target.petsType.value;
  let array = Pet.allPets[0].getPetsList(type);
  render(array);
}

const formEl = document.getElementById('filter');
formEl.addEventListener('submit', handleSubmit);

function renderObjects (array) {
  let inerContent = '';
  for (let i in array){
    inerContent+= `<img id="${array[i].id}" src="${array[i].image1}" alt="">`;
  }
  cardsContainer.innerHTML = inerContent;
}

render (arryPetsList);
