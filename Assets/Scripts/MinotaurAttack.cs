using UnityEngine;
using System.Collections;

public class MinotaurAttack : MonoBehaviour {

	public int attack = 35;

	GameObject player;

	void Awake ()
	{
		player = GameObject.FindGameObjectWithTag("Player");
	}

	void OnTriggerEnter (Collider other)
	{
		if (other.gameObject == player) {
			player.GetComponent<PlayerHealth>().TakeDamage(attack);
				}
	}
}
