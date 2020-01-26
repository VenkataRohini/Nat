# Installation/Setup & Test Execution
Install node.js (recent version).
Install Visual Studio Code (recent version).

#GitHub Link
https://github.com/VenkataRohini/Nat.git

# Import Project
1. Open visual studio code
2. Click on File->Open Folder and select the folder where you check-out the project (make sure you select the folder where package.json is preasent).

# Install Dependencies
1. Go to View->Terminal and trigger command: npm install
The dependencies related to Protractor, Cucumber, Typescript and all other in pckage.json will be downloaded as part of this installation.

# Execute Test Scripts
1. After the dependencies are downloaded hit this command: npm run build-run
This command internally triggers two commands. One builds the project and second one triggers test execution. You can find these custom commands in package.json
"# Protractor-cucumber-typescript" 
