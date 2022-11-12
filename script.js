var globalData = []
var maxInd = 0
var dataDict = {}
const createElements = (info,type) =>{
  const element = document.createElement(type)
  element.innerText = info
  return element
}
let newElement = document.createElement('div')
document.body.appendChild(newElement)

const inputTag = document.getElementById("text-inp")

const displayDiv = document.getElementById("displaydiv")
displayDiv.className = "m-3"
displayDiv.style.display = "None"
displayDiv.style.border = "2px solid"
const table = document.createElement('table')
const getbrewery = async ()=>{
    const response = await fetch('https://api.openbrewerydb.org/breweries')
    console.log(response);
  const message = await response.json()
  console.log("here", message);
  globalData = message
  maxInd = message.length

  console.log(maxInd)
  globalData.forEach(({name,brewery_type,street,phone,website_url},index)=>{
    dataDict[name] =  `${brewery_type}\n${street}\n${phone}\n${website_url}\n`;  
})

}

getbrewery()

const submitbtn = document.querySelector("button")
submitbtn.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log("here",dataDict)
  console.log(inputTag.value,dataDict[inputTag.value])
  displayDiv.style.display = "block"
  displayDiv.classList.add("simple-transition")
  displayDiv.innerText = dataDict[inputTag.value]
})
