//To initate our tests, we must first include the selenium-webdriver module. We require the module and assign it to the variable "webdriver". We create a "By" and "until" shorthand variable for referencing the "By" class and "until" module more easily within our subsequent code. "until" defines common conditions for use with "WebDriver wait". "By" describes a mechanism for locating an element on the page.

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

// var driver_fx = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// var driver_saf = new webdriver.Builder()
//     .forBrowser('safari')
//     .build();

// searchTest(driver_fx);
searchTitle(driver_chr);
searchBody(driver_chr)
// searchTest(driver_saf);

function searchTitle(driver) {
  driver.get('file:///Users/chrisjordan/Documents/link-list/index.html');
  driver.findElement(By.id('web-title-input')).sendKeys('plz');
  driver.findElement(By.name('url')).sendKeys("work");
  driver.findElement(By.id('enter-button')).click();
  driver.sleep(1500).then(function() {
    driver.findElement(By.id("web-title")).getText().then(function(title) {
      if(title === 'plz') {
        console.log('First-Test passed');
      } else {
        console.log('Test failed');
      }
    });
  });

  //driver.quit();
}

function searchBody(driver) {
  // driver.findElement(By.id('web-title-input')).sendKeys('plz');
  // driver.findElement(By.name('url')).sendKeys("work");
  // driver.findElement(By.id('enter-button')).click();
    driver.sleep(1500).then(function() {
    driver.get('file:///Users/chrisjordan/Documents/link-list/index.html')
    driver.findElement(By.id('web-title-input')).sendKeys('god');
    driver.findElement(By.name('url')).sendKeys("help us");
    driver.findElement(By.id('enter-button')).click();
    driver.findElement(By.id("web-url")).getText().then(function(body) {
      if(body === 'help us') {
        console.log('Second Test passed');
      } else {
        console.log('Second Test failed');
      }
    });
  });

//driver.quit();
}
