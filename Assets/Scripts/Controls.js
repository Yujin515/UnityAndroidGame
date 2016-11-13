var speed : float = 3.0;
var jumpspeed : float = 0.1;
var gravity : float = 100.0;
var moveDirection : Vector3 = Vector3.zero;

function Update () {
	var controller : CharacterController = GetComponent.<CharacterController>();
		if (controller.isGrounded) {
			moveDirection = Vector3(0, 0, Input.GetAxis("Horizontal")+3);
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;

			if (Input.GetButtonDown ("Jump")/*Input.touchCount >0*/) {
				moveDirection.y += jumpspeed;
			}

			}
		else {
			if (Input.GetButtonDown ("Jump")) {
				moveDirection.y += jumpspeed;
			}
			}

			moveDirection.y -= gravity * Time.deltaTime;

			controller.Move(moveDirection * Time.deltaTime);
}