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
			97187 : "Andro Kretaw",
		},
		modo: {
    144050 : "Andro Adil",
    133362 : "Andro Gabi"
		},
		recruteur: {
			0 : "Il n'y a aucun recruteur Andro",
		},
		graphiste: {
      0 : "Il n'y a aucun graphiste Andro",
		},
		redacteur: {
            67979 : "Andro Blackwolf",
		},
		membre: {
    389694 : "Andro ByQze",
    156906 : "Andro Reeplay",
    536203 : "Andro Djeny"
    
		},
		tlm: {
    40296 : "Andro Fabi", 
          97187 : "Andro Kretaw",
          144050 : "Andro Adil",
          133362 : "Andro Gabi",
          67979 : "Andro Blackwolf",
          389694 : "Andro ByQze",
          156906 : "Andro Reeplay",
          536203 : "Andro Djeny"

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