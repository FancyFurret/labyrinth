using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PlayerHealth : MonoBehaviour {

    public Image damageImage;
    public Color damageColor;
    public float flashSpeed = 5f;
	public Slider slider;
	public int health = 100;

    bool damaged;

	public void Awake()
	{
		slider.maxValue = health;
		slider.value = health;
	}

    public void Update()
    {
        if (damaged)
            damageImage.color = damageColor;
        else
            damageImage.color = Color.Lerp(damageImage.color, Color.clear, flashSpeed * Time.deltaTime);

        damaged = false;
    }

	public void TakeDamage(int amount)
	{
				health -= amount;
				slider.value = health;
                damaged = true;
		}
}
