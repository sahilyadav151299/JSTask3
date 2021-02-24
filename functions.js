'use strict'

// Employee Class For Employees Information
class Employee{

    constructor(empName, empAddress, empID, empDesignation){
        
        this.empName = empName;
        this.empAddress = empAddress;
        this.empID = empID;
        this.empDesignation = empDesignation; 
    }
}

// Funaction For Adding Employees Details In LocalStorage
function addEmpDetails(){

    let name = document.getElementById('empName').value;
    let address = document.getElementById('empAddress').value;
    let id = document.getElementById('empID').value;
    let designation = document.getElementById('empDesignation').value;
    
    let newEmp = new Employee(name, address, id, designation);
    
    if (typeof(Storage) !== "undefined")
    {
        localStorage.setItem(newEmp.empID, JSON.stringify(newEmp));
        alert("Added Succesfully!");

        document.getElementById('empName').value = '';
        document.getElementById('empAddress').value = '';
        document.getElementById('empID').value = '';
        document.getElementById('empDesignation').value = '';
    }
    //console.log(localStorage);
}

// Function Searches Employee Details Using Employee ID
function showDetails(){

    let key = document.getElementById('empID').value;
    let details = JSON.parse(localStorage.getItem(key));
    
    if(key!==""){
        try{
            document.getElementById('empName').value = details.empName;
            document.getElementById('empAddress').value = details.empAddress;
            document.getElementById('empDesignation').value = details.empDesignation;
        }catch(Error){
            document.getElementById('empID').value = '';
            document.getElementById('empName').value = '';
            document.getElementById('empAddress').value = '';
            document.getElementById('empDesignation').value = '';
    
            alert("Enter A Valid ID");
        }
    }
    else{
        alert("Enter A Valid ID");
    }
    //console.log(localStorage);
}


// Function For Updating Employee Information 
function updateProfile(){
    let key = document.getElementById('empID').value;
    let updateName = document.getElementById('empName').value;
    let updateAddress = document.getElementById('empAddress').value;
    let updateDesignation = document.getElementById('empDesignation').value;

    if(key==="" && updateName==="" && updateAddress==="" && updateDesignation==="")
    alert("Enter Valid Details");
    else
    {
        let updateEmp = new Employee(updateName, updateAddress, key, updateDesignation);

        if (typeof(Storage) !== "undefined")
        localStorage.setItem(key, JSON.stringify(updateEmp));
        
        alert('Updated Succesfully!');

        document.getElementById('empName').value = '';
        document.getElementById('empAddress').value = '';
        document.getElementById('empID').value = '';
        document.getElementById('empDesignation').value = '';
    }
    //console.log(localStorage);
}

// Function Displays All Employees Details In Tabular Form
let flag = true;  

function viewDetails()
{
    if(flag)  
    {
        let keys = Object.keys(localStorage);
        let row = keys.length;
        let col = 4;
        let header = ['ID','NAME','Designation','ADDRESS'];

        for(let r=0; r<row; r++)
        {
            let x = document.getElementById('myTable').insertRow(r);
            let values = JSON.parse(localStorage.getItem(keys[r]));
            let details = [values.empID, values.empName, values.empDesignation, values.empAddress];

            for(let c=0; c<col; c++)
            {
                let y = x.insertCell(c);
                y.innerHTML = details[c]; 
            }
        }

        for(let r=0; r<1; r++)
        {
            let x = document.getElementById('myTable').insertRow(r);

            for(let c=0; c<4; c++)
            {
                let y = x.insertCell(c);
                y.innerHTML = header[c]; 
            }
        }
        
        flag = false;
    }
}
