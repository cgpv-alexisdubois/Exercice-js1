let age = 17
let agee = (age >= 0) ? "Age valide" : "Age invalide"
console.log(agee)

let majeurOuMineur = (age >= 18) ? "Tu es majeur" : "Tu es mineur"
console.log(majeurOuMineur)
let nombre = 3
let pairOuImpair = (nombre % 2 === 0) ? "Le nombre est pair" : "Le nombre est impair"
console.log(pairOuImpair)
let note = 91;
if (note >= 90) {
    console.log("Excellent")
} else if (note >= 75) {
    console.log("Très bien")
} else if (note >= 60) {
    console.log("Bien")
} else {
    console.log("Echec")
}
let temperature = 30
if (temperature < 0) {
    console.log("Il gele")
} else if (temperature > 0 && temperature <= 15) {
    console.log("Il fait frais")
} else if (temperature > 16 && temperature <= 25) {
    console.log("Temperature agreable")
} else {
    console.log("Il fait chaud!")
}
let connecte = true || false
let role = "admin" || "user"
if (connecte === true && role === "admin") {
    console.log("Bienvenue administrateur")
} else if (connecte === true && role === "user") {
    console.log("Bienvenue utilisateur")
} else if (connecte === true && role === "") {
    console.log("Bienvenue role inconnu")
} else {
    console.log("Acces refusé")
}