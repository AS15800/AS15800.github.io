window.onload = () =>{
    let button = document.querySelector("#bmiCalculateBtn");

    //Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI(){
    let height = parseInt(document.querySelector("#heightInput").value);
    let weight = parseInt(document.querySelector("#weightInput").value);

    let result = document.querySelector("#result");

    if(height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height";

    else if(weight === "" || isNaN(weight))
        result.innerHTML = "Provide a value Weight";
}