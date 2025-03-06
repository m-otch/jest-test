export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        
        switch (item.name) {
            case 'Aged Brie':
                if (item.quality < 50) {
                    item.quality++;
                }
            break;
            
            case 'Backstage passes to a TAFKAL80ETC concert':
                if (item.quality < 50) {
                    item.quality++;
                    if (item.sellIn < 11 && item.quality < 50) {
                        item.quality++;
                    }
                    if (item.sellIn < 6 && item.quality < 50) {
                        item.quality++;
                    }
                }
            break;
            
            case 'Sulfuras, Hand of Ragnaros':
                // Legendary item, no changes
            break;
            
            default:
                if (item.quality > 0) {
                    item.quality--;
                }
            break;
        }
        
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn--;
        }
        
        if (item.sellIn < 0) {
            switch (item.name) {
                case 'Aged Brie':
                    if (item.quality < 50) {
                        item.quality++;
                    }
                break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    item.quality = 0;
                break;
                
                case 'Sulfuras, Hand of Ragnaros':
                    // No change
                    break;
                
                default:
                    if (item.quality > 0) {
                        item.quality--;
                    }
                break;
            }
        }
    }

    return this.items;
  }
}
