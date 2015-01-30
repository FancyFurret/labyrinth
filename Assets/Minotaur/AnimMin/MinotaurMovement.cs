using UnityEngine;
using System.Collections;

public class MinotaurMovement : MonoBehaviour {
	NavMeshAgent nav;
	Transform player;
	// Use this for initialization
	void Awake () {
		nav = GetComponent < NavMeshAgent >();
		player = GameObject.FindGameObjectWithTag("Player").transform;
	}
	
	// Update is called once per frame
	void Update () {
		nav.SetDestination (player.position);
	
	}
}
