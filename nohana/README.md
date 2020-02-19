# Abstract
- both local.js and browserstack.js do the same testing but it fails when on browserstack.js

# Local testing
## Preparation
- You need to update the following lines
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/local.js#L10
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/local.js#L11
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/local.js#L12

## Test run
- Run the following
    - Assumes that you started appium server locally
```
cd browserstack/nohana
node local.js
```

# Browserstack testing
## Preparation
- You need to update the following lines
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/browserstack.js#L10
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/browserstack.js#L11
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/browserstack.js#L12
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/browserstack.js#L13
https://github.com/mwakizaka/browserstack/blob/d8dcbcb487473e97f4ba47adc93a817830bae34c/nohana/browserstack.js#L14

## Test run
- Run the following
```
cd browserstack/nohana
node browserstack.js
```

# Expected result (obtained by local.js)
- Please refer to https://github.com/mwakizaka/browserstack/blob/master/nohana/expected_result.mov

# Actual result (obtained by browserstack.js)
- Browserstack session ID: 6db25000b755a87bc3a39759d4d230430c1845ec
