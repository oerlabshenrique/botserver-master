@ECHO off

ECHO General Bots Command Line

IF EXIST node_modules goto COMPILE
ECHO Installing Packages for the first time use...
CALL npm install --silent

:COMPILE
IF EXIST dist goto ALLSET
ECHO Compiling...
CALL node_modules\.bin\tsc

:ALLSET
node boot.mjs
