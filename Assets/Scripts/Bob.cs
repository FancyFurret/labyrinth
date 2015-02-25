using UnityEngine;
using System.Collections;

public class Bob : MonoBehaviour {

	public float speed = 0.01f;
	public float rotateSpeed = .1f;
	Transform transform;
	float height;
	float rotate;
	bool up = true;

	void Start () {
		transform = GetComponent<Transform> ();
		height = transform.position.y;
		rotate = transform.rotation.x;

	}

	void Update () {

		//rotate += rotateSpeed;

		if (up) {
			height += speed;
				} else 
			height -= speed;

		if (height > 1.5f)
						up = false;
		if (height < 1f)
						up = true;

		transform.position = new Vector3(transform.position.x, height, transform.position.z);
		//transform.rotation = new Quaternion (1, 1, rotate, 1);
		transform.Rotate (new Vector3(0, rotateSpeed, rotateSpeed));

	}
}
