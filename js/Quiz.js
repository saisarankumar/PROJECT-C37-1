class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
    //write code to change the background color here
    background("lightblue");
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    Contestant.getConstestantInfo();

    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green colour*", 130, 260);

      for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer){
          fill("green");
          text(allContestants[plr].name+" : "+allContestants[plr].answer, 130, 280);
        }else{
          fill("red");
          text(allContestants[plr].name+" : "+allContestants[plr].answer, 130, 305);
        }                                 
        
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
