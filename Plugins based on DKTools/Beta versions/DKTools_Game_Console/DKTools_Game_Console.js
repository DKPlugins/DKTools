/*
Title: Game Console
Author: DK (Denis Kuznetsov) (https://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 0.2 BETA
Release: 09.11.2016
First release: 09.11.2016
Supported languages: Russian, English
*/

/*ru
Название: Игровая Консоль
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 0.2 BETA
Релиз: 09.11.2016
Первый релиз: 09.11.2016
Поддерживаемые языки: Русский, Английский
*/

var DKLocalization = DKLocalization || {};

//===========================================================================
// Settings of the plugin
// Настройки плагина
//===========================================================================

DKLocalization.DKTools_Game_Console = {
	DKToolsImportedError: {
		ru: 'Отсутствует плагин "DKTools"! Плагин "DKTools_Game_Console" не будет работать!',
		en: 'No plugin "DKTools"! Plugin "DKTools_Game_Console" will not work!'
	}
};

//===========================================================================
// End of the plugin settings
// Конец настройки плагина
//===========================================================================

/*:ru
 * @plugindesc v.0.2 BETA Игровая консоль для изменения параметров игры
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Game_Console
 Автор: DK (Денис Кузнецов) (https://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 0.2 BETA
 Релиз: 09.11.2016
 Первый релиз: 09.11.2016
 Поддерживаемые языки: Русский, Английский
 
 ### Инструкция ###
 Вызов консоли: нажать клавишу ~ (тильда)
 
 ### Список доступных команд и их параметры ###
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
*/

var Imported = Imported || {};
Imported.DKTools_Game_Console = true;

var DKVersion = DKVersion || {};
DKVersion.DKTools_Game_Console = 0.2;

var DKToolsVersion = DKToolsVersion || {};
DKToolsVersion.DKTools_Game_Console = 0.92;

if (!Imported.DKTools) {
	var locale = (window.navigator.language === 'ru' ? 'ru' : 'en');
	throw new Error(DKLocalization['DKTools_Game_Console']['DKToolsImportedError'][locale]);
}

var GameConsoleParam = {};
GameConsoleParam.param = PluginManager.parameters('DKTools_Game_Console');

//===========================================================================
// Input
//===========================================================================

Input.keyMapper[192] = 'console';

//===========================================================================
// Game Console Category Base
//===========================================================================

function GameConsoleCategoryBase() {
	throw new Error('This is a static class (Это статический класс!)');
}

Object.defineProperties(GameConsoleCategoryBase, {

	mainManager: {
		get: function() {
			return GameConsoleCommandManager; // вместо Command сделать Main (MainManager)
		},
		configurable: true
	},

	logManager: {
		get: function() {
			return GameConsoleLogManager;
		},
		configurable: true
	},

	commands: {
		get: function() {
			return this._commands;
		},
		configurable: true
	}
});

GameConsoleCategoryBase.getParentName = function() {
	return 'plugin';
};

GameConsoleCategoryBase.initialize = function() {
	this.initializeCommands();
	this.initializeCommandsName();
	this.initializeCommandsCategory();
};

GameConsoleCategoryBase.initializeCommands = function() {
};

GameConsoleCategoryBase.initializeCommandsName = function() {
	for(var commandName in this._commands) {
		var command = this._commands[commandName];
		command.name = commandName;
	}
};

GameConsoleCategoryBase.initializeCommandsCategory = function() {
	for(var commandName in this._commands) {
		var command = this._commands[commandName];
		command.category = this;
	}
};

//===========================================================================
// Game Console Main Category
//===========================================================================

function GameConsoleMainCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleMainCategory = Object.create(GameConsoleCategoryBase);

GameConsoleMainCategory.getParentName = function() {
	return '';
};

GameConsoleMainCategory.getName = function() {
	return 'main';
};

GameConsoleMainCategory.initializeCommands = function() {
	this._commands = {
		back: {
			name: 'back',
			availableHandler: this._availableHandlerBack.bind(this),
			handler: this._handlerBack.bind(this)
		},
		help: {
			name: 'help',
			alwaysAvailable: true,
			handler: this._handlerHelp.bind(this)
		},
		exit: {
			name: 'exit',
			alwaysAvailable: true,
			handler: this._handlerExit.bind(this)
		}
	};
};

GameConsoleMainCategory._availableHandlerBack = function() {
	return !this.mainManager.isMainCategory();
};

GameConsoleMainCategory._handlerBack = function() {
	var category = this.mainManager.category;
	var newCategoryName = category.getParentName();
	this.mainManager.selectCategory(newCategoryName);
};

GameConsoleMainCategory._handlerHelp = function() {

};

GameConsoleMainCategory._handlerExit = function() {
	this.mainManager.scene.closeConsole();
};

//===========================================================================
// Game Console Log Category
//===========================================================================

function GameConsoleLogCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleLogCategory = Object.create(GameConsoleCategoryBase);

GameConsoleLogCategory.getParentName = function() {
	return 'main';
};

GameConsoleLogCategory.getName = function() {
	return 'log';
};

GameConsoleLogCategory.initializeCommands = function() {
	this._commands = {
		clear: {
			name : 'clear',
			handler: null
		}
	};
};

//===========================================================================
// Game Console Party Category
//===========================================================================

function GameConsolePartyCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsolePartyCategory = Object.create(GameConsoleCategoryBase);

GameConsolePartyCategory.getParentName = function() {
	return 'main';
};

GameConsolePartyCategory.getName = function() {
	return 'party';
};

GameConsolePartyCategory.initializeCommands = function() {
	this._commands = {
		gold: {
			handler: this._handlerGold.bind(this)
		},
		item: {
			handler: this._handlerItem.bind(this)
		},
		weapon: {
			handler: this._handlerWeapon.bind(this)
		},
		armor: {
			handler: this._handlerArmor.bind(this)
		},
		actors: { // actors поменять на actor (после решения конфликта с категорией actor)
			handler: this._handlerActors.bind(this)
		}
	};
};

GameConsolePartyCategory._handlerGold = function(params) {
	var operation = params[0];
	var amount = Number(params[1]);
	switch (operation) {
		case '+':
			$gameParty.gainGold(amount);
			break;
		case '-':
			$gameParty.loseGold(amount);
			break;
		case '=':
			var gold = $gameParty.gold();
			$gameParty.loseGold(gold);
			$gameParty.gainGold(amount);
			break;
	}
};

GameConsolePartyCategory._handlerItem = function(params) {
	var itemId = Number(params[0]);
	var operation = params[1];
	var amount = Number(params[2]);
	if (itemId >= 1) {
		var item = $dataItems[itemId];
		switch (operation) {
			case '+':
				$gameParty.gainItem(item, amount);
				break;
			case '-':
				$gameParty.loseItem(item, amount);
				break;
			case '=':
				var lastItemAmount = $gameParty.numItems(item);
				$gameParty.loseItem(item, lastItemAmount);
				$gameParty.gainItem(item, amount);
				break;
		}
	}
};

GameConsolePartyCategory._handlerWeapon = function(params) {
	var itemId = Number(params[0]);
	var operation = params[1];
	var amount = Number(params[2]);
	if (itemId >= 1) {
		var item = $dataWeapons[itemId];
		switch (operation) {
			case '+':
				$gameParty.gainItem(item, amount);
				break;
			case '-':
				$gameParty.loseItem(item, amount);
				break;
			case '=':
				var lastItemAmount = $gameParty.numItems(item);
				$gameParty.loseItem(item, lastItemAmount);
				$gameParty.gainItem(item, amount);
				break;
		}
	}
};

GameConsolePartyCategory._handlerArmor = function(params) {
	var itemId = Number(params[0]);
	var operation = params[1];
	var amount = Number(params[2]);
	if (itemId >= 1) {
		var item = $dataArmors[itemId];
		switch (operation) {
			case '+':
				$gameParty.gainItem(item, amount);
				break;
			case '-':
				$gameParty.loseItem(item, amount);
				break;
			case '=':
				var lastItemAmount = $gameParty.numItems(item);
				$gameParty.loseItem(item, lastItemAmount);
				$gameParty.gainItem(item, amount);
				break;
		}
	}
};

