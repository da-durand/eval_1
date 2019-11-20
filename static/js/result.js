$(document).ready(function () {

    $(".pictures-container").append()

    var scoreList = []

    var vote_list = JSON.parse(sessionStorage.getItem("vote_list"));

    // création de la liste des scores différents

    for (let i = 0; i < vote_list.length; i++) {

        if (scoreList.includes(vote_list[i].vote)) {

        }
        else {
            scoreList.push(vote_list[i].vote);
        }

    }

    console.log(scoreList);



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

    var podium = 1;
    for (let i = 0; i < scoreList.length; i++) {

        for (let j = 0; j < pictures.length; j++) {

            if (scoreList[i] == pictures[j].votes) {

                if (podium < 4) {
                    $(".pictures-container").append('<div class="col-4 card border-0" id="card-' + pictures[j].id + '">');
                }
                else {
                    $(".pictures-container").append('<div class="col-3 card border-0" id="card-' + pictures[j].id + '">');
                }
                

                var card = $('#card-' + pictures[j].id);

                $(card).append('<img src="' + pictures[j].url + '" alt="picture" class="w-100">');
                $(card).append('<div class="container">');

                var container = $('#card-' + pictures[j].id + ' .container');

                $(container).append('<h3>' + pictures[j].title + '</h3>');
                $(container).append('<p>' + pictures[j].subtile + '</p>');

                var nbVotes = scoreList[i];

                if(podium == 1){
                    $(container).append('<p class="win1 h1 py-3"><i class="fas fa-trophy"></i></p>')
                    $(".win1").css("color", "yellow");
                }
                else if(podium == 2){
                    $(container).append('<p class="win2 h1 py-3"><i class="fas fa-trophy"></i></p>')
                    $(".win2").css("color", "gray");
                }
                else if(podium == 3){
                    $(container).append('<p class="win3 h1 py-3"><i class="fas fa-trophy"></i></p>')
                    $(".win3").css("color", "brown");
                }
                else{
                    $(container).append('<p class="h2 py-3">' + (podium) + '</p>');
                    $(".pictures-container .h2").css("color", "#28a745").css("font-style", "italic");
                }

                $(container).append('<p id="nb-vote-' + pictures[j].id + '">Score: ' + nbVotes + '</p>');

                podium++;
                console.log(podium);
            


            }

        }

    }
})