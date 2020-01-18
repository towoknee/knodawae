var key = [[4,6]];
var numAns = [0]
var lives = 3;

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
        if (numAns[q] == CORRECT_ANSWERS) {
            document.getElementById('incorrect').style.display = "none";
            document.getElementById('partial').style.display = "none";
            document.getElementById('correct').style.display = "block";
            for (i = 1; i<=NUM_ANSWERS; i++) {
                document.getElementById(i).disabled = true;
            }
        } else {
            document.getElementById(ans).disabled = true;
            document.getElementById('incorrect').style.display = "none";
            document.getElementById('partial').style.display = "block";
        }
    } else {
        lives -= 1;
        document.getElementById(ans).disabled = true;
        document.getElementById('lives').innerHTML = lives;
        document.getElementById('partial').style.display = "none";
        document.getElementById('incorrect').style.display = "block";
        document.getElementById('life' + lives).src = "newImg.png";
 
    }
}