GameConsolePartyCategory._handlerActors = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	switch (operation) {
		case '+':
			$gameParty.addActor(actorId);
			break;
		case '-':
			$gameParty.removeActor(actorId);
			break;
	}
};

//===========================================================================
// Game Console Actor Category
//===========================================================================

function GameConsoleActorCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleActorCategory = Object.create(GameConsoleCategoryBase);

GameConsoleActorCategory.getParentName = function() {
	return 'main';
};

GameConsoleActorCategory.getName = function() {
	return 'actor';
};

GameConsoleActorCategory.initializeCommands = function() {
	this._commands = {
		hp: {
			handler: this._handlerHp.bind(this)
		},
		mp: {
			handler: this._handlerMp.bind(this)
		},
		tp: {
			handler: this._handlerTp.bind(this)
		},
		state: {
			handler: this._handlerState.bind(this)
		},
		recovery: {
			handler: this._handlerRecovery.bind(this)
		},
		exp: {
			handler: this._handlerExp.bind(this)
		},
		level: {
			handler: this._handlerLevel.bind(this)
		},
		parameter: {
			handler: null
		},
		skill: {
			handler: null
		},
		equip: {
			handler: null
		},
		class: {
			handler: this._handlerClass.bind(this)
		},
		name: {
			handler: this._handlerName.bind(this)
		},
		nickname: {
			handler: this._handlerNickname.bind(this)
		},
		profile: {
			handler: this._handlerProfile.bind(this)
		}
	};
};

GameConsoleActorCategory._handlerHp = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var value = Number(params[2]);
	var actor = $gameActors.actor(actorId);
	switch (operation) {
		case '+':
			actor.gainHp(value);
			break;
		case '-':
			actor.gainHp(-value);
			break;
		case '=':
			var lastValue = actor.hp - 1;
			actor.gainHp(-lastValue);
			actor.gainHp(value - 1);
			break;
	}
	var mainManager = this.mainManager;
	if (mainManager.isSceneBattle()) {
		mainManager.scene._statusWindow.refresh();
	}
};

GameConsoleActorCategory._handlerMp = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var value = Number(params[2]);
	var actor = $gameActors.actor(actorId);
	switch (operation) {
		case '+':
			actor.gainMp(value);
			break;
		case '-':
			actor.gainMp(-value);
			break;
		case '=':
			var lastValue = actor.mp - 1;
			actor.gainMp(-lastValue);
			actor.gainMp(value - 1);
			break;
	}
	var mainManager = this.mainManager;
	if (mainManager.isSceneBattle()) {
		mainManager.scene._statusWindow.refresh();
	}
};

GameConsoleActorCategory._handlerTp = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var value = Number(params[2]);
	var actor = $gameActors.actor(actorId);
	switch (operation) {
		case '+':
			actor.gainTp(value);
			break;
		case '-':
			actor.gainTp(-value);
			break;
		case '=':
			var lastValue = actor.tp - 1;
			actor.gainTp(-lastValue);
			actor.gainTp(value - 1);
			break;
	}
	var mainManager = this.mainManager;
	if (mainManager.isSceneBattle()) {
		mainManager.scene._statusWindow.refresh();
	}
};

GameConsoleActorCategory._handlerState = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var stateId = Number(params[2]);
	var actor = $gameActors.actor(actorId);
	switch (operation) {
		case '+':
			actor.addState(stateId);
			break;
		case '-':
			actor.removeState(stateId);
			break;
	}
	var mainManager = this.mainManager;
	if (mainManager.isSceneBattle()) {
		mainManager.scene._statusWindow.refresh();
	}
};

GameConsoleActorCategory._handlerRecovery = function(params) {
	var actorId = Number(params[0]);
	var actor = $gameActors.actor(actorId);
	actor.recoverAll();
	var mainManager = this.mainManager;
	if (mainManager.isSceneBattle()) {
		mainManager.scene._statusWindow.refresh();
	}
};

GameConsoleActorCategory._handlerExp = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var value = Number(params[2]);
	var actor = $gameActors.actor(actorId);
	switch (operation) {
		case '+':
			actor.gainExp(value);
			break;
		case '-':
			actor.gainExp(-value);
			break;
		case '=':
			var lastValue = actor.currentExp() - 1;
			actor.gainExp(-lastValue);
			actor.gainExp(value - 1);
			break;
	}
};

GameConsoleActorCategory._handlerLevel = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var value = Number(params[2]);
	var actor = $gameActors.actor(actorId);
	var lastLevel = actor.level;
	switch (operation) {
		case '+':
			actor.changeLevel(lastLevel + value);
			break;
		case '-':
			actor.changeLevel(lastLevel - value);
			break;
		case '=':
			actor.changeLevel(value);
			break;
	}
};

GameConsoleActorCategory._handlerClass = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var classId = Number(params[2]);
	var keepExp = DKToolsUtils.toBoolean(params[3]);
	var actor = $gameActors.actor(actorId);
	if (operation === '=') {
		actor.changeClass(classId, keepExp);
	}
};

GameConsoleActorCategory._handlerName = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var newName = params[2];
	var actor = $gameActors.actor(actorId);
	if (operation === '=') {
		actor.setName(newName);
	}
};

GameConsoleActorCategory._handlerNickname = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var newNickname = params[2];
	var actor = $gameActors.actor(actorId);
	if (operation === '=') {
		actor.setNickname(newNickname);
	}
};

GameConsoleActorCategory._handlerProfile = function(params) {
	var actorId = Number(params[0]);
	var operation = params[1];
	var newProfile = params[2];
	var actor = $gameActors.actor(actorId);
	if (operation === '=') {
		actor.setProfile(newProfile);
	}
};

//===========================================================================
// Game Console Map Category
//===========================================================================

function GameConsoleMapCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleMapCategory = Object.create(GameConsoleCategoryBase);

GameConsoleMapCategory.getParentName = function() {
	return 'main';
};

GameConsoleMapCategory.getName = function() {
	return 'map';
};

GameConsoleMapCategory.initializeCommands = function() {
	this._commands = {};
};

//===========================================================================
// Game Console System Category
//===========================================================================

function GameConsoleSystemCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleSystemCategory = Object.create(GameConsoleCategoryBase);

GameConsoleSystemCategory.getParentName = function() {
	return 'main';
};

GameConsoleSystemCategory.getName = function() {
	return 'system';
};

GameConsoleSystemCategory.initializeCommands = function() {
	this._commands = {};
};

//===========================================================================
// Game Console Switches Category
//===========================================================================

function GameConsoleSwitchesCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleSwitchesCategory = Object.create(GameConsoleCategoryBase);

GameConsoleSwitchesCategory.getParentName = function() {
	return 'main';
};

GameConsoleSwitchesCategory.getName = function() {
	return 'switches';
};

GameConsoleSwitchesCategory.initializeCommands = function() {
	this._commands = {
		set: {
			handler: this._handlerSet.bind(this)
		},
		enable: {
			handler: this._handlerEnable.bind(this)
		},
		disable: {
			handler: this._handlerDisable.bind(this)
		},
		switch: {
			handler: this._handlerSwitch.bind(this)
		}
	};
};

GameConsoleSwitchesCategory._handlerSet = function(params) {
	var selfSwitches = ['A', 'B', 'C', 'D'];
	var	switchType = params[0].toUpperCase();
	var switchId = Number(switchType);
	var value = DKToolsUtils.toBoolean(params[1]);
	if (switchId >= 1) {
		$gameSwitches.setValue(switchId, value);
	} else if (selfSwitches.contains(switchType)) {
		var mapId = Number(params[2]);
		var eventId = Number(params[3]);
		var data = [mapId, eventId, switchType];
		$gameSelfSwitches.setValue(data, value);
	}
};

