
 var webdriver = require('selenium-webdriver');
 var until = require('selenium-webdriver').until;
 var By = require('selenium-webdriver').By;
describe("Automation of HRIS ",function(){

it("Login in to HRIS",function(){
  var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get("http://hris.qainfotech.com/login.php",5000);
  driver.findElement(By.css('input[name="txtUserName"]')).sendKeys("manusharma");
  driver.findElement(By.css('input[name="txtPassword"]')).sendKeys("xyxabc");
  driver.findElement(By.css('input[name="Submit"]')).click();
//  driver.wait(until.elementLocated(By.css('a>img[class="user-image"]+span')));
  var username = driver.findElement(By.css('a>img[class="user-image"]+span'));
  username.getText().then(function(text)
  {
    assert.equal(text,'Manu');
  });
});

});
