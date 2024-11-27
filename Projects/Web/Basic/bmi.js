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

    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(1);

        if(bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;

        else if(bmi > 18.6 && bmi <24.9) result.innerHTML = `Normal : <span>${bmi}</span>`;

        else result.innerHTML = `Overr Weight : <span>${bmi}</span>`;
    }
}