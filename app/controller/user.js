'use strict';
// const testModal = require('../modal/test.modal.js');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async test () {
		const { app, ctx, service } = this
		ctx.body = {errCode: '200', errInfo: '链接成功'}
  }
}

module.exports = HomeController;
