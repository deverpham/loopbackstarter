import {helper} from '../core/helper.service';
import {appConfig} from '../core/app.config'
let router = helper.newRouter();

router.get('/',(req:any,res:any) => {
    console.log(appConfig.globalConfig.cssFramework);
    res.send('hello world');
})
export default router;
