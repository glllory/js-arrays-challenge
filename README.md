## Activity

- Create a train system with 3 subway lines.
  - Red Line 
  - Green Line 
  - Orange Line 

Each subway line has multiple stops.
  - Red  
    - South Station
    - Park Street
    - Kendall
    - Central
    - Harvard
    - Porter
    - Davis
    - Alewife
  - Green  
    - Government Center
    - Park Street
    - Boylston
    - Arlington
    - Copley
    - Hynes
    - Kenmore
  - Orange  
    - North Station
    - Haymarket
    - Park Street
    - State
    - Downtown Crossing
    - Chinatown
    - Back Bay
    - Forest Hills

Notice that all 3 subway lines intersect at *Park Street*, but there are no other intersection points. 

Your goal is to write a function named `stopsBetweenStations` that will accept 
- Start Line
- Start Station
- End Line 
- End Station 

And the function will return how many stops the rider must travel.

Examples:
```js
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6
```

Hint:  You should draw the subway system first so you can visualize how many stops each subway line has and how they intersect.
