// Load local storage data
document.addEventListener('DOMContentLoaded',function()
{
  const data =JSON.parse(localStorage.getItem('updateData'));
  if(data !== null)
  {
    console.log(data);
    localId=data.id;
     const name = $("#emp-name").val(data.name);
  const email = $("#emp-mail").val(data.email);
  const dept = $("#dept-input").val(data.departmentId);
  const joinDate = $("#emp-date").val(data.joiningDate);
  const salary = $("#emp-salary").val(data.salary);
  }
  else{
    console.log('No local data')
  }
})


/* Select button data */
const selectBtn = $("#dept-input");

async function getData() {
  await fetch("http://localhost:3000/departments", {
    method: "GET",
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      data.forEach((item) => {
        selectBtn.append($("<option></option>").text(`${item.name}`));
      });
    });
}

getData();

/* Form submission */
const form = $("#emp-form");
const submitBtn = $("#emp-form-submit");

form.submit(function (e) {
  e.preventDefault();
});



/* Update button submission with function */
const postBtn = $("#emp-form-post");
postBtn.click(function(e){
  e.preventDefault();

  const name = $("#emp-name").val();
  const email = $("#emp-mail").val();
  const dept = $("#dept-input").val();
  const joinDate = $("#emp-date").val();
  const salary = $("#emp-salary").val();

    if(namevalidation(name) && mailValidation(email) && dateValidation(joinDate) && salaryValidation(salary))
    {
        const obj={
            name,email,dept,joinDate,salary
        }
          const data =JSON.parse(localStorage.getItem('updateData'));
          let localID=data.id;
        updateData(obj,localID);
        localStorage.removeItem('updateData');
        window.location.href='dashboard.html'
    }
    else{
        console.log('Something is wrong')
    }
})


/* All validation functions */
function salaryValidation(val) {
    if (val < 0) {
      $("#div-salary").addClass("is-invalid");
      $("#emp-salary").addClass("is-invalid");
      return false;
    } else {
      $("#div-salary").removeClass("is-invalid");
      $("#emp-salary").removeClass("is-invalid");
      $("#emp-salary").addClass("is-valid");
      return true;
    }
  }

   function dateValidation(val) {
    const currentDate = new Date().getTime();
    const enteredDate = new Date(val).getTime();
    if (enteredDate > currentDate && val != null) {
      $("#div-date").addClass("is-invalid");
      $("#emp-date").addClass("is-invalid");
      return false;
    } else {
      $("#div-date").removeClass("is-invalid");
      $("#emp-date").removeClass("is-invalid");
      $("#emp-date").addClass("is-valid");
      return true;
    }
  }
function namevalidation(val) {
  if (val.length < 3) {
    $("#div-name").addClass("is-invalid");
    $("#emp-name").addClass("is-invalid");
    return false;
  } else {
    $("#div-name").removeClass("is-valid");
    $("#emp-name").removeClass("is-valid");
    $("#emp-name").addClass("is-valid");
    return true;
  }
}

function mailValidation(val) {
  const mailPattern = /^[a-zA-Z/d.-]@[a-zA-z.-].\[a-zA-z]{2,}$/;
  if (!val.includes('@')) {
    $("#div-mail").addClass("is-invalid");
    $("#emp-mail").addClass("is-invalid");
    return false;
  } else {
    $("#div-mail").removeClass("is-invalid");
    $("#emp-mail").removeClass("is-invalid");
    $("#emp-mail").addClass("is-valid");
    return true;
  }
}




  /* Submit button click */
submitBtn.click(function (e) {
  e.preventDefault();

  const name = $("#emp-name").val();
  const email = $("#emp-mail").val();
  const dept = $("#dept-input").val();
  const joinDate = $("#emp-date").val();
  const salary = $("#emp-salary").val();

    if(namevalidation(name) && mailValidation(email) && dateValidation(joinDate) && salaryValidation(salary))
    {
        const obj={
            name,email,dept,joinDate,salary
        }
        postData(obj);
    }
    else{
        console.log('Something is wrong')
    }
});








// Post data
async function postData(obj) {
  const data = fetch("http://localhost:3000/employees", {
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then(function () {
      console.log("Successfully posted");
    })
    .catch(function (e) {
      console.log("Error occur while posting data : ", e);
    });
}


// Put data or Update data
async function updateData(obj, id) {
  const data = fetch(`http://localhost:3000/employees/${id}`, {
    method: "PUT",
    body: JSON.stringify(obj),
  })
    .then(function () {
      console.log("Successfully updated");
    })
    .catch(function (e) {
      console.log("Error occur while updating data : ", e);
    });
}
