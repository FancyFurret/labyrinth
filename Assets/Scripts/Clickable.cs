using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Clickable : MonoBehaviour {

	public Animator anim;
	public WinController win;
	public Text text;

	void OnMouseDown()
	{
		anim.SetTrigger ("Win");
		win.Win ();
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
