import UnityEngine.UI;

var skin : GUISkin;
var buttonOutlineAndTextColor = Color.white;
var creditIcons : Texture[];
var credits : String[] = ["GTI"];
var loadMainMenu : String;

//private var savedTimeScale : float;
private var pauseFilter;
private var currentPage : Page;
private var toolbarInt : int = 0;
private var toolbarStrings : String[] = ["Audio", "Graphics"];
private var firstPersonControllerCamera;
private var mainCamera;

public var MainMenu = Rect (Screen.width,Screen.height,Screen.width,Screen.height);

function LateUpdate() 
{
	if (Input.GetKeyDown("escape")) 
	{
        switch (currentPage) 
		{
            case Page.None : PauseGame(); 
			break;
			
            case Page.Main : UnPauseGame(); 
			break;
			
            default : currentPage = Page.Main;
        }
    }
}

function OnGUI() 
{
    if (skin != null) 
	{
		GUI.skin = skin;
	}
		
	if (IsGamePaused()) 
	{
        GUI.color = buttonOutlineAndTextColor;
        Screen.showCursor = true;
        Screen.lockCursor = false;
        
		switch (currentPage) 
		{
            case Page.Main: PauseMenu(); 
			break;
            
        }
        
        if (currentPage == Page.Main)
        {
        	GUI.Window(0, MainMenu, PauseMenu, "Paused");
        }
    }
    
}

function BeginPage(width, height) 
{
    GUILayout.BeginArea(Rect((Screen.width - width) / 2, (Screen.height - height) / 2, width, height));
}

function EndPage() 
{
    GUILayout.EndArea();
}

function PauseMenu() 
{
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	
	//BeginPage(400, 200);
	if (GUILayout.Button("Quit to Main Menu"))
		{
			Application.LoadLevel("MainMenu");
		}
	
    //EndPage();
	
}

function PauseGame() 
{
    //savedTimeScale = 1;
    Time.timeScale = 0;
    AudioListener.pause = true;
	firstPersonControllerCamera = gameObject.Find("First Person Controller").GetComponent("MouseLook");
	mainCamera = gameObject.Find("Main Camera").GetComponent("MouseLook");
	firstPersonControllerCamera.enabled = false;
	mainCamera.enabled = false;
	
	if (pauseFilter) 
	{
		pauseFilter.enabled = true;
	}
	
    currentPage = Page.Main;
}

function UnPauseGame() 
{
    Time.timeScale = 1;
    AudioListener.pause = false;
    
	firstPersonControllerCamera.enabled = true;
	mainCamera.enabled = true;
	
	if (pauseFilter) 
	{
		pauseFilter.enabled = false;
	}
	
    currentPage = Page.None;
}

function IsGamePaused() 
{
    return Time.timeScale == 0;
}

function OnApplicationPause (pause : boolean) 
{
    if (IsGamePaused()) 
	{
		AudioListener.pause = true;
    }
}