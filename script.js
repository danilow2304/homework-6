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
    },
    {
        name: "Sedum",
        type: "Succulent",
        color: "Pink",
        height: 0.45,
        sunlight: "Full Sun",
        bloomSeason: "Fall"
    },
    {
        name: "Camellia",
        type: "Shrub",
        color: "Pink",
        height: 2.5,
        sunlight: "Partial Shade",
        bloomSeason: "Winter"
    },
    {
        name: "Witch Hazel",
        type: "Shrub",
        color: "Yellow",
        height: 3.5,
        sunlight: "Partial Shade",
        bloomSeason: "Winter"
    },
    {
        name: "Snowdrop",
        type: "Flower",
        color: "White",
        height: 0.15,
        sunlight: "Shade",
        bloomSeason: "Winter"
    }
];

function display(plantsArray) {
    const plantList = document.getElementById("plantList");
    if (plantsArray.length === 0) {
        plantList.innerHTML = "<p>No plants match.</p>";
        return;
    }
    plantList.innerHTML = plantsArray.map((plant) => `
        <div class="plant">
            <h2>${plant.name}</h2>
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
    const input = prompt("Enter sunlight needs (Full Sun, Partial Shade, Shade):");
    if (!input) return;
    const search = input.trim().toLowerCase();
    display(plants.filter((p) => p.sunlight.toLowerCase() === search));
}

function filterByBloomSeason() {
    const input = prompt("Enter a bloom season (Spring, Summer, Fall, Winter):");
    if (!input) return;
    const search = input.trim().toLowerCase();
    display(plants.filter((p) => p.bloomSeason.toLowerCase() === search));
}

function filterByHeight() {
    const input = prompt("Show plants at least this tall (in meters):");
    if (!input) return;
    const minHeight = parseFloat(input);
    if (isNaN(minHeight)) {
        alert("Please enter a number.");
        return;
    }
    display(plants.filter((p) => p.height >= minHeight));
}

function findPlant() {
    const input = prompt("Enter the name of the plant to find:");
    if (!input) return;
    const found = plants.find((p) => p.name.toLowerCase() === input.trim().toLowerCase());
    if (found) {
        display([found]);
    } else {
        alert("Plant not found.");
    }
}

function countBy(property) {
    return plants.reduce((counts, p) => {
        counts[p[property]] = (counts[p[property]] || 0) + 1;
        return counts;
    }, {});
}

function countList(counts, order) {
    return order.map((label) => `<li>${label}: <strong>${counts[label] || 0}</strong></li>`).join("");
}

function plantStats() {
    const totalHeight = plants.reduce((total, p) => total + p.height, 0);
    const averageHeight = (totalHeight / plants.length).toFixed(2);

    const tallest = plants.reduce((max, p) => (p.height > max.height ? p : max));
    const shortest = plants.reduce((min, p) => (p.height < min.height ? p : min));

    const seasonCounts = countBy("bloomSeason");
    const sunlightCounts = countBy("sunlight");

    document.getElementById("stats").innerHTML = `
        <h2>Plant Statistics</h2>

        <div class="stat-boxes">
            <div class="stat-box"><span>Number of Plants</span><strong>${plants.length}</strong></div>
            <div class="stat-box"><span>Average Height</span><strong>${averageHeight} m</strong></div>
            <div class="stat-box"><span>Tallest Plant</span><strong>${tallest.name}</strong><span>${tallest.height} m</span></div>
            <div class="stat-box"><span>Shortest Plant</span><strong>${shortest.name}</strong><span>${shortest.height} m</span></div>
        </div>

        <div class="stat-lists">
            <div>
                <h3>Plants by Bloom Season</h3>
                <ul>${countList(seasonCounts, ["Spring", "Summer", "Fall", "Winter"])}</ul>
            </div>
            <div>
                <h3>Plants by Sunlight</h3>
                <ul>${countList(sunlightCounts, ["Full Sun", "Partial Shade", "Shade"])}</ul>
            </div>
        </div>
    `;
}

showAllPlants();
plantStats();