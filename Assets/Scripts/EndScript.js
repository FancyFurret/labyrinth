#pragma strict
var refusethrow = false;

function Start () {

}

function update (){

}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag != "Player" && other.gameObject.tag != "EndCamera") {
		refusethrow = true;
	}
}

function OnTriggerExit (other : Collider) {
	if (other.gameObject.tag != "Player" && other.gameObject.tag != "EndCamera") {
		refusethrow = false;
	}
}