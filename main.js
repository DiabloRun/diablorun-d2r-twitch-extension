const inventory = document.getElementById("inventory");
const primaryLeft = document.getElementById("primary_left_slot");
const primaryRight = document.getElementById("primary_right_slot");
const secondaryLeft = document.getElementById("secondary_left_slot");
const secondaryRight = document.getElementById("secondary_right_slot");
const swapImage = document.getElementById("swap");
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

function toggle() {
  inventory.classList.toggle("hidden");

  if (!inventory.classList.contains("hidden")) {
    for (let slot of itemSlots) {
      document.getElementById(slot).src =
        "https://api.diablo.run/d2r/" +
        channelID +
        "/item/character/" +
        slot +
        ".jpg" +
        "?" +
        Date.now();
      document.getElementById(slot + "_description").src =
        "https://api.diablo.run/d2r/" +
        channelID +
        "/item-description/character/" +
        slot +
        ".jpg" +
        "?" +
        Date.now();
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
