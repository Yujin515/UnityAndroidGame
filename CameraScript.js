var Target : Transform;
var Distance : float = 15;
var CameraY : float = 1;


function Update() {
     transform.position.z = Target.position.z -Distance;
     transform.position.x = Target.position.x+7;
}


function LateUpdate() {
   GetComponent.<Camera>().main.transform.position.y = CameraY;  

}