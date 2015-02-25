using UnityEngine;
using System.Collections;

public class SawMove : MonoBehaviour
{

    public bool MoveOnX;
    public bool MoveOnY;
    public bool MoveOnZ;
    public float speed;
    public float distance;
    float movement;
    Transform transform;

    bool direction;

    void Start()
    {
        //Debug.Log("TEST");
        movement = distance / 2;
        direction = true;
        transform = GetComponent<Transform>();
    }

    void Update()
    {

        Vector3 newPosition = transform.position;

        if (MoveOnX)
        {
            Debug.Log(movement);
            if (direction)
                newPosition.x = transform.position.x + speed;
            else
                newPosition.x = transform.position.x - speed;
        }
        if (MoveOnY)
        {
            Debug.Log(movement);
            if (direction)
                newPosition.y = transform.position.y + speed;
            else
                newPosition.y = transform.position.y - speed;
        }
        if (MoveOnZ)
        {
            Debug.Log(movement);
            if (direction)
                newPosition.z = transform.position.z + speed;
            else
                newPosition.z = transform.position.z - speed;
        }

        if (direction)
            movement += speed;
        else
            movement -= speed;

        if (movement >= distance)
            direction = false;
        if (movement <= 0)
            direction = true;

        transform.position = newPosition;

    }
}
