var assert = require('assert');
 var webdriver = require('selenium-webdriver');
 var until = require('selenium-webdriver').until;
 var By = require('selenium-webdriver').By;
describe("Automation of HRIS ",function(){

it("Login in to HRIS",function(){
  var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get("http://hris.qainfotech.com/login.php",5000);
  driver.findElement(By.css('input[name="txtUserName"]')).sendKeys("manusharma");
  driver.findElement(By.css('input[name="txtPassword"]')).sendKeys("Manu@90153764");
  driver.findElement(By.css('input[name="Submit"]')).click().then(function(){
    var username = driver.findElement(By.css('a>img[class="user-image"]+span'));
    username.getText().then(function(text)
    {
      assert.equal(text,'Manudd');
    });
  });
//  driver.wait(until.elementLocated(By.css('a>img[class="user-image"]+span')));

});

});
