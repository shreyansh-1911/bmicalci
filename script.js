let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let answer = document.querySelector(".output h1");
    

    if (height == "" || weight == "" || height < 0 || weight < 0) {
        alert("Invalid !!");
    }
    else {
        height = height / 100;
        let bmi = (weight / (height ** 2)).toFixed(2);
        console.log(bmi);
        let status = "";
        let comment = document.querySelector(".container p span");
        if (bmi < 18.5) {
            status = "UnderWeight."
            comment.style.color = "blue";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            status = "Normal."
            status.style.color = "green";
        }
        else if (bmi >= 25 && bmi < 30) {
            status = "OverWeight."
            comment.style.color = "yellow";
        }
        else if (bmi >= 30 && bmi < 35) {
            status = "Obese."
            comment.style.color = "orange";
        }
        else {
            status = "Extremely Obese."
            comment.style.color = "red";
        }
        answer.innerHTML = bmi;
        comment.innerHTML = status;
    }
})

