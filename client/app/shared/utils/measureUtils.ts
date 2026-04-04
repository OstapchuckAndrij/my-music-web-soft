export const calculateMeasureWidth = (beatsCount: number, isFirst: boolean) => {
  const MIN_WIDTH = 150; // Мінімум для порожнього такту
  const WIDTH_PER_BEAT = 60; // Скільки пікселів даємо на кожен удар
  const FIRST_MEASURE_BONUS = 60; // Місце для TAB-гліфа та розміру (4/4)

  let width = MIN_WIDTH + beatsCount * WIDTH_PER_BEAT;

  if (isFirst) {
    width += FIRST_MEASURE_BONUS;
  }

  return width;
};
