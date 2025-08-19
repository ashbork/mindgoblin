import stickerSheets from "../data/sticker-sheets.json";

export const names = [
  ...stickerSheets.flatMap(({ name }) => [...name.split(" ")]),
];
