module core.ctrl {
	export class StartUpCommand extends puremvc.MacroCommand{
		public initializeMacroCommand()
		{
			console.log("app sub command");
		}
	}
}