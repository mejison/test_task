<?php
	$text= "{one:{x:0,y:0},two:{x:0,y:0},three:{x:0,y:0},four:{x:0,y:0},five:{x:0,y:0},six:{x:0,y:0}}";
	if (isset($_POST['data']))
		file_put_contents("./data.json", str_replace('\\','',$_POST['data']));
	if (isset($_GET['reset'])){
		file_put_contents("./data.json", str_replace('\\','',$text));
		header("Location: index.html");
	}

?>