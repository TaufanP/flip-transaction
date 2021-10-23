const monthConverter = (code: string) => {
  switch (code) {
    case "1":
      return "Januari";
    case "2":
      return "Februari";
    case "3":
      return "Maret";
    case "4":
      return "April";
    case "5":
      return "Mei";
    case "6":
      return "Juni";
    case "7":
      return "Juli";
    case "8":
      return "Agustus";
    case "9":
      return "September";
    case "10":
      return "Oktober";
    case "11":
      return "November";
    case "12":
      return "Desember";

    default:
      return "Invalid Month";
  }
};

const dateFormater = (date: string) => {
  try {
    const [year, monthCode, rest] = date.split("-");
    const [day, _] = rest.split(" ");
    const month = monthConverter(monthCode);
    return `${day} ${month} ${year}`;
  } catch (error) {
    return `Invalid date format`;
  }
};

export { dateFormater };
