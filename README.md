# kirjasto-harjoittelu-2.0
A newer version of kirjasto-harjoittelu repo, which went terribly wrong due to previous version being confusing to work with. <br>
**API USED:** https://api.kirjastot.fi/v4/library

## Description
This is a small project, which uses the aforementioned API to give information about every Finnish library. Such info includes:

1. Name
2. Picture of the library
3. Description
4. City and street via Google Maps (the ones below are included in it)
5. Open- and closing time
6. Contact information
7. Link to the library's site

As mentioned before, this will not be using any framework. I will rather use the commoner web application. It is so, because the last version got very messy with worthless code, API not working correctly and due to the fact that I separated the search from the home page, which made it harder to add the function (and not working correctly).

## How It Works (In Web)
You can simply have the search bar empty OR type whatever you want into the bar, max 40 characters. Once the loading is done, you can look at the libraries that have been put below the search bar.

## How It Works (In Code)
By clicking the ```<button>```, it activates an async function that fetches the library via ``` await fetch() ```, makes the elements for a ```<div>``` template and then appends to the library ```<div>``` in the html file.

Once done, it will organize them in a way that is the most similar to what you have put into the search bar. If there's nothing put, then it will put them how it is in the API.
