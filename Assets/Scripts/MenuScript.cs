using UnityEngine;
using System.Collections;

public class AndroidMenuScript : MonoBehaviour {

	public void OnClickPlay(){
		Application.LoadLevel("LabyrinthScene1");
	}

	public void OnClickExit(){
		Application.Quit();
	}

}
