'use strict';
let reservations = getBooks() || [];

const formElement = document.getElementById('hotel-form');

formElement.addEventListener('submit', handleSubmit);
const tableContentElement = document.getElementById('reservation-table');
tableContentElement.addEventListener('click', handleClick);

const dateControl = document.querySelector('input[type="date"]');
dateControl.value = new Date().toISOString().slice(0, 10);
dateControl.min = new Date().toISOString().slice(0, 10);

function handleClick(event) {
  let targetElement = event.target;
  if(targetElement.tagName === 'A'){
    let id = targetElement.id;
    reservations.splice(id, 1);
    saveBooks(reservations);
    renderTable();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const formEl = event.target;
  let name = formEl.name.value;
  let phone = formEl.phone.value;
  let petType = formEl.select_type.value;
  let date = formEl.date.value;
  let comment = formEl.comment.value;
  let newBook = new Book(name, phone, petType, date, comment);
  reservations.push(newBook);
  saveBooks(reservations);
  renderTable();
  formEl.reset();
  window.scrollTo(0,document.body.scrollHeight);
}

function renderTable() {
  let innerCode = `
    <tr>
        <th>Date</th>
        <th>Pet's Type</th>
        <th>Action</th>
    </tr>`;
  if(reservations.length > 0){
    for(let i in reservations){
      innerCode += `
        <tr>
            <td>${reservations[i].date}</td>
            <td>${reservations[i].petType}</td>
        `;
      if(new Date(reservations[i].date) >= new Date(new Date().toISOString().slice(0, 10))){
        innerCode += `<td><a id="${i}" class="cancel">Cancel</a></td></tr>`;
      } else {
        innerCode += '<td>-----------</td></tr>';
      }
    }
  } else {
    innerCode += '<tr style="display:flex; justify-content:center;"><td colspan="3">You dont have any previous reservation</td></tr>';
  }
  tableContentElement.innerHTML = innerCode;
}

renderTable();
