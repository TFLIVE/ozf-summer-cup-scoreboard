$(document).on('ncgReady', function (){

    nodecg.listenFor('showScore', function(data){
        $('#score_leftText').text(data.homeTeamName);
        $('#score_rightText').text(data.awayTeamName);
        $('#score_leftNumber').text(data.homeTeamScore);
        $('#score_rightNumber').text(data.awayTeamScore);
    });

    nodecg.listenFor('updateScore', function(data){
        $('#score_leftNumber').text(data.homeScore);
        $('#score_rightNumber').text(data.awayScore);
    });

});
