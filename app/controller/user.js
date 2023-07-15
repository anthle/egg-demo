'use strict';

const Controller = require('egg').Controller;
const demo = [
  {
    id: '1',
    name: 'le',
    nickname: 'jiale1',
    sex: '男',
  },
  {
    id: '2',
    name: 'le',
    nickname: 'jiale2',
    sex: '男',
  },
  {
    id: 3,
    name: 'le',
    nickname: 'jiale3',
    sex: '男',
  },
];
class UserController extends Controller {
  async index() {
    const res = demo;
    this.ctx.query.pages;
    this.ctx.query.status;
    this.ctx.body = {
      msg: 'ok',
      data: res,
    };
  }

  async read() {
    const id = this.ctx.params.id;
    const detail = demo.find(item => item.id === id);
    this.ctx.body = {
      msg: 'ok',
      data: detail,
    };
  }

  async create() {
    console.log(this.ctx.request.body);
    this.ctx.body = {
      msg: 'ok',
      data: {
        username: 'le',
        nickname: 'jiale',
      },
    };
  }
}

module.exports = UserController;
