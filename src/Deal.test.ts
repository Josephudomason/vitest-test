import { describe, it, expect } from "vitest";
import { Deal } from "./Deal";
import { createCards } from "./createCard";


describe('Deal', () => {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

  it('deals the correct number of hand', () => {
    const cards = createCards({ suits, values })
    const hands = Deal(cards, 5, 3)

    expect(hands).toHaveLength(3)
  })


  it('deals each hand the correct number of cards', () => {
    const cards = createCards({ suits, values })
    const hands = Deal(cards, 5, 3)

    expect(hands[0]).toHaveLength(5)
    expect(hands[1]).toHaveLength(5)
    expect(hands[2]).toHaveLength(5)
  })
})