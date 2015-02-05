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

enum Page 
{
    None, Main, Options, Credits
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
        
		switch (currentPage) 
		{
            case Page.Main: PauseMenu(); 
			break;
            
			case Page.Options: ShowToolbar(); 
			break;
            
			case Page.Credits: ShowCredits(); 
			break;
        }
    }
    
}

function ShowToolbar() 
{
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	
	BeginPage(400, 200);
	
    toolbarInt = GUILayout.Toolbar (toolbarInt, toolbarStrings);
    
	switch (toolbarInt) 
	{
        case 0 : VolumeControl(); 
		break;
        
		case 1 : Qualities(); 
		QualityControl(); 
		break;
    }
	
	if (GUILayout.Button("Back")) 
	{
        currentPage = Page.Main;
    }
	
    EndPage();
}

function ShowCredits() 
{
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	
    BeginPage(400, 200);
	
	for (var credit in credits) 
	{
        GUILayout.Label(credit);
    }
	
    for (var credit in creditIcons) 
	{
        GUILayout.Label(credit);
    }
	
	if (GUILayout.Button("Back")) 
	{
        currentPage = Page.Main;
    }
	
    EndPage();
}

function Qualities() 
{
    switch (QualitySettings.currentLevel)
	{
        case QualityLevel.Fastest:
		GUILayout.Label("Fastest");
		break;
        
		case QualityLevel.Fast:
		GUILayout.Label("Fast");
		break;
        
		case QualityLevel.Simple:
		GUILayout.Label("Simple");
		break;
        
		case QualityLevel.Good:
        GUILayout.Label("Good");
		break;
        
		case QualityLevel.Beautiful:
        GUILayout.Label("Beautiful");
		break;
        
		case QualityLevel.Fantastic:
        GUILayout.Label("Fantastic");
		break;
    }
}

function QualityControl() 
{
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
}

function VolumeControl()
{
	GUILayout.Label("Use the slider to adjust the volume. Note that the volume is defaulted at 100%.");
    AudioListener.volume = GUILayout.HorizontalSlider(AudioListener.volume, 0.0, 1.0);
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
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	
	BeginPage(400, 200);
	
	//if (GUILayout.Button ("Continue"))
	//{
    //    UnPauseGame();
    //}
	
	if (GUILayout.Button ("Settings"))
	{
		currentPage = Page.Options;
    }
	
    //if (GUILayout.Button ("Credits")) 
	//{
    //    currentPage = Page.Credits;
    //}
	
	if (GUILayout.Button ("Quit to Main Menu"))
	{
		Application.LoadLevel("MainMenu");
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
    Screen.showCursor = false;
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