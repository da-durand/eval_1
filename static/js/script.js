$(document).ready(function () {

    for (let i = 0; i < pictures.length; i++) {

        $(".pictures-container").append('<div class="col-3 card border-0" id="card-' + pictures[i].id + '">');

        var card = $('#card-' + pictures[i].id);

        $(card).append('<img src="' + pictures[i].url + '" alt="picture" class="w-100">');
        $(card).append('<div class="container">');

        var container = $('#card-' + pictures[i].id + ' .container');

        $(container).append('<h3>' + pictures[i].title + '</h3>');
        $(container).append('<p>' + pictures[i].subtile + '</p>');
        $(container).append('<div class="votes d-flex justify-content-center align-items-center">');

        var votes = $('#card-' + pictures[i].id + ' .votes');

        var nbVotes = pictures[i].votes;

        $(votes).append('<button class="dislike" id="dislike-'+ pictures[i].id +'"><i class="fas fa-poo"></i></button>');
        $(votes).append('<p id="nb-vote-'+ pictures[i].id +'">' + nbVotes + ' votes</p>');
        $(votes).append('<button class="like" id="like-'+ pictures[i].id +'"><i class="fas fa-heart"></i></button>');

    }

    $(".dislike").click(function(){
            var id = $(this).attr("id");
            id = id.replace("dislike-", "")
            
            var votes = parseInt($("#nb-vote-"+id).html().replace(" votes", ""));
            votes--;

            $("#nb-vote-"+id).html(votes + " votes")
    })

    $(".like").click(function(){
        var id = $(this).attr("id");
        id = id.replace("like-", "")
        
        var votes = parseInt($("#nb-vote-"+id).html().replace(" votes", ""));
        votes++;

        $("#nb-vote-"+id).html(votes + " votes")
})

})
