# WordOfTheDayBackend

## Purpose

This Azure based Web Application will scrape Twitter daily searching for the most common word. This word will then be sent out in a tweet every day at 8:00am Central Time. Common words like "and", "but", and "or" will be filtered out such that the most common word is interesting. This is an improvement on a project I made in high school, where I ran a C++ program manually to find the most common word in 500 randomly selected tweets. This time I will be using a more advanced toolset to make the process automatic and more efficient. A website will also be set up to keep track of the most common word found on each day.

## Methodology 

The Twitter API v2 will be used in in an timer Azure Function to automatically read in a fixed number of random tweets. These tweets will then be parsed and the individual words will be counted in a map. The same API will then be used to tweet out which word has been used the most in the past 24 hours. A website will be hosted on GitHub Pages for displaying the most common word found going back to the launch of this web application.

The link to this website is https://claytonkristiansen.github.io/WordOfTheDay/

The frontend on GitHub Pages will communicate with the backend to access records and other information regarding the word of the day.

## Languages and Tools

Node.js will be the primary backend language, and the backend will be structured as an Express Application. 
