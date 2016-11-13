var Speed : int;

function Update () {
	Speed = 2;
	transform.Rotate(0, Speed, 0, Space.World);
}