# APIJokes
Dad Joke Generator 
Using an  API, AJAX, and axios I created a silly page to request and render a random dad joke referenced from a free API
once the button is clicked the page makes a request using the dad Jokes API then returns The data in JSON format.
by de-structuring the object returned from the fulfilled promise I can then append the rendered joke to an unordered list. 
To account for any errors I used a try and catch to display a graceful error message.
