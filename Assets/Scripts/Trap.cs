using UnityEngine;
using System.Collections;

public class Trap : MonoBehaviour {

	public Transform playerTransform;

	public Transform[] locations;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter()
	{
		Debug.Log ("TRAPPED");
		playerTransform.position = new Vector3(locations [0].position.x, locations[0].position.y + 1, locations[0].position.z);
	}
}
