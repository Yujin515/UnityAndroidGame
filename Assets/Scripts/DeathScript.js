var DeathBlack : GameObject;
var DeathText : GameObject;
var TheRocket : GameObject;

var Crash : AudioSource;
var MainAudio : GameObject;

var HighScore : GameObject;

function OnTriggerEnter (col : Collider) {
	HighScore.SetActive(true);
	Crash.Play();
	MainAudio.SetActive(false);
	DeathBlack.SetActive(true);
	DeathText.SetActive(true);
	TheRocket.SetActive(false);

}