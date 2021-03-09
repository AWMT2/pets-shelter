'use strict';
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close-button');
let adoptionsArray = getAdoptions() || [];

function toggleModal() {
  if(modal.classList.length > 1){
    let submitBtnEl = document.getElementById('submitBtn');
    let adoptBtn = document.getElementById('adopt_now');
    submitBtnEl.setAttribute('disabled', 'disabled');
    adoptBtn.setAttribute('disabled', 'disabled');
    formSection.style.display = 'none';
  }
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

let adoptions = getAdoptions() || [];

let formSection = document.getElementsByClassName('form_section')[0];
const formEl = document.getElementById('adopting');
formEl.addEventListener('submit', handleSubmit);

const adoptButtonEl = document.getElementById('adopt_now');
adoptButtonEl.addEventListener('click', showForm);

let selectedPet = localStorage.getItem('selectedPet');
if(selectedPet){
  selectedPet = JSON.parse(selectedPet)[0];
  for(let i in adoptionsArray){
    if(adoptionsArray[i].pet.id === selectedPet.id){
      let adoptNowBtn = document.getElementById('adopt_now');
      adoptNowBtn.setAttribute('disabled', 'disabled');
    }
  }
}

function showForm() {
  formSection.style.display = 'flex';
  window.scrollTo(0,document.body.scrollHeight);
}

function renderPet() {
  const petImageEl = document.getElementById('pet_image');
  const nameEl = document.getElementById('name');
  const ageEl = document.getElementById('age');
  const descriptionEl = document.getElementById('description');
  petImageEl.src = selectedPet.image1;
  nameEl.textContent = selectedPet.name;
  ageEl.textContent = selectedPet.age;
  descriptionEl.textContent = selectedPet.description;
}

function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let phone = event.target.phone.value;
  let address = event.target.address.value;
  let newAdoption = new Adoption(name, phone, address, selectedPet);
  adoptions.push(newAdoption);
  saveAdoptions(adoptions);
  toggleModal();
}

if(selectedPet){
  renderPet();
} else {
  window.location.href = 'list.html';
}

