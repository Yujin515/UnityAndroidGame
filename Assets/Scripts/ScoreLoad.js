import System.IO;

var fileName = "highscore.data";
var ScoreLoad : String;
var HighScoreDisplay : GameObject;

var line : String;

function Start () {
	var sr : StreamReader = new StreamReader(fileName);

	line = sr.ReadLine();
		while (line != null) {
			ScoreLoad = line;
			line = sr.ReadLine();
		}
		sr.Close();

		HighScoreDisplay.GetComponent.<Text>().text = "" + ScoreLoad;
}