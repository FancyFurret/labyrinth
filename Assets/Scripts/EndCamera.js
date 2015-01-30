var objectRot : Quaternion;
var pickObj : GameObject;
var canpick = true;
var picking = false;
var guipick = false;
var pickref : GameObject;
var holdingBall = false;
//var moveSpeed = GameObject.GetComponent("CharacterMotor").movement.maxForwardSpeed;

//var slowDown : Coroutine = GetComponent(CharacterMotor).StopSpeedUp();

function Start () {
	pickref = GameObject.FindWithTag ("End");
	
	pickObj = pickref;
}

function Update () {
//	var speedUp : float = GetComponent(CharacterMotor).coeffSpeedUp;
	var raycheck: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hitcheck: RaycastHit;
	if (Physics.Raycast(raycheck, hitcheck,10) && hitcheck.collider.gameObject.tag == "End") {
		guipick = true;
	}
	if (Physics.Raycast(raycheck,hitcheck) && hitcheck.collider.gameObject.tag != "End") {
		guipick = false;
	}
	objectPos = transform.position;
	objectRot = transform.rotation;
	if(Input.GetMouseButtonDown(0) && canpick) {
		picking = true;
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit: RaycastHit;
		if (Physics.Raycast(ray, hit, 10) && hit.collider.gameObject.tag == "End") {
			Application.Quit();
		}
	}
	
	if(Input.GetMouseButtonUp(0) && picking) {
		picking = false;
		canpick = false;
	}
		
}

function StopSpeedUp() 
	{
    yield WaitForSeconds(5.0f);
    }

function OnGUI () {
	//GUI.Label (Rect (Screen.width/2,Screen.height/2.1,Screen.width/2,Screen.height/2), "X");
	if (guipick && canpick){
		GUI.Label (Rect (Screen.width/2,Screen.height/2,Screen.width/2,Screen.height/2), "Touch");
	}
}