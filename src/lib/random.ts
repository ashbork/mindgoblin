export const pickN = <T>(collection: T[], n: number): T[] => {
  if (collection.length < n) {
    throw new Error(
      `Attempted to pick more options from the collection (${collection.length}) than were available (${n})`
    );
  }

  const indices: number[] = [];

  while (indices.length < n) {
    const rand = randomInt(collection.length);
    console.log(rand);

    if (!indices.includes(rand)) {
      indices.push(rand);
    }
  }

  return indices.map((idx) => collection[idx]);
};

export const randomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
