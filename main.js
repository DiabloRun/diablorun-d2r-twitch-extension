const inventory = document.getElementById("inventory");
const user = "Indrek";
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

function toggle() {
  inventory.classList.toggle("visible");

  if (inventory.classList.contains("visible")) {
    for (let slot of itemSlots) {
      document.getElementById(slot).src =
        "https://api.diablo.run/d2r/" +
        user +
        "/item/character/" +
        slot +
        ".jpg" +
        "?" +
        Date.now();
      document.getElementById(slot + "_description").src =
        "https://api.diablo.run/d2r/" +
        user +
        "/item-description/character/" +
        slot +
        ".jpg" +
        "?" +
        Date.now();
    }
  }
}
