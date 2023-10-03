const celsiusField=document.querySelector("#celsius");
const degree=document.querySelector("#degree");
const convertBtn=document.querySelector("#converter");
const tempType=document.querySelector("#temp-Types");


window.addEventListener("load",() => {
    degree.value = "";
    celsiusField.innerHTML="";
})


convertBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    convertTocelsius();

    //add loading features
    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i></span>"
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000);
})

function convertTocelsius()
{
    let inputValue=degree.value;

    setTimeout(() => {
        if(tempType.value==="fahrenheit")
        {
            const fahrenhietTOcelsius = (inputValue -32) * (5/9);
            celsiusField.innerHTML = `${fahrenhietTOcelsius.toFixed(3)} &deg;
            c`;
        }
        else if(tempType.value === "Kelvin"){
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;
            c`;
        }
    }, 1200);
}
