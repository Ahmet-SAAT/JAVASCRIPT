let maas = 30000;

if (maas > 10000) {
    console.log("hayatta kalir")
} else {
    console.log("hayatta kalamaz")
}

console.log(maas > 10000 ? "hayatta kalir" : "hayatta kalamaz");
console.log(maas > 30000 ? "iyi" : maas > 20000 ? "fena degil" : maas > 10000 ? "idare eder" : "az");