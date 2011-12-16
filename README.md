# INSTALL

# DATABASE

  - `$ node ./models/drop.js` to drop all tables  
  - `$ node ./models/populate.js` to import data from dump (`./models/data.js`)  
  - `$ node ./models/stats.js` to compute stats  
  - `$ node ./models/count.js` to count tables entries  

# ROUTES

## STATES

  - `./departements.html` list all states _(with item count)_
  - `./departement/:location.html` list items for a state _(ex: ./departement/AIN.html)_
  - `./departement/:location,:code.html` list items for a state _(ex: ./departement/AIN,01.html)_
  - `./departement/:location,:code,:page.html` list items for a state with paging _(ex: ./departement/AIN,01,2.html)_

## CITIES

  - `./villes.html` list all cities _(with item count)_
  - `./ville/:location.html` list items for a city _(ex: ./departement/PARIS.html)_
  - `./ville/:location,:code.html` list items for a city _(ex: ./departement/PARIS,75020.html)_
  - `./ville/:location,:code,:page.html` list items for a city with paging _(ex: ./departement/PARIS,75020,2.html)_
