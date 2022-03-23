
const mainBtn = document.querySelector('.main-btn')

function getAverageTemp (arrTemp){
let totalTemp =0 
  for (let i =0; i<24; i+=1){
    totalTemp += arrTemp[i]
  }
return totalTemp/24
}

const seeInfo = ()=>{
  const inputCountryData = document.getElementById('countryName').value
 
  console.log(country.ref_country_codes)

  const selectedCountry = country.ref_country_codes.filter(data => data.country.toLowerCase() ===  inputCountryData.toLowerCase())

  console.log(selectedCountry)

  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${selectedCountry[0].latitude}&longitude=${selectedCountry[0].longitude}&hourly=temperature_2m&timezone=Asia%2FSingapore&current_weather=true`)
  .then(response=>{
    console.log(response.data)
    console.log(response.data.hourly.temperature_2m)
    const averageTemp =  getAverageTemp(response.data.hourly.temperature_2m)
    const infoDiv = document.createElement('div')
    infoDiv.innerHTML= averageTemp

    const weatherWrapperDiv = document.querySelector('.weather-info')
    weatherWrapperDiv.appendChild(infoDiv)

    console.log(averageTemp)
    console.log(country)

  })
  .catch(error=>{
    console.log(error)
  })
}

mainBtn.addEventListener('click',seeInfo)

const queryField = document.querySelector('.queryField')
const inputField = document.createElement('input')
