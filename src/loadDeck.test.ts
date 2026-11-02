import { describe, it, expect } from "vitest";
import { loadDeck } from "./loadDeck";


describe('loadDeck', () => {
  it('returns a Promise that resolves', async () => {
    const result = loadDeck()

    expect(result).toBeInstanceOf(Promise)
    await expect(result).resolves.toBeDefined()
  })

  it('resolves a {suits[4], values[13] } deck', async () => {
    const deck = await loadDeck() as { suits: string[]; values: string[] }
    expect(typeof deck).toBe('object');
    expect(deck).toHaveProperty('values');
    expect(deck).toHaveProperty('suits');

    expect(Array.isArray(deck.suits)).toBe(true)
    expect(Array.isArray(deck.values)).toBe(true)

    expect(deck.suits).toHaveLength(4)
    expect(deck.values).toHaveLength(13)

  })

  it('supports another id, e.g. "pokemon"', async () => {
    const loader = await loadDeck('pokemon') as { suits: string[]; values: string[] };

    expect(loader.suits).toHaveLength(4)
    expect(loader.values).toHaveLength(13)

  })


  it('rejects with an error for unknown ids', async () => {

    await expect(loadDeck('unknown-id')).rejects.toThrow(/not found/i)

  })
})