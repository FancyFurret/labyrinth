#pragma strict

public var speed : float = 120f;


function Update ()
{
    transform.Rotate(Vector3.down, speed * Time.deltaTime);
}