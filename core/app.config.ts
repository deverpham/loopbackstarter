class AppConfig {
    globalConfig:any;
    constructor() {
        this.globalConfig = require('../../thinhframework.json');
        console.log(this.globalConfig.cssFramework)
    }
}

export let appConfig = new AppConfig();