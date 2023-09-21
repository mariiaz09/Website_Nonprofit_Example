(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"final_version_atlas_1", frames: [[0,1206,994,117],[0,1325,712,117],[996,1321,735,130],[1104,804,712,230],[0,1444,612,95],[1656,0,242,202],[1104,1036,437,283],[0,0,550,400],[552,0,550,400],[1104,0,550,400],[0,402,550,400],[552,402,550,400],[1104,402,550,400],[0,804,550,400],[552,804,550,400]]},
		{name:"final_version_atlas_2", frames: [[519,703,672,420],[0,0,1037,541],[0,543,517,547],[1193,703,550,400],[1193,1105,550,400],[0,1125,550,400],[552,1125,550,400],[1104,1507,550,400],[0,1527,550,400],[552,1527,550,400],[1039,0,520,701]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_35 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.education = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.home = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hope = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_10 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_12 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_14 = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.initialize(ss["final_version_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.medical_care = function() {
	this.initialize(ss["final_version_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.home();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,242,202), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.education();
	this.instance.setTransform(0,0,0.5803,0.3656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,300,200), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.medical_care();
	this.instance.setTransform(0,0,0.4808,0.214);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,250,150), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hope();
	this.instance.setTransform(0,0,0.9153,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,400,283), null);


(lib.Image_gif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_0();

	this.instance_1 = new lib.Image_1();

	this.instance_2 = new lib.Image_2();

	this.instance_3 = new lib.Image_3();

	this.instance_4 = new lib.Image_4();

	this.instance_5 = new lib.Image_5();

	this.instance_6 = new lib.Image_6();

	this.instance_7 = new lib.Image_7();

	this.instance_8 = new lib.Image_8();

	this.instance_9 = new lib.Image_9();

	this.instance_10 = new lib.Image_10();

	this.instance_11 = new lib.Image_11();

	this.instance_12 = new lib.Image_12();

	this.instance_13 = new lib.Image_13();

	this.instance_14 = new lib.Image_14();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,400);


(lib.endbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.text = new cjs.Text("END", "70px 'Tw Cen MT'", "#339900");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.lineWidth = 362;
	this.text.parent = this;
	this.text.setTransform(1,-34.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(1,1,1).p("A/PqnMA+fAAAIAAVPMg+fAAAg");
	this.shape.setTransform(4.025,18.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("A/PKoIAA1PMA+fAAAIAAVPg");
	this.shape_1.setTransform(4.025,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},2).wait(2));

	// Layer_3
	this.text_1 = new cjs.Text("END", "70px 'Tw Cen MT'", "#CC6600");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 78;
	this.text_1.lineWidth = 362;
	this.text_1.parent = this;
	this.text_1.setTransform(1,-34.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000099").ss(1,1,1).p("A/PqnMA+fAAAIAAVPMg+fAAAg");
	this.shape_2.setTransform(4.025,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("A/PKoIAA1PMA+fAAAIAAVPg");
	this.shape_3.setTransform(4.025,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text_1}]},1).wait(3));

	// Layer_1
	this.text_2 = new cjs.Text("END", "70px 'Tw Cen MT'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 78;
	this.text_2.lineWidth = 362;
	this.text_2.parent = this;
	this.text_2.setTransform(1,-34.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000099").ss(1,1,1).p("A/PqnMA+fAAAIAAVPMg+fAAAg");
	this.shape_4.setTransform(4.025,18.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("A/PKoIAA1PMA+fAAAIAAVPg");
	this.shape_5.setTransform(4.025,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text_2}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.9,-50.9,401.9,172.4);


// stage content:
(lib.final_version = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {label1:317};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [271,317,331];
	// timeline functions:
	this.frame_271 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(272);
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.end_btn.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('label1');
		});
	}
	this.frame_317 = function() {
		stop();
	}
	this.frame_331 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(271).call(this.frame_271).wait(46).call(this.frame_317).wait(14).call(this.frame_331).wait(1));

	// thank_you
	this.instance = new lib.Image_gif();
	this.instance.setTransform(405,287.05,1,1,0,0,0,275,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317).to({_off:false},0).wait(15));

	// button
	this.end_btn = new lib.endbutton();
	this.end_btn.name = "end_btn";
	this.end_btn.setTransform(405,269.9);
	this.end_btn._off = true;
	new cjs.ButtonHelper(this.end_btn, 0, 1, 2, false, new lib.endbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.end_btn).wait(271).to({_off:false},0).to({_off:true},46).wait(15));

	// home
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(627,439,1,1,0,0,0,121,101);
	this.instance_1._off = true;
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,246,206);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249).to({_off:false},0).wait(1).to({x:651,y:443},0).wait(20).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(250).to(new cjs.ColorFilter(1,1,1,1,-252.0075,-252.0075,-252.0075,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-233.56425,-233.56425,-233.56425,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-215.4045,-215.4045,-215.4045,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-197.55975,-197.55975,-197.55975,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-180.01425,-180.01425,-180.01425,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-162.75225,-162.75225,-162.75225,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-145.80525,-145.80525,-145.80525,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-129.1575,-129.1575,-129.1575,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-112.809,-112.809,-112.809,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-96.75975,-96.75975,-96.75975,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-81.00975,-81.00975,-81.00975,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-65.559,-65.559,-65.559,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-50.4075,-50.4075,-50.4075,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-35.55525,-35.55525,-35.55525,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-21.00225,-21.00225,-21.00225,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-6.76425,-6.76425,-6.76425,0), 0).wait(1).to(new cjs.ColorFilter(0.97180294,0.97180294,0.97180294,1,7.19025,7.19025,7.19025,0), 0).wait(1).to(new cjs.ColorFilter(0.95,0.95,0.95,1,12.75,12.75,12.75,0), 0).wait(64));

	// educational
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(387,295,1,1,0,0,0,150,100);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(234).to({_off:false},0).wait(1).to({regX:152.1,regY:102.1,x:389.1,y:297.1},0).wait(1).to({regX:152.8,regY:102.8,x:389.8,y:297.8},0).wait(34).to({_off:true},1).wait(61));

	// medical
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(154,181,1,1,0,0,0,125,75);
	this.instance_3._off = true;
	var instance_3Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-2,-2,254,154);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(221).to({_off:false},0).wait(49).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(221).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).wait(1).to(new cjs.ColorFilter(0.11111111,0.11111111,0.11111111,1,226.66666667,226.66666667,226.66666667,0), 0).wait(1).to(new cjs.ColorFilter(0.22222222,0.22222222,0.22222222,1,198.33333333,198.33333333,198.33333333,0), 0).wait(1).to(new cjs.ColorFilter(0.33333333,0.33333333,0.33333333,1,170,170,170,0), 0).wait(1).to(new cjs.ColorFilter(0.44444444,0.44444444,0.44444444,1,141.66666667,141.66666667,141.66666667,0), 0).wait(1).to(new cjs.ColorFilter(0.55555556,0.55555556,0.55555556,1,113.33333333,113.33333333,113.33333333,0), 0).wait(1).to(new cjs.ColorFilter(0.66666667,0.66666667,0.66666667,1,85,85,85,0), 0).wait(1).to(new cjs.ColorFilter(0.77777778,0.77777778,0.77777778,1,56.66666667,56.66666667,56.66666667,0), 0).wait(1).to(new cjs.ColorFilter(0.88888889,0.88888889,0.88888889,1,28.33333333,28.33333333,28.33333333,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(61));

	// layer_x
	this.text = new cjs.Text("We provide the following services:\nmedical,educational, and shelter.", "40px 'Rockwell Condensed'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 770;
	this.text.parent = this;
	this.text.setTransform(406,16.05);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(213).to({_off:false},0).wait(57).to({_off:true},1).wait(61));

	// services
	this.text_1 = new cjs.Text("access to basic services", "40px 'Tw Cen MT'", "#FF6633");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 491;
	this.text_1.parent = this;
	this.text_1.setTransform(464.45,363.15);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(200).to({_off:false},0).to({_off:true},13).wait(119));

	// human_rights
	this.text_2 = new cjs.Text("human rights", "40px 'Tw Cen MT'", "#339933");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 46;
	this.text_2.lineWidth = 320;
	this.text_2.parent = this;
	this.text_2.setTransform(382,262.05);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(185).to({_off:false},0).to({_off:true},28).wait(119));

	// assistance
	this.text_3 = new cjs.Text("lifesaving assistance", "40px 'Tw Cen MT'", "#0033CC");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 46;
	this.text_3.lineWidth = 320;
	this.text_3.parent = this;
	this.text_3.setTransform(266,164.05);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(167).to({_off:false},0).to({_off:true},46).wait(119));

	// advocate
	this.instance_4 = new lib.CachedBmp_29();
	this.instance_4.setTransform(44.05,88.15,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({_off:true},64).wait(119));

	// why
	this.instance_5 = new lib.CachedBmp_31();
	this.instance_5.setTransform(211.3,236.15,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_30();
	this.instance_6.setTransform(128,166.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},114).to({state:[]},35).wait(183));

	// non_profit
	this.instance_7 = new lib.CachedBmp_32();
	this.instance_7.setTransform(32.05,164.15,0.5,0.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(76).to({_off:false},0).to({_off:true},38).wait(218));

	// Layer_21
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3333").s().p("AkxGOQmCmKgnlvQgnlvEND3QEND4CQjFQCOjFFnAwQFoAxgrDKQgrDLmVA3QmVA2BmGUQAyDOhJAAQhHAAi/jCg");
	this.shape.setTransform(141.0183,76.5956);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C23333").s().p("AjkGhQglgmgignQk/lvgmk9QgNhlAOg2QAgAUAmAgQDZC3CQhXQBSAbBBgcQAjgSAdglQBhhuC9geQAkADAmAFQFgA0goDGQgoDHmMA6QmKA4BJF8QASBggKAwQg7gwhPhTg");
	this.shape_1.setTransform(149.2293,74.7875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C93340").s().p("AhUIKQALgwgThgQhJl7GKg6QGMg6AojGQAojHlggzQgmgGgkgCIAegFQBSgKBiAKQB+ALBPAjQCNBAgXCCQgCAPgFAPQgjBwiWBAQhcAqiNAZQggAFgdAIQk1BJAvFNIAHApQAqDChJAAQgqAAhShDgAmMF+Ql6l4gklgQgfkvDAB7QgOA2ANBlQAmE+E/FuQAiAnAlAnQBPBTA7AwQgKAugmAAQhMAAi8i6gAhUIKIAAAAgApDnZQgmgggggVQAYhbBkAqQAvAVA+A1QBtBfBZAdQguAcg2AAQhyAAiTh8gAjal5QAigUAdgjQCMilEmAYQi9AdhhBvQgdAkgjASQghAPgmAAQgkAAgogNg");
	this.shape_2.setTransform(148.6115,77.4171);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B93333").s().p("AAnFsQlwllgilSQgilTEKDNQArAhAoAXIAEAdQArEvE+F8IAsAzIACANQAWCwhQAAQhRAAi5izg");
	this.shape_3.setTransform(103.4769,78.4216);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6334D").s().p("AkqGEIgZgcIgtgzQk/l8gqkvIgEgdQgZjjCdAxQAxASA+AxQA9AxA2AgQCpimFTA2IAMACQAogLAsgIQBRgPBgAGQB9AFBQAhQCOA9gRCCQgDAPgEAPQgeByiLBFQhWAtiNAeQgfAHgdAIQksBNAcFJIAFAoQAgC4hHAAQhLAAi+jLg");
	this.shape_4.setTransform(172.0373,77.826);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF3333").s().p("AlnFeQlplTgflEQgglEEJC2QCJBfByADQBsADBYhOQAsgmA1gbQCqBxBzgPQAhgKAcgbQBDgrBmgjQDxBCgdCiQgjC/l4A/QkJArhGCwQgcBKAFBiQAICihTAAQhWAAi2irg");
	this.shape_5.setTransform(141.8922,79.1108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C23359").s().p("AknGBQgkgnghgpQgtg4gng1QBGiwEIgrQF3g/Aji/QAdiijxhCQBBgWBQgTQBPgUBeACQB7gBBSAgQCPA6gNCBQgBAPgEAPQgYB1iCBIQhQAxiMAkQgfAHgdAJQklBRAMFFIACAnQAXCuhGAAQhOAAi9jQgArUlcIgFgeQgqj3CuAmQAxAOA+AuQAdAVAbASQg1AbgtAmQhVBLhnAAIgIAAgAmunoQCnhREAAsQAxAIAqAMQhkAjhEArQgcAbghAKQgOACgPAAQhqAAiWhkgABUn5IAAAAg");
	this.shape_6.setTransform(187.5671,78.2099);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A63333").s().p("AgwFQQlglAgdk2Qgdk2EHChQDjCLCwhbIABACQAlDNC7EWQhxBfgHCnQgFCThWAAQhbAAizijg");
	this.shape_7.setTransform(109.2265,79.7939);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF3366").s().p("AkkF/QgjgogigqQhQhohAhfQi7kWgljNIgBgCQgsjqC0AZQAzAKA9AqIAoAaQCCgVCjAeQBfASBAAbQBcghB+glQBOgZBbgBQB6gHBUAeQCPA3gHCAQgBAPgDAPQgTB4h4BMQhJA1iMApQgeAIgeAKQkdBUgGFBIAAAnQAOCjhFAAQhQAAi9jUg");
	this.shape_8.setTransform(203.101,78.5758);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9C3333").s().p("AiBFBQlXkugaknQgbkoEGCMQEGCLDPiHQAngaAsgSQABAhAJAoQAlC1CmECQjbBageDWQgTCGhZAAQhhAAixidg");
	this.shape_9.setTransform(115.7241,80.4589);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC3373").s().p("AkhF9QgjgoghgrQhhiBhIhxQimkCgli1QgJgogCghQgGiWCcAJQAzAHA+AlQAwAeArAYQAvAGAyAJQCAAaBJArIAGgEQB0gZDBhFQBNgeBZgFQB5gNBVAcQCQA0gCCAQAAAPgDAPQgNB6huBQQhEA5iLAuIg7ATQkVBZgYE9IgCAmQAFCZhFAAQhTAAi8jZg");
	this.shape_10.setTransform(218.6286,78.8668);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#933333").s().p("AmeFMQlPkbgYkYQgYkaEFB2QEFB2Ddh7QBmg6B9gQQCNgSCpAjQE9BEgaCyQgbCzlaBGIgRAEQlLBJhBD3QggB3hcABQhmAAiwiWg");
	this.shape_11.setTransform(142.7258,78.5916);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B93380").s().p("AkeF8QgjgpghgsQhliLhLh4IARgDQFahHAbiyQAaizk9hDQipgkiNASQAHh3CTgCQA0ADA9AiQDMByCDAuQAfADAbgNQB2gCC9hQQBMgiBWgKQB3gTBYAbQCQAxADB/QAAAQgBAPQgIB8hlBUQg9A9iLAzIg6AVQkNBcgqE5IgFAmQgDCPhEAAQhWAAi7jeg");
	this.shape_12.setTransform(234.2375,79.138);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#893333").s().p("AmxFCQlFkJgWkKQgWkMEEBhQEDBgDqhvQCmhPDPANQBSAFBYAUQE3BHgYCuQgUCPjiBKQg0ARg/AOQlQBKhfDkQgtBphdAAQhtAAiviOg");
	this.shape_13.setTransform(143.0251,78.8788);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B6338C").s().p("AkbF7QgigqghgtQhpiThNh8QDihKAUiPQAYiuk2hHQhZgUhSgFQgBh/CggMQA2gBA8AeQDLBkCDBEQAdAHAbgIQB4AVC5hbQBKgnBVgNQB1gZBaAZQCRAuAIB/QABAPgBAPQgDB/haBXQg4BCiKA3Ig6AYQkFBfg7E1IgIAmQgLCFhDAAQhaAAi6jjg");
	this.shape_14.setTransform(249.7994,79.3726);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#803333").s().p("AnDE3Qk9j2gTj8QgUj9EDBLQECBKD3hiQDrheEgA/IAaAGQEvBJgVCrQgMBdhnBBQhVA1iUAjQlHBMh7DLQg4BbhfAAQh0AAiuiHg");
	this.shape_15.setTransform(143.3027,79.1517);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B33399").s().p("AkZF6QgigrggguQh1iqhTiHQBnhBAMheQAVirkvhJIgagGQggidC+gbQA3gFA9AaQDIBXCDBZQAdALAagEQB7AtC0hlQBJgsBTgSQBzgfBcAZQCSAqAMB+QACAPAAAQQADCChRBaQgyBFiJA+Ig6AZQj9BjhNExIgKAlQgSB8hDAAQhdAAi6jpg");
	this.shape_16.setTransform(265.4138,79.6091);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#763333").s().p("AnVEuQk0jkgRjuQgRjvEBA1QEBA2EDhXQEDhWEoBNQBTAVA6AcQCXBJgOB5QgDAagKAXQg3CBkLBDQk9BPiXCxQhDBNhgAAQh8AAiuh/g");
	this.shape_17.setTransform(143.5765,79.3846);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AF33A6").s().p("AkYF6QghgrgggwQiYjjhfikQAKgXADgaQAOh5iXhJIgQgrQhCizDbgsQA4gIA8AWQDHBKCCBuQAcAPAZABQB/BECvhwQBIgxBQgVQByglBdAXQCTAnASB+QACAPAAAPQAJCFhHBeQgsBJiIBDIg6AbQj1BmheEtIgNAkQgZBzhDAAQhhAAi6jug");
	this.shape_18.setTransform(281.0562,79.7767);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C3333").s().p("AnnEkQksjRgOjgQgPjhEAAgQD/AfERhJQEPhKEiBPQEhBQgQCiQgQCikzBSQkyBSi0CYQhMBAhhAAQiGAAith5g");
	this.shape_19.setTransform(143.878,79.6041);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AC33B3").s().p("AkWF6QghgsgggxQk/nphIi7QhGioDig5QA6gLA7ARQDGA8CCCEQAbATAZAGQCBBcCrh8QBGg2BOgZQBxgrBfAWQCTAkAXB9IAEAeQAOCIg9BhQgmBOiIBIIg5AdQjtBphwEpIgPAkQggBqhDAAQhlAAi5j0g");
	this.shape_20.setTransform(296.7689,79.9391);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#633333").s().p("An6EbQkji/gMjRQgMjTD+AKQD/AKEdg9QEcg+EbBTQEaBSgNCfQgNCekpBUQkpBVjQB/QhTAyhgAAQiSAAivhyg");
	this.shape_21.setTransform(144.1515,79.7987);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A933BF").s().p("AkVF6QgggsgggzQk/n2hMitQhKicDqhHQA6gPA7AOQDFAuCBCZQAaAXAZALQCDBzCniGQBFg7BMgdQBvgxBhAUQCUAhAcB9QADAPACAPQATCKgzBlQggBSiHBNIg5AfQjlBtiCElIgRAjQgmBhhDAAQhqAAi4j6g");
	this.shape_22.setTransform(312.5432,80.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#593333").s().p("AoMERQkaisgKjDQgKjED9gMQD+gLEpgyQEqgxETBWQEUBVgLCbQgLCakfBXQkfBYjsBlQhXAlheAAQigAAiyhsg");
	this.shape_23.setTransform(144.4503,79.9542);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A633CC").s().p("AkVF6QgggtgggyQk+oEhQifQhOiRDxhVQA8gSA7AJQDDAhCBCuQAZAcAXAPQCHCLCiiSQBEg/BJggQBug3BiASQCVAeAhB8QAEAPADAPQAYCNgpBpQgZBViIBTIg4AgQjdBwiTEiIgUAjQgqBYhDAAQhxAAi3kBg");
	this.shape_24.setTransform(328.3561,80.1199);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#503333").s().p("AoeEIQkSiZgHi1QgHi2D7ghQD8ghE3glQE2glENBZQEMBYgICXQgICWkVBaQkVBakIBMQhYAZhYAAQi0AAi3hng");
	this.shape_25.setTransform(144.7007,80.0763);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A333D9").s().p("AkWF8Qgfguggg0Qk+oRhUiQQhSiGD5hiQA8gXA7AGQDCATCADEQAZAfAXAVQCJChCdicQBDhEBHgkQBtg9BkAQQCVAbAmB8QAFAPADAPQAeCPgfBtQgUBYiGBZIg5AjQjUBzilEeQgLASgLAQQgwBPhCAAQh4AAi2kGg");
	this.shape_26.setTransform(344.2551,80.1333);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#463333").s().p("AowEAQkJiHgFinQgEinD6g3QD6g3FEgYQFDgZEGBcQEFBcgFCSQgFCSkMBdQkLBdklAyQhQAOhNAAQjQAAjBhig");
	this.shape_27.setTransform(144.9767,80.1953);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9F33E6").s().p("AkYF9Qgegvggg1Qk+oehXiCQhXh6EBhxQA9gZA7ACQDAAFCADZQAYAkAWAYQCMC6CZioQBChIBEgoQBrhDBmAPQCXAXArB7QAFAPADAQQAkCRgWBxQgNBciGBeQgaASgeATQjMB2i3EbQgMASgNAPQgzBIhCAAQh/AAi2kOg");
	this.shape_28.setTransform(360.2515,80.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3D3333").s().p("ApCD3QkBh1gCiYQgCiZD4hNQD5hMFRgMQFQgND/BfQD+BfgCCPQgDCOkBBfQkCBglAAZQg5AFg3AAQj/AAjThgg");
	this.shape_29.setTransform(145.275,80.3232);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9C33F2").s().p("AkaF/Qgegvgfg2Qk/othbhzQhahvEIh9QA/geA6gCQC/gIB/DuQAXAoAWAeQCODQCViyQBAhOBDgsQBphJBoAOQCXAUAwB7QAGAPAEAQQApCUgLB0QgIBgiFBkQgaATgeATQjEB6jJEWQgNASgOAPQg3BAhCAAQiHAAi0kVg");
	this.shape_30.setTransform(376.3458,80.0853);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9933FF").s().p("AlbEaQk/o7hehjQhehkEPiMQEPiLCnFSQCnFTCmjZQCmjZCqATQCqAUAvCWQAuCXgCB4QgCB3i7B+Qi8B+jbESQhGBYhSAAQioAAjYmDg");
	this.shape_31.setTransform(392.6059,79.9818);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("ApVDtQj3hiAAiLQAAiKD3hiQD4hiFdAAQFeAAD3BiQD4BiAACKQAACLj4BiQj3BileAAQldAAj4hig");
	this.shape_32.setTransform(145.55,80.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,3,9,0.059)").ss(0.1,1,1).p("Ar2lwQhYhjEHiIQAwgZAtgKQA3gMAzALQCHAbBlC9QBaCrBaAUQBEAQBEhJQAIgJAIgLQCmjLCnAUQAYADAVAGQA2AOAmAdQA2ApAYBIQAyCSgBB1QAAAVgGAVQgbBiiXBlQhBArhEA7QiBBwiPCqQgYAdgZASQhuBTiEhoQhzhYiAjbQhkimhOh8Qiwkeg+hIg");
	this.shape_33.setTransform(392.3135,81.7506);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9033FC").s().p("AhjJLQhzhYiAjbQhkimhOh8Qiwkeg+hIQhYhjEHiIQAwgZAtgKQA3gMAzALQCHAbBlC9QBaCrBaAUQBEAQBEhJQBYBBBbhOQAQgOASgUQBKhbBOgpIAdgPQA2AOAmAdQA2ApAYBIQAyCSgBB1QAAAVgGAVQgbBiiXBlQhBArhEA7QiBBwiPCqQgYAdgZASQgwAlg2AAQhCAAhKg6g");
	this.shape_34.setTransform(392.3135,81.7506);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9F3FF3").s().p("Ah9J6QAZgTAYgcQCOiqCBhwQBEg7BBgrQCXhlAbhjQAGgUAAgVQABh1gyiSQgYhIg2gpQgmgeg2gNQBLgjBEALQCDASArBpQAJAUAFAWQAkCQgGB0QgJB0ioB+Qh0BiiHCCQhIBIhOBTQhDBNhKAAQgdAAgfgMgAjsjOQhbgUhairQhmi9iGgcQDBhSCICJQAzAxAvBTQA+B2A/AuQg3A8g4AAQgMAAgMgDgAhlkHIARgUQCljLCnAUQAYADAVAGIgdAPQhOAphKBbQgSAUgQAOQgyAqgvAAQgpAAgpgdgAElnJIAAAAg");
	this.shape_35.setTransform(419.2434,79.1782);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,6,18,0.118)").ss(0.1,1,1).p("ArzlbQhThjEAiEQAugYAtgLQBhgWBUAvQBXAxBHB7QBbCfBbATQBLARBLhYQAxg4AwgmQB1haB0APQBPALA1AlQABABACABQA2AoAYBFQA2CNAABzQAAAUgGAVQgZBgiUBkQg/AqhFA5QhzBhh/CLQgOAQgPAQQiACSigh5Qh0hSiBjOQhlidhQh4QiykQg6hMg");
	this.shape_36.setTransform(392.0497,83.5127);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8733F9").s().p("AhdI2Qh0hSiBjOIi1kVQiykQg6hMQhThjEAiEQAugYAtgLQBhgWBUAvQBXAxBHB7QBbCfBbATQBLARBLhYQAxg4AwgmQCACqCHhlQAQgOASgRQAhgmAjgbIADACQA2AoAYBFQA2CNAABzQAAAUgGAVQgZBgiUBkQg/AqhFA5QhzBhh/CLIgdAgQhGBQhQAAQhBAAhJg3g");
	this.shape_37.setTransform(392.0497,83.5127);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A54BE7").s().p("AiXIwQB/iLByhhQBFg5A/gqQCUhjAZhiQAGgUAAgUQAAhzg2iMQgYhFg2goIgDgDQApggAsgSQBbgsBEAQQB2ATAfBlQAHASAEAVQAYCJgKByQgOByicCAQhpBtiHB2QhGBBhQBHQg9BAhFAAQhEAAhNg+gAlZi7QhcgShbifQhHh8hXgxQAqgZA9gcQDKhQCIB+QAzArAxBMQAYApAXAgQgwAmgxA4Qg/BKg/AAQgMAAgMgDgAhilgQB0haB0APQBPALA1AlQgjAcghAlQgSASgQANQgzAmgxAAQhSAAhQhrgAhilgIAAAAg");
	this.shape_38.setTransform(429.6348,78.3907);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,9,27,0.176)").ss(0.2,1,1).p("ArxlGQhNhjD4iBQAugXAsgLQCZgkB5CEQAhAjAeAwQBbCTBbASQBLAQBKhSQCFiOCDgNQAggEAfAFQBPAKA1AnQAmAbAXApQALARAHAUQA5CGABBxQAAAUgFAUQgYBgiRBhQg+AphDA3QhHA6hMBIQg9A6hABDQh+CJiehwQh2hNiAjCQhoiThRh0Qi1kDg2hPg");
	this.shape_39.setTransform(391.7538,85.2536);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7E33F6").s().p("AhXIiQh2hNiAjCIi5kHIjrlSQhNhjD4iBQAugXAsgLQCZgkB5CEQAhAjAeAwQBbCTBbASQBLAQBKhSQCFiOCDgNQAggEAfAFQBPAKA1AnQAmAbAXApQALARAHAUQA5CGABBxQAAAUgFAUQgYBgiRBhQg+AphDA3QhHA6hMBIQg9A6hABDQhFBMhQAAQhAAAhHgzg");
	this.shape_40.setTransform(391.7538,85.2536);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AB57DB").s().p("AipHYQBMhIBHg5QBCg3A+gpQCRhhAYhiQAFgUAAgUQgBhvg5iHQgHgUgLgRQASgIASgMQAQgLASgPQBIhKBRgZQBbgkA5ATQBpAUATBfQAFASACAUQANCCgOBuQgVBxiOCDQhdB5iHBoQhGA6hRA7Qg4A1g/AAQhhAAh0h/gAnQinQhcgShbiUQgegvghgkQgTg+DZheQDMhECFBvQAyAkAzBGIAXAiQiDANiFCOQg+BFg/AAQgMAAgMgCg");
	this.shape_41.setTransform(440.9675,77.6323);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,12,36,0.235)").ss(0.3,1,1).p("ArukxQhIhjDxh9QAsgXAsgLQC+gvCQDQQBcCIBcAQQAkAHAjgNQAmgPAmgoQCkikCgAYQBNALA1AlQA1AmAaA/QA9CBACBuQAAAUgFATQgWBgiOBfQg8AohEA1QgRANgSAPQhwBbh8B7Qh9CAichoQh4hHh/i2QhqiLhThuQi3j3gyhSg");
	this.shape_42.setTransform(391.4867,87.0103);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7533F3").s().p("AhRIOQh4hHh/i2Ii9j5Qi3j3gyhSQhIhjDxh9QAsgXAsgLQC+gvCQDQQBcCIBcAQQAkAHAjgNQAmgPAmgoQCkikCgAYQBNALA1AlQA1AmAaA/QA9CBACBuQAAAUgFATQgWBgiOBfQg8AohEA1IgjAcQhwBbh8B7QhFBHhPAAQg/AAhGgvg");
	this.shape_43.setTransform(391.4867,87.0103);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B163CF").s().p("AjeGFIAjgcQBEg1A8goQCNhfAWhhQAFgTAAgUQgChtg9iBQgag/g0gmQg1glhNgLQiggYikCkQgmAogmAPQiQj4AUgEQgmg1DphfQDNg3CCBfQAyAeA1A/QCUDdCrhiIAigXQBHhBBSgRQBbgcAtAWQBdAVAGBbQADAQABATQACB7gTBrQgaBwiCCFQhRCEiHBbQhFA0hTAvQgyAqg5AAQh2AAiUi7g");
	this.shape_44.setTransform(457.3832,76.9118);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,15,45,0.294)").ss(0.3,1,1).p("ArrkcQhDhjDph5QAsgXArgLQC5gwCTC+QBcB9BdAPQBKAOBIhGQAcgaAcgVQCGhjCCAVQBLALA1AkQA0AkAcA8QA/B8ADBsQABATgFATQgUBeiLBdQgSAMgTANQgrAeguAkQh/BgiQCEQh8B4iahgQh5hCh/iqQhsiBhWhpQi4jrguhVg");
	this.shape_45.setTransform(391.1892,88.7633);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6C33F0").s().p("AhLH6Qh5hCh/iqIjCjqQi4jrguhVQhDhjDph5QAsgXArgLQC5gwCTC+QBcB9BdAPQBKAOBIhGQAcgaAcgVQCGhjCCAVQBLALA1AkQA0AkAcA8QA/B8ADBsQABATgFATQgUBeiLBdIglAZQgrAeguAkQh/BgiQCEQhFBDhOAAQg+AAhFgrg");
	this.shape_46.setTransform(391.1892,88.7633);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B76FC3").s().p("AkFE6IAlgZQCKhdAVhfQAEgTAAgTQgDhrhAh8Qgbg8g1gkQg0gkhLgLQiCgViGBjQhpi+AjALQgYgpDghUQDOgsB+BRQAyAXA4A4QCTDKCwhYIAjgSQBFg5BUgJQBbgUAgAYQBRAWgHBXQACAPgBASQgJB0gXBoQghBuh0CHQhGCRiHBOQhDAthVAiQgsAggxAAQiHAAitjwg");
	this.shape_47.setTransform(473.7022,76.1972);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,18,54,0.353)").ss(0.4,1,1).p("ArpkHQg9hjDih2QAqgWArgLQC1gxCUCtQBdByBeANQBJANBHhAQBshbBpgTQA1gJAzAIQBJAMA0AiQA1AjAcA5QBDB3AEBpQABATgEASQgMA5g2A3QgjAlg2AkQg6AmhDAxQh+BciQB8Qh7BviXhZQh8g8h/idQhth4hYhlQi6jegrhYg");
	this.shape_48.setTransform(390.8867,90.507);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6333ED").s().p("AhEHlQh8g8h/idQhth4hYhlQi6jegrhYQg9hjDih2QAqgWArgLQC1gxCUCtQBdByBeANQBJANBHhAQBshbBpgTQA1gJAzAIQBJAMA0AiQA1AjAcA5QBDB3AEBpQABATgEASQgMA5g2A3QgjAlg2AkQg6AmhDAxQh+BciQB8QhFA+hNAAQg9AAhDgog");
	this.shape_49.setTransform(390.8867,90.507);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BD7BB7").s().p("AksDtQA2g4ALg5QAEgTgBgSQgEhohCh4Qgdg4g0gjQg0gihJgMQg0gJg0AKQhbioA0AXQgLgeDXhJQDPgfB7BBQAyARA6AxQCSC1C2hMIAjgOQBEgxBVgBQBbgMAUAbQBEAYgTBRQAAAPgCARQgVBtgbBkQgnBthnCJQg6CciHBBQhCAnhXAWQgmAXgqAAQiVAAjIkng");
	this.shape_50.setTransform(490.0454,75.5505);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,21,63,0.412)").ss(0.4,1,1).p("ArmjxQg4hkDahyQApgVAqgMQCxgxCXCbQBcBmBgANQBIALBGg5QChh8CZAbQBHAMAzAhQABABABAAQAzAhAdA2QAvBNASBHQAJAiABAiQABASgEASQgRBdiEBZQg5AlhDAvQh9BYiRByQh6BniVhQQh9g3h+iRQhwhvhZhfQi9jSgmhbg");
	this.shape_51.setTransform(390.615,92.2255);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5A33EA").s().p("Ag/HSQh9g3h+iRQhwhvhZhfQi9jSgmhbQg4hkDahyQApgVAqgMQCxgxCXCbQBcBmBgANQBIALBGg5QChh8CZAbQBHAMAzAhIACABQAzAhAdA2QAvBNASBHQAJAiABAiQABASgEASQgRBdiEBZQg5AlhDAvQh9BYiRByQhEA6hOAAQg8AAhBgjg");
	this.shape_52.setTransform(390.615,92.2255);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C387AB").s().p("Al0BrIgNgVIgdgrQgRhHgwhNQgdg1gzghQikkYBYAuQADgRDNg+QDRgUB4AyQAxAKA7ArQCTChC8hBIAjgLQBCgoBXAHQBbgEAIAeQA3AZgfBMIgGAeIg/DHQgtBshaCLQgvCoiHA0QhBAghYAKQgfAPgiAAQiuAAj6mUg");
	this.shape_53.setTransform(506.4941,74.9589);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,24,72,0.471)").ss(0.5,1,1).p("ArkjcQgyhkDThuQAogVApgMQCtgyCYCKQBdBbBhALQBHAKBFgzQChhuCWAcQBFAMAzAgQA0AgAeAzQBKBtAGBjQABASgDASQgQBbiBBXQg4AlhCAtQh9BUiRBpQh5BeiShJQh/gxh+iEQhyhnhbhaQi/jFgjheg");
	this.shape_54.setTransform(390.3077,93.9501);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5133E7").s().p("Ag4G+Qh/gyh+iEQhyhmhbhbQi/jFgjheQgyhjDThuQAogWApgMQCtgyCYCLQBdBaBhALQBHALBFg0QChhuCWAcQBFAMAzAgQA0AgAeAzQBKBtAGBkQABARgDASQgQBciBBWIh6BSQh9BUiRBpQhEA1hNAAQg7AAg/gfg");
	this.shape_55.setTransform(390.3077,93.9501);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C9939F").s().p("Al6BRIgOgVQl+pDCaBYQARgGDEgzQDRgIB1AjQAyAEA9AkQCSCMDBg1IAjgHQBBggBZAPQBaAFgEAgQArAagrBIIgJAbQgsBfgjBfQgzBphNCOQgjC0iHAmQhBAahZgDQgYAIgYAAQiwAAkCmZg");
	this.shape_56.setTransform(523.0292,74.3788);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,27,81,0.529)").ss(0.6,1,1).p("ArhjGQgshlDLhqQAngUApgNQCogyCaB4QBdBQBiAKQBGAJBEgtQChhhCTAdQBDANAzAeQAzAfAfAvQBOBoAHBhQABARgDARQgOBch/BUQg2AkhBArQh9BQiRBgQh4BViQhAQiBgsh+h4QhzhdhdhVQjBi5gfhhg");
	this.shape_57.setTransform(390.0374,95.6642);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4833E4").s().p("AgyGqQiBgsh+h4QhzhdhdhVQjBi5gfhhQgshlDLhqQAngUApgNQCogyCaB4QBdBQBiAKQBGAJBEgtQChhhCTAdQBDANAzAeQAzAfAfAvQBOBoAHBhQABARgDARQgOBch/BUIh3BPIkOCwQhEAwhNAAQg6AAg9gbg");
	this.shape_58.setTransform(390.0374,95.6642);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CF9F93").s().p("ABZHTQi3AokjnGIgPgWQmHpFC5BvQAfAFC6gnQDTAEByAUQAxgDA/AdQCSB4DHgrQAPgCAUAAQA/gXBaAXQBbAMgQAjQAdAbg3BDIgMAZQg2BZgoBbQg5BohBCQQgXDAiHAZQgkALgsAAQgjAAgogHg");
	this.shape_59.setTransform(539.669,73.9511);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,30,90,0.588)").ss(0.6,1,1).p("AreixQgnhkDDhmQAmgUApgNQCkgzCbBnQBeBEBjAIQBFAIBEgnQCfhTCRAeQBBANAzAdQAzAeAgAsQBQBiAIBfQACARgDAQQgMBbh8BSQg0AjhCApQh7BNiSBWQh3BMiOg4QiDgmh9hsQh1hUhfhQQjDitgbhkg");
	this.shape_60.setTransform(389.7288,97.3556);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3F33E1").s().p("AgsGWQiDgmh9hsQh1hUhfhQQjDitgbhkQgnhkDDhmQAmgUApgNQCkgzCbBnQBeBEBjAIQBFAIBEgnQCfhTCRAeQBBANAzAdQAzAeAgAsQBQBiAIBfQACARgDAQQgMBbh8BSQg0AjhCApQh7BNiSBWQhEAshNAAQg4AAg8gYg");
	this.shape_61.setTransform(389.7288,97.3556);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D5AB87").s().p("ABIHFQi0AOkfm5IgQgWQmPpIDXCGQAtARCxgcQDUAPBuAFQAxgJBBAWQCSBkDMgfQAPgBAUACQA+gPBcAfQBaAVgcAlQARAdhDA+IgQAXQhBBSgtBXQg/BngzCSQgMDMiHAMQgTAEgYAAQgwAAhAgTg");
	this.shape_62.setTransform(556.6066,73.4274);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,33,99,0.647)").ss(0.7,1,1).p("ArbibQgihkC8hjQAlgTAogOQCfgzCeBVQBeA5BkAIQBFAGBCghQCfhFCOAfQBAANAxAcQAzAcAhApQBUBdAJBcQABAQgCARQgKBZh5BRQgzAihBAmQh7BJiSBNQh2BEiMgwQiEghh9hfQh3hMhhhKQjFihgXhng");
	this.shape_63.setTransform(389.4378,99.0119);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3633DE").s().p("AgmGDQiEghh9hfQh3hMhhhKQjFihgXhnQgihkC8hjQAlgTAogOQCfgzCeBVQBeA5BkAIQBFAGBCghQCfhFCOAfQBAANAxAcQAzAcAhApQBUBdAJBcQABAQgCARQgKBZh5BRQgzAihBAmQh7BJiSBNQhFAohNAAQg3AAg5gUg");
	this.shape_64.setTransform(389.4378,99.0119);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DBB77B").s().p("AAzG+QiwgNkdmrIgQgVQmYpND2CeQA7AcCngRQDWAcBqgKQAwgQBFAPQCQBPDTgUQAOACAVAEQA8gGBeAnQBaAcgoAoQAEAehPA5IgUAVQhMBLgxBUQhFBmgmCUQAADYiHgCIgSABQg4AAhSgig");
	this.shape_65.setTransform(573.952,72.2083);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,36,108,0.706)").ss(0.7,1,1).p("ArZiEQgchlC1hfQAjgTAogNQCbg0CgBEQBeAtBlAGQBEAGBBgbQCeg4CMAgQA+ANAxAbQAzAbAhAmQBYBYAKBZQABAQgBAQQgJBYh2BPQgyAhhBAkQh6BFiSBEQh1A7iJgoQiHgbh8hTQh6hChihGQjIiUgThqg");
	this.shape_66.setTransform(389.1245,100.6435);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2D33DB").s().p("AgfFwQiHgbh8hTQh6hChihGQjIiUgThqQgchlC1hfQAjgTAogNQCbg0CgBEQBeAtBlAGQBEAGBBgbQCeg4CMAgQA+ANAxAbQAzAbAhAmQBYBYAKBZQABAQgBAQQgJBYh2BPQgyAhhBAkQh6BFiSBEQhGAjhNAAQg0AAg3gQg");
	this.shape_67.setTransform(389.1245,100.6435);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E1C36F").s().p("AC6HqQg8AAhgg0QitgnkZmdIgQgXQmipPEVC0QBJApCegGQDWAnBogZQAwgWBGAIQCQA7DYgJQAPADAUAHQA8ACBeAvQBaAkg0ArQgIAfhcA1IgWATQhYBDg1BRQhLBlgZCWQAKDWh3AAIgPgBg");
	this.shape_68.setTransform(591.3281,71.1084);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(0,39,117,0.765)").ss(0.8,1,1).p("ArWhuQgWhkCshbQAjgTAngOQCXg0ChAyQBfAiBmAFQBDAEBBgUQCdgrCJAhQA8AOAxAZQAyAZAjAjQBaBTALBXQACAPgBAQQgHBXhzBNQgxAghAAjQh6BBiSA6Qh0AyiHggQiIgWh8hGQh8g5hlhBQjJiHgPhug");
	this.shape_69.setTransform(388.8077,102.2261);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2433D8").s().p("AgZFdQiIgWh8hGQh8g5hlhBQjJiHgPhuQgWhkCshbQAjgTAngOQCXg0ChAyQBfAiBmAFQBDAEBBgUQCdgrCJAhQA8AOAxAZQAyAZAjAjQBaBTALBXQACAPgBAQQgHBXhzBNQgxAghAAjQh6BBiSA6QhHAfhOAAQgyAAg0gNg");
	this.shape_70.setTransform(388.8077,102.2261);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E7CF63").s().p("AClH0Qg7gGhihBQiphBkWmQIgRgXQmqpTE0DNQBXAzCUAFQDYA0BkgoQAvgdBJACQCQAmDdACQAOAFAWAJQA5AKBhA4QBaAshBAuQgVAghoAwIgaARQhjA8g5BOQhRBjgMCYQAUDXhqAAQgMAAgOgDg");
	this.shape_71.setTransform(608.7136,70.0996);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,42,126,0.824)").ss(0.8,1,1).p("ArThWQgRhlClhXQAhgSAngOQCTg2CjAhQBfAXBnADQBCAEBAgPQCcgdCHAiQA6AOAwAYQAzAYAjAgQBeBOAMBUQACAPgBAPQgFBWhwBLQgvAfhBAhQh5A9iSAxQhzAqiFgZQiKgQh7g6Qh+gwhng8QjLh8gLhvg");
	this.shape_72.setTransform(388.5123,103.7218);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1B33D5").s().p("AgTFLQiKgQh7g6Qh+gwhng8QjLh8gLhvQgRhlClhXQAhgSAngOQCTg2CjAhQBfAXBnADQBCAEBAgPQCcgdCHAiQA6AOAwAYQAzAYAjAgQBeBOAMBUQACAPgBAPQgFBWhwBLQgvAfhBAhQh5A9iSAxQhIAahRAAQguAAgxgJg");
	this.shape_73.setTransform(388.5123,103.7218);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDDB57").s().p("ACQH+Qg6gNhjhNQimhbkTmDIgRgYQmzpVFSDjQBlBACLAQQDZA/Bhg3QAvgjBLgFQCPASDjANQAOAGAWAMQA4ATBiA/QBaA0hNAxQghAhh1ArIgdAPQhuA2g9BKQhYBiABCaQAeDYhgAAQgPAAgTgFg");
	this.shape_74.setTransform(626.1007,69.0696);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(0,45,135,0.882)").ss(0.9,1,1).p("ArQg9QgLhlCdhUQAhgRAmgPQCOg1ClAPQBfALBoADQBCACA/gJQCcgQCEAkQA4AOAvAWQAyAXAlAdQBhBIANBSQACAOAAAPQgEBWhsBIQgvAfg/AeQh5A5iTAoQhxAhiDgQQiMgLh7gtQh/gohpg2QjNhwgIhyg");
	this.shape_75.setTransform(388.169,105.0694);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1233D2").s().p("AgME7QiMgLh7gtQh/gohpg2QjNhwgIhyQgLhlCdhUQAhgRAmgPQCOg1ClAPQBfALBoADQBCACA/gJQCcgQCEAkQA4AOAvAWQAyAXAlAdQBhBIANBSQACAOAAAPQgEBWhsBIQgvAfg/AeQh5A5iTAoQhNAWhVAAQgpAAgpgFg");
	this.shape_76.setTransform(388.169,105.0694);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3E74B").s().p("AB7IIQg4gUhlhZQiih1kQl2IgSgYQm8pYFxD6QBzBMCBAbQDbBLBdhGQAvgqBNgMQCPgCDoAYIAkAWQA3AbBjBIQBaA8hYAzQguAiiBAnIghANQh5AuhBBHQheBhAOCdQAmDahWAAQgSAAgXgJg");
	this.shape_77.setTransform(643.4774,68.0481);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,48,144,0.941)").ss(1,1,1).p("ArNghQgGhlCWhQQAfgRAmgPQCKg2CngCQBfgBBpACQBBABA+gCQCbgDCCAkQA2APAvAVQAyAWAlAZQBlBDAOBQQACANAAAOQgCBWhpBGQgtAehAAcQh4A1iTAeQhwAZiBgIQiNgFh7ghQiCgfhqgxQjQhjgDh2g");
	this.shape_78.setTransform(387.8635,106.1464);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0933CF").s().p("AgGEuQiNgFh7ghQiCgfhqgxQjQhjgDh2QgGhlCWhQQAfgRAmgPQCKg2CngCQBfgBBpACQBBABA+gCQCbgDCCAkQA2APAvAVQAyAWAlAZQBlBDAOBQQACANAAAOQgCBWhpBGQgtAehAAcQh4A1iTAeQhUAThdAAQggAAgggCg");
	this.shape_79.setTransform(387.8635,106.1464);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F9F33F").s().p("ABmIRQg3gahnhlQieiPkNlpIgSgYQnFpcGQESQCBBXB3AmQDcBXBZhVQAwgwBPgTQCOgXDuAkQAOAJAWARQA2AkBlBPQBZBEhkA2Qg7AkiNAhIgkALQiFAohFBEQhkBfAbCfQAuDchOAAQgTAAgagNg");
	this.shape_80.setTransform(660.8793,67.0294);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#003399").ss(1,1,1).p("ALLAAQAAB6jRBWQjSBXkoAAQknAAjShXQjRhWAAh6QAAh5DRhXQDShWEnAAQEoAADSBWQDRBXAAB5g");
	this.shape_81.setTransform(387.5,106.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFF33").s().p("ABRIbQiIhSnOpeQnOpeGvEpQGvEpCBiXQCDiWGABKIC+ChQCSB9mKBKQmJBJBHEgQA3DghHAAQgUAAgegSg");
	this.shape_82.setTransform(678.2369,66.0072);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0033CC").s().p("An4DRQjShXAAh6QAAh5DShXQDRhWEnAAQEoAADRBWQDSBXAAB5QAAB6jSBXQjRBWkoAAQknAAjRhWg");
	this.shape_83.setTransform(387.5,106.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},76).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_32},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_32},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_32},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_32},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_32},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_32},{t:this.shape_48}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_32},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_32},{t:this.shape_54}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_32},{t:this.shape_57}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_32},{t:this.shape_60}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_32},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_32},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_32},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_32},{t:this.shape_72}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_32},{t:this.shape_75}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_32},{t:this.shape_78}]},1).to({state:[{t:this.shape_83},{t:this.shape_32},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_82},{t:this.shape_83},{t:this.shape_32},{t:this.shape_81}]},1).to({state:[{t:this.shape_82},{t:this.shape_83},{t:this.shape_32},{t:this.shape_81}]},1).to({state:[{t:this.shape_82},{t:this.shape_83},{t:this.shape_32},{t:this.shape_81}]},1).to({state:[{t:this.shape_82},{t:this.shape_83},{t:this.shape_32},{t:this.shape_81}]},1).to({state:[]},1).wait(218));

	// hope
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(594,291.5,1,1,0,0,0,200,141.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(76).to({_off:false},0).wait(1).to({rotation:9.7297,x:593.95,y:291.45,alpha:0.027},0).wait(1).to({rotation:19.4595,y:291.5,alpha:0.0541},0).wait(1).to({rotation:29.1892,x:594,alpha:0.0811},0).wait(1).to({rotation:38.9189,x:593.95,alpha:0.1081},0).wait(1).to({rotation:48.6486,x:594,alpha:0.1351},0).wait(1).to({rotation:58.3784,x:593.95,alpha:0.1622},0).wait(1).to({rotation:68.1081,alpha:0.1892},0).wait(1).to({rotation:77.8378,x:594,y:291.45,alpha:0.2162},0).wait(1).to({rotation:87.5676,alpha:0.2432},0).wait(1).to({rotation:97.2973,y:291.5,alpha:0.2703},0).wait(1).to({rotation:107.027,alpha:0.2973},0).wait(1).to({rotation:116.7568,x:593.95,alpha:0.3243},0).wait(1).to({rotation:126.4865,x:594,y:291.45,alpha:0.3514},0).wait(1).to({rotation:136.2162,y:291.5,alpha:0.3784},0).wait(1).to({rotation:145.9459,x:593.95,y:291.45,alpha:0.4054},0).wait(1).to({rotation:155.6757,y:291.5,alpha:0.4324},0).wait(1).to({rotation:165.4054,x:594,y:291.45,alpha:0.4595},0).wait(1).to({rotation:175.1351,x:593.95,alpha:0.4865},0).wait(1).to({rotation:184.8649,y:291.5,alpha:0.5135},0).wait(1).to({rotation:194.5946,y:291.45,alpha:0.5405},0).wait(1).to({rotation:204.3243,x:594,alpha:0.5676},0).wait(1).to({rotation:214.0541,alpha:0.5946},0).wait(1).to({rotation:223.7838,x:593.95,alpha:0.6216},0).wait(1).to({rotation:233.5135,x:594,alpha:0.6486},0).wait(1).to({rotation:243.2432,x:593.95,alpha:0.6757},0).wait(1).to({rotation:252.973,x:594,alpha:0.7027},0).wait(1).to({rotation:262.7027,x:593.95,y:291.5,alpha:0.7297},0).wait(1).to({rotation:272.4324,alpha:0.7568},0).wait(1).to({rotation:282.1622,y:291.45,alpha:0.7838},0).wait(1).to({rotation:291.8919,alpha:0.8108},0).wait(1).to({rotation:301.6216,y:291.5,alpha:0.8378},0).wait(1).to({rotation:311.3514,y:291.45,alpha:0.8649},0).wait(1).to({rotation:321.0811,y:291.5,alpha:0.8919},0).wait(1).to({rotation:330.8108,alpha:0.9189},0).wait(1).to({rotation:340.5405,y:291.45,alpha:0.9459},0).wait(1).to({rotation:350.2703,alpha:0.973},0).wait(1).to({rotation:360,x:594,y:291.5,alpha:1},0).to({_off:true},1).wait(218));

	// intro
	this.instance_9 = new lib.CachedBmp_33();
	this.instance_9.setTransform(227.3,189.7,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_34();
	this.instance_10.setTransform(211.3,279.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},59).to({state:[{t:this.instance_10}]},13).to({state:[]},4).wait(256));

	// Layer_20
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Aq3QvQkhm7AAp0QAApzEhm7QEgm8GXAAQGYAAEgG8QEhG7AAJzQAAJ0khG7QkgG8mYAAQmXAAkgm8g");
	this.shape_84.setTransform(98.5,341.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#22091A").s().p("AkQUwQj5hbjEkJQkqmTAAo5QAAo5EqmSQEpmTGkAAQAvAAAuAFQFpAoEIFmQEqGSAAI5QAAI5kqGTQkpGTmlAAQiPAAiBgvg");
	this.shape_85.setTransform(152.925,365.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#090011").s().p("AnxQvQkgm8AApzQAApzEgm8QEhm7GXAAQFNAAD+EpQgugFgvgBQmlAAkoGTQkqGTAAI4QAAI6EqGSQDDEKD5BbQhqAjhzAAQmXAAkhm8g");
	this.shape_86.setTransform(83.625,349.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#441133").s().p("AoiQgQhmhMhbhrQkzlpAAoAQAAn+EzlrQDpkTEzhBQBhgVBmAAQGyAAEyFpQEzFrAAH+QAAIAkzFpQkyFqmyAAQkwAAjyizg");
	this.shape_87.setTransform(207.325,388.95);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#110022").s().p("ApVQvQkhm7AAp0QAApyEhm8QEgm8GXAAQGYAAEhG8QAyBNAqBTQkzBCjqETQkyFqAAH/QAAH/EyFqQBbBrBmBLQjHCcjyAAQmXAAkgm8g");
	this.shape_88.setTransform(98.675,358.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#661A4D").s().p("Ar5MGQgogpgjgqQjwkngBmMQAAnFE8lBQBlhmByhFQDziVEvAAQG/AAE7FAQE7FBABHFQgBHFk7FBQk7FBm/AAQm9AAk8lBg");
	this.shape_89.setTransform(261.75,412.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1A0033").s().p("AqeQvQkhm8AApzQAApzEhm8QEgm7GXAAQGYAAEhG7QCoEDBGFBQhyBGhlBmQk7FAAAHGQAAGMDwEmQkRFyl0AAQmXAAkgm8g");
	this.shape_90.setTransform(111.0375,367.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#882266").s().p("AsPKjQkZjzgllJQgGgzAAg0QAAjmBui/QBPiJCHh1QFFkXHKAAQHLAAFEEXQFFEYAAGLQAAGLlFEYQlEEYnLAAQnKAAlFkYg");
	this.shape_91.setTransform(316.175,436.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#220044").s().p("Aq4QvQkgm8AApzQAApyEgm8QEhm8GXAAQGYAAEgG8QEhG8AAJyQAABegHBaQhuC/AADnQAAA0AGAzQhEDChuCoQkgG8mYAAQmXAAkhm8g");
	this.shape_92.setTransform(118.55,376.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AA2A7F").s().p("AslJAQlNjuAAlSQAAlRFNjuQFOjvHXAAQHYAAFNDvQFODuAAFRQAAFSlODuQlNDvnYAAQnXAAlOjvg");
	this.shape_93.setTransform(370.575,460.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2A0055").s().p("Aq3QvQkhm8AApzQAApzEhm8QEgm7GXAAQGYAAEhG7QEgG8AAJzQAAJzkgG8QkhG8mYAAQmXAAkgm8g");
	this.shape_94.setTransform(123.55,384.75);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC3399").s().p("As6HdQlXjFAAkYQAAkWFXjGQFWjGHkAAQHlAAFWDGQFXDGAAEWQAAEYlXDFQlWDGnlAAQnkAAlWjGg");
	this.shape_95.setTransform(425,484.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#330066").s().p("Aq4QvQkgm8AApzQAApzEgm8QEhm7GXAAQGYAAEgG7QEhG8AAJzQAAJzkhG8QkgG8mYAAQmXAAkhm8g");
	this.shape_96.setTransform(128.55,393.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(29,7,7,0.141)").ss(0.2,1,1).p("Ak1pUQBOgFBRAAQHkAAFWDFQFXDGAAEXQAAEXlXDGQjvCKk0AqQmjgpkvjfQlTj6gIlGQgHlHFvhdQAFgCAFgBQB1gdB/geQAIgCAJgCQAAAAAAAAQAIgCAIgCQD1g4EXg5QALgDALgCQHTheE6DZQE6DageFSQgdFQkfDnQkeDmnmgVQgzgDgygEQiFASiSAAQnkAAlXjGQlXjGAAkXQAAkXFXjGQEdikF/gcQAIgCAIgCAlGpQQAJgCAIgC");
	this.shape_97.setTransform(440.0767,477.1439);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC338A").s().p("AvRImQlXjGAAkXQAAkXFXjGQEdikF/gcIgRAEIARgEQBOgFBRAAQHkAAFWDFQFXDGAAEXQAAEXlXDGQjvCKk0AqQE0gqDviKQFXjGAAkXQAAkXlXjGQlWjFnkAAQhRAAhOAFIAQgEQD1g4EXg5IAWgFQHTheE6DZQE6DageFSQgdFQkfDnQkeDmnmgVQgzgDgygEQmjgpkvjfQlTj6gIlGIAAgNQAAk8FohbIAKgDQB1gdB/geQh/Aeh1AdIgKADQloBbAAE8IAAANQAIFGFTD6QEvDfGjApQiFASiSAAQnkAAlXjGgAk1pUIAQgEIgQAEIAAAAIAAAAIgRAEIARgEgAk1pUIAAAAgAk1pUIAAAAgAk1pUIAAAAgAk1pUIAAAAg");
	this.shape_98.setTransform(440.0767,477.1439);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#49075F").s().p("Aq3QvQkhm7AAp0QAApzEhm7QEgm8GXAAQGYAAEhG8QEgG7AAJzQAAJ0kgG7QkhG8mYAAQmXAAkgm8g");
	this.shape_99.setTransform(127.05,385.75);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(58,15,15,0.286)").ss(0.3,1,1).p("AptnsQBfhVC+AGQGHAMHBi9QHBi+EdDuQEdDug7GMQg7GKjmEHQjmEHnngqQiGgMh6gfQlChSjzjcQlPkugPl2QgIjBBkhaQCXgYCnAAQHjAAFXDGQFXDGAAEWQAAEYlXDFQiUBWitAwQjlBAkUAAQnlAAlXjGQlWjFAAkYQAAkWFWjGQDhiBEdgtg");
	this.shape_100.setTransform(455.4302,468.5577);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CC337C").s().p("AxrJ7QlWjFAAkYQAAkWFWjGQDhiBEdgtQhdBUAACrIABAcQAPF2FPEuQDzDcFCBSQjlBAkUAAQnlAAlXjGgAHKMsQiGgMh6gfQCogvCPhRIAKgGQFXjFAAkYQAAkWlXjGQlXjGnjAAQinAAiXAYQBfhVC+AGQGHAMHBi9QHBi+EdDuQEdDug7GMQg7GKjmEHQjHDjmFAAQg+AAhDgGgADKMBQlChSjzjcQlPkugPl2IgBgcQAAirBdhUQCXgYCnAAQHjAAFXDGQFXDGAAEWQAAEYlXDFIgKAGQiPBRioAvIAAAAgAptnsIAAAAg");
	this.shape_101.setTransform(455.4302,468.5577);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5F0F57").s().p("Aq4QvQkgm8AApzQAApzEgm8QEhm7GXAAQGYAAEhG7QEgG8AAJzQAAJzkgG8QkhG8mYAAQmXAAkhm8g");
	this.shape_102.setTransform(125.55,378);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(87,22,22,0.427)").ss(0.5,1,1).p("AnlmpQApkYFdBiQGgB2GvkdQGvkcEAECQEBEChZHGQhYHEiuEoQiuEnnog/Qjdgdi8hYQk5CVmkAAQnlAAlXjGQlWjFAAkYQAAkWFWjGQFOjBHUgFQANAAANAAQHjAAFXDGQFXDGAAEWQAAEYlXDFQgtAagwAXQjlhri0jCQlMligWmmQgBgIAAgIQAAgCAAgBQgBgdACgbQABgZADgXg");
	this.shape_103.setTransform(471.0101,459.4901);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#751650").s().p("Aq4QvQkgm7AAp0QAApyEgm8QEhm8GXAAQGYAAEgG8QEhG8AAJyQAAJ0khG7QkgG8mYAAQmXAAkhm8g");
	this.shape_104.setTransform(124.05,370.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CC336D").s().p("A0HLWQlWjFAAkYQAAkWFWjGQFOjBHUgFIAaAAQHjAAFXDGQFXDGAAEWQAAEYlXDFQgtAagwAXQjlhri0jCQlMligWmmIgBgQIAAgCIAAgBIAAgXIABghQABgZADgXQgDAXgBAZIgBAhIAAAXIAAABIAAACIABAQQAWGmFMFiQC0DCDlBrQk5CVmkAAQnlAAlXjGgAKrN8Qjdgdi8hYQAwgXAtgaQFXjFAAkYQAAkWlXjGQlXjGnjAAIgaAAQApkYFdBiQGgB2GvkdQGvkcEAECQEBEChZHGQhYHEiuEoQiPDzllAAQhMAAhWgLgAESMHIAAAAg");
	this.shape_105.setTransform(471.0101,459.4901);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(117,29,29,0.573)").ss(0.6,1,1).p("AkDktQgGgugDgtQgenXG5DfQG6DeGdl7QGdl8DjEXQDkEWh2IAQh2H/h2FHQh2FInohUQk8g2j6i+QiHhnh0iQQknlvg1mhQEDAvDQB4QFXDFAAEXQAADbjTCpQg6AvhKAqQlVDGnlAAQnkAAlXjGQlXjFAAkYQAAkXFXjFQFXjGHkAAQC/AACoAfg");
	this.shape_106.setTransform(486.8509,450.1812);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8A1D49").s().p("Aq4QvQkgm8AApzQAApzEgm8QEhm7GXAAQGYAAEgG7QEhG8AAJzQAAJzkhG8QkgG8mYAAQmXAAkhm8g");
	this.shape_107.setTransform(122.6,362.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CC335F").s().p("A2lMzQlXjFAAkYQAAkXFXjFQFXjGHkAAQC/AACoAfQA1GhEnFvQB0CQCHBnQg6AvhKAqQlVDGnlAAQnkAAlXjGgAOKPOQk8g2j6i+QDTipAAjbQAAkXlXjFQjQh4kDgvQgGgugDgtQgenXG5DfQG6DeGdl7QGdl8DjEXQDkEWh2IAQh2H/h2FHQhdEFlJAAQhUAAhkgRgAFULaQiHhnh0iQQknlvg1mhQEDAvDQB4QFXDFAAEXQAADbjTCpIAAAAgAkDktIAAAAg");
	this.shape_108.setTransform(486.8509,450.1812);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(146,36,36,0.714)").ss(0.7,1,1).p("AAkgvQhEjUgRjfQgloGHRFHQHTFHGLnaQGLnaDHErQDHEqiTI6QiTI5g+FoQg+FonqhpQm/hfk2mIQg/DDkCCUQlWDGnkAAQnlAAlXjGQlWjFAAkYQAAkXFWjFQFXjGHlAAQHcAAFSC/QAGAEAGADQFXDFAAEXQAABGgWBAQgdglgcgoQi4kFhckXg");
	this.shape_109.setTransform(502.9272,440.7579);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A02442").s().p("Aq3QvQkhm8AApzQAApyEhm8QEgm8GXAAQGYAAEgG8QEhG8AAJyQAAJzkhG8QkgG8mYAAQmXAAkgm8g");
	this.shape_110.setTransform(121.1,354.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CC3350").s().p("A5GORQlWjFAAkYQAAkXFWjFQFXjGHlAAQHcAAFSC/QBcEXC4EFQAcAoAdAlQg/DDkCCUQlWDGnkAAQnlAAlXjGgARmQhQm/hfk2mIQAWhAAAhGQAAkXlXjFIgMgHQhEjUgRjfQgloGHRFHQHTFHGLnaQGLnaDHErQDHEqiTI6QiTI5g+FoQgwEXkwAAQhZAAhvgYgAFxI6IAAAAgAE4HtQi4kFhckXIAMAHQFXDFAAEXQAABGgWBAQgdglgcgogAAkgvIAAAAg");
	this.shape_111.setTransform(502.9272,440.7579);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(175,44,44,0.859)").ss(0.9,1,1).p("ACno7Qguo1HsGwQHsGwF5o4QF5o6CqE/QCqE/iwJ0QixJzgGGIQgFGJnrh+Qnrh+lBn/QlAn/gto1gEghAAIUQAAkYFXjGQFXjEHkAAQHlAAFWDEQFWDGAAEYQAAEXlWDGQlWDGnlAAQnkAAlXjGQlXjGAAkXg");
	this.shape_112.setTransform(519.2703,431.2484);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B62C3A").s().p("Aq3QvQkhm7AAp0QAApyEhm8QEgm8GXAAQGYAAEhG8QEgG8AAJyQAAJ0kgG7QkhG8mYAAQmXAAkgm8g");
	this.shape_113.setTransform(119.6,347.15);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CC3342").s().p("A7pPxQlXjGAAkXQAAkYFXjGQFXjEHkAAQHlAAFWDEQFWDGAAEYQAAEXlWDGQlWDGnlAAQnkAAlXjGgAVAR2Qnrh+lBn/QlAn/gto1Qguo1HsGwQHsGwF5o4QF5o6CqE/QCqE/iwJ0QixJzgGGIQgEEqkaAAQhbAAh3gfg");
	this.shape_114.setTransform(519.2703,431.2484);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#CC3333").ss(1,1,1).p("EAhsgCiQjOKtAzGpQAyGqnsiTQnsiUk8ozQk9ozg1pkQg1plIEIZQIFIZFnqYQFoqXCNFTQCNFSjOKugAA+JzQAAEYlWDFQlXDGnkAAQnlAAlXjGQlWjFAAkYQAAkXFWjGQFXjFHlAAQHkAAFXDFQFWDGAAEXg");
	this.shape_115.setTransform(535.8327,421.6976);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CC3333").s().p("AntZWQlWjGAAkXQAAkYFWjGQFXjFHkAAQHkAAFXDFQFXDGAAEYQAAEXlXDGQlXDGnkAAQnkAAlXjGgEAu5AbQQnsiTk8o0Qk9ozg1pkQg1plIEIZQIFIZFnqXQFoqYCNFTQCNFTjOKtQjOKuAzGpQAlE8kGAAQhaAAh/gmgEg1nAL+Qkgm7AApzQAApzEgm8QEhm8GYAAQGYAAEgG8QEhG8AAJzQAAJzkhG7QkgG8mYAAQmYAAkhm8g");
	this.shape_116.setTransform(391.6327,369.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84}]},59).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[]},1).wait(256));

	// squares
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape_117.setTransform(104.675,313.925);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape_118.setTransform(104.675,313.925);
	this.shape_118._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_117).to({_off:true},6).wait(6).to({_off:false,x:223.975},0).to({_off:true},6).wait(6).to({_off:false,x:338.675},0).to({_off:true},6).wait(6).to({_off:false,x:470.625},0).to({_off:true},6).wait(6).to({_off:false,x:597.275},0).to({_off:true},6).wait(278));
	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false,x:223.975},0).to({_off:true},6).wait(6).to({_off:false,x:338.675},0).to({_off:true},6).wait(6).to({_off:false,x:470.625},0).to({_off:true},6).wait(6).to({_off:false,x:597.275},0).to({_off:true},5).wait(273));

	// loading
	this.instance_11 = new lib.CachedBmp_35();
	this.instance_11.setTransform(151.05,93.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},59).wait(273));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:249, endFrame:249, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:250, endFrame:250, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:251, endFrame:251, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:252, endFrame:252, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:253, endFrame:253, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:254, endFrame:254, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:255, endFrame:255, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:256, endFrame:256, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:257, endFrame:257, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:258, endFrame:258, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:259, endFrame:259, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:260, endFrame:260, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:261, endFrame:261, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:262, endFrame:262, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:263, endFrame:263, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:264, endFrame:264, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:265, endFrame:265, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:266, endFrame:266, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_1, startFrame:267, endFrame:267, x:-2, y:-2, w:246, h:206});
	this.filterCacheList.push({instance: this.instance_3, startFrame:221, endFrame:221, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:222, endFrame:222, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:223, endFrame:223, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:224, endFrame:224, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:225, endFrame:225, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:226, endFrame:226, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:227, endFrame:227, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:228, endFrame:228, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:229, endFrame:229, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:230, endFrame:230, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:231, endFrame:231, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:232, endFrame:232, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:233, endFrame:233, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:234, endFrame:234, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:235, endFrame:235, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:236, endFrame:236, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:237, endFrame:237, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:238, endFrame:238, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:239, endFrame:239, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:240, endFrame:240, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:241, endFrame:241, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:242, endFrame:242, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:243, endFrame:243, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:244, endFrame:244, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:245, endFrame:245, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:246, endFrame:246, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:247, endFrame:247, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:248, endFrame:248, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:249, endFrame:249, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:250, endFrame:250, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:251, endFrame:251, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:252, endFrame:252, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:253, endFrame:253, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:254, endFrame:254, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:255, endFrame:255, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:256, endFrame:256, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:257, endFrame:257, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:258, endFrame:258, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:259, endFrame:259, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:260, endFrame:260, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:261, endFrame:261, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:262, endFrame:262, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:263, endFrame:263, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:264, endFrame:264, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:265, endFrame:265, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:266, endFrame:266, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:267, endFrame:267, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:268, endFrame:268, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:269, endFrame:269, x:-2, y:-2, w:254, h:154});
	this.filterCacheList.push({instance: this.instance_3, startFrame:270, endFrame:270, x:-2, y:-2, w:254, h:154});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,310.4,438.9,242.5);
// library properties:
lib.properties = {
	id: '6A00F110C636294D9B40333B46B238BD',
	width: 800,
	height: 600,
	fps: 12,
	color: "#D9CBB1",
	opacity: 1.00,
	manifest: [
		{src:"images/final_version_atlas_1.png", id:"final_version_atlas_1"},
		{src:"images/final_version_atlas_2.png", id:"final_version_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6A00F110C636294D9B40333B46B238BD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;