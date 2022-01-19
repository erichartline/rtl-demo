const waitOneSecond = () => {
  return new Promise((res) => setTimeout(res, 1000));
};

const handler = async (req, res) => {
  await waitOneSecond();

  switch (req.query.country) {
    case "USA":
      return res
        .status(200)
        .json([
          "New York City",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Phoenix",
          "Philadelphia",
          "San Antonio",
          "San Diego",
          "Dallas",
          "San Jose",
        ]);
    case "Canada":
      return res
        .status(200)
        .json([
          "Toronto",
          "Montreal",
          "Calgary",
          "Ottawa",
          "Edmonton",
          "Mississauga",
          "Winnipeg",
          "Vancouver",
          "Brampton",
          "Hamilton",
        ]);
    case "Mexico":
      return res
        .status(200)
        .json([
          "Mexico City",
          "Tijuana",
          "Ecatepec",
          "León",
          "Puebla",
          "Ciudad Juárez",
          "Guadalajara",
          "Zapopan",
          "Monterrey",
          "Ciudad Nezahualcóyotl",
        ]);
    default:
      return res.status(404).json({ message: "Couldn't find any results" });
  }
};

export default handler;
