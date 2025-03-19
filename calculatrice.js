function calcul() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    
    let cal = document.getElementsByName("cal");
    let call = document.querySelector('input[name="cal"]:checked');

    let res;

    switch (call.value) {
        case "+":
            res = a + b;
            document.getElementById("res").innerHTML = "Résultat de l'addition est: " + res;
            break;
        case "-":
            res = a - b;
            document.getElementById("res").innerHTML = "Résultat de la soustraction est: " + res;
            break;
        case "*":
            res = a * b;
            document.getElementById("res").innerHTML = "Résultat de la multiplication est: " + res;
            break;
        case "/":
            if (b === 0) {
                document.getElementById("res").innerHTML = "Erreur: division par zéro.";
            } else {
                res = a / b;
                document.getElementById("res").innerHTML = "Résultat de la division est: " + res;
            }
            break;
        default:
            document.getElementById("res").innerHTML = "Erreur: opération invalide.";
    }
}
