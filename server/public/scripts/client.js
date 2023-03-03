console.log( 'js' );


function addKoala(event) {
  event.preventDefault();
  console.log('In addKoala function')
  let koalaName = document.querySelector('#nameIn').value;
  let age = document.querySelector('#ageIn').value;
  let gender = document.querySelector('#genderIn').value;
  let readyForTransfer = document.querySelector('#readyForTransferIn').value;
  let notes = document.querySelector('#notesIn').value;
// let markReady = document.querySelector('#markReadyIn').value;
// let remove = document.querySelector('#removeIn').value;

let koalaToAdd = { //starts new object
  koalaName: koalaName,
  age: age,
  gender: gender,
  readyForTransfer: readyForTransfer,
  notes: notes,
  // markReady: markReady,
  // remove: remove, 
}; //ends object
axios.post('/koalas', koalaToAdd).then((response)=> {
  console.log('response:', response);
getKoalas();
}).catch((error) => {
  console.log(error);
  alert('Something is wrong here...');
});
}// Ends addKoala function



function getKoalas(){
  console.log( 'in getKoalas' );
  axios.get('/koalas').then((response) => {
    console.log(response);
    let koalaArray = response.data;
    let contentDiv = document.querySelector('#viewKoalas');
    contentDiv.innerHTML = '';
    // Loop over array and append to the content div
   
    for(let koala of koalaArray) {
        contentDiv.innerHTML += `
   <tr> 
   <td> ${koala.koalaName} </td>
   <td> ${koala.age}  </td>
   <td> ${koala.gender} </td>
   <td> ${koala.readyForTransfer}  </td>
   <td> ${koala.notes}</td>
   <td> <button onClick="readyforTransfer(transfer)">Ready for Transfer</button></td>
   <td> <button onClick="deleteRow(button)">Delete</button></td>    
  </tr>  `; //^ Appends the DOM and creates 2 buttons
    }
}).catch((error) => {
    console.log(error);
    alert('Something went wrong.');
}); // ALWAYS add .catch
}; // end getKoalas
// Call the function
getKoalas();
  


function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();



function deleteRow(button){
  const row = button.parentNode.parentNode;
  const tbody = row.parentNode;
  tbody.removeChild(row);
// event.target.closest('th').remove();
}//End removeRow function

