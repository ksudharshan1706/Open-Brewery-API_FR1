let newElement = document.createElement('div')
document.body.appendChild(newElement)


const getbrewery = async ()=>{
    const BreweryArea = document.getElementById('Brewery-area')
  try{
    const response = await fetch('https://api.openbrewerydb.org/breweries')
    console.log(response);
  const message = await response.json()
  console.log(message);

  message.forEach( async(message)=>{
    try{
        const BreweryName = document.getElementById('text-inp').value;
      const breweryResponse = await fetch('https://api.openbrewerydb.org/breweries/search?query={name}')

      const openbrewery = await breweryResponse.json()
      
      const {name,brewery_type,address_2,phone,website_url} = openbrewery
              console.log(`${message.name}(${message.phone})
              Name : ${message.name}
              brewery_type : ${message.brewery_type}
              Address : ${message.address_2}
              Phone No : ${message.phone}
              website_url : ${message.website_url}`)
    }catch(err){
      console.log(err);
    }
  })
  }
  catch(err){
    console.log(err);
  }

}

getbrewery()

