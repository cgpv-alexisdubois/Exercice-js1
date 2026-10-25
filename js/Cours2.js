function exercice1() {
    console.log("Exercice 1")
    return;
}
exercice1()
/**
 * Afficher la saison selon le mois
 * @param {string} saison
 * @returns la saison
 */

function Saison(saison) {
    let saison1 = "Saison invalide"
    switch (saison) {
        case "Decembre":
        case "janvier":
        case "fevrier":
            console.log("hiver");
            break
        case "Mars":
        case "arvril":
        case "mai":
            console.log("Printemps")
            break
        case "Juin":
        case "juillet":
        case "aout":
            console.log("ete")
            break
        case "Septembre":
        case "octobre":
        case "NovemnbrDe":
            console.log("automn")
            break
        default:
            return saison1
    }
    return saison1;
}
Saison("mai");


let monTableau = [1, 2, 3];
let tableau2 = ["Alexis", [95, 98, 61], "reussi"];
tableau2[0]
tableau2[1][1]
tableau2.push(3742) // Ajoute 3742 A la fin du tableau

// objets :  let personne {nom: "Alexis", age:46}
// Console.log(personne.nom)
//if (personne.age > 50)

/**
 * Majeur ou mineur
 * @param {Entier} age 
 * @returns 
 */
const estMajeur = (age) => {
    if (age >= 18) {
        console.log("true")
        return true
    }
    else {
        console.log("false")
        return false
    }
}
estMajeur(19)

function NomPrenom() {
    let prenom = prompt("Quel est ton prenom?")
    let nom = prompt("Quel est ton nom?")
    alert("Bonjour " + prenom + " " + nom)
}

