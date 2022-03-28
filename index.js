const addEmp = document.querySelector(".addEmp");
const addbtn = document.querySelector(".addbtn");
const closebut = document.querySelector(".closebut");
const finAdd = document.querySelector(".finAdd");
const changeData = document.querySelector(".changeData");
const editBut = document.querySelector(".editBut");
const userDat = document.querySelector(".userDat");



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