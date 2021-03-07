// slider

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('imageSlider');
  if(x.length > 0){
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1;}
    x[slideIndex-1].style.display = 'block';
    setTimeout(carousel, 2000);
  }
}

const roomsCapacity = 50;
const totalDonation = 1350;
const totalPetsHelped = 773;


// Pet constuctor
const Pet = function Pet(name, age, type, image1, description, image2='', image3='') {
  this.name = name;
  this.age = age;
  this.type = type;
  this.image1 =image1;
  this.image2 = image2;
  this.image3 = image3;
  this.description = description;
  Pet.allPets.push(this);
};

Pet.allPets = [];

Pet.prototype.getPetsList = function (type='') {
  if(type){
    let list = [];
    for (let i in this.allPets){
      if(this.allPets[i].type === type){
        list.push(this.allPets[i]);
      }
    }
    return list;
  } else {
    return this.allPets;
  }
};

// Adoption constructor

const Adoption = function Adoption(name, phoneNumber, address, pet) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.address = address;
  this.pet = pet;
};

function saveAdoptions (adoptionsArray) {
  localStorage.setItem('adoptions', JSON.stringify(adoptionsArray));
}


// Donation constructor

const Donation = function Donation(name, email, phoneNumber, amount, bankNumber, expData='', cvv='', message='') {
  this.name = name;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.amount = amount;
  this.cardHolder = bankNumber;
  this.expData = expData;
  this.cvv = cvv;
  this.message = message;
};

function saveDonations (donationsArray) {
  localStorage.setItem('donations', JSON.stringify(donationsArray));
}

function getDonations () {
  return JSON.parse(localStorage.getItem('donations'));
}


// Booking constructor

const Book = function Book(name, phoneNumber, pitType, date, comment='') {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.petType = pitType;
  this.date = date;
  this.comment = comment;
};

function saveBooks(booksArray) {
  localStorage.setItem('books', JSON.stringify(booksArray));
}

function getBooks () {
  return JSON.parse(localStorage.getItem('books'));
}


function generatePetsObjects() {
  for(let i = 0; i < 20; i++){
    new Pet(
      'name'+i,
      7,
      i%2 ? 'cat': 'dog',
      'https://via.placeholder.com/250x250?text=Pet'+i,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ut modi pariatur aliquid magni '
    );
  }

  new Pet(
    'name other',
    7,
    'other',
    'https://via.placeholder.com/250x250?text=Pet',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ut modi pariatur aliquid magni '
  );
}

// initialization
generatePetsObjects();
