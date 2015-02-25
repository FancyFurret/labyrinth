using UnityEngine;
using System.Collections;

public class GameOverController : MonoBehaviour {

	public PlayerHealth playerHealth;
	Animator anim;
	bool gameOver;

	void Awake () {
		anim = GetComponent<Animator> ();
		gameOver = false;
	}

	void OnGUI () {
		if (playerHealth.health <= 0)
			GameOver();

		if (gameOver) {
						if (Input.GetMouseButtonDown (0))
								Application.LoadLevel ("MainMenu");
								Screen.showCursor = true;
								Screen.lockCursor = false;
				}
	}

	void GameOver()
	{
		anim.SetTrigger ("GameOver");
		gameOver = true;
		Screen.showCursor = false;
	}
}
