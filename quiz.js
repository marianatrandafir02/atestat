function calculateResult() {
    var totalQuestions = 20;
    var score = 0;
    
    for (var i = 1; i <= totalQuestions; i++) {
        var answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    var resultText = "Ai răspuns corect la " + score + " din " + totalQuestions + " întrebări.";
    if (score === totalQuestions) {
        resultText += " Felicitări, ai un scor perfect!";
    } else if (score >= totalQuestions / 2) {
        resultText += " Bună treabă, dar mai poți îmbunătăți!";
    } else {
        resultText += " Încearcă din nou pentru a învăța mai multe!";
    }

    document.getElementById("result").innerText = resultText;
}
