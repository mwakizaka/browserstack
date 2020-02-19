require('colors');
const chai = require("chai");
const assert = chai.assert;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const wd = require('wd');

// TODO: fill out the followings
const browserstackUser = "<please prepare>";
const browserstackKey = "<please prepare>";
const app = "bs://<please prepare>";
const nohanaPhoneNumber = "<please fill it out>";
const nohanaPassword = "<please fill it out>";


// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;
const driver = wd.promiseChainRemote('http://hub-cloud.browserstack.com/wd/hub');

// optional extra logging
driver.on('status', function(info) {
  console.log(info.cyan);
});
driver.on('command', function(eventType, command, response) {
  console.log(' > ' + eventType.cyan, command, (response || '').grey);
});
driver.on('http', function(meth, path, data) {
  console.log(' > ' + meth.magenta, path, (data || '').grey);
});


function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

const makeRequest = async () => {
  try {
    await driver.init({
       'browserstack.user' : browserstackUser,
       'browserstack.key' : browserstackKey,
       'build' : 'Node Android',
       'name': 'single_test',
       'device' : 'Google Pixel 3a',
       'version': '9.0',
       'app': app,
       'browserstack.debug' : true
      });
    
    await sleep(10000);
    await driver.elementById('jp.co.nohana:id/button_log_in').click();
    await sleep(5000);
    await driver.elementById('jp.co.nohana:id/edit_phone_number').sendKeys(nohanaPhoneNumber);
    await driver.elementById('jp.co.nohana:id/edit_password').sendKeys(nohanaPassword);
    await driver.elementById('jp.co.nohana:id/button_login').click();
    
    await sleep(20000);
    await driver.elementById("jp.co.nohana:id/fab_")
    console.log("The end");
  
  } catch( err ) {
    console.log(err);
  } finally {
    await driver.quit();
  }
  return "done";
}
makeRequest();

