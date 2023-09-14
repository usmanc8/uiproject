let updatedValues = JSON.parse(localStorage.getItem('formData') || '[]');

$('#formsub').click(function () {
   let formDataArray = [];

   document.querySelectorAll('.form-data').forEach(element => {
      formDataArray.push(element.value);
   });


   updatedValues[updatedValues.length] = {
      name: formDataArray[0],
      email: formDataArray[1],
      message: formDataArray[2]
   };

   localStorage.setItem('formData', JSON.stringify(updatedValues));

});


let html = '';


function updatedData() {
   for (let i = 0; i < updatedValues.length; i++) {
   
      html += `
      <div class="col-lg-3 col-md-6">
      <div class="card card-bg custom-card">
        <div class="card-header header-back">
            <button type="button" class="btn-close close-btn" aria-label="Close" delid="${i}"></button>
            <h3>${updatedValues[i].email}</h3>
        </div>
        <div class="card-body">
          <p>${updatedValues[i].message}</p>
        </div>
        <div class="card-footer">
          <img class="usermail-ico" src="images/icon-email.svg" alt="">
          <h6 class="user-mail">${updatedValues[i].name}</h6>
        </div>
      </div>
      </div>` ;
   } 
};

updatedData();

$('#uData').html(html);

$('#uData').click(function (e) {
   
   if (e.target.classList.contains('close-btn')) {
      
      let index = parseInt(e.target.getAttribute('delid'));
      console.log(index);
      updatedValues.splice(index, 1);
      localStorage.setItem('formData', JSON.stringify(updatedValues));
   }
   
   setInterval(() => {
      location.reload();
   }, 100);

});