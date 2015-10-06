$(document).ready(function(){
	String.prototype.uppercase = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	if(location.pathname.indexOf('threads') != -1){
		$('#QuickReply').find('.submitUnit').children('input').eq(0).before('<input class="button taigachat_bbcode xenForoSkin" style="float:right;" id="tagjs" value="Tag Andro" accesskey="t" type="button">');
	}
	else if(location.pathname.indexOf('create-thread') != -1){
		$('dl.submitUnit').eq(0).children('dt').prepend('<input class="button taigachat_bbcode xenForoSkin" style="float:right;" id="tagjs" value="Tag Andro" accesskey="t" type="button">');
	}
	var user = {
		fondateur: {
			40296 : "Andro Fabi",
		},
		admin: {
			144050 : "Andro Adil",
		},
		modo: {
    			154528 : "Andro Nexus",
		},
		recruteur: {
			0 : "Il n'y a aucun recruteur Andro",
		},
		graphiste: {
      			312057 : "Andro Origins64",
		},
		redacteur: {
        	 	67979 : "Il n'y aucun rédacteur Andro",
		},
		membre: {
			185523 : "Andro Johann",
			215980 : "Baptiste",
			345730 : "Andro Maax",
			561749 : "Andro Enwish",
			503543 : "Andro Weax",
			478607 : "Andro Alz'",
			414999 : "Andro Nappa",
    
		},
		tlm: {
          40296 : "Andro Fabi",
          144050 : "Andro Adil",
          154528 : "Andro Nexus",
          312057 : "Andro Origins64",
	  185523 : "Andro Johann",
	  215980 : "Baptiste",
	  345730 : "Andro Maax",
	  561749 : "Andro Enwish",
	  503543 : "Andro Weax",
	  478607 : "Andro Alz'",
	  414999 : "Andro Nappa",

		}
	};

	var grade = ["fondateur", "admin", "modo", "recruteur", "graphiste", "redacteur", "membre", "tlm"];
	function btfy_grade(_grade){
		if (_grade == "fondateur") {
			return "Fondateurs";
		} else if (_grade == "admin") {
			return "Administrateurs";
		} else if (_grade == "modo") {
			return "Modérateurs";
		} else if (_grade == "recruteur") {
			return "Recruteurs";
		} else if (_grade == "redacteur") {
			return "Rédacteurs";
		} else if (_grade == "graphiste") {
			return "Graphiste";
		} else if (_grade == "membre") {
			return "Membres";
		} else if (_grade == "tlm") {
			return "Andro";
		}
	}
	function evron(_grade){
		var users = "";
		for(var i in user[_grade]){
			users += '[USER='+ i + ']@' + user[_grade][i].replace(/\'/g, "\\'") + '[/USER] ';
		}
		return users;
	}
	if(location.pathname.indexOf('threads') != -1){
		$('#QuickReply').find('.submitUnit').after('<ul id="tag_usr" class="messageInfo primaryContent" style="margin:10px;display:inline-flex;width:99%;"></ul>');
	}
	else if(location.pathname.indexOf('create-thread') != -1){
		$('dl.submitUnit').eq(0).after('<ul id="tag_usr" class="messageInfo primaryContent" style="margin:10px;display:inline-flex;width:99%;"></ul>');
	}
	$('#tag_usr').hide();
	for(var i in grade){
		var _grade = grade[i];
		$('#tag_usr').append('<ul id="' + _grade + '" style="display:inline-block;margin:10px;"><h1 onclick="var actual_txt=$(\'iframe.redactor_textCtrl\').contents().find(\'body\').html();var rl=\'<br/>\';$(\'iframe.redactor_textCtrl\').contents().find(\'body\').html(actual_txt + rl + \'' + evron(_grade) + '\');$(\'iframe.redactor_textCtrl\').contents().find(\'body\').select();$(\'iframe.redactor_textCtrl\').contents().find(\'body\').focus();" style="cursor:pointer;font-size: 13pt;font-family: \'Open sans condensed\',\'Arial\',sans-serif;color: rgb(51,51,51);">' + btfy_grade(_grade) +'</h1></ul>');
		for(var g in user[_grade]){
			$('#' + _grade).append('<li style="margin:5px;cursor:pointer;" id="user_single" onclick="var actual_txt=$(\'iframe.redactor_textCtrl\').contents().find(\'body\').html();var rl=\'<br/>\';$(\'iframe.redactor_textCtrl\').contents().find(\'body\').html(actual_txt + \'[USER=' + g + ']@' + user[_grade][g] + '[/USER]\');$(\'iframe.redactor_textCtrl\').contents().find(\'body\').select();$(\'iframe.redactor_textCtrl\').contents().find(\'body\').focus();">' + user[_grade][g] + '</li>');
		}
	}
	$('#tagjs').on('click', function(){
		$('#tag_usr').slideToggle();
	});
});
