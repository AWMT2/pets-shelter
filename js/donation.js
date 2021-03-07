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
    console.log (5);
  const creditElement1Label = document.createElement ('label');
  creditElement1Label.setAttribute ('for','CreditNumber');
  creditElement1Label.textContent = ('Credit card number');
  const creditElement1 = document.createElement ('input');
  creditElement1.setAttribute ('type','number');
  creditElement1.setAttribute ('id','CreditNumber');
  creditElement1.setAttribute ('name','CreditNumber');

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
};

const renderBank = function (){
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
  bankElement2Label.setAttribute ('for','bankCode');
  bankElement2Label.textContent = ('bank card code');
  const bankElement2 = document.createElement ('input');
  bankElement2.setAttribute ('type','number');
  bankElement2.setAttribute ('id','bankCode');
  bankElement2.setAttribute ('name','bankCode');

  paymentMethodInformation.appendChild (bankElement2Label);
  paymentMethodInformation.appendChild (bankElement2);
};

credit.addEventListener('' ,renderCredit);
bank.addEventListener('click', renderBank );


// const leaveMessage = document.getElementById ('leavemessage');


// let messageBoxRender = function (){
//   let messageBox = document.createElement ('input');
//   messageBox.setAttribute ('type','text');
//   messageBox.setAttribute ('id','messageBox');
//   messageBox.setAttribute ('value','share your thoughts , stories or suggestions to us ');
// //   messageBox.onclick (');
//   const messageSection = document.getElementById ('message');
//   messageSection.appendChild (messageBox);
// };

// leaveMessage.onclick (messageBoxRender ());
