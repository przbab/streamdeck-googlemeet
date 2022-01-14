/* global registerPluginOrPI, requestGlobalSettings, requestSettings, PI */

let websocket;

// eslint-disable-next-line no-unused-vars
function connectElgatoStreamDeckSocket(port, UUID, registerEvent, inInfo, inActionInfo) {
    const actionInfo = JSON.parse(inActionInfo);
    // const info = JSON.parse(inInfo);
    let globalSettings = null;
    let settings = null;

    // const streamDeckVersion = info.application.version;
    // const pluginVersion = info.plugin.version;

    settings = actionInfo.payload.settings;

    const { action } = actionInfo;

    websocket = new WebSocket(`ws://127.0.0.1:${port}`);

    websocket.onopen = () => {
        registerPluginOrPI(registerEvent, UUID);

        requestGlobalSettings(UUID);
        requestSettings(UUID);
    };

    const pi = new PI(UUID, action, settings, globalSettings);

    websocket.onmessage = (evt) => {
        const jsonObj = JSON.parse(evt.data);
        const { event } = jsonObj;
        const jsonPayload = jsonObj.payload;

        if (event === 'didReceiveGlobalSettings') {
            globalSettings = jsonPayload.settings;
            pi.updateGlobalSettings(globalSettings);
        } else if (event === 'didReceiveSettings') {
            settings = jsonPayload.settings;
            pi.updateSettings(settings);
        }
    };
}
