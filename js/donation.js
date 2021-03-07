'use strict';
//--------------------------------pop-up ------------------------------------//
let modal = document.querySelector('.modal');
let trigger = document.querySelector('.trigger');
let closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

///////////////////////////////////////////////////////////////////////////////

// ---------------------------form --------------------------------------------//
const form = document.getElementById ('userDonationInput');
const credit = document.getElementById ('credit');
const bank = document.getElementById ('bank');

const paymentMethodInformation = document.getElementById ('paymentMethodInformation');

const renderCredit = function () {
  paymentMethodInformation.innerHTML = '';
  const creditElement1Label = document.createElement ('label');
  creditElement1Label.setAttribute ('for','bankNumber');
  creditElement1Label.textContent = ('Credit card number');
  const creditElement1 = document.createElement ('input');
  creditElement1.setAttribute ('type','number');
  creditElement1.setAttribute ('id','bankNumber');
  creditElement1.setAttribute ('name','bankNumber');

  paymentMethodInformation.appendChild (creditElement1Label);
  paymentMethodInformation.appendChild (creditElement1);

  const creditElement2Label = document.createElement ('label');
  creditElement2Label.setAttribute ('for','CreditCode');
  creditElement2Label.textContent = ('Credit card code');
  const creditElement2 = document.createElement ('input');
  creditElement2.setAttribute ('type','number');
  creditElement2.setAttribute ('id','CreditCode');
  creditElement2.setAttribute ('name','CreditCode');

  paymentMethodInformation.appendChild (creditElement2Label);
  paymentMethodInformation.appendChild (creditElement2);

  const creditElement3Label = document.createElement ('label');
  creditElement3Label.setAttribute ('for','expDate');
  creditElement3Label.textContent = ('expiration date');
  const creditElement3 = document.createElement ('input');
  creditElement3.setAttribute ('type','date');
  creditElement3.setAttribute ('id','expDate');
  creditElement3.setAttribute ('name','expDate');
  paymentMethodInformation.appendChild (creditElement3Label);
  paymentMethodInformation.appendChild (creditElement3);


  const creditElement4Label = document.createElement ('label');
  creditElement4Label.setAttribute ('for','cvv');
  creditElement4Label.textContent = ('CVV');
  const creditElement4 = document.createElement ('input');
  creditElement4.setAttribute ('type','number');
  creditElement4.setAttribute ('id','cvv');
  creditElement4.setAttribute ('name','cvv');
  paymentMethodInformation.appendChild (creditElement4Label);
  paymentMethodInformation.appendChild (creditElement4);
};

const renderBank = function (){
  paymentMethodInformation.innerHTML = '';
  const bankElement1Label = document.createElement ('label');
  bankElement1Label.setAttribute ('for','bankNumber');
  bankElement1Label.textContent = ('Bank account number');
  const bankElement1 = document.createElement ('input');
  bankElement1.setAttribute ('type','number');
  bankElement1.setAttribute ('id','bankNumber');
  bankElement1.setAttribute ('name','bankNumber');

  paymentMethodInformation.appendChild (bankElement1Label);
  paymentMethodInformation.appendChild (bankElement1);

  const bankElement2Label = document.createElement ('label');
  bankElement2Label.setAttribute ('for','CreditCode');
  bankElement2Label.textContent = ('bank card code');
  const bankElement2 = document.createElement ('input');
  bankElement2.setAttribute ('type','number');
  bankElement2.setAttribute ('id','CreditCode');
  bankElement2.setAttribute ('name','CreditCode');

  paymentMethodInformation.appendChild (bankElement2Label);
  paymentMethodInformation.appendChild (bankElement2);

  const creditElement3Label = document.createElement ('label');
  creditElement3Label.setAttribute ('for','expDate');
  creditElement3Label.textContent = ('expiration date');
  const creditElement3 = document.createElement ('input');
  creditElement3.setAttribute ('type','date');
  creditElement3.setAttribute ('id','expDate');
  creditElement3.setAttribute ('name','expDate');
  paymentMethodInformation.appendChild (creditElement3Label);
  paymentMethodInformation.appendChild (creditElement3);


  const creditElement4Label = document.createElement ('label');
  creditElement4Label.setAttribute ('for','cvv');
  creditElement4Label.textContent = ('CVV');
  const creditElement4 = document.createElement ('input');
  creditElement4.setAttribute ('type','number');
  creditElement4.setAttribute ('id','cvv');
  creditElement4.setAttribute ('name','cvv');
  creditElement4.setAttribute ('value', '');
  paymentMethodInformation.appendChild (creditElement4Label);
  paymentMethodInformation.appendChild (creditElement4);
  creditElement4.style.display = 'none';
  creditElement4Label.style.display = 'none';

};

credit.addEventListener('click' ,renderCredit);
bank.addEventListener('click', renderBank );


const leaveMessage = document.getElementById ('leavemessage');

///////////////////////////////////////////////////////////////////////////////
leaveMessage.addEventListener('click', function(event) {
  event.preventDefault ();
  let messageBox = document.createElement ('input');
  messageBox.setAttribute ('type','text');
  messageBox.setAttribute ('id','messageBox');
  messageBox.setAttribute ('placeholder','share your thoughts , stories or suggestions to us ');
  const messageSection = document.getElementById ('message');
  messageSection.appendChild (messageBox);
});


//-----------------------------constructor------------------------------------//
let otherAmount = document.getElementById ('otherAmount');




const amount25 = document.getElementById ('25');
const amount50 = document.getElementById ('50');
const amount100 = document.getElementById ('100');
const amount150 = document.getElementById ('150');
amount25.addEventListener('click', function(event) {
  event.preventDefault ();
  otherAmount.value = 25;

});
amount50.addEventListener('click', function(event) {
  event.preventDefault ();
  otherAmount.value = 50;

});
amount100.addEventListener('click', function(event) {
  event.preventDefault ();
  otherAmount.value = 100;

});
amount150.addEventListener('click', function(event) {
  event.preventDefault ();
  otherAmount.value = 150;

});
console.log (otherAmount);



let donationDataArray = getDonations () || [];
// let bankNumber = document.getElementById ('bankNumber');
// let expDate = document.getElementById ('expDate');
// let cvv = document.getElementById ('cvv');
let totalDonationsAmount = 0;
function totalDonations() {
  for (let i = 0 ; i < donationDataArray.length ; i++){
    let donationAmount = donationDataArray[i].amount;
    totalDonationsAmount = totalDonationsAmount + parseInt( donationAmount) ;

  }
  console.log (totalDonationsAmount);
  return totalDonationsAmount;
}
totalDonations ();

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const donorName = event.target.donorName.value;
  const emailAddress = event.target.emailAddress.value;
  const phoneNumber = event.target.phoneNumber.value;
  const otherAmount = event.target.otherAmount.value;
  let bankNumber = event.target.bankNumber.value;
  let expDate = event.target.expDate.value;
  let cvv = event.target.cvv.value;
  const messageBox = event.target.messageBox.value;



  let saveDon = new Donation (donorName,emailAddress,phoneNumber,otherAmount,bankNumber,expDate,cvv,messageBox);

  donationDataArray.push (saveDon);
  saveDonations (donationDataArray);
  console.log(donationDataArray);

  totalDonationsAmount+= parseInt (otherAmount);
  console.log (totalDonationsAmount);

 
});
addDonation();
function addDonation() {
  const updateData = localStorage.getItem('donations');
  if(updateData) {
    const objData = JSON.parse(updateData);
    donationDataArray = objData;

  }
}

console.log (totalDonationsAmount);
