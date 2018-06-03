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
            var InitScene = (function (_super) {
                __extends(InitScene, _super);
                function InitScene() {
                    return _super.call(this) || this;
                }
                InitScene.prototype.partAdded = function (partName, instance) {
                    _super.prototype.partAdded.call(this, partName, instance);
                };
                InitScene.prototype.childrenCreated = function () {
                    _super.prototype.childrenCreated.call(this);
                };
                return InitScene;
            }(eui.Component));
            scene.InitScene = InitScene;
            __reflect(InitScene.prototype, "core.view.scene.InitScene", ["eui.UIComponent", "egret.DisplayObject"]);
        })(scene = view.scene || (view.scene = {}));
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=InitScene.js.map