// function saveLead(){
//     console.log("Button Clicked")
// }
//let myLead=["amazon.com","flipkart.com","yahoo.com"]
let myLead=[]
//let leads=[]
//myLead=JSON.parse(myLead)
//myLead= JSON.stringify(myLead) //type: String
//myLead.push("amazon.com")
console.log(typeof myLead) //type: object

console.log(myLead)
const inputEl= document.getElementById("input-el") //const" cant be reasssigned 
const inputBtn= document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const deleteBtn= document.getElementById("delete-btn")
const tabBtn= document.getElementById("tab-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLead"))

console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLead= leadsFromLocalStorage
    renderLeads(myLead)
}

// const tabs=[
//     {url: "https://www.linkedin.com/in/neha-kadam-93b85a220/"}
// ]
tabBtn.addEventListener("click",function(){
   // console.log(tabs[0].url)

    //when active and currentWindow will be true the inside function will get trigerred
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
       // console.log(tabs)
        myLead.push(tabs[0].url)
        //tabs.url=""
        localStorage.setItem("myLead",JSON.stringify(myLead))
        renderLeads(myLead)
    })
})

//inputBtn.addEventListener("click",function()
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear(); //clear local Storage
    myLead=[] //clear leads
    renderLeads(myLead); //clear DOM
})


//both key and value in setItems must be StringsS
//localStorage.setItem("MyLeads","Hello there!")
// console.log(localStorage.getItem("MyLeads"))
// localStorage.clear()

// LocalStorage supports only strings. Use JSON.Stringify() and JSON.parse()
//parse: convert into array/object
//Stringify: convert into string
//comments are not allowed in JSON

//  .innerHTML : it wipes of the text given in html doc and writes the new next that we give in JS
inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    inputEl.value=""
    // console.log("Button clicked ")
    // console.log(myLead)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    renderLeads(myLead)
    
    console.log(localStorage.getItem("myLead"))
})
//var x= document.getElementById("input-el").value;
// inputBtn.addEventListener("click",function(){
//     myLead.push(x)
//     console.log(myLead)
// })





// for(let i=0;i<myLead.length;i++){
//     //I> method I
//    // ulEl.innerHTML+= "<li>"+myLead[i]+"</li>"

//    //II> Method II
//    //1.create element
//    const li= document.createElement("li")//->li:list
//    //2. set text content
//    li.textContent= myLead[i]
//    //3. append it to ul
//    ulEl.append(li)

  
// }

function renderLeads(leads){
let listItems=""
for(let i=0;i<leads.length;i++){
    //listItems+="<li><a target='_blank' href='"+myLead[i]+"'>"+myLead[i]+"</a></li>" //target='_blank' : to open link in new tab
    listItems+=
    `<li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
    </li>`
}
ulEl.innerHTML=listItems
}

// //eg of Template Strings/ Literals
// const receipt="James"
// let sender= "Ingdi"
// //const email= "heyy " +receipt+ "!How is it going, Cheers per"
// const email= 
// `heyy 
// ${receipt}!
// How is it going, Cheers 
// ${sender}`
// console.log(email)

//json: js Object Notation
// null: developer signifies emptiness
//undefined: js signifies emptiness 
//empty String is false value

// console.log(Boolean("")) //false
// console.log(Boolean("0")) //true
// console.log(Boolean(100))//true
// console.log(Boolean(null))//false
// console.log(Boolean([0])) //true
// console.log(Boolean(-0))// false


