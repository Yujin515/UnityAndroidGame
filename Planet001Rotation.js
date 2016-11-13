var Speed : int;

function Update () {
	Speed = 1;
	transform.Rotate(0, Speed, 0, Space.World);
}