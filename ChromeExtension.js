let myLead=[]

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

//json: js Object Notation
// null: developer signifies emptiness
//undefined: js signifies emptiness 
//empty String is false value




