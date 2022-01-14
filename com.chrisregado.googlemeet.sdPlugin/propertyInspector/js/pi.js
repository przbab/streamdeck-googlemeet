class PI {
    constructor(context, action, settings, globalSettings) {
        this.context = context;
        this.settings = settings;
        this.globalSettings = globalSettings;

        const whitelist = document.querySelector('#whitelist');
        whitelist.value = this.settings.whitelist || '';
        whitelist.addEventListener('change', (event) => {
            this.settings.whitelist = event.target.value;
            this.saveSettings();
        });

        const blacklist = document.querySelector('#blacklist');
        blacklist.value = this.settings.blacklist || '';
        blacklist.addEventListener('change', (event) => {
            this.settings.blacklist = event.target.value;
            this.saveSettings();
        });
    }

    saveSettings = () => {
        saveSettings(this.context, this.settings);
    };

    updateSettings = (settings) => {
        this.settings = settings;
    };

    updateGlobalSettings = (globalSettings) => {
        this.globalSettings = globalSettings;
    };
}
