# Quake III Arena Challenge

## Description
---
### This project have the purpose of reading a Quake III Arena log for the game and create a script to list players, rank the players by the kills that they made and show total kills of each match. Also, the code generate a report in JSON format to show the "kills by means" used and how many times they were used in each match.
---

## Summary
--- 
- [Quake-3-Arena](#quake-3-arena)
    - [Description](#Description)
    - [Summary](#Summary)
    - [Components](#Components)
        + [file](#file)
        + [log](#log)
        + [tests](#tests)
        + [organizeAndOutput](#organizeAndOutput.js)
        + [index.js](#index.js)

    - [How to execute the code?](#How-to-execute-the-code?)
    - [How to test the code?](#How-to-test-the-code?)
    - [How to consult the coverage?](#How-to-consult-the-coverage?)
    


--- 
## Components
---
### file json
Folder that has JSON file gerenated by the code after executed. This file shows the kills by means of each match.

### logs
Folder that keep the log that will be read by the code. It is through this log file that the code will execute, show the output and generated the JSON file. Consult the log clicking here: [log](https://gist.github.com/cloudwalk-tests/be1b636e58abff14088c8b5309f575d8).

### tests
Folder that has unit tests by this code. The tests are files .tests.js. and they keep the quality and treats some inconsistencies that the code can be posteriorly.

### organizeAndOutput.js
This file does my code organize the output and generate the JSON file based of in organized data.

### index.js
This file is the main file of the code because is where the source code is.

--- 
## How to execute the code?
---
### First, you should clone the project in your computer using Git Bash command:
```
git clone "https://github.com/isabelaalonso9/quake-3-arena.git"
```

### You should have [Node.js](https://nodejs.org/en/download/) installed on your computer, because for this project the language used was JavaScript with Node.js (I used the 14.18.1 version).

### After that, open the project on [Visual Studio Code](https://code.visualstudio.com/download).

### To execute the project, open the Visual Studio Code Terminal and type the command:
```
node index.js
```

### See the output of the script of each match and it's respective players, total kills and kills per players.

### To access the kills by means of each match, click on folder named "file" and double-click on the file named "deaths.json". See the report in the JSON format that was generated.

--- 
## How to test the code?
---
### First, install the framework of test that is used typing in the the Visual Studio Code Terminal:
```
npm install jest
```
### To run the test, you should the Visual Studio Code Terminal and type the command:
```
npm test
```
--- 
## How to consult the coverage?
---
### To run the coverage, you should the Visual Studio Code Terminal and type the command:
```
npm run coverage
```
