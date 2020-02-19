require('colors');
const chai = require("chai");
const assert = chai.assert;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const wd = require('wd');

// TODO: fill out app path
const app = "<full/path/to>/browserstack/nohana/nohana_5.0.3.apk"; 
const nohanaPhoneNumber = "<please fill it out>";
const nohanaPassword = "<please fill it out>";

// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;
const driver = wd.promiseChainRemote('http://localhost:4723/wd/hub');

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
        automationName: "UiAutomator2",
        platformName: "Android",
        deviceName: "dummy",
        app: app,
        newCommandTimeout: "600",
        chromeOptions: {
          w3c: false
        }
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

