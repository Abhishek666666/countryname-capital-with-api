const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country)
    // }
    countriesContainer=document.getElementById('country-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h3>Name:${country.name.common}</h3>
        <h4>capital:${country.capital ? country.capital[0] : 'no capital'}</h4>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `
        countriesContainer.appendChild(countryDiv);

    });
}
const loadCountryDetail = (code) => {
    console.log('get country detail', code)
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryDetail(data[0]))
    console.log(url);


}
const displayCountryDetail = country =>{
console.log(country)
const countryDetail = document.getElementById('country-detail');
countryDetail.innerHTML=`
<img src="${country.flags.png}">
<h1>details:${country.name.common}</h1>

`

}

loadCountries();