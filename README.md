# browser-text-editor

## Description
For challenge 19 of the UT Austin Coding Bootcamp, I was given starter code and had to implement the getting and storing of data (text typed in the editor) to the IndexedDB database stored in the browser profile folder. To make a difference in usability of the IndexedDB and making the code look more fluent, we utilize the 'idb' module. In order to keep the server and client files separated, the client server folder structure was used. The Webpack module bundler was used to bundle static files with the same file extensions into one file that can be used to make an application run faster. The service worker is used to cache files to make the application useable offline. Laslty, our manifest makes the application downloadable to a user's device so that the user can use it as if it was an app from the app store. 

## Link to Deployed Application
Click [here](https://browser-text-editor.herokuapp.com/).

## Screenshots
![jate](https://user-images.githubusercontent.com/106782112/200624622-23934ea8-ad00-4298-abb8-7e7688189a42.png)

#### Manifest
![manifest](https://user-images.githubusercontent.com/106782112/200625162-bff099cd-9f9f-4093-aa4b-434b5cd4c4fc.png)

#### Service Worker
![sw](https://user-images.githubusercontent.com/106782112/200625550-6305eef7-b3ef-4097-9a22-46bf80025d9f.png)
