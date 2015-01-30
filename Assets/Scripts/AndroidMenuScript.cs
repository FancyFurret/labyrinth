using UnityEngine;
using System.Collections;

public class MenuScript : MonoBehaviour {
	
	public void OnClickPlay(){
		Application.LoadLevel("AndroidMaze");
	}
	
	public void OnClickExit(){
		Application.Quit();
	}
	
}
