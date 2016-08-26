<h2>BASIC INSTALLATION</h2>
<ul>
  <li>Download NodeJs from https://nodejs.org and install it.</li>
  <li>Create working directory for the application (e.g. MyFirstNodeJsApp).</li>
  <li>
    Start command line tool from the working directory and run 
    <pre>node --version</pre> 
    and 
    <pre>npm --version</pre> 
    command.</br>
    If installation was successful you should see the versions of the installed nodejs and nodejs package manager.
  </li>
  <li>
    Run 
    <pre>npm init</pre> 
    from the working directory. It creates the package.json file for the project</br>
    where the meta-data, dependencies..etc. will be stored.
  </li>
</ul>

<h2>STARTING an app</h2>
<ul>
  <li>
    Open command line and go to the working directory and type 
    <pre>node &lt;yourjavascriptfile.js&gt;</pre> 
    to run the application.
  </li>
  <li>OR if you declare the "main" variable in the package.json file <em>("main": "server.js" the entry point will be the server.js file in the root of the working directory)</em> you can run with the 
    <pre>node &lt;project_directory&gt;</pre> 
    command.
  </li>
</ul>

<h2>INSTALLING modules (common)</h2>
<ul>
  <li>
    Open command line tool from the working directory and type 
    <pre>npm install &lt;module_name&gt; --save</pre>
    the "--save" option indicates that the module's name should be placed in the package.json file as a dependency.
  </li>
  <li> 
    After the installation you can "include" the module with the <strong>require("&lt;module_name&gt;")</strong> function.
  </li>
</ul>


<h2>INSTALLING NODEMON</h2>

<h3>WHAT IS NODEMON?</h3>
Automatically restart server when files change: By default, node will not monitor for file changes after your server 
has been started. This means you’d have to shut down and start the server every time you made a file change. 
This can be fixed with nodemon.

<h3>THERE ARE 2 POSSIBILITIES TO CONFIGURE NODEMON:</h3>
<ol>
  <li>
    <ul>
      <li>
        Run the 
        <pre>npm install nodemon --save-dev</pre> 
        <strong>--save</strong> flag is for save as a dependency (in package.json) and the <strong>-dev</strong> is for 
        save the module for only development, you don't need this in production.
      </li>
      
      <li>
        You can run from the console like this 
        <pre>"&lt;project_directory&gt;/node_modules/.bin/nodemon &lt;relative_path&gt;/server.js"</pre>.
      </li>
      
      <li>
        If you want to run simpler the nodemon you can add:
        <pre>
	  "scripts": {
	    "dev": "nodemon server.js"
	  }
	</pre>	  
        to the package.json file and you can run with the 
        <pre>npm run dev</pre> 
        to trigger "nodemon server.js".
      </li>
    </ul>
  </li>
  
  <li>
    <ul>
      <li>
        Install the nodemon with the 
        <pre>npm install nodemon -g</pre> 
        <strong>-g</strong> global flag, it will be saved to the AppData directory (project independent).
      </li>
      
      <li>
        You can run with the 
        <pre>nodemon server.js</pre> 
        command. 
      </li>
    </ul>
  </li>
</ol>


