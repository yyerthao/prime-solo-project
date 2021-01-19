----------------------------------------------------------------------------------------------------
---------------------------------------- ### Monday 1-11-2021 --------------------------------------

Initial SET UP:
    - [x] create DB called prime_app
    - [x] create table in DB called "user"
    - [x] create table in DB called "dream"
    - [x] create table in DB called "genre"
    - [x] create file at root called .env
    - [x] paste SERVER_SESSION_SECRET=superDuperSecret into .env file
    - [x] change superDuperSecret to a long random text to ensure a tad bit security of app
    - [x] check to ensure .env is inside .gitignore file
    - [x] check to ensure DB table "user" is up and running after running server and adding in a user

Landing View:
    - [x] reformat landing page of application to only include buttons
        - [x] Existing User? 
            - [x] Login Button 
        - [x] New User?
            - [x] Register Button
    - [x] create new view for landing page for registration to include registration form
    - [x] center text and removed few headers

-----------------------------------------------------------------------------------------------------
---------------------------------------- ### Tuesday 1-12-2021 --------------------------------------
Home View: (inside this repo, it is located in file UserPage.js)
    - [x] Nav Bar 
    - [x] Add Dream Link
    - [x] View Dreams Link
    - [x] Welcome Message

Add Dream:
    - [x] Nav Links up top: Main, Add Dream, View Dreams
    - [x] Header: Add Dreams
    - [x] Input forms for: Title, Date, Image Url, Details, 
    - [x] Genre dropdown menu
    - [x] Button: Submit
    - [x] Button: Cancel
    - [x] GET ROUTE to DB
    - [x] POST ROUTE to DB

View Dreams View:
    - [x] Nav Links up top: Main, Add Dream, View Dreams
    - [x] Header: View Dreams
    - [P] Click handler on photo of 
    - [x] GET ROUTE TO DB to junction table of dream_genre  

Styling:
 - [x] Npm install @material-ui/core

----------------------------------------------------------------------------------------------------
---------------------------------------- ### Wednesday 1-13-2021 -----------------------------------

- [x] DB set up, for the most part
- [x] GET ROUTE to retrieve all dreams from DB

----------------------------------------------------------------------------------------------------
---------------------------------------- ### Thursday 1-14-2021 ------------------------------------

- [x] POST route working
- [x] GET routes working, for the most part
- [x] Basic styling

----------------------------------------------------------------------------------------------------
---------------------------------------- ### Friday 1-15-2021 --------------------------------------
    - [x] DB final set up for dream_genre junction table
    - [x] GET dream by ID for the Dream Item View 

----------------------------------------------------------------------------------------------------
-------------------------------------------- ### WEEKEND -------------------------------------------
    - [x] Update GET query in dream.router.js to retrieve correct genre to display on DOM
    - [x] npm install sweetalert2 
    - [x] GET dream by ID for the Dream Item View 
    - [x] MATERIAL-UI cards
    - [x] Sweet Alerts for cancel confirmation. (Downloaded however must create DELETE route first)

----------------------------------------------------------------------------------------------------
----------------------------------------- ### NPM INSTALLS ------------------------------------------
- [x] npm install $@material-ui/core
- [x] npm install @material-ui/icons
- [x] npm install sweetalert2
- [x] npm install ra-input-rich-text --save-dev




----------------------------------------------------------------------------------------------------
---------------------------------------- ### Tuesday 1-19-2021 ------------------------------------
- [] DELETE ROUTE 
- [] PUT ROUTE KIND OF WORKING




<!-- SUPER IMPORT TO READ ON WEDNESDAY -->
COME BACK TO READ ME FOR NEXT DAY ASSIGNMENT!
- [] PUT ROUTE, almost done, need to update junction table so genre ID changes
- [] DELETE ROUTE, read the document Mary sent you!
