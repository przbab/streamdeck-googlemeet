class ParticipantsEventHandler extends SidepanelEventHandler {

  handleStreamDeckEvent = (message) => {
    if (!this.shouldExecute(message)) {
      return;
    }
    
    if (message.event === "toggleParticipants") {
      this._toggleSidepanel(1)
    }
  }

}