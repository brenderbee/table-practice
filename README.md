# Table Pagination Component

#### _Table component with pagination created in React._

#### By: _**Brenda Franco**_

## Description

_This webpage application is designed to be a table component. Table takes a JSON blob of the form: {"columns": ["col1", "col2", "col3",...], "data": [["value1", "value2", "value3"], ...]}, displays columns and rows in a paginated table, allows the user to select max rows to display, and sorts by column._

_View demo: https://brenderbee.github.io/table-practice/ _

_This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). All dependencies required are included in this project._

Screenshot: <br>
<img src="https://raw.githubusercontent.com/brenderbee/table-practice/master/src/assets/img/screenShot.png" width="800" />

Layout: <br>
<img src="https://raw.githubusercontent.com/brenderbee/table-practice/master/src/assets/img/planning/layout.JPG" width="800" />

Planned Components: <br>
<img src="https://raw.githubusercontent.com/brenderbee/table-practice/master/src/assets/img/planning/components1.JPG" width="800" />

<br>
<img src="https://raw.githubusercontent.com/brenderbee/table-practice/master/src/assets/img/planning/components2.JPG" width="800" />

## Setup/Installation Requirement

* Clone repository on your local computer.
* If you already have Node and Homebrew installed, then skip to "Install Dependencies."

  #### Node: Windows / Linux Installation Instructions
  * To install Node on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
    * $ brew install node
  * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
    * $ node -v
    * $ npm -v

  #### Homebrew Installation
  * If you do not have Homebrew installed yet, you may install it by copying and pasting this command:
    * $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  * Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
    * $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

  #### Install dependencies
  * Enter the following code in the command line to install all dependencies:
    * $ npm install

  #### Working with the project in Node:
  * To build and bundle the project in webpack run the following:
    * $ npm run build
  * To run the local test server:
    * $ npm run start
  * To run test:
    * $ npm test


## Known Bugs
* When a user is on the last page of entries and executes a sort, the display should change back to a view of the first page with the sort applied. This does not happen and results in an odd user experience.

## Contact
_Do not contact anyone with questions or comments regarding this project._

## Technologies Used
_Front-end dependencies_

_Developer Dependencies_


### User Stories
* As a user, I want to see a table with all items displayed as rows.
* As a user, I want to be able to sort by each column.
* As a user, I want to be able to change how many items I see per page.
* As a user,  I want to be able to navigate between each page of results.
* As a user, I want to be able to skip to the beginning or end of the list of items.

### Notes
* Ran into issues with the async nature of setState. Remember to use async / await or promises.
* Spent a lot of time trying to build custom sort method. Use industry standard lodash instead.



### License

Copyright (c) 2018 ****_Brenda Franco_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
