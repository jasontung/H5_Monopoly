var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var constants;
(function (constants) {
    var Notify = (function () {
        function Notify() {
        }
        Notify.FACADE_STARTUP = "FACADE_STARTUP";
        return Notify;
    }());
    constants.Notify = Notify;
    __reflect(Notify.prototype, "constants.Notify");
})(constants || (constants = {}));
//# sourceMappingURL=Notify.js.map