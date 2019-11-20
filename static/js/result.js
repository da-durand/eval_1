$(document).ready(function () {

    $(".pictures-container").append()

    var scoreList = []

    // création de la liste des scores différents

    for (let i = 0; i < pictures.length; i++) {

        if (scoreList.includes(pictures[i].votes)) {

        }
        else {
            scoreList.push(pictures[i].votes);
        }

    }

    loop = true;

    while (loop == true) {

        // tri des votes

        loop = false;

        for (let i = 0; i < scoreList.length; i++) {

            if (scoreList[i] > scoreList[i + 1]) {
                temp = scoreList[i];
                scoreList[i] = scoreList[i + 1];
                scoreList[i + 1] = temp;

                loop = true;
            }

        }
    }

    scoreList.reverse();

    for (let i = 0; i < scoreList.length; i++) {

        for (let j = 0; j < pictures.length; j++) {

            if (scoreList[i] == pictures[j].votes) {

                $(".pictures-container").append('<div class="col-3 card border-0" id="card-' + pictures[j].id + '">');

                var card = $('#card-' + pictures[j].id);

                $(card).append('<img src="' + pictures[j].url + '" alt="picture" class="w-100">');
                $(card).append('<div class="container">');

                var container = $('#card-' + pictures[j].id + ' .container');

                $(container).append('<h3>' + pictures[j].title + '</h3>');
                $(container).append('<p>' + pictures[j].subtile + '</p>');
                $(container).append('<div class="votes d-flex justify-content-center align-items-center">');

                var votes = $('#card-' + pictures[j].id + ' .votes');

                var nbVotes = pictures[j].votes;

                $(votes).append('<button class="dislike" id="dislike-' + pictures[j].id + '"><i class="fas fa-poo"></i></button>');
                $(votes).append('<p id="nb-vote-' + pictures[j].id + '">' + nbVotes + ' votes</p>');
                $(votes).append('<button class="like" id="like-' + pictures[j].id + '"><i class="fas fa-heart"></i></button>');

            }

        }

    }





})