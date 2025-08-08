function namevalidation(val) {
  if (val.length < 3) {
    $("#div-name").addClass("is-invalid");
    $("#dept-name").addClass("is-invalid");
    return false;
  } else {
    $("#div-name").removeClass("is-valid");
    $("#dept-name").removeClass("is-valid");
    $("#dept-name").addClass("is-valid");
    return true;
  }
}
function codeValidation(val) {
  if (val.length < 2) {
    $("#div-name").addClass("is-invalid");
    $("#dept-code").addClass("is-invalid");
    return false;
  } else {
    $("#div-name").removeClass("is-valid");
    $("#dept-code").removeClass("is-valid");
    $("#dept-code").addClass("is-valid");
    return true;
  }
}

const deptSubmit = $('#dept-submit');
deptSubmit.click(function(e){
e.preventDefault();
 const deptName=$('#dept-name').val();
 const deptCode=$('#dept-code').val();

 if(namevalidation(deptName) && codeValidation(deptCode)){
  const obj={
    name:deptName,
    code:deptCode
  }
  postData(obj)
 }
 else{
  console.log("Error occured !")
 }
})


// Post data
async function postData(obj) {
  const data = fetch("http://localhost:3000/departments", {
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


async function deleteData(id) {
    await fetch(`http://localhost:3000/departments/${id}`, {
    method: "DELETE",
  })
console.log('deleted')
}





async function getData() {
  await fetch("http://localhost:3000/departments", {
    method: "GET",
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.length == 0) {
       $('#toast-content').addClass('show');
      } else {
       const table = $("#t-body");
        data.forEach((item)=>
        {
            let tr = $("<tr></tr>");
            tr.append(
         $("<td></td>").text(item.id),
        $("<td></td>").text(item.name),
        $("<td></td>").text(item.code),
        $("<td></td>").append(
          $("<button>Edit</button>").click(function () {
              console.log('Edit button is clicked');
              const obj={id:item.id,name:item.name,code:item.code}
              insertForm(obj);
          })
        ),
        $("<td></td>").append(
          $("<button>Delete</button>").click(function () {
            console.log('Del clicked in dept')
            deleteData(item.id);
          })
        )
    )
    table.append(tr);  
        })
      } 
          
    }
)
}

getData();

const deptName = $('#dept-name');
const deptCode = $('#dept-code');


function insertForm(obj)
{
  deptName.val(obj.name);
  deptCode.val(obj.code);
}

const deptUpdate = $('#dept-update');
deptUpdate.click(function(e){
  e.preventDefault();
   const deptName=$('#dept-name').val();
 const deptCode=$('#dept-code').val();

 if(namevalidation(deptName) && codeValidation(deptCode)){
  const obj={
    name:deptName,
    code:deptCode
  }
  updateForm(obj)
 }
 else{
  console.log("Error occured !")
 }
})

async function updateForm(obj)
{
  await fetch(`http://localhost:3000/departments${obj.id}`, {
    method: "POST",
    body:JSON.stringify(obj)
  })

  console.log('Completed !');
}