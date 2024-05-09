const day = document.querySelector("#userinputday");
const month = document.querySelector("#userinputmonth");
const year = document.querySelector("#userinputyear");

const dayerror = document.querySelector("#dayerror");
const montherror = document.querySelector("#montherror");
const yearerror = document.querySelector("#yearerror");

const outputyear = document.querySelector("#yearoutput");
const outputmonth = document.querySelector("#monthoutput");
const outputday = document.querySelector("#dayoutput");



const button = document.querySelector("#buttonclick")


// day validity

day.addEventListener('input', () => {
    const dayvalue = parseInt(day.value);
    if (dayvalue < 1 || dayvalue > 31) {
        dayerror.style.color = "red"
        dayerror.innerHTML = "day not valid"
        button.disabled = true;
    } else {
        dayerror.innerHTML = " ";
        button.disabled = false;
    }
})

month.addEventListener('input', () => {
    const monthvalue = parseInt(month.value);
    if (monthvalue < 1 || monthvalue > 12) {
        montherror.style.color = "red"
        montherror.innerHTML = "month not valid"
        button.disabled = true;
    } else {
        montherror.innerHTML = " ";
        button.disabled = false;
    }
})
year.addEventListener('input', () => {
    const yearvalue = parseInt(year.value);
    if (yearvalue < 1950 || yearvalue > 2050) {
        yearerror.style.color = "red"
        yearerror.innerHTML = "year not valid"
        button.disabled = true;

    } else {
        yearerror.innerHTML = " ";
        button.disabled = false;
    }
})


function isFormValid() {
    const dayvalue = parseInt(day.value);
    const monthvalue = parseInt(month.value);
    const yearvalue = parseInt(year.value);

    const isDayValid = dayvalue >= 1 && dayvalue <= 31;
    const isMonthValid = monthvalue >= 1 && monthvalue <= 12;
    const isYearValid = yearvalue >= 1950 && yearvalue <= 2050;

    return isDayValid && isMonthValid && isYearValid;


}

function updateButtonState() {
    button.disabled = !isFormValid();
}

day.addEventListener('input', updateButtonState);
month.addEventListener('input', updateButtonState);
year.addEventListener('input', updateButtonState);

updateButtonState();

button.addEventListener("click", () => {
    alert("jelafndjf")

    const dayvalue = parseInt(day.value);
    const monthvalue = parseInt(month.value);
    const yearvalue = parseInt(year.value);

    const date = new Date(year, month, day);
    const userdate = new Date(dayvalue,monthvalue,yearvalue);


})