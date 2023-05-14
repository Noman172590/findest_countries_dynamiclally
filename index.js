const btn=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayData(data))
}

const displayData=(data)=>{

    const divdata=document.getElementById('name_id')
    


    data.forEach(country=>{
        
        const div=document.createElement('div')
        div.classList.add('div')
        div.innerHTML=`<h1>Name:${country.name.common}</h1>
        
        <h3>Capital:${country.capital ? country.capital[0] : 'no capital'}</h3>

        <button onclick="button_data('${country.cca2}')" class="btnInside">Details</button>
        `
            
        divdata.appendChild(div)
    })

    

}

const button_data=btnData=>{

             const url=`https://restcountries.com/v3.1/alpha/${btnData}`
             
             fetch(url)
             .then(res=>res.json())
             .then(data=>DetailsData(data[0]))


}

const DetailsData=country=>{
    console.log(country)

    const details_all=document.getElementById('details_all')
    details_all.innerHTML=` <h1>Country Name: ${country.name.common}</h1>
    <h3> Capital:${country.capital ? country.capital[0] : 'no capital'}</h3>
    <img src="${country.flags.png}" alt="">`
}

btn()