let flavors = prompt("Please enter a list of comma-separated froyo flavors.");
flavors = flavors.split(",");

const countFlavors = (arr) => {
    const count = {};


for (let flavor of arr) {
    flavor = flavor.trim();

    if (count.flavor) {
        count.flavor += 1
    } else {
        count.flavor = 1
    }
    }
    return count;
    
}

console.table(countFlavors(flavors));