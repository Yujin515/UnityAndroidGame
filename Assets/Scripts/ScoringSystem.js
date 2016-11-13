import UnityEngine.UI;

static var TheScore : int;
var ScoreDisplay : GameObject;
TheScore = 0;
function Start () {
	InvokeRepeating("AddScore", 1 , 0.1);//시작할때까지 시간, 이 반복(업데이트)주기

}

function AddScore() {
	TheScore += 5;
	ScoreDisplay.GetComponent.<Text>().text = "Score : " + TheScore;
}