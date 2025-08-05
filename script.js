/* Element creation */
const form = document.getElementById('form');
const table = document.createElement("table");
const displayArea=document.getElementById('display');
displayArea.append(table);
function createElements()
{
const tr = document.createElement("tr");

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const th5 = document.createElement("th");
const th6 = document.createElement("th");

th1.textContent="No"
th2.textContent="Title";
th3.textContent="Description";
th4.textContent="Priority";
th5.textContent="Date";
th6.textContent="Status";

const th7 = document.createElement("th");
const th8 = document.createElement("th");
const th9 = document.createElement("th");

th7.textContent="Edit";
th8.textContent="Delete";
th9.textContent="Updated Date"

tr.append(th1,th2,th3,th4,th5,th6,th9,th7,th8);
table.append(tr);


table.classList.add('table-border');
th1.classList.add('table-border');
th2.classList.add('table-border');
th3.classList.add('table-border');
th4.classList.add('table-border');
th5.classList.add('table-border');
th6.classList.add('table-border');
th7.classList.add('table-border');
th8.classList.add('table-border');
th9.classList.add('table-border');
}

/* Element creation end */


/* 1.	Fetch and Display Tasks: */
async function getdata() {
    try{
        createElements();
        const data = await fetch('http://localhost:3000/tasks');
        const tasks = await data.json();
        const arr = Array.from(tasks);
        if(arr.length==0)
        {
            const message = document.createElement("h2");
            message.textContent="No tasks";
            displayArea.removeChild(table);
            displayArea.append(message);
            console.log("Empty")
        }
        else
        {
            tasks.forEach( (item)=>{

            const tr = document.createElement("tr");
            const editBtn = document.createElement("button");
            const deleteBtn = document.createElement("button");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            
            editBtn.id=item.id;
            deleteBtn.id=item.id;

            editBtn.classList.add('edit-btn');
            deleteBtn.classList.add('delete-btn');


            // console.log("Edit btn id :",editBtn);
            // console.log("delete btn : ",deleteBtn);
        
            for(let i in item)
            {
                const td = document.createElement("td");
                td.textContent=item[i];
                tr.append(td);
                td.classList.add('table-border');
            }
            
            
            editBtn.textContent="Edit";
            deleteBtn.textContent="Delete"


            td1.classList.add('table-border');
            td2.classList.add('table-border');
            td1.append(editBtn);
            td2.append(deleteBtn);
            tr.append(td1,td2);
            table.append(tr);

        })
        }
    }
    catch(err)
    {
        console.log('Error : ',err);
    }
    
}



getdata();








/* Fetch and display end */

form.addEventListener("submit",function(e){
    e.preventDefault();
})


const title = document.getElementById('title');
const description = document.getElementById('description');
const priority = document.getElementById('priority');
const isDone = document.getElementById("isDone");
const submitButton = document.getElementById('submit-btn');


submitButton.addEventListener('click', async function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    let id;
    try{
        id=Number( await lastID());
        id++;
    }
    catch(e)
    {
        console.log("submit event error : ",e.message)
    }
    
    const inputData={
        "id": `${id}`,
      "title": `${title.value}`,
      "description": `${description.value}`,
      "priority": `${priority.value}`,
      "createdDate": `${new Date().toUTCString()}`,
      "isDone": `${isDone.value}`,
      "updatedDate": `${isDone.value}`
    }

    postdata(inputData);
    
    insertDataLocalStorage(inputData);
})


// Get last id for insert proper id while post method
async function lastID()
{
    let id;   
    try
    {
        const data = await fetch('http://localhost:3000/tasks');
        const tasks = await data.json();
        const arr = Array.from(tasks);
        let last=arr[arr.length-1];
        id=last.id;
        console.log("lase id",id);
    }
    catch(e)
    {
        console.log("Error : ",e.message);
    }
    
    return id;
}

// Post data on Json server
async function postdata(inputdata) {
    try{
        const data = await fetch('http://localhost:3000/tasks',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(inputdata)
        });
        const tasks = await data.json();
    }
    catch(err)
    {
        console.log('Error : ',err);
    }
}


//localStorage
function insertDataLocalStorage(inputData)
{
    for(let i in inputData)
    {
        localStorage.setItem(i,inputData[i]);
    }  
}

