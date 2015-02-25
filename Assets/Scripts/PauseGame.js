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
public var Settings = Rect (Screen.width,Screen.height,Screen.width,Screen.height);
public var openSettings = false;

function centerRectangle (someRect : Rect) : Rect {
	someRect.x = (Screen.width - someRect.width)/2;
	someRect.y = (Screen.height - someRect.height)/2;
	return someRect;
	}

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

function ExtraGUI()
{

}

function OnGUI() 
{
	var centeredRect : Rect = centerRectangle(MainMenu);
	var	centeredSettings : Rect = centerRectangle(Settings);
	
    if (skin != null) 
	{
		GUI.skin = skin;
	}
		
	if (IsGamePaused() && currentPage == Page.Main) 
	{
        GUI.color = buttonOutlineAndTextColor;
        Screen.showCursor = true;
        Screen.lockCursor = false;
        
		switch (currentPage) 
		{
            case Page.Main: PauseMenu(); 
			break;
			
			case Page.Options: ShowToolbar(); 
			break;
            
        }
        
        //if (currentPage == Page.Main)
       // {
        //	GUI.Window(1, centeredRect, PauseMenu, "Paused");
        //}
    }
    
    if (IsGamePaused() && currentPage == Page.Options) 
	{
        GUI.color = buttonOutlineAndTextColor;
        Screen.showCursor = true;
        Screen.lockCursor = false;
        
		switch (currentPage) 
		{
      
			case Page.Options: ShowToolbar(); 
			break;
			
			case Page.Main: PauseMenu(); 
			break;
            
        }
        
        //if (currentPage == Page.Options)
       // {
        //	GUI.Window(0, centeredSettings, ShowToolbar, "Paused");
        //}
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

function ShowToolbar()
{	
	GUILayout.Label("Quality");
	
	GUILayout.BeginHorizontal();
	
    if (GUILayout.Button("Decrease")) 
	{
        QualitySettings.DecreaseLevel();
    }
	
    if (GUILayout.Button("Increase")) 
	{
        QualitySettings.IncreaseLevel();
    }
	
    GUILayout.EndHorizontal();
    
    GUILayout.Label("Use the slider to adjust the volume. Note that the volume is defaulted at 100%.");
    
    AudioListener.volume = GUILayout.HorizontalSlider(AudioListener.volume, 0.0, 1.0);
    
    GUILayout.Label("Use the sliders to adjust the mouse sensitivity");
    
    GUILayout.BeginHorizontal();
    
   	GUILayout.Label("Y Axis");
   	
   	gameObject.Find("Main Camera").GetComponent("MouseLook").sensitivityY = GUILayout.HorizontalSlider(gameObject.Find("Main Camera").GetComponent("MouseLook").sensitivityY,1F, 30F);
    
    GUILayout.EndHorizontal();
    
 	GUILayout.BeginHorizontal();
    
    GUILayout.Label("X Axis");
   	
   	gameObject.Find("First Person Controller").GetComponent("MouseLook").sensitivityX = GUILayout.HorizontalSlider(gameObject.Find("First Person Controller").GetComponent("MouseLook").sensitivityX,1F, 30F);
    
    GUILayout.EndHorizontal();
	
	if (GUILayout.Button("Back")) 
	{
        openSettings = false;
    }
    
    if (openSettings == false)
    {
    	PauseMenu();
    }
}


function PauseMenu() 
{
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	
	BeginPage(400, 200);
    if(openSettings == true)
    {
    	ShowToolbar();
    }
    else
    {
    	if (GUILayout.Button("Continue"))
			{
			UnPauseGame();
			}
		
		if (GUILayout.Button ("Settings"))
			{
			openSettings = true;
    		}
    		
    	if (GUILayout.Button("Quit to Main Menu"))
			{
			Application.LoadLevel("MainMenu");
			}
		
		if (GUILayout.Button("Exit to Desktop"))
			{
			Application.Quit();
			}
    }
	
    EndPage();
	
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