GameConsoleSwitchesCategory._handlerEnable = function(params) {
	var selfSwitches = ['A', 'B', 'C', 'D'];
	var	switchType = params[0].toUpperCase();
	var switchId = Number(switchType);
	if (switchId >= 1) {
		$gameSwitches.setValue(switchId, true);
	} else if (selfSwitches.contains(switchType)) {
		var mapId = Number(params[1]);
		var eventId = Number(params[2]);
		var data = [mapId, eventId, switchType];
		$gameSelfSwitches.setValue(data, true);
	}
};

GameConsoleSwitchesCategory._handlerDisable = function(params) {
	var selfSwitches = ['A', 'B', 'C', 'D'];
	var	switchType = params[0].toUpperCase();
	var switchId = Number(switchType);
	if (switchId >= 1) {
		$gameSwitches.setValue(switchId, false);
	} else if (selfSwitches.contains(switchType)) {
		var mapId = Number(params[1]);
		var eventId = Number(params[2]);
		var data = [mapId, eventId, switchType];
		$gameSelfSwitches.setValue(data, false);
	}
};

GameConsoleSwitchesCategory._handlerSwitch = function(params) {
	var selfSwitches = ['A', 'B', 'C', 'D'];
	var	switchType = params[0].toUpperCase();
	var switchId = Number(switchType);
	if (switchId >= 1) {
		var lastValue = $gameSwitches.value(switchId);
		$gameSwitches.setValue(switchId, !lastValue);
	} else if (selfSwitches.contains(switchType)) {
		var mapId = Number(params[1]);
		var eventId = Number(params[2]);
		var data = [mapId, eventId, switchType];
		var lastValue = $gameSelfSwitches.value(data);
		$gameSelfSwitches.setValue(data, !lastValue);
	}
};

//===========================================================================
// Game Console Variables Category
//===========================================================================

function GameConsoleVariablesCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleVariablesCategory = Object.create(GameConsoleCategoryBase);

GameConsoleVariablesCategory.getParentName = function() {
	return 'main';
};

GameConsoleVariablesCategory.getName = function() {
	return 'variables';
};

GameConsoleVariablesCategory.initializeCommands = function() {
	this._commands = {
		set: {
			handler: this._handlerSet.bind(this)
		},
		add: {
			handler: this._handlerAdd.bind(this)
		},
		sub: {
			handler: this._handlerSub.bind(this)
		},
		mul: {
			handler: this._handlerMul.bind(this)
		},
		div: {
			handler: this._handlerDiv.bind(this)
		},
		mod: {
			handler: this._handlerMod.bind(this)
		}
	};
};

GameConsoleVariablesCategory._handlerSet = function(params) {
	var variableId = Number(params[0]);
	var value = Number(params[1]);
	if (variableId >= 1) {
		$gameVariables.setValue(variableId, value);
	}
};

GameConsoleVariablesCategory._handlerAdd = function(params) {
	var variableId = Number(params[0]);
	var value = Number(params[1]);
	if (variableId >= 1) {
		var lastValue = $gameVariables.value(variableId);
		var newValue = lastValue + value;
		$gameVariables.setValue(variableId, newValue);
	}
};

GameConsoleVariablesCategory._handlerSub = function(params) {
	var variableId = Number(params[0]);
	var value = Number(params[1]);
	if (variableId >= 1) {
		var lastValue = $gameVariables.value(variableId);
		var newValue = lastValue - value;
		$gameVariables.setValue(variableId, newValue);
	}
};

GameConsoleVariablesCategory._handlerMul = function(params) {
	var variableId = Number(params[0]);
	var value = Number(params[1]);
	if (variableId >= 1) {
		var lastValue = $gameVariables.value(variableId);
		var newValue = lastValue * value;
		$gameVariables.setValue(variableId, newValue);
	}
};

GameConsoleVariablesCategory._handlerDiv = function(params) {
	var variableId = Number(params[0]);
	var value = Number(params[1]);
	if (variableId >= 1) {
		var lastValue = $gameVariables.value(variableId);
		var newValue = lastValue / value;
		$gameVariables.setValue(variableId, newValue);
	}
};

GameConsoleVariablesCategory._handlerMod = function(params) {
	var variableId = Number(params[0]);
	var value = Number(params[1]);
	if (variableId >= 1) {
		var lastValue = $gameVariables.value(variableId);
		var newValue = lastValue % value;
		$gameVariables.setValue(variableId, newValue);
	}
};

//===========================================================================
// Game Console Timer Category
//===========================================================================

function GameConsoleTimerCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleTimerCategory = Object.create(GameConsoleCategoryBase);

GameConsoleTimerCategory.getParentName = function() {
	return 'main';
};

GameConsoleTimerCategory.getName = function() {
	return 'timer';
};

GameConsoleTimerCategory.initializeCommands = function() {
	this._commands = {
		start: {
			handler: this._handlerStart.bind(this)
		},
		stop: {
			handler: Game_Timer.prototype.stop.bind($gameTimer)
		}
	};
};

GameConsoleTimerCategory._handlerStart = function(params) {
	var time = Number(params[0]);
	$gameTimer.start(time);
};

//===========================================================================
// Game Console Movement Category
//===========================================================================

function GameConsoleMovementCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleMovementCategory = Object.create(GameConsoleCategoryBase);

GameConsoleMovementCategory.getParentName = function() {
	return 'map';
};

GameConsoleMovementCategory.getName = function() {
	return 'movement';
};

GameConsoleMovementCategory.initializeCommands = function() {
	this._commands = {};
};

//===========================================================================
// Game Console Player Category
//===========================================================================

function GameConsolePlayerCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsolePlayerCategory = Object.create(GameConsoleCategoryBase);

GameConsolePlayerCategory.getParentName = function() {
	return 'map';
};

GameConsolePlayerCategory.getName = function() {
	return 'player';
};

GameConsolePlayerCategory.initializeCommands = function() {
	this._commands = {};
};

//===========================================================================
// Game Console Picture Category
//===========================================================================

function GameConsolePictureCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsolePictureCategory = Object.create(GameConsoleCategoryBase);

GameConsolePictureCategory.getParentName = function() {
	return 'map';
};

GameConsolePictureCategory.getName = function() {
	return 'picture';
};

GameConsolePictureCategory.initializeCommands = function() {
	this._commands = {};
};

//===========================================================================
// Game Console Screen Category
//===========================================================================

function GameConsoleScreenCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleScreenCategory = Object.create(GameConsoleCategoryBase);

GameConsoleScreenCategory.getParentName = function() {
	return 'map';
};

GameConsoleScreenCategory.getName = function() {
	return 'screen';
};

GameConsoleScreenCategory.initializeCommands = function() {
	this._commands = {};
};

//===========================================================================
// Game Console Media Category
//===========================================================================

function GameConsoleMediaCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleMediaCategory = Object.create(GameConsoleCategoryBase);

GameConsoleMediaCategory.getParentName = function() {
	return 'map';
};

GameConsoleMediaCategory.getName = function() {
	return 'media';
};

GameConsoleMediaCategory.initializeCommands = function() {
	this._commands = {
		bgm: {
			handler: this._handlerBgm.bind(this)
		},
		bgs: {
			handler: this._handlerBgs.bind(this)
		},
		me: {
			handler: this._handlerMe.bind(this)
		},
		se: {
			handler: this._handlerSe.bind(this)
		},
		video: {
			handler: this._handlerVideo.bind(this)
		}
	};
};

GameConsoleMediaCategory.isAudioExist = function(folder, filename) {
	return true;
};

GameConsoleMediaCategory.isVideoExist = function(folder, filename) {
	return true;
};

