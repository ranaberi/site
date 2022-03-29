const addEmp = document.querySelector(".addEmp");
const addbtn = document.querySelector(".addbtn");
const closebut = document.querySelector(".closebut");
const finAdd = document.querySelector(".finAdd");
const changeData = document.querySelector(".changeData");
const editBut = document.querySelector(".editBut");
const userDat = document.querySelector(".userDat");

const tabAdd = document.querySelector(".tabAdd");
const tabFix = document.querySelector(".tabFix");
const tabDel = document.querySelector(".tabDel");
const tabself = document.querySelector(".tabself");

const delBox  = document.querySelector(".delBox");
const closeIt = document.querySelector(".closeIt");
const delconf = document.querySelector(".delconf");

const editor = document.querySelector(".editor");
const closeEdit = document.querySelector(".closeEdit");

const cursAdd = document.querySelector(".cursAdd");
const closeAdd = document.querySelector(".closeAdd");


addbtn.addEventListener("click" , ()=>{
  addEmp.style.display = "grid";
})
closebut.addEventListener("click" , ()=>{
  addEmp.style.display = "none";
})
finAdd.addEventListener("click" , ()=>{
  addEmp.style.display = "none";
})
editBut.addEventListener("click" , ()=>{
  userDat.style.display = "none";
})
changeData.addEventListener("click" , ()=>{
  userDat.style.display = "flex";
})
tabself.addEventListener("click" , ()=>{
  tabAdd.style.display = "block";
  tabFix.style.display = "block";
  tabDel.style.display = "block";
})

tabDel.addEventListener("click" , ()=>{
  tabAdd.style.display = "none";
  tabFix.style.display = "none";
  tabDel.style.display = "none";
  delBox.style.display = "flex";
})
tabFix.addEventListener("click" , ()=>{
  tabAdd.style.display = "none";
  tabFix.style.display = "none";
  tabDel.style.display = "none";
  editor.style.display = "flex";
})
tabAdd.addEventListener("click" , ()=>{
  tabAdd.style.display = "none";
  tabFix.style.display = "none";
  tabDel.style.display = "none";
  cursAdd.style.display = "flex";
})

closeIt.addEventListener("click" , ()=>{
  delBox.style.display = "none";
})
closeEdit.addEventListener("click" , ()=>{
  editor.style.display = "none";
})
closeAdd.addEventListener("click" , ()=>{
  cursAdd.style.display = "none";
})