// function getLocalStorage()
// {
//     console.log("work")
//     for(let i=0;i<localStorage.length;i++)
//     {
//        let output = localStorage.key(i);
//        console.log("Output : ",output);
//     }
// }

// getLocalStorage();




async function update(btnID)
{
    const data = await fetch(`http://localhost:3000/tasks/${btnID}`);
    console.log("Data : ", await data.json);

}

async function up()
{
    const data = await fetch('http://localhost:3000/tasks');
    const tasks = await data.json();
    const arr = Array.from(tasks);
    for(let i=1;i<=arr.length;i++)
    {
        const btn = document.getElementById(`${i}`);
        btn.addEventListener('click',function(e)
    {
        if(btn.classList.contains('edit-btn'))
        {
            console.log(' I am clicked if');
            for(let i of arr)
            {
                if(i==arr[btn.id])
                {
                    console.log(arr);
                    document.getElementById('title').value=(i.title);
                    document.getElementById('description').value=(i.description);
                    document.getElementById('priority').value=(i.priority);
                    const done =document.getElementById('isDone').value;
                    if(i.isDone=='true')
                        {
                            done=true;
                        }
                    else{
                        done=false;
                    }
                }
                
            }

        }
        else
            {
            console.log('I amd clicked else')
        }
    })
    }
}

up();


// updatedata();
async function updatedata() {
    try{
        const data = await fetch('http://localhost:3000/tasks',{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
        //    body:
        });
        const tasks = await data.json();
    }
    catch(err)
    {
        console.log('Error : ',err);
    }
}


//for Delete
async function deletedata(id) {
    try{
        const data = await fetch(`http://localhost:3000/tasks/${id}`,{
            method:'DELETE'
        });
        const tasks = await data.json();
        console.log('Successfully deleted !')
    }
    catch(err)
    {
        console.log('Error : ',err);
    }
}


//search

const search = document.getElementById('search');

const displayfilter=document.getElementById('filtered');
const table2 = document.createElement("table2");


search.addEventListener('input',function(e)
{
    console.log("Started")
    filterData(e.target.value);
})

function filteredArea()
{


const tr = document.createElement("tr");

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const th5 = document.createElement("th");
const th6 = document.createElement("th");

th1.textContent="No"
th2.textContent="Title";
th3.textContent="Description";
th4.textContent="Priority";
th5.textContent="Date";
th6.textContent="Status";

const th7 = document.createElement("th");
const th8 = document.createElement("th");
const th9 = document.createElement("th");

th7.textContent="Edit";
th8.textContent="Delete";
th9.textContent="Updated Date"

tr.append(th1,th2,th3,th4,th5,th6,th9,th7,th8);
table2.append(tr);


table2.classList.add('table-border');
th1.classList.add('table-border');
th2.classList.add('table-border');
th3.classList.add('table-border');
th4.classList.add('table-border');
th5.classList.add('table-border');
th6.classList.add('table-border');
th7.classList.add('table-border');
th8.classList.add('table-border');
th9.classList.add('table-border');
}


async function filterData(value)
{
    filteredArea();
    try{

    
    const data = await fetch('http://localhost:3000/tasks');
    const tasks = await data.json();
    const arr = Array.from(tasks);
    tasks.forEach((item)=>{

        if((item.title).toLowerCase().includes(value.toLowerCase()))
        {
            const tr = document.createElement("tr");
            const editBtn = document.createElement("button");
            const deleteBtn = document.createElement("button");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            
            editBtn.id=item.id;
            deleteBtn.id=item.id;

            editBtn.classList.add('edit-btn');
            deleteBtn.classList.add('delete-btn');

            for(let i in item)
            {
                const td = document.createElement("td");
                td.textContent=item[i];
                tr.append(td);
                td.classList.add('table-border');
            }
            
            
            editBtn.textContent="Edit";
            deleteBtn.textContent="Delete"


            td1.classList.add('table-border');
            td2.classList.add('table-border');
            td1.append(editBtn);
            td2.append(deleteBtn);
            tr.append(td1,td2);
            table2.append(tr);

        }
    
        displayfilter.append(table2);
    })
    }
    catch(err)
    {
        console.log('Error : ',err);
    }
    
}