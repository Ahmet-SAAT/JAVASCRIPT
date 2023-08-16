const salaryEl = document.querySelector("#salary")
const resultEl = document.querySelector("#result")

function setSalary() {
    const status =
        document.querySelector("input[name='status']:checked") ?
        document.querySelector("input[name='status']:checked").value :
        null;

    if (status) {
        console.log("burayi girdi")
        let salary = salaryEl.value;
        salary = status === "retired" ? salary * 0.9 : salary * 0.95;
        resultEl.innerText = `Bu emeklinin maasi ${salary.toixed} tl olarak hesaplanmistir`

    }



}