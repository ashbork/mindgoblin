import { getOptimalStickerSheets } from "./sticker-score";

const optimal = getOptimalStickerSheets();

export const appState = $state({
  pickedOptions: optimal.map(({ id }) => id),
});