GameConsoleMediaCategory._handlerBgm = function(params) {
	var operation = params[0];
	switch (operation) {
		case 'start':
			var filename = params[1];
			if (this.isAudioExist('bgm', filename)) {
				AudioManager.playBgm({
					name: filename,
					volume: Number(params[2]) || 100,
					pitch: Number(params[3]) || 100,
					pan: Number(params[4]) || 0
				});
			}
			break;
		case 'stop':
			AudioManager.stopBgm();
			break;
		case 'fade':
			var duration = Number(params[1]) || 0;
			AudioManager.fadeOutBgm(duration);
			break;
		case 'save':
			$gameSystem.saveBgm();
			break;
		case 'replay':
			$gameSystem.replayBgm();
			break;
	}
};

GameConsoleMediaCategory._handlerBgs = function(params) {
	var operation = params[0];
	switch (operation) {
		case 'start':
			var filename = params[1];
			if (this.isAudioExist('bgs', filename)) {
				AudioManager.playBgs({
					name: filename,
					volume: Number(params[2]) || 100,
					pitch: Number(params[3]) || 100,
					pan: Number(params[4]) || 0
				});
			}
			break;
		case 'stop':
			AudioManager.stopBgs();
			break;
		case 'fade':
			var duration = Number(params[1]) || 0;
			AudioManager.fadeOutBgs(duration);
			break;
	}
};

GameConsoleMediaCategory._handlerMe = function(params) {
	var operation = params[0];
	switch (operation) {
		case 'start':
			var filename = params[1];
			if (this.isAudioExist('me', filename)) {
				AudioManager.playMe({
					name: filename,
					volume: Number(params[2]) || 100,
					pitch: Number(params[3]) || 100,
					pan: Number(params[4]) || 0
				});
			}
			break;
		case 'stop':
			AudioManager.stopMe();
			break;
		case 'fade':
			var duration = Number(params[1]) || 0;
			AudioManager.fadeOutMe(duration);
			break;
	}
};

GameConsoleMediaCategory._handlerSe = function(params) {
	var operation = params[0];
	switch (operation) {
		case 'start':
			var filename = params[1];
			if (this.isAudioExist('se', filename)) {
				AudioManager.playSe({
					name: filename,
					volume: Number(params[2]) || 100,
					pitch: Number(params[3]) || 100,
					pan: Number(params[4]) || 0
				});
			}
			break;
		case 'stop':
			AudioManager.stopSe();
			break;
	}
};

GameConsoleMediaCategory._handlerVideo = function(params) {
	var operation = params[0];
	switch (operation) {
		case 'start': {
			var filename = params[1];
			if (this.isVideoExist('video', filename)) {
				// добавить folder + ext
				//Graphics.playVideo(filename);
			}
		}
	}
};

//===========================================================================
// Game Console Battle Category
//===========================================================================

function GameConsoleBattleCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleBattleCategory = Object.create(GameConsoleCategoryBase);

GameConsoleBattleCategory.getParentName = function() {
	return 'map';
};

GameConsoleBattleCategory.getName = function() {
	return 'battle';
};

GameConsoleBattleCategory.initializeCommands = function() {
	this._commands = {
		start: {
		},
		win: {
			//availableHandler: this._availableHandlerWin.bind(this),
			//handler: BattleManager.processVictory.bind(BattleManager)
		},
		lose: {
			//handler: BattleManager.processVictory.bind(BattleManager)
		},
		escape: {
		}
	};
};

//GameConsoleBattleCategory._availableHandlerWin = function() {
//	return this.mainManager.scene instanceof Scene_Battle;
//};

//===========================================================================
// Game Console Scene Category
//===========================================================================

function GameConsoleSceneCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleSceneCategory = Object.create(GameConsoleCategoryBase);

GameConsoleSceneCategory.getParentName = function() {
	return 'main';
};

GameConsoleSceneCategory.getName = function() {
	return 'scene';
};

GameConsoleSceneCategory.initializeCommands = function() {
	this._commands = {
		open: {
			handler: this._handlerOpen.bind(this)
		}
	};
};

GameConsoleSceneCategory._handlerOpen = function(params) {
	var sceneName = params[0];
	// request open scene
};

//===========================================================================
// Game Console Plugin Category
//===========================================================================

function GameConsolePluginCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsolePluginCategory = Object.create(GameConsoleCategoryBase);

GameConsolePluginCategory.getParentName = function() {
	return 'main';
};

GameConsolePluginCategory.getName = function() {
	return 'plugin';
};

GameConsolePluginCategory.initializeCommands = function() {
	this._commands = {};
};

//===========================================================================
// Game Console Game Time Category
//===========================================================================

function GameConsoleGameTimeCategory() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleGameTimeCategory = Object.create(GameConsoleCategoryBase);

GameConsoleGameTimeCategory.getParentName = function() {
	return 'plugin';
};

GameConsoleGameTimeCategory.getName = function() {
	return 'game_time';
};

GameConsoleGameTimeCategory.initializeCommands = function() {
	this._commands = {};
	var commands = ['pause', 'continue', 'save', 'load', 'backward', 'forward']; // continue заменить на resume после замены в основном плагине
	for(var i = 0; i < commands.length; i++) {
		var command = commands[i];
		this._commands[command] = {
			handler: Game_Time.prototype[command].bind($gameTime)
		}
	}
	this._commands['add'] = {
		handler: this._handlerAdd.bind(this)
	}
};

GameConsoleGameTimeCategory._handlerAdd = function(params) {
	var operation = params[0];
	var amount = Number(params[1]) || 0;
	switch (operation) {
		case 'sec':
			$gameTime.addSec(amount);
			break;
		case 'min':
			$gameTime.addMin(amount);
			break;
		case 'hour':
			$gameTime.addHour(amount);
			break;
		case 'day':
			$gameTime.addDay(amount);
			break;
		case 'day_week': // day_week или dayWeek
			$gameTime.addDayWeek(amount);
			break;
		case 'month':
			$gameTime.addMonth(amount);
			break;
		case 'year':
			$gameTime.addYear(amount);
			break;
	}
};

//===========================================================================
// Game Console Log Manager
//===========================================================================

function GameConsoleLogManager() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleLogManager.initialize = function() {
};

//===========================================================================
// Game Console Command Manager
//===========================================================================

function GameConsoleCommandManager() {
	throw new Error('This is a static class (Это статический класс!)');
}

GameConsoleCommandManager._CATEGORIES = {
	main: GameConsoleMainCategory,
	log: GameConsoleLogCategory,
	party: GameConsolePartyCategory,
	actor: GameConsoleActorCategory,
	map: GameConsoleMapCategory,
	system: GameConsoleSystemCategory,
	switches: GameConsoleSwitchesCategory,
	variables: GameConsoleVariablesCategory,
	timer: GameConsoleTimerCategory,
	movement: GameConsoleMovementCategory,
	player: GameConsolePlayerCategory,
	picture: GameConsolePictureCategory,
	screen: GameConsoleScreenCategory,
	media: GameConsoleMediaCategory,
	battle: GameConsoleBattleCategory,
	scene: GameConsoleSceneCategory,
	plugin: GameConsolePluginCategory,
};

if (Imported.DKCore_Game_Time) {
	GameConsoleCommandManager._CATEGORIES['game_time'] = GameConsoleGameTimeCategory;
}

GameConsoleCommandManager.IS_CATEGORY = 0;
GameConsoleCommandManager.IS_COMMAND = 1;

