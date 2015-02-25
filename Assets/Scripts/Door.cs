using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Door : MonoBehaviour {

	public Text text;
	

	void OnMouseDown()
	{

	}

	void OnMouseOver()
	{
		text.text = "Open";
	}
	
	void OnMouseExit()
	{
		text.text = "";
	}
}
