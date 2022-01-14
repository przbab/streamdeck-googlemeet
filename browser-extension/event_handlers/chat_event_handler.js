class ChatEventHandler extends SidepanelEventHandler {

  handleStreamDeckEvent = (message) => {
    if (!this.shouldExecute(message)) {
      return;
    }
    
    if (message.event === "toggleChat") {
      this._toggleSidepanel(2);
    }
  }

}