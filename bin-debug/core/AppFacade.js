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
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new AppFacade();
            return this.instance;
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(constants.Notify.FACADE_STARTUP, core.ctrl.StartUpCommand);
        };
        AppFacade.prototype.startUp = function (rootView) {
            this.sendNotification(constants.Notify.FACADE_STARTUP);
            this.removeCommand(constants.Notify.FACADE_STARTUP);
        };
        return AppFacade;
    }(puremvc.Facade));
    core.AppFacade = AppFacade;
    __reflect(AppFacade.prototype, "core.AppFacade");
})(core || (core = {}));
//# sourceMappingURL=AppFacade.js.map