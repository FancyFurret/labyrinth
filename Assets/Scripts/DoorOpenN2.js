#pragma strict
import UnityEngine.UI;

public var text : Text;

var targeti : Transform;
var moveSpeed : float = 5.0;
var upMaxDistance : float = 10.0;
private var initPosition : Vector3;
private var openDoor : boolean = false;
//var openCloseSound : AudioClip;
 
function Start() {
    initPosition = targeti.transform.position; 
}
 
function Update () {
    if (!targeti) {
        return;
    }
    if (openDoor == true) {
        targeti.position.x = Mathf.Min(upMaxDistance, targeti.position.x+moveSpeed * Time.deltaTime);
    }
    else {
        targeti.position.x = Mathf.Max(initPosition.x, targeti.position.x-moveSpeed * Time.deltaTime); 
    }
}

function OnMouseDown() {
    openDoor = true;   
    //audio.PlayOneShot(openCloseSound);
}
 
function OnMouseUp() {
    yield WaitForSeconds(5);
    openDoor = false;  
    //audio.PlayOneShot(openCloseSound);
}

//function OnMouseDown()
//{
//	openDoor = true;
//}

function OnMouseOver()
{
	text.text = "Click";
}
	
function OnMouseExit()
{
	text.text = "";
}
