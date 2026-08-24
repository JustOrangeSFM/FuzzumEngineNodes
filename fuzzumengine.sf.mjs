"use strict";if(typeof window === "undefined"){var window = globalThis};async function imports(urls){if(typeof sf !== 'undefined' && sf.loader !== void 0)return await sf.loader.mjs(urls);return Promise.all(urls.map(v => import(v)));};imports.task = function(){return typeof sf !== 'undefined' && sf.loader !== void 0 ? sf.loader.task : null};;globalThis._sf1cmplr ??= {};let p_sf1cmplr = _sf1cmplr["fuzzumengine.sf"] ??= {};/* FuzzumEngine Nodes 
 MIT Licensed */
if(!window.templates) window.templates={};var _$_ = sf.dom || sf.$;var __tmplt = window.templates;var _sf_internal = window._sf_internal = window._sf_internal || {body_map:{},_replace(path,html){let h = _$_(html);if(this.body_map[path]) this.body_map[path].remove();this.reinitViews && this.reinitViews(h);return this.body_map[path] = h;},append(path,html){_$_(document.body).append(this._replace.apply(this, arguments));},prepend(path,html){_$_(document.body).prepend(this._replace.apply(this, arguments));},};// ============================================
// FUZZUM ENGINE - Main Entry Point
// ============================================

console.log('[FuzzumEngine] All nodes loaded!');
// ============================================
// FUZZUM ENGINE - Base Functions
// ============================================

// CreateActor
Blackprint.registerNode("FuzzumEngine/ActorUtils/CreateActor",
class extends Blackprint.Node {
	static input = { 
		ActorName: String
	};
	
	static output = { 
		BeginPlay: Function,
		Update: Function,
		OnDestroy: Function,
		GetActor: Object,
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "CreateActor";
	};
	
	update() {};
    input() {};
});

//GetActor
Blackprint.registerNode("FuzzumEngine/ActorUtils/GetActor",
class extends Blackprint.Node {
	static input = { 
		ActorName: String,
		ActorIndex: Number
	};
	
	static output = { 
		Actor: Object,
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "GetActor";
	};
	
	update() {};
    input() {};
});

//DestroyActor
Blackprint.registerNode("FuzzumEngine/ActorUtils/DestroyActor",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
		Actor: Object
	};
	
	static output = { 
	    Then: Function,
		Actor: Object,
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "DestroyActor"; // Исправлено название
	};
	
	update() {};
    input() {};
});


//SpawnActor
Blackprint.registerNode("FuzzumEngine/ActorUtils/SpawnActor",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
		Actor: String
	};
	
	static output = { 
	    Then: Function,
		Actor: Object,
		CurrentActorIndex: Number
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "SpawnActor"; // Исправлено название
	};
	
	update() {};
    input() {};
});


/////Base

//StartGame
Blackprint.registerNode("FuzzumEngine/BaseFunctions/StartGame",
class extends Blackprint.Node {
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "StartGame";
	};
	
	update() {};
    input() {};
});


//OnShutdownGame
Blackprint.registerNode("FuzzumEngine/BaseFunctions/OnShutdownGame",
class extends Blackprint.Node {
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "OnShutdownGame";
	};
	
	update() {};
    input() {};
});

//ExitGame
Blackprint.registerNode("FuzzumEngine/BaseFunctions/ExitGame",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "ExitGame";
	};
	
	update() {};
    input() {};
});


////Log
//Log
Blackprint.registerNode("FuzzumEngine/Messages/Log",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
		Message: String
	};
	
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "Log";
	};
	
	update() {};
    input() {};
});

//Warning
Blackprint.registerNode("FuzzumEngine/Messages/Warning",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
		Message: String
	};
	
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "Warning";
	};
	
	update() {};
    input() {};
});

//Error
Blackprint.registerNode("FuzzumEngine/Messages/Error",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
		Message: String,
	};
	
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "Error";
	};
	
	update() {};
    input() {};
});

//FatalError
Blackprint.registerNode("FuzzumEngine/Messages/FatalError",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
		Message: String,
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "FatalError";
	};
	
	update() {};
    input() {};
});


////////////Time
//Delay
Blackprint.registerNode("FuzzumEngine/Time/Delay",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
		Duration: Number  // Исправлено: было дублирование "Input"
	};
	
	static output = { 
	    Then: Function
	}; 

	constructor(instance){
		super(instance);
		this.setInterface().title = "Delay";
	};
	
	update() {};
    input() {};
});


////////Functions
Blackprint.registerNode("FuzzumEngine/ActorUtils/Functions/CreateFunction",
class extends Blackprint.Node {
	static input = { 
	    ActorClass: String,
		FunctionName: String
	};
	
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "CreateFunction";
	};
	
	update() {};
    input() {};
});

Blackprint.registerNode("FuzzumEngine/ActorUtils/Functions/CallFunction",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
	    ActorClass: String,
		FunctionName: String
	};
	
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "CallFunction";
	};
	
	update() {};
    input() {};
});
////////Functions



Blackprint.registerNode("FuzzumEngine/dfdf",
class extends Blackprint.Node {
	static input = { 
	    Execute: Function,
	    ActorClass: String,
		FunctionName: String
	};
	
	static output = { 
	    Then: Function
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "dfdf";
	};
	
	update() {};
    input() {};
});
// ============================================
// FUZZUM ENGINE - All Types Node
// ============================================

Blackprint.registerNode("FuzzumEngine/Types/AllTypes",
class extends Blackprint.Node {
	static input = {
		Exec: Blackprint.Types.Slot,
		Any: Blackprint.Types.Any,
		Number: Number,
		String: String,
		Boolean: Boolean,
		Array: Array,
		Object: Object,
		Function: Function,
	};

	static output = {
		Done: Blackprint.Types.Slot,
		Any: Blackprint.Types.Any,
		Number: Number,
		String: String,
		Boolean: Boolean,
		Array: Array,
		Object: Object,
		Function: Function,
	};

	constructor(instance){
		super(instance);
		this.setInterface().title = "All Types";
	}

	update(){
		let { Input, Output } = this.ref;
		
		console.log(' All Types:');
		console.log('  Any:', Input.Any);
		console.log('  Number:', Input.Number);
		console.log('  String:', Input.String);
		console.log('  Boolean:', Input.Boolean);
		console.log('  Array:', Input.Array);
		console.log('  Object:', Input.Object);
		console.log('  Function:', Input.Function);
		
		Output.Any = Input.Any;
		Output.Number = Input.Number;
		Output.String = Input.String;
		Output.Boolean = Input.Boolean;
		Output.Array = Input.Array;
		Output.Object = Input.Object;
		Output.Function = Input.Function;
		
		if (this.routes?.routeOut) this.routes.routeOut();
	}
});

//# sourceMappingURL=fuzzumengine.sf.mjs.map