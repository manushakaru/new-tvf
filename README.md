<h1 align="center">Taxi Visualizer | <a href="https://manushakaru.github.io/">Demo</a></h1>


## Installation
---
### Npm
```
npm install taxi_visualizer
```
index.js
```js
var taxiVisualizer = require('taxi_viusalizer');
taxiVisualizer.initialize();

```
### Or 

1. Clone [this](https://github.com/manushakaru/new-tvf/) project
```
git clone https://github.com/manushakaru/new-tvf/
```
2. Run npm install to install necessary dependencies
```
npm install
```
3. Run npm start or node server.js
```
npm start
```
or
```
node server.js
```
## Usage 
---

> Below structure is required in uploading data files 

##### Input file structure 

[Dummy data files](https://github.com/manushakaru/new-tvf/tree/master/public/data)

| Latitude         | Longitude     | `#` of passengers  | state(0-idle,1-pickup,2-dropoff)|
| ------------- |:-------------:| :-----:|:-----:|
| 40.7378     | -73.9882 | 0 | 0 |
| 40.7383      | -73.9877      |   1 | 1 |
| 40.7402 |73.9863      |    1 | 0 |

## License
---
MIT License
