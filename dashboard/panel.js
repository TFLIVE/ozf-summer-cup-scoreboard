var showButton = $('#score_show');
var hideButton = $('#score_hide');
var homeScoreLabel = $('#score_home_score');
var awayScoreLabel = $('#score_away_score');
var homeTextField = $('#score_home_title');
var awayTextField = $('#score_away_title');
var homeMinusButton = $('#score_home_decrement');
var homePlusButton = $('#score_home_increment');
var swapButton = $('#score_swap');
var awayMinusButton = $('#score_away_decrement');
var awayPlusButton = $('#score_away_increment');
var scoreStatus = $('#score_status');
var homeScore = 0;
var awayScore = 0;

//Update score function
function updateHomeScore(num){
    //Score cannot be less than 0
    homeScore = homeScore + num;
    if(homeScore < 0 ){
        homeScore = 0;
    }
    homeScoreLabel.text(homeScore);
    sendScores(homeScore, awayScore);
}
function updateAwayScore(num){
    //Score cannot be less than 0
    awayScore = awayScore + num;
    if(awayScore < 0){
        awayScore = 0;
    }
    awayScoreLabel.text(awayScore);
    sendScores(homeScore, awayScore);
}

function sendScores(home, away){
    nodecg.sendMessage('updateScore', {
        homeScore: home,
        awayScore: away
    });
    homeScoreLabel.text(homeScore);
    awayScoreLabel.text(awayScore);
}

$(showButton).click(function(){
    scoreStatus.slideDown();
    homeTextField.prop('disabled', true);
    awayTextField.prop('disabled', true);
    nodecg.sendMessage('showScore', {
        homeTeamName: homeTextField.val(),
        homeTeamScore: homeScore,
        awayTeamName: awayTextField.val(),
        awayTeamScore: awayScore
    });
});

$(hideButton).click(function(){
    homeScore = 0;
    awayScore = 0;
    sendScores(homeScore, awayScore);
});

$(swapButton).click(function (){

    var tempHomeScore = homeScore;
    var tempAwayScore = awayScore;
    var tempHomeLabel = homeTextField.val();
    var tempAwayLabel = awayTextField.val();

    homeScore = tempAwayScore;
    awayScore = tempHomeScore;
    homeScoreLabel.text(tempAwayScore);
    awayScoreLabel.text(tempHomeScore);
    homeTextField.val(tempAwayLabel);
    awayTextField.val(tempHomeLabel);



    nodecg.sendMessage('showScore', {
        homeTeamName: homeTextField.val(),
        homeTeamScore: homeScore,
        awayTeamName: awayTextField.val(),
        awayTeamScore: awayScore
    });

});

$(homeMinusButton).click(function(){
    updateHomeScore(-1);
});

$(homePlusButton).click(function(){
    updateHomeScore(1);
});
$(awayMinusButton).click(function(){
    updateAwayScore(-1);
});

$(awayPlusButton).click(function(){
    updateAwayScore(1);
});


