var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var core;
(function (core) {
    var view;
    (function (view) {
        var scene;
        (function (scene) {
            var testScene = (function (_super) {
                __extends(testScene, _super);
                function testScene() {
                    return _super.call(this) || this;
                }
                testScene.prototype.partAdded = function (partName, instance) {
                    _super.prototype.partAdded.call(this, partName, instance);
                };
                testScene.prototype.childrenCreated = function () {
                    _super.prototype.childrenCreated.call(this);
                };
                return testScene;
            }(eui.Component));
            scene.testScene = testScene;
            __reflect(testScene.prototype, "core.view.scene.testScene", ["eui.UIComponent", "egret.DisplayObject"]);
        })(scene = view.scene || (view.scene = {}));
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=testScene.js.map