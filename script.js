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


const SEASONS = ["Spring", "Summer", "Fall", "Winter"];
const SUNLIGHTS = ["Full Sun", "Partial Shade", "Shade"];

let sortedAZ = false;
let foundPlant = null;



function countBy(property) {
    return plants.reduce((counts, p) => {
        counts[p[property]] = (counts[p[property]] || 0) + 1;
        return counts;
    }, {});
}

function plantStats() {
    const totalHeight = plants.reduce((total, p) => total + p.height, 0);
    const averageHeight = (totalHeight / plants.length).toFixed(2);

    const tallest = plants.reduce((max, p) => (p.height > max.height ? p : max));
    const shortest = plants.reduce((min, p) => (p.height < min.height ? p : min));

    document.getElementById("total-plants").textContent = plants.length;
    document.getElementById("average-height").textContent = averageHeight + " m";
    document.getElementById("tallest-plant").textContent = tallest.name;
    document.getElementById("tallest-detail").textContent = tallest.height + " m";
    document.getElementById("shortest-plant").textContent = shortest.name;
    document.getElementById("shortest-detail").textContent = shortest.height + " m";

    showCounts("season-counts", countBy("bloomSeason"), SEASONS);
    showCounts("sunlight-counts", countBy("sunlight"), SUNLIGHTS);
}

function showCounts(elementId, counts, order) {
    document.getElementById(elementId).innerHTML = order.map((label) => {
        const count = counts[label] || 0;
        const percent = (count / plants.length) * 100;
        return `
            <li class="bar-row">
                <span class="bar-label">${label}</span>
                <span class="bar-track"><span class="bar-fill" style="width:${percent}%"></span></span>
                <span class="bar-count">${count}</span>
            </li>`;
    }).join("");
}



function display(plantsArray) {
    const list = document.getElementById("plant-list");
    document.getElementById("result-count").textContent =
        "Showing " + plantsArray.length + " of " + plants.length + " plants";

    if (plantsArray.length === 0) {
        list.innerHTML = "<p class='empty'>No plants match.</p>";
        return;
    }
    list.innerHTML = plantsArray.map((plant) => `
        <div class="plant-card">
            <h3>${plant.name}</h3>
            <p>Type: ${plant.type}</p>
            <p>Color: ${plant.color}</p>
            <p>Height: ${plant.height} meters</p>
            <p>Sunlight: ${plant.sunlight}</p>
            <p>Blooms: ${plant.bloomSeason}</p>
        </div>
    `).join("");
}

function heightMatches(plant, range) {
    if (range === "short") return plant.height < 0.5;
    if (range === "medium") return plant.height >= 0.5 && plant.height <= 1;
    if (range === "tall") return plant.height > 1;
    return true;
}

function updatePlants() {
    if (foundPlant) {
        display([foundPlant]);
        return;
    }

    const sunlight = document.getElementById("sunlight-filter").value;
    const season = document.getElementById("season-filter").value;
    const height = document.getElementById("height-filter").value;

    let result = plants
        .filter((p) => sunlight === "all" || p.sunlight === sunlight)
        .filter((p) => season === "all" || p.bloomSeason === season)
        .filter((p) => heightMatches(p, height));

    if (sortedAZ) {
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    display(result);
}

function findPlant() {
    const name = document.getElementById("find-input").value.trim().toLowerCase();
    if (!name) return;

    const found = plants.find((p) => p.name.toLowerCase() === name);
    if (found) {
        foundPlant = found;
        display([found]);
    } else {
        foundPlant = null;
        document.getElementById("plant-list").innerHTML = "";
        document.getElementById("result-count").textContent = "Plant not found. Check the spelling and try again.";
    }
}



function fillSelect(selectId, values) {
    document.getElementById(selectId).innerHTML +=
        values.map((v) => `<option value="${v}">${v}</option>`).join("");
}

function setUp() {
    fillSelect("sunlight-filter", SUNLIGHTS);
    fillSelect("season-filter", SEASONS);

    ["sunlight-filter", "season-filter", "height-filter"].forEach((id) => {
        document.getElementById(id).addEventListener("change", () => {
            foundPlant = null;
            updatePlants();
        });
    });

    document.getElementById("sort-btn").addEventListener("click", () => {
        sortedAZ = !sortedAZ;
        document.getElementById("sort-btn").textContent = sortedAZ ? "Sorted A-Z (click to undo)" : "Sort A-Z";
        foundPlant = null;
        updatePlants();
    });

    document.getElementById("find-btn").addEventListener("click", findPlant);
    document.getElementById("find-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") findPlant();
    });

    document.getElementById("reset-btn").addEventListener("click", () => {
        ["sunlight-filter", "season-filter", "height-filter"].forEach((id) => {
            document.getElementById(id).value = "all";
        });
        document.getElementById("find-input").value = "";
        document.getElementById("sort-btn").textContent = "Sort A-Z";
        sortedAZ = false;
        foundPlant = null;
        updatePlants();
    });

    plantStats();
    updatePlants();
}

setUp();