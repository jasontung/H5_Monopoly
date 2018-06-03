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
    var ctrl;
    (function (ctrl) {
        var StartUpCommand = (function (_super) {
            __extends(StartUpCommand, _super);
            function StartUpCommand() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StartUpCommand.prototype.initializeMacroCommand = function () {
                console.log("app sub command");
            };
            return StartUpCommand;
        }(puremvc.MacroCommand));
        ctrl.StartUpCommand = StartUpCommand;
        __reflect(StartUpCommand.prototype, "core.ctrl.StartUpCommand");
    })(ctrl = core.ctrl || (core.ctrl = {}));
})(core || (core = {}));
//# sourceMappingURL=StartUpCommand.js.map