let reservations = getBooks() || [];

const formElement = document.getElementById('hotel-form');

formElement.addEventListener('submit', handleSubmit);
const tableContentElement = document.getElementById('reservation-table');
tableContentElement.addEventListener('click', handleClick);

function handleClick(event) {
  let targetElement = event.target;
  console.log(targetElement.tagName);
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
  let newBook = new Book(name, phone, petType, new Date(date), comment);
  reservations.push(newBook);
  saveBooks(reservations);
  renderTable();
  formEl.reset();
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
      if(new Date(reservations[i].date) > new Date()){
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