Object.defineProperties(GameConsoleCommandManager, {

	scene: {
		get: function() {
			return SceneManager._scene;
		},
		configurable: true
	},

	categorySprite: {
		get: function() {
			return this._consoleWindow._categorySprite;
		},
		configurable: true
	},

	inputSprite: {
		get: function() {
			return this._consoleWindow._inputSprite;
		},
		configurable: true
	},

	hintsSprite: {
		get: function() {
			return this._consoleWindow._hintsSprite;
		},
		configurable: true
	},

	categoryName: {
		get: function() {
			return this._categoryName;
		},
		configurable: true
	},

	categories: {
		get: function() {
			return this._CATEGORIES;
		},
		configurable: true
	},

	category: {
		get: function() {
			return this.categories[this.categoryName];
		},
		configurable: true
	},

	path: {
		get: function() {
			return this.getPathForCategory(this.category);
		},
		configurable: true
	},

	//commands: {
	//	get: function() {
	//		var commands = [];
	//		var categories = this.categories;
	//		for(var categoryName in categories) {
	//			var categoryCommands = Object.keys(categories[categoryName].commands);
	//			commands.push(categoryCommands);
	//		}
	//		return commands;
	//	},
	//	configurable: true
	//}
});

GameConsoleCommandManager.initialize = function() {
	this.setCategoryName('main');
	this.initializeCategories();
};

GameConsoleCommandManager.initializeCategories = function() {
	for(var categoryName in this._CATEGORIES) {
		this._CATEGORIES[categoryName].initialize();
	}
};

GameConsoleCommandManager.setCategoryName = function(categoryName) {
	this._categoryName = categoryName;
};

GameConsoleCommandManager.setConsoleWindow = function(window) {
	this._consoleWindow = window;
};

GameConsoleCommandManager.getPathForCategory = function(category) {
	var parentName = category.getParentName();
	var path = [];
	while(parentName) {
		var categoryName = category.getName();
		path.push(categoryName);
		category = this.categories[parentName];
		parentName = category.getParentName();
	}
	path.push('main');
	return path.reverse();
};

GameConsoleCommandManager.initializeConsoleWindow = function(window) {
	this.setConsoleWindow(window);
	this._setupInputEvents();
	this.updateCategorySprite();
};

GameConsoleCommandManager._setupInputEvents = function() {
	this.inputSprite.addEventHandler('ok', this._onInputSpriteOk.bind(this));
	this.inputSprite.addEventHandler('input', this._onInputSpriteInput.bind(this));
};

GameConsoleCommandManager.updateCategorySprite = function() {
	var path = this.path;
	var text = '';
	for(var i = 0; i < path.length; i++) {
		text += path[i] + ' > ';
	}
	this.categorySprite.setText(text);
};

GameConsoleCommandManager._onInputSpriteOk = function() {
	var text = this.inputSprite.text;
	this.processMain(text);
	this.clearInputText();
	this.clearHints();
};

GameConsoleCommandManager.clearInputText = function() {
	var inputSprite = this.inputSprite;
	inputSprite.clearText();
	inputSprite.activate();
};

GameConsoleCommandManager.clearHints = function() {
	var hintsSprite = this.hintsSprite;
	hintsSprite.setupPlacement();
	hintsSprite.clearElements();
};

GameConsoleCommandManager._onInputSpriteInput = function() {
	var text = this.inputSprite.text;
	this._createHints(text);
};

GameConsoleCommandManager._createHints = function(text) {
	this.hintsSprite.setupPlacement();
	if (text.length === 0) {
		this.clearHints();
		return;
	}
	var elements = [];
	var hints = this.getHints();
	var hintIndex = 0;
	var length = 12;
	for(var i = 0; i < length; hintIndex++) {
		if (hintIndex === hints.length) {
			break;
		}
		var hint = hints[hintIndex];
		if (hint.contains(text)) {
			var element = this._createHint(hint);
			elements.push(element);
			i++;
		}
	}
	this.hintsSprite.setupRows(2);
	this.hintsSprite.setElements(elements);
};

GameConsoleCommandManager._createHint = function(text) {
	var sprite = new DKTools_Sprite();
	sprite.setupBackgroundColor('#ffff00');
	//sprite.setupOpacity(50);
	sprite.setupFont([null, null, 24]);
	sprite.setupText(text);
	sprite.start();
	sprite.addEventHandler('click', function() {
		this.inputSprite.setText(text);
	}.bind(this));
	return sprite;
};

//GameConsoleCommandManager.baseCategories = function() {
//	return ['main', 'scene', 'data', 'switches', 'variables', 'timer', 'party', 'actor', 'movement', 'player', 'picture', 'screen', 'media', 'battle', 'system', 'map', 'script'];
//};

//GameConsoleCommandManager.serviceCategories = function() {
//	return [];
//};

//GameConsoleCommandManager.registredCategories = function() {
//	return this._registredCategories || []; //
//};

//GameConsoleCommandManager.baseCommands = function() {
//	return ['up', 'back', 'help', 'exit', 'close', 'print'];
//};

//GameConsoleCommandManager.serviceCommands = function() {
//	return [];
//};

//GameConsoleCommandManager.registredCommands = function() {
//	return this._registredCommands || []; //
//};

//GameConsoleCommandManager.categories = function() {
//	var categories = [];
//	return categories.concat(this.baseCategories(), this.serviceCategories(), this.registredCategories());
//};

//GameConsoleCommandManager.commands = function() {
//	var commands = [];
//	return commands.concat(this.baseCommands(), this.serviceCommands(), this.registredCommands());
//};

GameConsoleCommandManager.isSceneMap = function() {
	return this.scene instanceof Scene_Map;
};

GameConsoleCommandManager.isSceneBattle = function() {
	return this.scene instanceof Scene_Battle;
};

GameConsoleCommandManager.isMainCategory = function() {
	return this.categoryName === 'main';
};

GameConsoleCommandManager.isCategoryAvailableForHint = function(category) {
	if (category.availableHandler) {
		return category.availableHandler();
	}
	return this.category !== category;
};

GameConsoleCommandManager.isCommandAvailableForHint = function(command) {
	if (command.alwaysAvailable) {
		return true;
	}
	if (command.availableHandler) {
		return command.availableHandler();
	}
	return this.category === command.category;
};

GameConsoleCommandManager.getHints = function() {
	var hints = [];
	var categories = this.categories;
	for(var categoryName in categories) {
		var category = categories[categoryName];
		var commands = category.commands;
		for(var commandName in commands) {
			var command = commands[commandName];
			if (this.isCommandAvailableForHint(command)) {
				hints.push(commandName);
			}
		}
		if (this.isCategoryAvailableForHint(category)) {
			hints.push(categoryName);
		}
	}
	return hints;
};

GameConsoleCommandManager.isCategory = function(text) {
	var categories = Object.keys(this.categories);
	return categories.contains(text);
};

GameConsoleCommandManager.isCommand = function(text) {
	var commands = [];
	var commandName = text.split(' ').splice(0, 1)[0];
	var categories = this.categories;
	for(var categoryName in categories) {
		var category = categories[categoryName];
		var categoryCommands = Object.keys(category.commands);
		commands = commands.concat(categoryCommands);
	}
	return commands.contains(commandName);
};

GameConsoleCommandManager.getCommandType = function(text) {
	if (this.isCategory(text)) {
		p('is category');
		return this.IS_CATEGORY;
	}
	if (this.isCommand(text)) {
		p('is command');
		return this.IS_COMMAND;
	}
};

