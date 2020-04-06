const inhabitantsCityName = {
    Paris: "Parisiens", 
    Blois: "Blésois", 
    Marseille: "Marseillais", 
    Lille: "Lillois"
}

const numberInhabitants = [
    ["Lille", 232741],
    ["Paris", 2148000],
    ["Blois", 45710], 
    ["Marseille", 861635]
]


const orderCities = (inhabitantsCityName, numberInhabitants) => {
    // 1. order an array by numeric value of elements
    const sortByNumericValue = (a, b) => {return a - b}

    // 2. order the population by numeric order DESC
    const orderedPopulations = 
        numberInhabitants.map(x => x[1])
                        .sort(sortByNumericValue)
                        .reverse();
    
    // 3. get city name from population
    const getCityName = (population) => {
        return numberInhabitants.find(x => x[1] === population)[0];
    }

    // 4. get a list of city names from ordered population
    const orderedCityNames = orderedPopulations.map(x => getCityName(x));
    
    // 5. get inhabitant names from city names
    return orderedCityNames.map(x => inhabitantsCityName[x]);
}

console.log(orderCities(inhabitantsCityName, numberInhabitants));

// takeaways
// 1. numerical sorting is NOT built-in
// 2. js function needs explicit `return`s
// 3. really DO think of using other array methods than forEach
//    for it DOES have a scope inconvenience