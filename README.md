# kirjasto-harjoittelu-2.0
A newer version of kirjasto-harjoittelu repo, which went terribly wrong due to previous version being confusing to work with. <br>
**API USED:** https://api.kirjastot.fi/v4/library

## Description
This is a small project, which uses the aforementioned API to give information about every Finnish library. Such info includes:

1. Name
2. Picture of the library
3. Description
4. Zipcode
5. City and street via Google Maps
6. Links related to the library

As mentioned before, this will not be using any framework. I will rather use the commoner web application. It is so, because the last version got very messy with worthless code, API not working correctly and due to the fact that I separated the search from the home page, which made it harder to add the function (and not working correctly).

## How It Works
You can simply have the search bar empty OR type whatever you want into the bar, max 40 characters. You can also change whether you want to search by city- or library name. Once the loading is done, you can look at the libraries (or cars) that have been put below.
