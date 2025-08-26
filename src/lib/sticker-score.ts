import type { StickerSheet } from '../types/sticker-sheet';
import stickerSheets from '../data/sticker-sheets.json';

const VOWELS = 'aeiouy';

export const getBestVowelCount = (sheet: StickerSheet): number => {
	const words = sheet.name.split(' ');

	return Math.max(...words.map(getUniqueVowelsInWord));
};

export const getUniqueVowelsInWord = (word: string): number => {
	const counter: Record<string, boolean> = {};

	word.split('').forEach((letter) => {
		if (VOWELS.includes(letter)) {
			counter[letter] = true;
		}
	});

	return Object.values(counter)
		.map((val) => (val ? 1 : 0))
		.reduce<number>((prev, curr) => prev + curr, 0);
};

export const sortByVowelCount = (sheetA: StickerSheet, sheetB: StickerSheet): -1 | 0 | 1 => {
	const vowelsInA = getBestVowelCount(sheetA);
	const vowelsInB = getBestVowelCount(sheetB);

	return vowelsInA > vowelsInB ? 1 : vowelsInA === vowelsInB ? 0 : -1;
};

export const getOptimalStickerSheets = (count = 10) => {
	const sheets = [...stickerSheets];
	const sortedSheets = sheets.sort(sortByVowelCount).reverse();

	return sortedSheets.slice(0, count);
};
