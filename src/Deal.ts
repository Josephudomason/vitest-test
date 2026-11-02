export function Deal(cards: string[], handSize: number, numberOfPlayers: number): string[][] {
  const hands = Array.from({ length: numberOfPlayers }, () => [] as string[])

  for (let i = 0; i < handSize; i++) {
    for (let playerIndex = 0; playerIndex < numberOfPlayers; playerIndex++) {
      if (cards.length === 0) {
        throw new Error('Not enough cards to deal')
      }
      hands[playerIndex].push(cards.shift()!)
    }
  }

  return hands
}