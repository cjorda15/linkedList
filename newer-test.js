var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

searchTest(driver_chr);

function searchTest(driver) {
  driver.get('http://localhost:8080/');

  driver.findElement(By.tagName('button')).click();

  driver.sleep(3000).then(function() {

    driver.findElement(By.tagName('h1')).then(function(h1) {
      h1.getText().then(function(text){
        if(text === 'Changed! Wowowow') {
          console.log('Test passed');
        } else {
          console.log('Test failed');
        }
      })
    })
  });

  driver.quit();
}
