using UnityEngine;
using System.Collections;

public class MinotaurAttack : MonoBehaviour {

	GameObject player;

	void Awake ()
	{
		player = GameObject.FindGameObjectWithTag("Player");
	}

	void OnTriggerEnter (Collider other)
	{
		if (other.gameObject == player) {
			Application.LoadLevel (Application.loadedLevel);
				}
	}
}
