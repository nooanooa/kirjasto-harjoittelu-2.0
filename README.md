# kirjasto-harjoittelu-2.0
A newer version of kirjasto-harjoittelu repo, which went terribly wrong due to previous version being confusing to work with. <br>
**API USED:** https://api.kirjastot.fi/v4/library
Project timespan: 10.3 - 18.3.2026

## Description
This is a small project, which uses the aforementioned API to give information about every Finnish library. Such info includes:

1. Name
2. Picture of the library
3. Description
4. Zipcode
5. City and street via Google Maps
6. Links related to the library

As mentioned before, this will not be using any framework. I will rather use the commoner web application. It is so, because the last version got very messy with worthless code, API not working correctly and due to the fact that I separated the search from the home page, which made it harder to add the function (and not working correctly).

## Devlog
On the first day, I started this project by creating all three files, and then adding the bare minimum to both html and js files to continue from tomorrow. It worked to a degree, which I was glad about getting done on the first day.

How the API fetch works is with this: you make a ```fetch()``` request with the API included at the beginning of this README, and then from there you can search the API itself to find the info you need. The function for displaying the libraries was done with a **for of** loop, which created every element and then gets their very own info from the API, which was then appended to the main ```div``` element.

Tomorrow, I only managed to make a check if the response from the fetch failed, and then afterwards I forgot to even continue this project for a bit, just because I was distracted by external studies and other projects. I picked this back up on the 16th, in which I managed/tried to;

- Get leaflet working, which failed and switched to Google Maps with the help of a friend
- Manged to display some information (slogan, photo, name and location)
- Added a background to the templates so I can see how large they are

The issues with these were the fact that they overlapped on eachother, which on the 17th I managed to fix with making the display "flex" and wrapping the flex aswell. Some other notable things include;

- Making the site look better
- Being able to search libraries by city- or library name with a button
- Making the welcome text show you how many libraries were found from the prompt

On the last day, I managed to do few more tweaks, which included

-Updating the template for the libraries to look better
-Adding a background to the site, which also moves up
-Added links with the inclusion of **&with=links** to the fetch request
-Fixed an issue where it couldn't show any libraries if coordinates are null in the API
-COMMENTS, WHICH I TOTALLY FORGOT ABOUT (cometnts)

Overall, I really like how it turned out. It looks clean, and the code for it looks clean aswell... atleast that's what I think.
I could've done better by including things like contact information and open-closing time, but figuring out how to do it would've been a roadblock.
Even then, this is a really nice way to challlenge myself on making applications... even if I made a bit too many queries.
