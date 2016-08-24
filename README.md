- BASIC INSTALLATION -----------------------------------------------------------------------------------------------------

1.) Download NodeJs from https://nodejs.org and install it.

2.) Create working directory for the application (e.g. MyFirstNodeJsApp).

3.) Start command line tool from the working directory and run "node --version" and "npm --version" command.
    If installation was successful you should see the versions of the installed nodejs and nodejs package manager.

4.) Run "npm init" from the working directory. It creates the package.json file for the project 
    where the meta-data, dependencies..etc. will be stored.


 - STARTING an app -------------------------------------------------------------------------------------------------------

1.) Open command line and go to the working directory and type "node [yourjavascriptfile.js]" to run the application.

2.) OR if you declare the "main" variable in the package.json file you can run with the "node [project_directory]" command. 
	("main": "server.js" the entry point will be the server.js file in the root of the working directory)


 - INSTALLING modules (common) -------------------------------------------------------------------------------------------

1.) Open command line tool from the working directory and type "npm install [module_name] --save"
    the "--save" option indicates that the module's nane should be placed in the package.json file.

2.) After the installation you can "include" the module with the require("[module_name]") function.


 ---- INSTALLING NODEMON -------------------------------------------------------------------------------------------------

	WHAT IS NODEMON?
	Automatically restart server when files change: By default, node will not monitor for file changes after your server 
	has been started. This means you’d have to shut down and start the server every time you made a file change. 
	This can be fixed with nodemon.

THERE ARE 2 POSSIBILITIES TO CONFIGURE NODEMON:

1/a.) Run the "npm install nodemon --save-dev" --save flag is for save as a dependency (in package.json) and the -dev is for 
      save the module for only development, you don't need this in production.

2/a.) You can run from the console like this "[project_directory]/node_modules/.bin/nodemon [relative_path]/server.js".

3/a.) If you want to run simpler the nodemon you can add:

	  "scripts": {
	    "dev": "nodemon server.js"
	  }
		  
      to the package.json file and you can run with the "npm run dev" to trigger "nodemon server.js".

1/b.) Install the nodemon with the "npm install nodemon -g" -g global flag, it will be saved to the AppData directory (project independent).

2/b.) You can run with the "nodemon server.js" command. 