GameConsoleCommandManager.processMain = function(text) {
	var type = this.getCommandType(text);
	switch (type) {
		case this.IS_CATEGORY:
			this.selectCategory(text);
			break;
		case this.IS_COMMAND:
			this.processCommand(text);
			break;
	}
	//var command_regexp = /^\s*(.+?)\s+(.+?)\s*$/i;
	//var command, command_info, status;
	//this.clearError();
	//this.input_text = input_text;
	//if (input_text.match(command_regexp))
	//{
	//	command = this.convertCommand(RegExp.$1.toLowerCase());
	//	command_info = RegExp.$2;
	//}
	//switch(command)
	//{
	//	case 'switch': 			return this.checkCommandStatus(this.switchCommand(command_info));
	//	case 'variable': 		return this.checkCommandStatus(this.variableCommand(command_info));
	//	case 'self_switch':		return this.checkCommandStatus(this.selfSwitchCommand(command_info));
	//	case 'common_event':	return this.checkCommandStatus(this.commonEventCommand(command_info));
	//	case 'start':			return this.checkCommandStatus(this.startCommand(command_info));
	//	case 'stop':			return this.checkCommandStatus(this.stopCommand(command_info));
	//	case 'item':			return this.checkCommandStatus(this.itemsCommand($dataItems, command_info));
	//	case 'weapon':			return this.checkCommandStatus(this.itemsCommand($dataWeapons, command_info));
	//	case 'armor':			return this.checkCommandStatus(this.itemsCommand($dataArmors, command_info));
	//	case 'gold':			return this.checkCommandStatus(this.goldCommand(command_info));
	//	case 'teleport':		return this.checkCommandStatus(this.teleportCommand(command_info));
	//	case 'party':			return this.checkCommandStatus(this.partyCommand(command_info));
	//	case 'actor':			return this.checkCommandStatus(this.actorCommand(command_info));
	//	default:
	//	{
	//		// status = this.userCommand();
	//		break;
	//	}
	//}

	// switch(command)
	// {
		// case 'script':
		// {
			// try 
			// {
				// eval(command_info);
				// this.addTextLog('Выполнено: ' + command_info);
			// }
			// catch(e)
			// {
				// this.addTextLog('Ошибка: ' + e);
			// }
			// break;
		// }
		// default:
		// {
			// try
			// {
				// this.processUserCommand(this.input_text);
			// }
			// catch(e)
			// {
				// this.addTextLog('Ошибка: ' + e);
			// }
			// break;
		// }
	// }
	// GameConsoleLogManager.addCommandLog(this.input_text);
	// this.input_window.setInputText();
};

GameConsoleCommandManager.isCommandAvailable = function(text) {
	var command = this.findCommand(text);
	if (!command) {
		return false;
	}
	if (this.isCommandAvailableForHint(command)) {
		return true;
	}
	return false;
};

GameConsoleCommandManager.findCommand = function(text) {
	var category = this.category;
	var mainCategoryCommands = this.categories['main'].commands;
	var commands = category.commands;
	return commands[text] || mainCategoryCommands[text];
};

GameConsoleCommandManager.processCommand = function(text) {
	var commandName = text.split(' ').splice(0, 1)[0];
	p(commandName)
	if (this.isCommandAvailable(commandName)) {
		var command = this.findCommand(commandName);
		this.executeCommand(command, text);
	}
};

GameConsoleCommandManager.executeCommand = function(command, text) {
	var params = text.split(' ');
	params.splice(0, 1);
	if (command.handler) {
		p('call command handler');
		p(params);
		command.handler(params);
	} else {
		p('not have a handler');
	}
};

GameConsoleCommandManager.selectCategory = function(categoryName) {
	this.setCategoryName(categoryName);
	this.updateCategorySprite();
};

//

GameConsoleCommandManager.convertCommand = function(command) {
	if (GameConsoleParam.switch.contains(command)) return 'switch';
	if (GameConsoleParam.variable.contains(command)) return 'variable';
	if (GameConsoleParam.self_switch.contains(command)) return 'self_switch';
	if (GameConsoleParam.common_event.contains(command)) return 'common_event';
	if (GameConsoleParam.start.contains(command)) return 'start';
	if (GameConsoleParam.timer.contains(command)) return 'timer';
	if (GameConsoleParam.bgm.contains(command)) return 'bgm';
	if (GameConsoleParam.bgs.contains(command)) return 'bgs';
	if (GameConsoleParam.me.contains(command)) return 'me';
	if (GameConsoleParam.se.contains(command)) return 'se';
	if (GameConsoleParam.item.contains(command)) return 'item';
	if (GameConsoleParam.weapon.contains(command)) return 'weapon';
	if (GameConsoleParam.armor.contains(command)) return 'armor';
	if (GameConsoleParam.gold.contains(command)) return 'gold';
	if (GameConsoleParam.teleport.contains(command)) return 'teleport';
	if (GameConsoleParam.hp.contains(command)) return 'hp';
	return command;
};

GameConsoleCommandManager.checkCommandStatus = function(status) {
	if (status)
		this.clearInput();
	else
		this.addError();
};

GameConsoleCommandManager.standardSoundVolume = function() {
	return 100;
};

GameConsoleCommandManager.standardSoundPitch = function() {
	return 100;
};

GameConsoleCommandManager.standardSoundPan = function() {
	return 0;
};

// Commands

GameConsoleCommandManager.variableCommand = function(input_text) {
	var variable_id_regexp = /\s*(\d+)\s*(=|\+|-|\*|\/|%)+?\s*(-*)(\d+)\s*/i;
	var variable_name_regexp = /\s*[\(]+(.+)[\)]+\s*(=|\+|-|\*|\/|%)+?\s*(-*)(\d+)\s*/i;
	var matched = false;
	if (input_text.match(variable_id_regexp))
	{
		var id = Number(RegExp.$1);
		matched = true;
	}
	if (input_text.match(variable_name_regexp))
	{
		var name = RegExp.$1;
		var id = this.getVariableId(name);
		if (id === -1)
			return this.generateNameError(name);
		matched = true;
	}
	if (matched)
	{
		var length = $dataSystem.variables.length;
		if (id < 1 || id >= length)
			return this.generateIdError(id);
		var operation = RegExp.$2;
		var sign = RegExp.$3;
		var value = Number(RegExp.$4);
		if (sign === '-')
			value *= -1;
		switch(operation)
		{
			case '=': return this.variableSet(id, value);
			case '+': return this.variableAdd(id, value);
			case '-': return this.variableSub(id, value);
			case '*': return this.variableMul(id, value);
			case '/': return this.variableDiv(id, value);
			case '%': return this.variableMod(id, value);
		}
	}
	return this.generateCommandError(input_text);
};

GameConsoleCommandManager.actorInfo = function(input_text) {
	var actor_id_regexp = /^\s*(\d+)\s*$/i;
	var actor_name_regexp = /^\s*[\(]+(.+)[\)]+\s*$/i;
	var length = $gameActors._data.length;
	if (input_text.match(actor_id_regexp))
	{
		var id = Number(RegExp.$1);
		if (id < 1 || id >= length)
			this.generateIdError(id);
		else
			return id;
	}
	if (input_text.match(actor_name_regexp))
	{
		var name = RegExp.$1;
		var id = this.getActorId(name);
		if (id === -1)
			this.generateNameError(name);
		else
			return id - 1;
	}
	return -1;
};

GameConsoleCommandManager.iterateActors = function(callback, actor_id) {
	if (actor_id === undefined) actor_id = 0;
	if (actor_id === 0)
		$gameParty.members().forEach(callback);
	else
	{
		var actor = $gameActors.actor(actor_id);
        if (actor)
			callback(actor);
		else
			return this.generateIdError(actor_id);
	}
};

// Functions

GameConsoleCommandManager.getIdFromPropertyByName = function(database, name) {
	name = name.toLowerCase();
	for(var i = 0; i < database.length; i++)
	{
		if (!database[i]) continue;
		if (database[i].name.toLowerCase() === name) return i;
	}
	return -1;
};

GameConsoleCommandManager.getIdFromObjectByName = function(database, name) {
	name = name.toLowerCase();
	for(var i = 0; i < database.length; i++)
	{
		if (!database[i]) continue;
		if (database[i].toLowerCase() === name) return i;
	}
	return -1;
};

GameConsoleCommandManager.getIdFromFunctionByName = function(database, name) {
	name = name.toLowerCase();
	for(var i = 0; i < database.length; i++)
	{
		if (!database[i]) continue;
		if (database[i].name().toLowerCase() === name) return i + 1;
	}
	return -1;
};

GameConsoleCommandManager.getSwitchId = function(name) {
	return this.getIdFromObjectByName($dataSystem.switches, name);
};

GameConsoleCommandManager.getVariableId = function(name) {
	return this.getIdFromObjectByName($dataSystem.variables, name);
};

