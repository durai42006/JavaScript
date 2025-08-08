document.addEventListener("DOMContentLoaded", function () {});




async function deleteData(id) {
    await fetch(`http://localhost:3000/employees/${id}`, {
    method: "DELETE",
  })
console.log('deleted')
}

/* Get employee data */
async function getData() {
  await fetch("http://localhost:3000/employees", {
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
        data.forEach((item) => {
          const id =item.id;
          const  tr = $("<tr></tr>");
          tr.append(
            $("<td></td>").text(item.name),
             $("<td></td>").text(item.email),
             $("<td></td>").text(item.departmentId),
             $("<td></td>").text(item.joiningDate),
             $("<td></td>").text(item.salary),
             $('<td></td>"').append($("<button></button>").text("Edit").click(function(){
            console.log('Button is clicked for Edit');
            const obj={
              id:id,
              name:item.name,
              email:item.email,
              departmentId:item.departmentId,
              joiningDate:item.joiningDate,
              salary:item.salary,
            }
            localStorage.setItem('updateData',JSON.stringify(obj));
          })),
          $('<td></td>"').append($("<button></button>").text("Delete").click(function(){
            console.log('Button is clicked for Delete');
            deleteData(item.id);
          }))
          );
          table.append(tr);
        });
          
      }
    });
}

getData();


// Add employee
const addempBtn = $('#ad-emp');

addempBtn.click(function(){
    window.location.href='employee-page.html'
})