
let cities = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Delhi',
    'Puducherry',
    'Jammu and Kashmir',
    'Ladakh'
];

let flag=0

function ans(event){
    // console.log(event.target.value);

    let output=false;
    let city=document.getElementById("city").value;
    let maindiv=document.getElementById('res');

    //To clear the past result's output
    if (city.length === 0) {
        maindiv.style.display = 'none'; 
        return; 
    }

    //To clear the past div's
    if(flag){
        maindiv.textContent="";     
    }

    //To show the reults od the input
    maindiv.style.display='block';

    for(let i=0; i<cities.length; i++){
        if(cities[i].toLowerCase().includes(city.toLowerCase())){
            ansdiv(cities[i],maindiv);
            output=true;
        }
    }
    if(!output){
        let div=document.createElement('li');
        div.textContent="No Results Found";
        div.classList.add('resdiv');
        maindiv.appendChild(div);
    }

    flag=1;

};

function ansdiv(city,maindiv){
    let div=document.createElement('li');
    div.textContent=city;
    div.classList.add('resdiv');
    maindiv.appendChild(div);
}
    
let city=document.getElementById("city");
city.addEventListener('input',ans);



// footer 
function colour(color){
    const arrdiv=['header','footer'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}
    