GameConsoleCommandManager.getEventId = function(name) {
	return this.getIdFromPropertyByName($dataMap.events, name);
};

GameConsoleCommandManager.getCommonEventId = function(name) {
	return this.getIdFromPropertyByName($dataCommonEvents, name);
};

GameConsoleCommandManager.getItemId = function(name) {
	return this.getIdFromPropertyByName($dataItems, name);
};

GameConsoleCommandManager.getWeaponId = function(name) {
	return this.getIdFromPropertyByName($dataWeapons, name);
};

GameConsoleCommandManager.getArmorId = function(name) {
	return this.getIdFromPropertyByName($dataArmors, name);
};

GameConsoleCommandManager.getMapId = function(name) {
	return this.getIdFromPropertyByName($dataMapInfos, name);
};

GameConsoleCommandManager.getStateId = function(name) {
	return this.getIdFromPropertyByName($dataStates, name);
};

GameConsoleCommandManager.getActorId = function(name) {
	return this.getIdFromFunctionByName($gameActors._data, name);
};

// Command Functions

GameConsoleCommandManager.activateSwitch = function(id, enabled) {
	$gameSwitches.setValue(id, enabled);
	var text = (enabled ? 'Включено: ' : 'Выключено: ');
	var name = $dataSystem.switches[id];
	if (!name) name = 'Переключатель';
	name += ' (ID = ' + id + ')';
	this.addTextLog(text + name);
	return true;
};

GameConsoleCommandManager.activateSelfSwitch = function(map_id, event_id, switch_name, enable) {
	var info = [map_id, event_id, switch_name];
	$gameSelfSwitches.setValue(info, enable);
	var text = (enable ? 'Включено: ' : 'Выключено: ');
	var name = 'Лок. переключатель ' + switch_name;
	this.addTextLog(text + name);
	return true;
};

GameConsoleCommandManager.variableSet = function(id, value) {
	$gameVariables.setValue(id, value);
	var name = $dataSystem.variables[id];
	if (!name) name = 'Переменная';
	name += ' (ID = ' + id + ')';
	this.addTextLog(name + ' теперь = ' + value);
	return true;
};

GameConsoleCommandManager.variableAdd = function(id, value) {
	var last_value = $gameVariables.value(id);
	$gameVariables.setValue(id, last_value + value);
	var name = $dataSystem.variables[id];
	if (!name) name = 'Переменная';
	name += ' (ID = ' + id + ')';
	this.addTextLog(name + ' увеличена на ' + value + ' и теперь = ' + (last_value + value));
	return true;
};

GameConsoleCommandManager.variableSub = function(id, value) {
	var last_value = $gameVariables.value(id);
	$gameVariables.setValue(id, last_value - value);
	var name = $dataSystem.variables[id];
	if (!name) name = 'Переменная';
	name += ' (ID = ' + id + ')';
	this.addTextLog(name + ' уменьшена на ' + value + ' и теперь = ' + (last_value - value));
	return true;
};

GameConsoleCommandManager.variableMul = function(id, value) {
	var last_value = $gameVariables.value(id);
	$gameVariables.setValue(id, last_value * value);
	var name = $dataSystem.variables[id];
	if (!name) name = 'Переменная';
	name += ' (ID = ' + id + ')';
	this.addTextLog(name + ' умножена на ' + value + ' и теперь = ' + (last_value * value));
	return true;
};

GameConsoleCommandManager.variableDiv = function(id, value) {
	if (value === 0) return this.generateValueError(value);
	var last_value = $gameVariables.value(id);
	$gameVariables.setValue(id, last_value / value);
	var name = $dataSystem.variables[id];
	if (!name) name = 'Переменная';
	name += ' (ID = ' + id + ')';
	this.addTextLog(name + ' разделена на ' + value + ' и теперь = ' + (last_value / value));
	return true;
};

GameConsoleCommandManager.variableMod = function(id, value) {
	if (value === 0) return this.generateValueError(value);
	var last_value = $gameVariables.value(id);
	$gameVariables.setValue(id, last_value % value);
	var name = $dataSystem.variables[id];
	if (!name) name = 'Переменная';
	name += ' (ID = ' + id + ')';
	this.addTextLog(name + ' разделена с остатком на ' + value + ' и теперь = ' + (last_value % value));
	return true;
};

GameConsoleCommandManager.activateCommonEvent = function(id) {
	$gameTemp.reserveCommonEvent(id);
	var name = $dataCommonEvents[id].name;
	if (name) name = ' ' + '"' + name + '"';
	name += ' (ID = ' + id + ')';
	this.addTextLog('Запуск общего события' + name);
	return true;
};

GameConsoleCommandManager.startTimer = function(count) {
	$gameTimer.start(count);
	this.addTextLog('Таймер запущен: ' + count + ' кадров');
	return true;
};

GameConsoleCommandManager.startSound = function(sound, name, volume, pitch, pan) {
	var object = { name: name, volume: volume, pitch: pitch, pan: pan };
	switch(sound)
	{
		case 'bgm':
		{
			AudioManager.playBgm(object);
			break;
		}
		case 'bgs':
		{
			AudioManager.playBgs(object);
			break;
		}
		case 'me':
		{
			AudioManager.playMe(object);
			break;
		}
		case 'se':
		{
			AudioManager.playSe(object);
			break;
		}
	}
	sound = sound.charAt(0).toUpperCase() + sound.substr(1);
	this.addTextLog(sound + ' начато с name = ' + name + ' vol = ' + volume + ' pitch = ' + pitch + ' pan = ' + pan);
	return true;
};

GameConsoleCommandManager.gainItem = function(item, amount) {
	$gameParty.gainItem(item, amount);
	var text = (amount > 0 ? 'Добавлено: ' : 'Удалено: ');
	this.addTextLog(text + item.name + ' x' + Math.abs(amount));
	return true;
};

GameConsoleCommandManager.gainGold = function(amount) {
	$gameParty.gainGold(amount);
	var text = (amount > 0 ? 'Добавлено: ' : 'Удалено: ');
	this.addTextLog(text + Math.abs(amount) + ' ' + TextManager.currencyUnit);
	return true;
};

GameConsoleCommandManager.teleportPlayer = function(id, x, y, dir) {
	$gamePlayer.reserveTransfer(id, x, y, dir, false);
	var name = $dataMapInfos[id].name;
	this.addTextLog('Телепорт на карту "' + name + '" (ID = ' + id + ')');
	return true;
};

GameConsoleCommandManager.partyChangeResource = function(callback, amount, amount_text) {
	this.iterateActors(callback);
	var text = (amount > 0 ? ' получила ' : ' потеряла ');
	this.addTextLog('Вся партия' + text + Math.abs(amount) + ' ' + amount_text);
	return true;
};

GameConsoleCommandManager.partyState = function(id, sign) {
	var callback = function(actor) {
		var alreadyDead = actor.isDead();
        if (sign === '+')
            actor.addState(id);
        else
            actor.removeState(id);
        if (actor.isDead() && !alreadyDead)
            actor.performCollapse();
        actor.clearResult();
    }.bind(this);
	this.iterateActors(callback);
	var text = (sign === '+' ? ' получила ' : ' потеряла ');
	var name = $dataStates[id].name;
	this.addTextLog('Вся партия' + text + 'состояние: ' + name + ' (ID = ' + id + ')');
	return true;
};

GameConsoleCommandManager.partyRecovery = function(callback) {
	this.iterateActors(callback);
	this.addTextLog('Вся партия восстановлена');
	return true;
};

GameConsoleCommandManager.actorRecovery = function(callback, actor_id) {
	this.iterateActors(callback, actor_id);
	var name = $gameActors.actor(actor_id).name();
	this.addTextLog(name + ' восстановлен');
	return true;
};


GameConsoleCommandManager.stopTimer = function() {
	$gameTimer.stop();
	this.addTextLog('Таймер остановлен');
	return true;
};

