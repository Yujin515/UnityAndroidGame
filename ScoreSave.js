import System.IO;

var fileName = "highscore.data";
var ScoreAmount : int;

function Start () {
	ScoreAmount = ScoringSystem.TheScore;
	var OurFile = File.CreateText(fileName);
		OurFile.WriteLine (ScoreAmount);
		OurFile.Close();
}



