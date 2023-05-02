function saveData(){
let Name=document.getElementById("name").value
let email=document.getElementById("email").value
let contact=document.getElementById("contact").value
let address=document.getElementById("address").value
let gender;
let genderList = document.querySelectorAll("#gender");
for(let item of genderList){
    if(item.checked == true){
        gender=(item.value);
    }
}

let languages="";
let languagesList = document.querySelectorAll("#Languages");
for(let Item of languagesList){
    if(Item.checked==true){
        languages = languages.concat(Item.value, ",");
    }
}
let hobbies = document.getElementById("hobbies").value;

localStorage.setItem("Name",Name);
localStorage.setItem("Email",email);
localStorage.setItem("Contact",contact);
localStorage.setItem("address",address);
localStorage.setItem("gender",gender);
localStorage.setItem("languages",languages);
localStorage.setItem("hobbies",hobbies);


document.getElementById("showbtn").style.display="inline";
}

function showData(){
let name=localStorage.getItem("Name");
let email=localStorage.getItem("Email");
let contact=localStorage.getItem("Contact");
let address =localStorage.getItem("address");
let gender=localStorage.getItem("gender");
let languages=localStorage.getItem("languages");
let hobbies =localStorage.getItem("hobbies");
document.getElementById("details").innerHTML=name+" "+email+" "+contact+" "+address+" "+gender+" "+languages+" "+hobbies;
document.getElementById("details").style.display="block";
}