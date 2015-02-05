using UnityEngine;
using System.Collections;

public class WinController : MonoBehaviour {

	bool win;

	void Awake()
	{
		win = false;
	}

	void OnGUI () {
		
				if (win) {
						if (Input.GetMouseButtonDown (0))
								Application.LoadLevel ("MainMenu");
				}
		}


	public void Win()
	{
		win = true;
		}
}
