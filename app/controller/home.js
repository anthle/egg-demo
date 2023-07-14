'use strict';

const {
  Controller,
} = require('egg');

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const {
      ctx,
    } = this;
    ctx.body = {
      msg: 'ok',
      data: [ 1, 2, 3 ],
    };
  }
}

module.exports = HomeController;
