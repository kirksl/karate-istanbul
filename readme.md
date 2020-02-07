## Purpose

The purpose of this project is to showcase how Karate tests which call an isolated endpoint can produce code coverage for the code behind an Express Server.

## Setup
Install Node (tested with v12.13.1)
Install Java (tested with Java SE Runtime Environment build 1.8.0_201-b09)
Update **npm run clean** command in package.json if using Linux/Mac.  Currently setup for Windows.
```batch
npm install
```

## Execution
```batch
REM Run all tests, show 100% coverage of routes
npm run instrument
npm run test
npm run report

REM Run only calculator tests, showing missing coverage of advanced routes
npm run clean
npm run instrument
npm run test:calculator
npm run report

REM Run only advanced tests, showing missing coverage of calculator routes
npm run clean
npm run instrument
npm run test:advanced
npm run report
```