# Application: **React Tap Room**

#### By Noah Horwitz

###### _First published 2020-02-14_

## Description:
This project was made as part of a coding project for Noah Horwitz, a student at _[Epicodus](http://www.epicodus.com)_, a vocational school for technology careers based in Portland, OR. The project is designed to create a tap room app in React where a bar or kombucha store can track their kegs.

<!-- The fully deployed project is hosted on GH-Pages [HERE](https://nhhor.github.io/react-tap-room). -->

## Setup/Installation instructions:
* Click the `Clone or download` button and copy the link provided.
* Open your terminal application (assuming GIT Scripts AND node.js (with NPM) have been installed on your system) and type `git clone (link)`.
* In the terminal using the `cd`... command, navigate to the newly created repository and run `npm install`.
* Then in the terminal, run `npm run start`.
* The app should then automatically open in a browser window.


## Technologies Used:
> `JavaScript`
> `React`
> `CSS`
> `HTML`
> `Node Package Manager`
> `WebPack`

## Known Bugs:
* None

## User Stories:
* As a patron, I want to see a list/**menu of all available kegs**. For each keg, I need to see its `name`, `type`, `brand`, `alcoholContent`, and , `price` (or perhaps something like flavor for a kombucha store).
* As an employee, I want to fill out a **form when I tap a new keg to add it to the list**. (Don't worry about authenticating employee user accounts yet.)
* As an employee, I want the option to **edit a keg's properties after entering them** just in case I make a mistake.
* As a patron and/or employee, I want to see **how many pints are left in a keg**. (Hint: A full keg has roughly 124 pints).
* As an employee, I want to be able to **click a button next to a keg whenever I sell a pint** of it. This should decrease the number of pints left by 1.
* As an employee, I want to be able to **see kegs with less than 10** pints left so I can be ready to change them.
* As a patron, I want to have **kegs prices to be color-coded** for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
* As a patron, I want to use the **alcohol content property to display stronger beers differently** than weaker beers.

## References:
* Component & Route Structure designed at [Draw.io](https://www.draw.io/).

## Support and contact details
Contact [example@sample.com](mailto:example@sample.com)

## License
_This This repository is copyright (C) 2019 by Noah Horwitz and licensed under the GNU General Public License v3.0 [gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)_.
