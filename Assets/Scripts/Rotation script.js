#pragma strict

public var speed : float = 120f;


function Update ()
{
    transform.Rotate(Vector3.up, speed * Time.deltaTime);
}