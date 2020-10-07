## Clone the repo to your machine 
git clone 

## Install dependencies
In your terminal, navigate to the directory and run: *** npm install ***
 
## Start program
In your terminal, Navigate to the directory and run: *** npm start ***
The program should automatically open in your default browser
 
## Blocked by CORS
The providers API does not have CORS support. This results in the
program not getting access to the API without a fix, the fix being
support for CORS. See fixes below.
 
## CORS support fixes:
### 1. Open the program in another browser and allow CORS
This is probably the easiest fix. Remember though, that enabling CORS
will break things like google meets for example, therefore I suggest
you do this in another browser than your default browser. 
  
  *** For chrome: ***
  Install the [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc and enable Moesif CORS
 
  *** For Safari ***
  Go to developer tools in the Menu. If you do not have the
  developer tools in the menu go to Safari > Preferences > Advanced
  and in the bottom you check "Show Developer menu in bar". In the 
  Safari menu go to Develop > Disable Cross-Origin Restrictions.
 
  *** For Firefox ***
  Install the [CORS Everywhere extension](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) and enable CORS everywhere
 
### 2. Send request to a proxy
In the directory navigate to src > scripts > baseURL.js and change 
the baseURL variable being exported to corsBaseURL. This solution 
will make the program noticeable slower and feel very sluggish.
 
### 3. Build your own proxy
You could build your own proxy using node.js with express if you like.
Here is a example on [github](https://github.com/15Dkatz/beat-cors-server)
 
### 4. Ask the owners of providers API to add support for CORS
They probably know how to do it, and if you ask nicely they might do it.
If they do it you can simple just run the program without any of the
fixes above.
