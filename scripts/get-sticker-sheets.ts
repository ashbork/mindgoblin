const SCRYFALL_ENDPOINT =
  "https://api.scryfall.com/cards/search?q=set:sunf&order=set";

const getSheets = async () => {
  const response = await fetch(SCRYFALL_ENDPOINT);

  if (!response.ok) {
    console.error(response.status);
  }

  return response.json();
};

const transformSheets = (sheets) => {
  return sheets.map((sheet) => ({
    name: sheet.name,
    image: sheet.image_uris.normal,
    id: new Number(sheet.collector_number),
  }));
};

const sheets = await getSheets();
console.log(JSON.stringify(transformSheets(sheets.data)));
