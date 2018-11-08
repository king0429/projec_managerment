'use strict';
// const testModal = require('../modal/test.modal.js');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async test () {
		const { app, ctx, service } = this
		// console.log(await ctx.model)
		// let model = await ctx.model.test.insert({userName: '123', password: '123123'})
    // console.dir(app.mongoose.model('test').find())
		ctx.body = await app.mongoose.model('pm_user').remove({userName: '123'})
  }
}

module.exports = HomeController;
