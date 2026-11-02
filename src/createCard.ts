
export function createCards({ suits, values }: { suits: string[]; values: string[] }): string[] {


  // Enforce a standard deck: 4 suits and 13 values
  if (!Array.isArray(suits) || suits.length !== 4) {
    throw new Error('suits must have length 4')
  }

  if (!Array.isArray(values) || values.length !== 13) {
    throw new Error('values must have length 13')
  }

  const cards: string[] = [];

  for (const suit of suits) {
    for (const value of values) {
      cards.push(`${value} of ${suit}`)
    }
  }

  return cards;
}





