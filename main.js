const api_url = "https://api.diablo.run/snapshots/users/";

let channelID = "Indrek";
const itemSlots = [
  "head",
  "amulet",
  "body_armor",
  "primary_left",
  "primary_right",
  "ring_left",
  "ring_right",
  "belt",
  "boots",
  "gloves",
  "secondary_left",
  "secondary_right",
];

window.Twitch.ext.onAuthorized(function (auth) {
  channelID = auth.channelId;
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => (img.style.visibility = "hidden"));
  img.addEventListener("load", () => (img.style.visibility = "visible"));
});

const inventory = document.getElementById("inventory");
const primaryLeft = document.getElementById("primary_left_slot");
const primaryRight = document.getElementById("primary_right_slot");
const secondaryLeft = document.getElementById("secondary_left_slot");
const secondaryRight = document.getElementById("secondary_right_slot");
const swapImage = document.getElementById("swap");

document.getElementById("toggle").addEventListener("click", (event) => {
  toggle();
});

document.getElementById("toggle").addEventListener("dblclick", (event) => {
  event.stopPropagation();
});

document
  .getElementById("swapBtnPrimary")
  .addEventListener("dblclick", (event) => {
    event.stopPropagation();
  });

document
  .getElementById("swapBtnSecondary")
  .addEventListener("dblclick", (event) => {
    event.stopPropagation();
  });

document.getElementById("swapBtnPrimary").addEventListener("click", (event) => {
  swap();
});

document
  .getElementById("swapBtnSecondary")
  .addEventListener("click", (event) => {
    swap();
  });

async function toggle() {
  inventory.classList.toggle("hidden");

  if (!inventory.classList.contains("hidden")) {
    const res = await fetch(api_url + channelID);
    const data = await res.json();

    for (const item of data.items) {
      if (item.container === "character" && itemSlots.includes(item.slot)) {
        const properties = JSON.parse(item.properties);
        const slotImage = document.getElementById(item.slot);
        const slotDescription = document.getElementById(
          item.slot + "_description"
        );
        slotImage.src = item.imageUrl;

        let description = `<p class="quality-${item.quality} text-weight-bold">${item.name}</p>`;
        description += `<p class="quality-socketed">${item.base_name}</p>`;
        description += `<p>${properties.join("<br />")}</p>`;
        slotDescription.innerHTML = description;
      }
    }
  }
}

function swap() {
  primaryLeft.classList.toggle("hidden");
  primaryRight.classList.toggle("hidden");
  secondaryLeft.classList.toggle("hidden");
  secondaryRight.classList.toggle("hidden");
  swapImage.classList.toggle("secondary");
}

if (window.location.hostname === "localhost") {
  toggle();
}
