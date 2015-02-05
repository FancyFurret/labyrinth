using UnityEngine;
using System.Collections;

public class MusicController : MonoBehaviour {

	public AudioSource song1;
	public AudioSource song2;
	public AudioSource song3;
	public AudioSource song4;

	
	void Start () {
		PlayRandomSong ();
	}

	void Update () {

		if (Input.GetKeyDown(KeyCode.M))
		    {
			song1.Stop();
			song2.Stop();
			song3.Stop();
			song4.Stop();
		}

		if (!(song1.isPlaying || song2.isPlaying || song3.isPlaying || song4.isPlaying)) {
			PlayRandomSong();
				}
	}

	void PlayRandomSong()
	{
		int number = Random.Range (0, 3);

		switch (number) {
		case 0:
			song1.Play();
			break;
		case 1:
			song2.Play();
			break;
		case 2:
			song3.Play ();
			break;
		case 3:
			song4.Play();
			break;
				}
		}
}
