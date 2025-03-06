import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('foo');
  });

  it('sulfura should have 80 quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  })

  it('quality should -1 everyday', () => {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(6);
  })

  it('quality should -2 everyday if quality is 0', () => {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 0, 7)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(5);
  })

  it('quality should never be negative', () => {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  })

  it('aged brie quality should increase', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(1);
  })

  it('quality should never exceed 50', () => {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 0, 49)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBeLessThan(50);
  })

  it('backstage quality should increase depending sellIn value', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  })

  it('backstage quality should increase depending sellIn value', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(22);
  })

  it('backstage quality should increase depending sellIn value', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(23);
  })
});
