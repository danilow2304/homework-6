const plants = [
    {
        name: "Rose",
        type: "Flower",
        color: "Red",
        height: 1.2,
        sunlight: "Full Sun",
        bloomSeason: "Summer"
    },
    {
        name: "Tulip",
        type: "Flower",
        color: "Yellow",
        height: 0.5,
        sunlight: "Full Sun",
        bloomSeason: "Spring"
    },
    {
        name: "Sunflower",
        type: "Flower",
        color: "Yellow",
        height: 3,
        sunlight: "Full Sun",
        bloomSeason: "Summer"
    },
    {
        name: "Hosta",
        type: "Foliage",
        color: "Green",
        height: 0.6,
        sunlight: "Shade",
        bloomSeason: "Summer"
    },
    {
        name: "Hydrangea",
        type: "Shrub",
        color: "Blue",
        height: 1.5,
        sunlight: "Partial Shade",
        bloomSeason: "Summer"
    },
    {
        name: "Aster",
        type: "Flower",
        color: "Purple",
        height: 0.9,
        sunlight: "Full Sun",
        bloomSeason: "Fall"
    },
    {
        name: "Pansy",
        type: "Flower",
        color: "Purple",
        height: 0.2,
        sunlight: "Partial Shade",
        bloomSeason: "Winter"
    },
    {
        name: "Lavender",
        type: "Shrub",
        color: "Purple",
        height: 0.6,
        sunlight: "Full Sun",
        bloomSeason: "Summer"
    },
    {
        name: "Daffodil",
        type: "Flower",
        color: "Yellow",
        height: 0.4,
        sunlight: "Full Sun",
        bloomSeason: "Spring"
    },
    {
        name: "Peony",
        type: "Flower",
        color: "Pink",
        height: 0.9,
        sunlight: "Full Sun",
        bloomSeason: "Spring"
    },
    {
        name: "Coneflower",
        type: "Flower",
        color: "Purple",
        height: 1,
        sunlight: "Full Sun",
        bloomSeason: "Summer"
    },
    {
        name: "Black-Eyed Susan",
        type: "Flower",
        color: "Yellow",
        height: 0.9,
        sunlight: "Full Sun",
        bloomSeason: "Summer"
    },
    {
        name: "Columbine",
        type: "Flower",
        color: "Red",
        height: 0.6,
        sunlight: "Partial Shade",
        bloomSeason: "Spring"
    },
    {
        name: "Bleeding Heart",
        type: "Flower",
        color: "Pink",
        height: 0.75,
        sunlight: "Partial Shade",
        bloomSeason: "Spring"
    },
    {
        name: "Astilbe",
        type: "Flower",
        color: "Pink",
        height: 0.8,
        sunlight: "Partial Shade",
        bloomSeason: "Summer"
    },
    {
        name: "Foxglove",
        type: "Flower",
        color: "Purple",
        height: 1.5,
        sunlight: "Partial Shade",
        bloomSeason: "Summer"
    },
    {
        name: "Lily of the Valley",
        type: "Flower",
        color: "White",
        height: 0.2,
        sunlight: "Shade",
        bloomSeason: "Spring"
    },
    {
        name: "Foamflower",
        type: "Flower",
        color: "White",
        height: 0.3,
        sunlight: "Shade",
        bloomSeason: "Spring"
    },
    {
        name: "Hellebore",
        type: "Flower",
        color: "White",
        height: 0.45,
        sunlight: "Partial Shade",
        bloomSeason: "Winter"
    },
    {
        name: "Chrysanthemum",
        type: "Flower",
        color: "Orange",
        height: 0.6,
        sunlight: "Full Sun",
        bloomSeason: "Fall"
    }
];


// Show a list of plants on the page
function display(plantsArray) {
    const plantList = document.getElementById("plantList");

    if (plantsArray.length === 0) {
        plantList.innerHTML = "<p>No plants match.</p>";
        return;
    }

    plantList.innerHTML = plantsArray.map((plant) => `
        <div class="plant">
            <h3>${plant.name}</h3>
            <p>Type: ${plant.type}</p>
            <p>Color: ${plant.color}</p>
            <p>Height: ${plant.height} meters</p>
            <p>Sunlight: ${plant.sunlight}</p>
            <p>Blooms: ${plant.bloomSeason}</p>
        </div>
    `).join("");
}

function showAllPlants() {
    display(plants);
}

function sortAlphabetically() {
    const sorted = [...plants].sort((a, b) => a.name.localeCompare(b.name));
    display(sorted);
}

function filterBySunlight() {
    const choice = document.getElementById("sunlight").value;
    display(plants.filter((p) => p.sunlight === choice));
}

function filterByBloomSeason() {
    const choice = document.getElementById("season").value;
    display(plants.filter((p) => p.bloomSeason === choice));
}

function filterByHeight() {
    const choice = document.getElementById("height").value;

    if (choice === "short") {
        display(plants.filter((p) => p.height < 0.5));
    } else if (choice === "medium") {
        display(plants.filter((p) => p.height >= 0.5 && p.height <= 1));
    } else if (choice === "tall") {
        display(plants.filter((p) => p.height > 1));
    }
}

// Calculate and show the statistics
function plantStats() {
    const totalHeight = plants.reduce((total, p) => total + p.height, 0);
    const averageHeight = (totalHeight / plants.length).toFixed(2);

    const byHeight = [...plants].sort((a, b) => b.height - a.height);
    const tallest = byHeight[0];
    const shortest = byHeight[byHeight.length - 1];

    document.getElementById("stats").innerHTML = `
        <p>Number of plants: ${plants.length}</p>
        <p>Average height: ${averageHeight} meters</p>
        <p>Tallest plant: ${tallest.name} (${tallest.height} meters)</p>
        <p>Shortest plant: ${shortest.name} (${shortest.height} meters)</p>

        <h3>Plants by Bloom Season</h3>
        <p>Spring: ${plants.filter((p) => p.bloomSeason === "Spring").length}</p>
        <p>Summer: ${plants.filter((p) => p.bloomSeason === "Summer").length}</p>
        <p>Fall: ${plants.filter((p) => p.bloomSeason === "Fall").length}</p>
        <p>Winter: ${plants.filter((p) => p.bloomSeason === "Winter").length}</p>

        <h3>Plants by Sunlight</h3>
        <p>Full Sun: ${plants.filter((p) => p.sunlight === "Full Sun").length}</p>
        <p>Partial Shade: ${plants.filter((p) => p.sunlight === "Partial Shade").length}</p>
        <p>Shade: ${plants.filter((p) => p.sunlight === "Shade").length}</p>
    `;
}

showAllPlants();
plantStats();