let FullName = document.getElementById("FullName");
let numberUser = document.getElementById("numberUser");
let addUser = document.getElementById("addUser");
let exportdata = document.getElementById("exportdata");
let indexiUpdate;

var localstoregData = JSON.parse(localStorage.getItem("student")) || [];

function ClearAllData() {
    // alert("ok");
    localStorage.clear();
    location.reload();
}

if(localstoregData == ''){
    document.querySelector(".form_table").style.display = "none";
}


function showData(){
    exportdata.innerHTML = '';
    localstoregData.forEach((user, index)=>{
        exportdata.innerHTML +=`
        <tr>
            <td>${index +1}</td>
            <td>${user.FullName }</td>
            <td>${user.numberUser }</td>
            <td><button class="editButton" onclick="EditeUser(${index})">Edit</button></td>
            <td><button class="RemoveButton" onclick="RemoveUser(${index})">Remove</button></td>
        `
        })
}

addUser.addEventListener("click", () => {
    var datainter ={
            FullName : FullName.value,    
            numberUser : numberUser.value  
        }

    if(FullName.value && numberUser.value ){

    let typebutoon = addUser.textContent;
            if(typebutoon === "Craete"){
            localstoregData.push(datainter);
            localStorage.setItem("student", JSON.stringify(localstoregData));
            FullName.value = '';
            numberUser.value = '';
            showData();
        }else{
            
            localstoregData[indexiUpdate] = datainter;
            addUser.textContent = "Craete";
            localStorage.setItem("student", JSON.stringify(localstoregData));
            FullName.value = '';
            numberUser.value = '';
            showData();
            
        }
        
    }else{
        alert("enter name and number");
    }
})


function EditeUser(index) {
    
    FullName.value = localstoregData[index].FullName;
    numberUser.value = localstoregData[index].numberUser;
    addUser.textContent = "Update";
    indexiUpdate = index;
    let colorButton = document.querySelector(".addUser");
    colorButton.style.backgroundColor= "orange";
    

}

showData();


function RemoveUser(index) {
    localstoregData.splice(index , 1);
    localStorage.setItem("student", JSON.stringify(localstoregData));
    showData();  
}
