// 버튼 - 다시 날기 또는 나가기

function OnGUI () {
	if (GUI.Button (Rect (Screen.width/2-120, Screen.height-50, 100, 30), "Fly Again")) {
		Application.LoadLevel(2);
	}

	if (GUI.Button (Rect (Screen.width/2, Screen.height-50, 100, 30), "Main Menu")) {
		Application.LoadLevel(0);//메인 메뉴
	}


}