/* 
1-sayfada bir butn olacak
2-butona tiklandiginda bir fuction calisacak
3-calisan function body eementi icerisinde dark clasi olup olmadigina bakacak
4-varsa kaldiracak yoksa ekleyecek
*/

function setMode() {
    const body = document.querySelector("body");
    const isDark = body.classList.contains("dark");
    const btnToggle = document.querySelector(".toggle-btn");
    if (isDark) {
        body.classList.remove("dark")
        btnToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    } else {
        body.classList.add("dark")
        btnToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
}