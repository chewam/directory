# INSTALL

# DATABASE

  - `$ node ./models/drop.js` to drop all tables  
  - `$ node ./models/populate.js` to import data from dump (`./models/data.js`)  
  - `$ node ./models/stats.js` to compute stats  
  - `$ node ./models/count.js` to count tables entries  

# ROUTES
  - `./departements.html` list all states (with item count)
  - `./departement/:location.html` list items for a state (ex: ./departement/AIN.html)
  - `./departement/:location,:code.html` list items for a state (ex: ./departement/AIN,01.html)
  - `./departement/:location,:code,:page.html` list items for a state with paging (ex: ./departement/AIN,01,2.html)

  - `./villes.html` list all cities (with item count)
  - `./ville/:location.html` list items for a city (ex: ./departement/PARIS.html)
  - `./ville/:location,:code.html` list items for a city (ex: ./departement/PARIS,75020.html)
  - `./ville/:location,:code,:page.html` list items for a city with paging (ex: ./departement/PARIS,75020,2.html)
