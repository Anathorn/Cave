#pragma strict
var speed : float = 1f;
var Z : float = 0;
var  curRotation : Quaternion;

function Start () {

}

function Update () {

	if(Input.GetAxis("Horizontal") < 0){
	
		transform.rotation = Quaternion.Euler( 0f, 0f, 180f);
		Z = 180f;
	}

	if(Input.GetAxis("Horizontal") > 0){
	
		transform.rotation = Quaternion.Euler( 0f, 0f, 0f);
		Z = 0f;
	
	}
	
	if(Input.GetAxis("Vertical") > 0){
	
		transform.rotation = Quaternion.Euler( 0f, 0f, 270f);
		Z = 270f;
	}
	
	if(Input.GetAxis("Vertical") < 0){
	
		transform.rotation = Quaternion.Euler( 0f, 0f, 90f);
		Z = 90f;
	}
	
	if(Input.GetAxis("Grade") < 0){
	
		Z = speed + Z;
		transform.rotation = Quaternion.Euler( 0f, 0f, Z);
	
	}
	
	
	if(Input.GetAxis("Grade") > 0){
	
		Z = speed - Z;
		transform.rotation = Quaternion.Euler( 0f, 0f, Z);
	
	}
	


}