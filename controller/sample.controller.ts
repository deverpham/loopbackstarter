import {modelService} from '../core/service/model.service';
class UserController {
  sampleModel:any;
  async init() {
    this.sampleModel = await modelService.connectModel('sample')
  }

  constructor () {
    this.init();
  }
}

export let userController = new UserController();
