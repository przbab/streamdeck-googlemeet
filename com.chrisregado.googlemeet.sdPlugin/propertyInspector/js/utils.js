/* global websocket */

// eslint-disable-next-line no-unused-vars
function registerPluginOrPI(inEvent, inUUID) {
    if (websocket) {
        const json = {
            event: inEvent,
            uuid: inUUID,
        };

        websocket.send(JSON.stringify(json));
    }
}

// eslint-disable-next-line no-unused-vars
function saveSettings(inUUID, inSettings) {
    if (websocket) {
        const json = {
            event: 'setSettings',
            context: inUUID,
            payload: inSettings,
        };
        websocket.send(JSON.stringify(json));
    }
}

// eslint-disable-next-line no-unused-vars
function saveGlobalSettings(inUUID, globalSettings) {
    if (websocket) {
        const json = {
            event: 'setGlobalSettings',
            context: inUUID,
            payload: globalSettings,
        };

        websocket.send(JSON.stringify(json));
    }
}

// eslint-disable-next-line no-unused-vars
function requestGlobalSettings(inUUID) {
    if (websocket) {
        const json = {
            event: 'getGlobalSettings',
            context: inUUID,
        };

        websocket.send(JSON.stringify(json));
    }
}

// eslint-disable-next-line no-unused-vars
function requestSettings(inUUID) {
    if (websocket) {
        const json = {
            event: 'getSettings',
            context: inUUID,
        };

        websocket.send(JSON.stringify(json));
    }
}

// eslint-disable-next-line no-unused-vars
function log(inMessage) {
    // Log to the developer console
    const time = new Date();
    const timeString = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
    console.log(timeString, inMessage);

    // Log to the Stream Deck log file
    if (websocket) {
        const json = {
            event: 'logMessage',
            payload: {
                message: inMessage,
            },
        };

        websocket.send(JSON.stringify(json));
    }
}

// eslint-disable-next-line no-unused-vars
function showAlert(inUUID) {
    if (websocket) {
        const json = {
            event: 'showAlert',
            context: inUUID,
        };

        websocket.send(JSON.stringify(json));
    }
}

// eslint-disable-next-line no-unused-vars
function setState(inContext, inState) {
    if (websocket) {
        const json = {
            event: 'setState',
            context: inContext,
            payload: {
                state: inState,
            },
        };

        websocket.send(JSON.stringify(json));
    }
}

// function sendToPropertyInspector(inAction, inContext, inData) {
//   if (websocket) {
//     const json = {
//       action: inAction,
//       event: "sendToPropertyInspector",
//       context: inContext,
//       payload: inData,
//     };

//     websocket.send(JSON.stringify(json));
//   }
// }

// eslint-disable-next-line no-unused-vars
function sendToPlugin(inAction, inContext, inData) {
    if (websocket) {
        const json = {
            action: inAction,
            event: 'sendToPlugin',
            context: inContext,
            payload: inData,
        };

        websocket.send(JSON.stringify(json));
    }
}
