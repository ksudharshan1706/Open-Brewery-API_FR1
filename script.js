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
// inputTag.setAttribute('onkeyup',"SearchForBook()")

const displayDiv = document.getElementById("displaydiv")
displayDiv.className = "m-3"
displayDiv.style.height = "100px"
displayDiv.style.width = "200px"
displayDiv.style.backgroundColor = "white"
displayDiv.style.display = "None"
displayDiv.style.border = "2px solid"
const table = document.createElement('table')
// table.classList.add("table table-stripped")
table.className = "table table-hover mt-3"
const tablehead = document.createElement('thead')
tablehead.className="table table-dark"
const tablebody = document.createElement('tbody')
tablebody.id = "tablebody"
const tablerow = document.createElement('tr') 
const headFileds =  ['brewaryName','BrewaryInfo']
headFileds.map((data)=>{
  const headdata = document.createElement('td')  
  headdata.innerText = data
  tablerow.appendChild(headdata)
})
tablehead.append(tablerow)
table.append(tablehead,tablebody)
document.body.append(table)
table.style.display = "none"

const getbrewery = async ()=>{
    // const BreweryArea = document.getElementById('Brewery-area')
    const response = await fetch('https://api.openbrewerydb.org/breweries')
    console.log(response);
  const message = await response.json()
  console.log("here", message);
  globalData = message
  maxInd = message.length

  console.log(maxInd)
  globalData.forEach(({name,brewery_type,street,phone,website_url},index)=>{
    dataDict[name] =  `${brewery_type}\n${street}\n${phone}\n${website_url}\n`;
    // console.log(dataDict[name])

      const innertr = document.createElement('tr');
      const innername = createElements(name,'td');

      const innerIsbn = `${brewery_type}\n${street}\n${phone}\n${website_url}`
      // console.log(innerIsbn)
      innertr.append(innername,innerIsbn);
      tablebody.append(innertr)
})

}

getbrewery()

const submitbtn = document.querySelector("button")
submitbtn.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(inputTag.value,dataDict[inputTag.value])
  displayDiv.style.display = "block"
  displayDiv.className="simple-transition"
  displayDiv.innerText = dataDict[inputTag.value]
})
// const getBreweryDetails = () => {

// }

// function SearchForBook() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("text-inp");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("tablebody");
//   console.log(table)
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }
