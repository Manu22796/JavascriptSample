const assert = require('chai').assert;

var app = require('../app');

describe('App',function(){
  it('app should return hello ', function(){
    assert.equal(app.abc1(),'Hello1');
  })
  it('app should return hello ', function(){
    assert.typeOf(app.abc1(),'String');
  })
  it('app should return hello ', function(){
    assert.equal(app.abc2(),566);
  })
  it('app should return hello ', function(){
    assert.typeOf(app.abc2(),'Number');
  })
  it('app should return hello ', function(){
    assert.equal(app.add(7,9),16);
  })
  it('app should return hello ', function(){
    assert.typeOf(app.add(7,9),'Number');
  })
})
