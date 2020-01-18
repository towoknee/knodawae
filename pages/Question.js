function inArray(array, elem) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == elem) {
            return true;
        }
    }
    return false;
}

function Grade(ans, q, c=1, n=4) {
    RIGHT_ANSWER = key[q];
    CORRECT_ANSWERS = c;
    NUM_ANSWERS = n;
    if (inArray(RIGHT_ANSWER, ans)) {
        numAns[q] += 1;
        if (numAns[q] >= CORRECT_ANSWERS) {
            document.getElementById('incorrect'+q).style.display = "none";
            document.getElementById('partial'+q).style.display = "none";
            document.getElementById('correct'+q).style.display = "block";
            for (i = 1; i<=NUM_ANSWERS; i++) {
                document.getElementById(i+10*q).disabled = true;
            }
            document.getElementById('q'+q).style.display = "block";
        } else {
            document.getElementById(ans+10*q).disabled = true;
            document.getElementById('incorrect'+q).style.display = "none";
            document.getElementById('partial'+q).style.display = "block";
        }
    } else {
        lives -= 1;
        document.getElementById(ans+10*q).disabled = true;
        document.getElementById('lives'+q).innerHTML = lives;
        if (lives === 1) {
            document.getElementById('life'+q).innerHTML = 'life';
        } else if (lives === 0) {
            document.getElementById('life'+q).innerHTML = 'lives';
            for (i = 1; i<=NUM_ANSWERS; i++) {
                document.getElementById(i+10*q).disabled = true;
            }
            document.getElementById('failure').style.display = "block";
        }
        document.getElementById('partial'+q).style.display = "none";
        document.getElementById('incorrect'+q).style.display = "block";
        document.getElementById('hp' + lives).src = "images/deadknuckles.png";
 
    }
}
