#pragma strict

var objectPos : Vector3;
var objectRot : Quaternion;
var pickObj : GameObject;
var canpick = true;
var picking = false;
var guipick = false;
var pickref : GameObject;
var holdingBall = false;
var paused = 1;
//var moveSpeed = GameObject.GetComponent("CharacterMotor").movement.maxForwardSpeed;

//var slowDown : Coroutine = GetComponent(CharacterMotor).StopSpeedUp();

function Start () {
	pickref = GameObject.FindWithTag ("Pickup");
	
	pickObj = pickref;
}

function Update () {
//	var speedUp : float = GetComponent(CharacterMotor).coeffSpeedUp;
	var raycheck: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hitcheck: RaycastHit;
	if (Physics.Raycast(raycheck, hitcheck,10) && hitcheck.collider.gameObject.tag == "Pickup") {
		guipick = true;
	}
	if (Physics.Raycast(raycheck,hitcheck) && hitcheck.collider.gameObject.tag != "Pickup") {
		guipick = false;
	}
	objectPos = transform.position;
	objectRot = transform.rotation;
	if(Input.GetMouseButtonDown(0) && canpick) {
		picking = true;
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit: RaycastHit;
		if (Physics.Raycast(ray, hit, 10) && hit.collider.gameObject.tag == "Pickup") {
			pickObj = hit.collider.gameObject;
			hit.rigidbody.useGravity = false;
			hit.rigidbody.isKinematic = true;
			hit.collider.isTrigger = true;
			holdingBall = true;
			hit.transform.parent = gameObject.transform;
			hit.transform.position = objectPos;
			hit.transform.rotation = objectRot;
		}
	}
	
	if(Input.GetMouseButtonUp(0) && picking) {
		picking = false;
		canpick = false;
	}
	
	if(Input.GetKey('e') && !canpick && pickObj.GetComponent(pickedupobj).refusethrow != true && holdingBall) {		
		//////////////////////////
	//	if(CharacterMotor)
	//	{
	//		speedUp = 5.0f;
	//		StartCoroutine(StopSpeedUp());
    //        speedUp = 1.0f;
			//StartCoroutine(slowDown);
	//	}
		////////////////////////////
		
		Destroy(pickObj);
		canpick = true;
		pickObj.transform.parent = null;
		pickObj.collider.isTrigger = false;
		pickObj = pickref;
		holdingBall = false;
		
		//gameObject.GetComponent("CharacterMotor").movement.maxForwardSpeed *= (((200)/100.0)+1);
		//yield return new WaitForSeconds(5);
		//gameObject.GetComponent("CharacterMotor").movement.maxForwardSpeed = moveSpeed;
	}
		
	if(Input.GetMouseButtonDown(0) && !canpick && pickObj.GetComponent(pickedupobj).refusethrow != true && holdingBall) {
		canpick = true;
		pickObj.rigidbody.useGravity = true;
		pickObj.rigidbody.isKinematic = false;
		pickObj.transform.parent = null;
		pickObj.collider.isTrigger = false;
		pickObj.rigidbody.AddForce (transform.forward * 500);
		pickObj = pickref;
		holdingBall = false;
		}
		
	if(Input.GetMouseButtonDown(1) && !canpick && pickObj.GetComponent(pickedupobj).refusethrow != true && holdingBall) {
		canpick = true;
		holdingBall = false;
		pickObj.rigidbody.useGravity = true;
		pickObj.rigidbody.isKinematic = false;
		pickObj.transform.parent = null;
		pickObj.collider.isTrigger = false;
		pickObj = pickref;
	}
}

function StopSpeedUp() 
	{
    yield WaitForSeconds(5.0f);
    }

function OnGUI () {
	//GUI.Label (Rect (Screen.width/2,Screen.height/2.1,Screen.width/2,Screen.height/2), "X");
	if (guipick && canpick){
		GUI.Label (Rect (Screen.width/2,Screen.height/2,Screen.width/2,Screen.height/2), "Pick Up");
	}
}