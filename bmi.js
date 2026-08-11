function Calculate()
{
    event.preventDefault()
    let Weight = document.getElementById("weight").value
    console.log(Weight);
    let Height = (document.getElementById("height").value)/100
    console.log(Height);

    if (Weight === "" || Height === "")
        alert("Please fill all the fields!");

    let BMI = (Weight/(Height*Height)).toFixed(2)
    console.log(BMI);

    // if (BMI <= 18.5)
    //     alert("Your are Underweight: Below 18.5")
    // else if (BMI <= 24.9)
    //     alert("Your are Normal weight: 18.5 to 24.9")
    // else if (BMI <= 29.9)
    //     alert("Your are Overweight: 25 to 29.9")
    // else
    //     alert("Your are Obese: 30 and above")

    if (Weight === 0 || Height === 0)
    {
        document.getElementById("result").textContent="Please fill all the fields!"
    }
    else if (BMI < 0 || BMI <= 18.5)
    {
        // result.textContent = "Your BMI is ${BMI.toFixed(2)} - Underweight";
        // alert("Your are Underweight: Below 18.5")
        document.getElementById("result").textContent="Your BMI is " + BMI + " - Underweight"
    }
    else if (BMI <= 24.9)
    {
        // result.textContent = "Your BMI is ${BMI.toFixed(2)} - Normal weight";
        // alert("Your are Normal weight: 18.5 to 24.9")
        document.getElementById("result").textContent="Your BMI is " + BMI + " - Normal weight"
    }
    else if (BMI <= 29.9)
    {
        // result.textContent = "Your BMI is ${BMI.toFixed(2)} - Overweight";
        // alert("Your are Overweight: 25 to 29.9")
        document.getElementById("result").textContent="Your BMI is " + BMI + " - Overweight"
    }
    else if (BMI > 30)
    {
        // result.textContent = "Your BMI is ${BMI.toFixed(2)} - Obese";
        // alert("Your are Obese: 30 and above")
        document.getElementById("result").textContent="Your BMI is " + BMI + " - Obese"
    }
}