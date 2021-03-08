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
    setTimeout(carousel, 2500);
  }
}

const roomsCapacity = 50;
let totalDonation = 1350;
const totalPetsHelped = 773;


// Pet constuctor
const Pet = function Pet(id, name, age, type, image1, description, image2='', image3='') {
  this.id = id;
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
    for (let i in Pet.allPets){
      if(Pet.allPets[i].type === type){
        list.push(Pet.allPets[i]);
      }
    }
    return list;
  } else {
    return Pet.allPets;
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

function getAdoptions () {
  return JSON.parse(localStorage.getItem('adoptions'));
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
  new Pet(0,'Bella', 1 +' year','cat', '/assets/img/cats/cat1.jpg','Bella is one year old cat,dominant, good rat hunter and super lovely when she is hungry');
  new Pet(1,'Lucy', 9 + ' months', 'cat', '/assets/img/cats/cat2.jpg', 'Lucy is 9 months old, playful, Outgoing, curious and active');
  new Pet(2,'Lily', 4 + ' months', 'cat', '/assets/img/cats/cat3.jpg', 'Lily is only 4 months old, super playful and funny, friendly with averyone');
  new Pet(3, 'Spank', 2 + 'months', 'cat', '/assets/img/cats/cat4.jpg', 'Spank has been found abandoned in the street, he just started to eat and he uses the litterbox');
  new Pet(4,'Tidy', 5 + ' months','cat', '/assets/img/cats/cat5.jpg', 'Tidy is 5 months old, super moody, yet so funny');
  new Pet(5, 'Lola', 3 + ' years', 'cat','/assets/img/cats/cat6.jpg','Lola is 3 years old, super whie, super clean, and attention seeker.' );
  new Pet(6, 'Walter', 4 + ' years','cat','/assets/img/cats/cat7.jpg','Walter is 4 years old, lazy; loves to eat and sleep' );
  new Pet(7, 'Flufy', 5+ ' months', 'cat','/assets/img/cats/cat8.jpg', 'Flufy is young acive, funny and playful, loves to hide under covers' );
  new Pet(8, 'Prince', 1 + ' year', 'cat', '/assets/img/cats/cat9.jpg','Prince is funny playful, but shy, you won\'t find him easily if there was a straner around' );
  new Pet(9,'Ella', 6 + ' months', 'cat', '/assets/img/cats/cat9.jpg','Ella is a mix of Ragdol mom and Munchkin dad, most beautiful cat that you will ever meet');
  new Pet(10,'Bo', 1+ + ' year', 'dog','/assets/img/dogs/dog1.jpg','bo is a little  cute dog, yet he is so intelligent');
  new Pet(11, 'Hank',7 + ' years','dog', '/assets/img/dogs/dog2.jpg','Hank is an old loyal dog, just feed him and he will be super loyal ' );
  new Pet(12, 'Rex', 2 + ' years','dog', '/assets/img/dogs/dog3.jpg', 'Rix is bloody intelligent, fast and loyal' )
  new Pet(13, 'Rudy', 4 + ' years', 'dog', '/assets/img/dogs/dog4.jpg', 'Rudy is noisy sometimes but she is loyal and lovely, friendly with childeren');
  new Pet(14,'Max', 1 + ' year', 'dog', '/assets/img/dogs/dog5.jpg', 'Max is super fast, a good fried, and playful');
  new Pet(15, 'Oliver', 3 + ' years', 'dog','/assets/img/dogs/dog6.jpg', 'Oliver is brave, smart and fast');
  new Pet(16, 'Rocco', 2 + ' years', 'dog', '/assets/img/dogs/dog7.jpg', 'Rocco is a giant dog, smart and brave one too' );
  new Pet(17, 'Sam', 5 +' years', 'dog', '/assets/img/dogs/dog8.jpeg', 'Sam is an old smart dog');
  new Pet(18, 'Milo', 2+ ' years', 'dog','/assets/img/dogs/dog9.jpg', ' Milo is smart, fast and loyal' );
  new Pet(19, 'Cody', 1 + ' year', 'dog', '/assets/img/dogs/dog10.png', 'Cody is lyal, strong, and fast');
  new Pet(20, 'Shahm', 3+ ' years', 'other','/assets/img/others/horse1.jpeg', 'white arabian fast horse' );
  new Pet(21, 'Senator', 4 + ' years', 'other', '/assets/img/others/horse2.jpeg', 'Senator is a racing horse' );
  new Pet(22, 'Jade', 5+ ' Years', 'other', '/assets/img/others/horse3.jpeg', 'Jade is a rave fast horse');
  new Pet(23, 'Dolly', 1 + ' year', 'other', '/assets/img/others/lamb1.jpeg', 'Dolly is funny playful lamb');
  new Pet(24, 'Lola', 8 + ' Months', 'other','/assets/img/others/lamb2.jpeg', 'Lola is lovely and plaful' );
  new Pet(25, 'Lala', 9 + ' Months', 'other','/assets/img/others/lamb3.jpeg', 'A cute lamb' );
  new Pet(26, 'Boma', 1+ ' year', 'other', '/assets/img/others/owl1.jpeg', 'if you love owls, this is your chance');
  new Pet(27, 'Koko', 1 + 'month', 'other','/assets/img/others/owl2.jpg','Koko is a baby owl' );
  new Pet(28, 'Bugz', 4 +' months', 'other','/assets/img/others/rabbit1.jpeg', 'Bugs is 4 months rabbit');
  new Pet(29, 'Cinna', 6 + ' months', 'other', '/assets/img/others/rabbit2.jpeg', 'Cinna is a cute rabit');
  new Pet(30,'Oreo', 5 +' months', 'other','/assets/img/others/rabbit3.jpeg', 'Oreo is a smart lovely rabiti' );
    
}


// initialization
generatePetsObjects();


function updateDonationParagraph() {
  let totalDonationParagraph= document.getElementById ('total-donations');
  if (localStorage.getItem ('donations')){
    totalDonationParagraph.textContent = '';
    totalDonationParagraph.textContent = localStorage.getItem ('updateTotalDonation');
  }
}
updateDonationParagraph();
