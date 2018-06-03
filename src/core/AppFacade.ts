module core {
	export class AppFacade extends puremvc.Facade {

		public static getInstance(): AppFacade {
			if (this.instance == null)
				this.instance = new AppFacade();
			return <AppFacade>this.instance;
		}

		public initializeController() {
			super.initializeController();
			this.registerCommand(constants.Notify.FACADE_STARTUP, ctrl.StartUpCommand);
		}

		public startUp(rootView: egret.DisplayObjectContainer) {
			this.sendNotification(constants.Notify.FACADE_STARTUP);
			this.removeCommand(constants.Notify.FACADE_STARTUP);
		}
	}
}