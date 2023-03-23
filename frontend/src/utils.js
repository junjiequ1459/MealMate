export function timeTillClose(input, date, close = "") {
  const [startTime, endTime] = input.hours[date]
    ? input.hours[date].split("-")
    : ["10", "12"];

  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);

  const startTime24 =
    startHour > 12 ? `${startHour - 12}:00 PM` : `${startHour}:00 AM`;
  const endTime24 = endHour > 12 ? `${endHour - 12}:00 PM` : `${endHour}:00 AM`;
  if (close === "") {
    return endTime24;
  }
  return startTime24;
}

export function reviewStarBig(input) {
  switch (input) {
    case 0:
      return "0%";
    case 1:
      return "-9.4%";
    case 1.5:
      return "-4.7%";
    case 2:
      return "-18.8%";
    case 2.5:
      return "-14.1%";
    case 3:
      return "-28.3%";
    case 3.5:
      return "-23.6%";
    case 4:
      return "-37.6%";
    case 4.5:
      return "-32.9%";
    case 5:
      return "-42.4%";
    default:
      return "0%";
  }
}

export function reviewStarSmall(input) {
  switch (input) {
    case 0:
      return "-47.1%";
    case 1:
      return "-53%";
    case 1.5:
      return "-50%";
    case 2:
      return "-58.8%";
    case 2.5:
      return "-56%";
    case 3:
      return "-64.7%";
    case 3.5:
      return "-62%";
    case 4:
      return "-70.6%";
    case 4.5:
      return "-67.8%";
    default:
      return "-73.5%";
  }
}

export function priceRange(input) {
  let result = "";
  for (let i = 0; i < input; i++) {
    result += "$";
  }
  return result;
}
