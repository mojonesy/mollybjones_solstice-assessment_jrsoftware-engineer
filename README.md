# Molly Jones - Solstice - Junior Software Engineer Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation 

1. Clone this repository
2. Run `npm i` to install project dependencies
3. Run `npm start` to start your server on `localhost:3000`
4. Click the buttons `"CLICK HERE"` on the web page to view the corresponding data

This project uses `react` and `react-dom` version 18.2.0, and `react-scripts` version 5.0.1.

---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run topten`

Runs the `findTopTenSongs.js` file to display function results in the console. Results will look something like this:
```
[{ song: 'Motion Sickness', artist: 'Phoebe Bridgers', count: 20 },...]
```

### `npm run topfriday`

Runs the `sortByFridayAfterFour.js` file to display function results in the console. Results will look similar to the above code block.

---
## Technologies Used
- React
- JavaScript
- CSS
- Node

---
## My Process and Requirements Met
> Instructions: Given a JSON export of a YouTube Music listen history, write a script to find and
display the top 10 songs played. Additionally, code one other analysis you think is useful or
interesting.

I first ran `create-react-app` to start this project, as I knew I wanted to create a simple app afterwards to display the results of my functions on a web page. I added folders for "data" to contain the JSON provided, "components", and "utils" to store my 2 main project functions.

### Required Scripts
I then completed the required assignment quoted above in the files `findTopTenSongs.js` and `sortByFridayAfterFour.js`. For both of these functions I only needed to work with the song, artist, and time values of the JSON, so I created a helper function. The top ten helper function loops through the JSON data and returns an array of objects containing some duplicates of `{song: ..., artist: ..., count: 0}` This way I could then utilize only the data I needed in the main function. The main function takes the array of objects and uses the reduce method to map out a new array of objects, without duplicates and with incremented counts. The array is sorted in descending order and cut down to the top ten.

The second function I created filters the JSON data by songs played on Fridays after 4pm. I thought this would be a fun script to see the most popular songs played by Solstice employees at the end of the work week [ Interestingly, one of them is titled "Monday" - which I see as a positive sign that working at Solstice is an enjoyable experience :) ] This `sortByFridayAfterFour` function also uses a helper function to return only `{song: ..., artist: ..., datePlayed: ...}` - "datePlayed" being the watch time turned to a date string. In the main function, the data is filter by "Fri" and then by those played after 4pm, or 16:00:00. Finally, it is reduced to return a new array of non-duplicates, sorted, and cut down to 10.

### Time & Space Complexity
Because I used the `reduce()` method in both of my functions, the minimum time complexity is linear O(n) and the maximum is quadratic O(n^2)(excluding the helper function). All elements are iterated through at least once. Also, the `.sort()` function afterwards has a complexity of O(n log n). I would like to find a more efficient way to go about this problem in the future to reduce the amount of memory and runtime necessary.

### Web App Creation
After completing the required scripts, I decided to design and implement a very simple pseudo "YouTube Music" web page. I have two card components with buttons to click that will then display the results of the required scripts in an ordered list.

One difficulty I had at first was deciding how to load the scripts upon rendering the web page. I didn't want to use "useEffect" to display the data immediately, but still wanted a way to store it in state before the user clicked the buttons. So I ended up creating promise functions for both click handlers so that I could `.then()` to set state and `.catch()` to display any potential errors.

The app can be viewed on both mobile and desktop. I really enjoyed messing around with the styles and colors while trying to emulate the YouTube app.
