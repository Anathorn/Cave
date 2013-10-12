#pragma strict


var speed : int = 7;
var fallspeed : float = 0.1;
var Jumped : boolean = false;
var Jump_Speed : int = 20;
var Time_Delay : float =0.3;
var Next_Frame : float;
var tiling : Vector2;



function Start () {

tiling.x = 0;
tiling.y = 0; 

}

function Update () {

	if(Input.GetAxis("Horizontal") > 0){
	
		transform.Translate(Vector3((-1) * speed * Time.deltaTime,0,0));
	
	
	}

	if(Input.GetAxis("Horizontal") < 0){
	
		transform.Translate(Vector3(1 * speed * Time.deltaTime,0,0));
	
	
	}

	if(Input.GetAxis("Vertical") > 0 && Jumped == false){
	
		
		transform.Translate(Vector3(0, Jump_Speed * Time.deltaTime,0));
	
	
	}
	
	if(Jumped == true){
	
	transform.Translate(Vector3(0,(-1) * fallspeed * Time.deltaTime,0));
	
	}
	
	//animacion :)   #region animation
	if(Time.time > Next_Frame){
	
		tiling = tiling + Vector2( 0.25, 0 );
		tiling.x = tiling.x%1;
		renderer.material.SetTextureOffset("_MainTex",tiling);
		Next_Frame = Time.time + Time_Delay;
	}	
	//#endregion 
	
	





}

function OnCollisionEnter(col: Collision){

	if(col.gameObject.tag == "Platform"){
	
	Jumped = false;
	
	
	}




}

function OnCollisionExit(col: Collision){

	
Jumped = true;



}