GameConsoleCommandManager.stopSound = function(sound) {
	switch(sound)
	{
		case 'bgm':
		{
			AudioManager.stopBgm();
			break;
		}
		case 'bgs':
		{
			AudioManager.stopBgs();
			break;
		}
		case 'me':
		{
			AudioManager.stopMe();
			break;
		}
		case 'se':
		{
			AudioManager.stopSe();
			break;
		}
	}
	sound = sound.charAt(0).toUpperCase() + sound.substr(1);
	this.addTextLog(sound + ' остановлено');
	return true;
};

GameConsoleCommandManager.stopBattle = function() {
	return true;
};



GameConsoleCommandManager.addActor = function(id) {
	var name = $gameActors.actor(id).name();
	$gameParty.addActor(id);
	this.addTextLog('В партию добавлен: ' + name);
};

GameConsoleCommandManager.removeActor = function(id) {
	var name = $gameActors.actor(id).name();
	$gameParty.removeActor(id);
	this.addTextLog('Из партии удален: ' + name);
};

GameConsoleCommandManager.partyLvl = function(lvl) {
	$gameParty.members().forEach(function(actor) {
		var last_level = actor.level;
		actor.changeLevel(last_level + lvl, false);
	}, this);
	var text = (lvl > 0 ? 'получила ' : 'потеряла ');
	this.addTextLog('Вся партия ' + text + Math.abs(lvl) + ' уровней');
};

GameConsoleCommandManager.actorLvl = function(id, lvl) {
	var actor = $gameActors.actor(id);
	var last_level = actor.level;
	actor.changeLevel(last_level + lvl, false);
	var text = (lvl > 0 ? ' получил ' : ' потерял ');
	this.addTextLog(actor.name() + text + Math.abs(lvl) + ' уровней');
};



// Log messages

GameConsoleCommandManager.addTextLog = function(text) {
	GameConsoleLogManager.addTextLog(text);
	this.input_window.updateLog();
};

GameConsoleCommandManager.addError = function() {
	if (this.error_id === this.EMPTY_ERROR) return;
	this.addTextLog(this.error_message);
	this.clearError();
};

GameConsoleCommandManager.clearError = function() {
	this.error_id = this.EMPTY_ERROR;
	this.error_message = '';
};

GameConsoleCommandManager.generateIdError = function(id) {
	this.error_id = this.ID_ERROR;
	this.error_message = 'Неизвестный ID: ' + id;
	return false;
};

GameConsoleCommandManager.generateNameError = function(name) {
	this.error_id = this.NAME_ERROR;
	this.error_message = 'Неизвестное имя: ' + name;
	return false;
};

GameConsoleCommandManager.generateValueError = function(value) {
	this.error_id = this.VALUE_ERROR;
	this.error_message = 'Неизвестное значение: ' + value;
	return false;
};

GameConsoleCommandManager.generateCommandError = function(command) {
	if (command === undefined) command = this.input_text;
	this.error_id = this.COMMAND_ERROR;
	this.error_message = 'Ошибка в команде: ' + command;
	return false;
};


GameConsoleCommandManager.processErrorCommand = function(command) {
	if (command === undefined) command = this.input_text;
	this.addTextLog('Неизвестная команда: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processSwitchErrorCommand = function(command) {
	this.addTextLog('Неизвестный переключатель: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processVariableErrorCommand = function(command) {
	this.addTextLog('Неизвестная переменая: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processVariableValueErrorCommand = function(command) {
	this.addTextLog('Неизвестное значение: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processCommonEventErrorCommand = function(command) {
	this.addTextLog('Неизвестное общее событие: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processTimerErrorCommand = function(command) {
	this.addTextLog('Неизвестное значение для таймера: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processItemErrorCommand = function(command) {
	this.addTextLog('Неизвестный предмет: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processIdErrorCommand = function(command) {
	this.addTextLog('Неизвестный ID: ' + command);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processXErrorCommand = function(x) {
	this.addTextLog('Неизвестный X: ' + x);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processYErrorCommand = function(y) {
	this.addTextLog('Неизвестный Y: ' + y);
	this.input_window.setInputText();
};

GameConsoleCommandManager.processBgmNameErrorCommand = function(command) {
	this.addTextLog('Неизвестное имя Bgm: ' + command);
	this.input_window.setInputText();
};

//===========================================================================
// Data Manager
//===========================================================================

var Game_Console_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
	Game_Console_DataManager_createGameObjects.call(this);
	GameConsoleLogManager.initialize();
	GameConsoleCommandManager.initialize();
};

//===========================================================================
// Window Game Console Main
//===========================================================================

function Window_Game_Console_Main() {
	this.initialize.apply(this, arguments);
}

Window_Game_Console_Main.prototype = Object.create(DKTools_Window.prototype);
Window_Game_Console_Main.prototype.constructor = Window_Game_Console_Main;

// standard methods

Window_Game_Console_Main.prototype.standardPadding = function() {
	return 14;
};

// _create methods

Window_Game_Console_Main.prototype._createAllParts = function() {
	this._createCategorySprite();
	this._createInputSprite();
	this._createHintsSprite();
	DKTools_Window.prototype._createAllParts.call(this);
};

Window_Game_Console_Main.prototype._createCategorySprite = function() {
	this._categorySprite = new DKTools_Sprite(0, 0, this.contentsWidth(), 36);
	this._categorySprite.setupAlign('left');
	this._categorySprite.start();
};

Window_Game_Console_Main.prototype._createInputSprite = function() {
	this._inputSprite = new DKTools_Input_Base(0, 0, this.contentsWidth(), 36);
	this._inputSprite.setupMaxLength(60);
	this._inputSprite.start(true);
};

Window_Game_Console_Main.prototype._createHintsSprite = function() {
	this._hintsSprite = new DKTools_Container_Base(0, 0, this.contentsWidth(), 76);
	this._hintsSprite.setupXPadding(4);
	this._hintsSprite.setupYPadding(4);
	this._hintsSprite.start();
};

Window_Game_Console_Main.prototype._createContentsSprite = function() {
	this._windowContentsSprite = new DKTools_Container_Base();
	this._windowContentsSprite.setupElements([this._categorySprite, this._inputSprite, this._hintsSprite]);
	this._windowContentsSprite.setupPlacement('vertical');
	this._windowContentsSprite.setupYPadding(4);
};

//===========================================================================
// Window Game Console Log
//===========================================================================



//===========================================================================
// Scene Base
//===========================================================================

Scene_Base.prototype.createConsoleWindow = function() {
	var height = 36 * 5 + 4; // 4 - это y padding у _hintsSprite
	this._consoleWindow = new Window_Game_Console_Main(0, 0, Graphics.boxWidth, height);
	this._consoleWindow.setupBackgroundColor('#000000');
	this._consoleWindow.start();
	this._consoleWindow._inputSprite.addEventHandler('cancel', this.closeConsole.bind(this));
	this.addWindow(this._consoleWindow);
};

Scene_Base.prototype.removeConsoleWindow = function() {
	this._windowLayer.removeChild(this._consoleWindow);
	this._consoleWindow = null;
};

Scene_Base.prototype.changeUpdateMethod = function() {
	this._lastUpdateMethod = this.update.bind(this);
	this.update = function() {
		this._consoleWindow.update();
	}
};

Scene_Base.prototype.restoreUpdateMethod = function() {
	this.update = this._lastUpdateMethod;
};

Scene_Base.prototype.openConsole = function() {
	this.createConsoleWindow();
	this.changeUpdateMethod();
	GameConsoleCommandManager.initializeConsoleWindow(this._consoleWindow);
};

Scene_Base.prototype.closeConsole = function() {
	this.removeConsoleWindow();
	this.restoreUpdateMethod();
};

var Game_Console_Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
	Game_Console_Scene_Base_update.call(this);
	if (Input.isTriggered('console')) {
		this.openConsole();
	}
};