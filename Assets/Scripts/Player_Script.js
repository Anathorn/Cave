#pragma strict


var speed : int = 5;
var fall : boolean = false;
var fallspeed : int = 2;



function Start () {

}

function Update () {

	if(Input.GetAxis("Horizontal") > 0){
	
		transform.Translate(Vector3((-1) * speed * Time.deltaTime,0,0));
	
	
	}

	if(Input.GetAxis("Horizontal") < 0){
	
		transform.Translate(Vector3(1 * speed * Time.deltaTime,0,0));
	
	
	}

	if(Input.GetAxis("Vertical") > 0){
	
		transform.Translate(Vector3(0,1 * speed * 2 * Time.deltaTime,0));
	
	
	}
	
	if(fall == true){
	
	transform.Translate(Vector3(0,(-1) * fallspeed * Time.deltaTime,0));
	
	}




}

function OnCollisionEnter(col: Collision){

	if(col.gameObject.tag == "Platform"){
	
	fall = false;
	
	
	}




}

function OnCollisionExit(col: Collision){

	fall = true;




}


