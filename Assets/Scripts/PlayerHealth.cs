using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PlayerHealth : MonoBehaviour {

	public Slider slider;
	public int health = 100;

	public void Awake()
	{
		slider.maxValue = health;
		slider.value = health;
	}

	public void TakeDamage(int amount)
	{
				health -= amount;
				slider.value = health;
		}
}
