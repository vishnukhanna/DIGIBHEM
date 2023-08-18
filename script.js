//Booking Form
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("booking-form");
  const roomTypeSelect = document.getElementById("room-type");
  const amenitiesSelect = document.getElementById("amenities");
  const totalDaysInput = document.getElementById("total-days");
  const totalRoomCostInput = document.getElementById("total-room-cost");
  const totalAmenitiesCostInput = document.getElementById(
    "total-amenities-cost"
  );
  const totalCostInput = document.getElementById("total-cost");
  const balanceInput = document.getElementById("balance");
  const advanceAmountInput = document.getElementById("advance-amount");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculateCosts();
  });

  roomTypeSelect.addEventListener("change", calculateCosts);
  amenitiesSelect.addEventListener("change", calculateCosts);
  totalDaysInput.addEventListener("input", calculateCosts);
  advanceAmountInput.addEventListener("input", calculateCosts);

  function calculateCosts() {
    const roomType = roomTypeSelect.value;
    const amenities = amenitiesSelect.value;
    const totalDays = parseInt(totalDaysInput.value);
    const advanceAmount = parseInt(advanceAmountInput.value);
    const roomRate = roomType === "deluxe" ? 2500 : 4000;
    const amenitiesCost =
      (amenities.includes("ac") ? 1000 : 0) +
      (amenities.includes("locker") ? 300 : 0);
    const totalRoomCost = roomRate * totalDays;
    const totalAmenitiesCost = amenitiesCost * totalDays;
    const totalCost = totalRoomCost + totalAmenitiesCost;
    const balance = totalCost - advanceAmount;

    totalRoomCostInput.value = `$. ${totalRoomCost}/-`;
    totalAmenitiesCostInput.value = `$. ${totalAmenitiesCost}/-`;
    totalCostInput.value = `$. ${totalCost}/-`;
    balanceInput.value = `$. ${balance}/-`;
  }
});

