$(document).on('ncgReady', function (){

    nodecg.listenFor('showScore', function(data){
        console.log(data);
    });

    nodecg.listenFor('hideScore', function(){
        console.log("Hide Score");
    });

    nodecg.listenFor('updateScore', function(data){
        console.log(data);
    })

});