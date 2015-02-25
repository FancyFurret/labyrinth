using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Hint : MonoBehaviour {

	public Text text;

	NavMeshAgent hintOrb;

	void Start () {
		hintOrb = this.GetComponent<NavMeshAgent> ();
	}

	void Update () {

	}

	void OnMouseDown()
	{
		hintOrb.destination = (new Vector3(71.7f, 2.6f, 165.9f));
	}
	
	void OnMouseOver()
	{
		text.text = "Click";
	}
	
	void OnMouseExit()
	{
		text.text = "";
	}
}