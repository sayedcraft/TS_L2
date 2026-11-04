const country:string[]=["Bangladesh","Palestine","Iran","Turkey"];
const population:number[]=[170000000, 5000000, 80000000, 85000000];

function printCountryInfo<T>(item:T[]):T{
    return item[0]
}

const firstCountry=printCountryInfo(country);
console.log(`The first country is: ${firstCountry}`);

const firstPopulation=printCountryInfo(population);
console.log(`The first population is: ${firstPopulation}`);