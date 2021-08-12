# Chess Opening Match Starter

## Project Description

For <b>intermediate and advanced Chess players</b>, a large part of improving in the game of Chess is understanding and practicing games at specific [opening positions](https://en.wikipedia.org/wiki/Chess_opening). 

Currently, practicing specific niche openings is a hassle; (1) your opponent often has to make a specific set of moves to begin with to "enter" the opening you want to practice and (2) solo analysis requires careful progammatic-like inputting of [chess notation](https://en.wikipedia.org/wiki/Algebraic_notation_(chess))). 

Our project would primarily <b>allow players to retrieve common opening positions</b> for players to practice, as the application's database would store <b>100+ notation sets of the most common opening positions</b> and players can then retrieve the notations they want to <b>input the notation into other Chess websites for analysis</b>

## Project Task Requirements

### Minimal Requirements

✔ 1. As a user, I should be able to <b>retrieve starting position notations</b> from common openings that I will be able to plug into another chess applications (Lichess, Chess.com, etc.) to setup a board <br>
✔ 2. As a user, I should be able to retrieve one of the more common opening positions by <b>clicking on a position card</b> from the starting page <br>
✔ 3. As a user, I should be able to retrieve the notation for a specific starting position I want using a <b>search bar</b> <br>

### Standard Requirements

✔ 1. As a user, I should be able to <b>create and refer back</b> to my own custom openings that I've created. <br>
✔ 2. As a user, I should be able to <b>favourite openings</b> and be able to refer to them at a later point. <br>
✔ 4. As a user, I should be able to <b>quickly redirect myself</b> to another chess application. <br>

### Stretch Requirements

❌ 1. As a user, I should be able to <b>make my own account</b> with a history of the past games I've played <br>
❌ 2. As a user, I should be able to <b>play games against my friends</b> <br>
❌ 3. As a user, I should be able to <b>play games by setting my own custom positions</b> <br>

### Technology

<b>Unit 1 - HTML/CSS/Javascript</b><br>
CSS is combined with React to stylize our web application and establish the colour theme as well. By using CSS and MaterialUI library, we ensured we had responsive web design.

<b>Unit 2 - React</b><br>
The frontend was created using the React library and separated into several components. MaterialUI was also used to aid in creating components and integrating CSS to further shape elements in our web app. Each chess notation is represented as a card component and can be clicked on for a pop up to view additional information, and other pages accessed by a navigation bar were a separate component as well.

<b>Unit 3 - Node and Express</b><br>
The backend server was created using Express. Several endpoints were written to make API calls to get information of chess notations from the database and to implement user authentication, and users can also query a search filter to find a specific notation. Favourite chess notations and custom notations were also able to be added and deleted using the server endpoints.

<b>Unit 4 - NoSQL with MongoDB</b><br>
Chess opening notation data was scraped from the web and stored in a collection in MongoDB where our app was able to access that data to get and store additional notations. User information is also stored in MongoDB in a separate collection and each user has an array referencing the notation collection to store user favourites. Custom notations are another collection being stored, and references the user id that owns that custom notation.

<b>Unit 5 - Release Engineering</b><br>
Our app is deployed on Heroku with additional CI/CD testing added through Github actions. Heroku is setup so that a review deployment is automatically launched when a new PR is created on Github, and a staging app is deployed when the main branch is updated.

### ‘Above and Beyond’ functionality
- For an extended UI/UX design functionality, we have global theme variables so that we are able to change the colours of our web app easily rather than having to change each individual colour within our CSS code.
- Another piece that went above and beyond our stated requirements was how we generate customized images for the different sets of notations
- Images for each chess opening are stored in an AWS S3 photo bucket to optimize loading times when opening data is retrieved from the backend - rather than sending an image buffer, the backend sends a link to the photo bucket which drastically reduces load.

### Next Steps
For our next steps, we would like to create our own gameplay area where users are able to start a chess match with their selected opening position and verse against a computer or another user, or play in a sandbox by themselves. In addition, we would also like to implement a page or popup with more detailed information on the most common notations explaining its uses in chess and the pros and cons of using the opening.

### List of contributions
<b>Joy: Notation Card + Favorites</b>

Joy worked on the frontend by building the detailed opening notation popup, allowing users to look at an opening more closely and be able to copy the PGN notation of that opening position. Joy also worked on the backend in implementing the favourites feature, creating the favourites API endpoint and referencing the position data in the individual user to store their favourited opening positions. Other contributions were the initial prototyping of the frontend design and the creation of the logo.

<b>Alvin: Auth + GitHub Actions</b>

Alvin worked primarily across both front and back end building react components such as the footer and contributed to state management using Redux as well as UI development for the three main pages in our app. Other notable contributions were integrating social login for user authentication via Facebook and Google and persisting metadata into our MongoDB database for new and returning users. Alvin also contributed to infrastructure set up with Github actions regarding CI/CD for branch builds and pull requests

<b>Austin: DB + Custom Positions</b>

Austin worked both the backend and frontend of the application. Austin's main contribution includes cleansing and populating the web-scraped data into the MongoDB databases, generating and uploading images to the AWS S3 bucket and creating the REST API endpoints used in the Train and Custom Openings pages, and lastly working on the front end components used in the Custom Openings page. 

<b>Miguel: Data Scraping and Theming Dark Mode</b>

Although Miguel contributed across various pieces of the application, Miguel’s main contributions were performing the data scraping to retrieve chess notations and handling Heroku deployment. Miguel also handled setting up the color theming for the application to be easily changeable.

