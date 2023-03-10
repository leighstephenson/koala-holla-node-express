console.log( 'js' );


//! We began to attempt this stretch, but ran out of time 
function transfer(){
  console.log('in transfer function');
  let readyForTransfer = document.querySelector('#readyForTransferIn').value;
  let updateButton = document.querySelector('#transfer');
  if (readyForTransfer === 'Y'){
    updateButton.style.display = "none";
  }
}
transfer();


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
  name: koalaName,
  age: age,
  gender: gender,
  ready_to_transfer: readyForTransfer,
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
   <td> ${koala.name} </td>
   <td> ${koala.age}  </td>
   <td> ${koala.gender} </td>
   <td> ${koala.ready_to_transfer}  </td>
   <td> ${koala.notes}</td>
  <td> <button onClick="readyforTransfer(transfer)">Ready for Transfer</button></td>
   <td><button id="deleteButton" onclick="deleteKoala(${koala.id})">Delete</button></td>
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

function deleteKoala(index) {
  console.log(`In delete function`);
  axios.delete(`/koalas/${index}`).then((response) => {
    console.log(response);
    getKoalas();
  }).catch((error) =>{
    console.log(error);
    alert('Something went wrong');
  })
};


