const btns = document.querySelectorAll('.pageBtn');
for(let btn of btns){
    if(btn.value == 'None'){
        btn.setAttribute('disabled','disabled');
        btn.style.cursor = 'not-allowed';
    }
}


function toggleModal(){
    document.querySelector('.modal-container').style.display =
        document.querySelector('.modal-container').style.display !== 'flex' ? 'flex' : 'none';
}


const closeBtns = document.querySelectorAll('.closeBtn');
for(let closeBtn of closeBtns){
    closeBtn.addEventListener('click', toggleModal);
}


const modalBtns = document.querySelectorAll('.residents');
for(let modalBtn of modalBtns){
    modalBtn.addEventListener('click', function () {
        let modTable = document.querySelector('#mod-table');
        modTable.innerHTML = '';
        let modalTitle = document.querySelector('#modalTitle');
        modalTitle.textContent = `Residents of ${modalBtn.dataset.planet}`
        modTable.innerHTML = `
                  <tr>
                      <th>Name</th>
                      <th>Height</th>
                      <th>Mass</th>
                      <th>Hair Color</th>
                      <th>Skin Color</th>
                      <th>Eye Color</th>
                      <th>Birth Year</th>
                      <th>Gender</th>
                  </tr>
              `

        for(let link of eval(modalBtn.dataset.residents)){
            fetch(link)
            .then((response) => response.json())  // parse JSON format into JS object
            .then((data) => {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${data.name}</td>
                <td>${data.height}</td>
                <td>${data.mass}</td>
                <td>${data.hair_color}</td>
                <td>${data.skin_color}</td>
                <td>${data.eye_color}</td>
                <td>${data.birth_year}</td>
                <td>${data.gender}</td>
                `;
            modTable.appendChild(tr);
            console.log(data);
            });
            // console.log(link)
        }
    });

}
