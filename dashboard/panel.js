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
    homeScore = homeScore + num;
    homeScoreLabel.text(homeScore);
}
function updateAwayScore(num){
    awayScore = awayScore + num;
    awayScoreLabel.text(awayScore);
}

$(showButton).click(function(){
    scoreStatus.slideDown();
    homeTextField.prop('disabled', true);
    awayTextField.prop('disabled', true);
    swapButton.prop('disabled', true);
    //TODO: Show
});

$(hideButton).click(function(){
    scoreStatus.slideUp();
    homeTextField.prop('disabled', false);
    awayTextField.prop('disabled', false);
    swapButton.prop('disabled', false);
    //TODO: Hide
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


