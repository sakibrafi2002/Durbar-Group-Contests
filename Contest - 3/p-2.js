function convertTemperature(value, unit) {
  if (unit === "C") {
    return Math.round(((value * 9) / 5 + 32) * 100) / 100;
  } else if (unit === "F") {
    return Math.round((((value - 32) * 5) / 9) * 100) / 100;
  }
}
