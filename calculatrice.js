var aff = document.getElementById("aff");
function touche(chaine) {
    var valeur = aff.textContent;
    // Traitement des cas d'erreurs particuliers
    if (valeur == "") {
        if (chaine == "*" || chaine == "/" || chaine == "+" || chaine == ")") {
            aff.textContent = "";
        }
        else if (str == "-") {
            aff.textContent = "(-";
        }
        else {
            aff.textContent = chaine;
        }
    }
    
    // On ne peut pas commencer par un point 
    else if (valeur.substr(-1) == "." && chaine == ".") {
        aff.textContent = "ERROR";
    }
    // Ni par deux signes d'affilés
    else if (chaine.substr(-1) == "*" || chaine.substr(-1) == "/" || chaine.substr(-1) == "+" || chaine.substr(-1) == "-" || chaine.substr(-1) == "(") {
        if (chaine === "*" || chaine === "/" || chaine === "+" || chaine === "-" || str == ")") {
            aff.textContent = "ERROR";
        }
        else {
            aff.textContent = valeur + chaine;
        }
    }
    else if (chaine == "(") {
        aff.textContent = valeur + "*(";
    }
    else if (valeur == "Erreur" || val == "NaN") {
        if (str == "*" || str == "/" || str == "+" || str == ")") {
            aff.textContent = "";
        }
        else if (str == "-") {
            aff.textContent = "(-";
        }
        else {
            aff.textContent = str;
        }
    }
    else {
        aff.textContent = valeur + chaine;
    }
}
function supprimertout() {
    aff.textContent = "";
}
function del() {
    if (aff.textContent == "ERROR" || aff.textContent == "NaN") {
        aff.textContent = "";
    }
    else if (aff.textContent != "") {
        aff.textContent = aff.textContent.substr(0, aff.textContent.length - 1);
    }
}
function calcul() {
    function cal(ajout, chaine) {
        if (ajout == "Erreur" || aux == "NaN") {
            return "Erreur";
        }
        else if (chaine == "") {
            return ajout;
        }
        else {
            var car = chaine.substr(0, 1);
            if (car == "(") {
                var i = 0;
                var parcours = 1;
                while (i < chaine.length && parcours > 0) {
                    i++;
                    if (chaine.substr(i, 1) == '(') {
                        parcours++;
                    }
                    else if (chaine.substr(i, 1) == ')') {
                        parcours--;
                    }
                }
                if (parcours == 0) {
                    return calcul(calcul("", chaine.substr(1, i - 1)), chaine.substr(i + 1));
                }
                else {
                    alert("Problème de parenthèse");
                    return "Erreur";
                }
            }
        // Cas de la division
        else if (car == "/") {
                var ajout1 = calcul("", chaine.substr(1, chaine.length - 1));
                if (ajout1 == "") {
                    return "Erreur";
                }
                else if (jout1 == "0") {
                    alert("Division par 0 ");
                }
                else {
                    return String(Number(aux) / Number(aux1));
                }
            }
        // Cas de la multiplication
        else if (car == "*") {
            var ajout1 = calcul("", chaine.substr(1, chaine.length - 1));
            if (aux1 == "") {
                return "Erreur"; // On ne peut pas multiplier par rien
            }
            else {
                return String(Number(ajout * Number(ajout1))); // On covertit les string en nombre puis on les multiplie
            }
        }
        // Soustraction
        else if (car == "-") {
            var aux1 = cal("", str.substr(1, str.length - 1));
            if (aux1 == "") {
                return "ERROR";
            }
            else if (aux == "") {
                return String(-Number(aux1));
            }
            else {
                return String(Number(aux) - Number(aux1));
            }
                            }
            else {
            return cal(aux + car, str.substr(1, str.length - 1));
                }
        else if (car == "+") {
            var ajout1 = cal("", str.substr(1, str.length - 1));
            if (aux1 == "") {
                return "ERROR";
            }
            else {
                return String(Number(aux) + Number(aux1));
            }
                            }
    }
        

}
aff.textContent = cal("", aff.textContent);
}