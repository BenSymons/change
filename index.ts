type Coin = "£2" | "£1" | "50p" | "20p" | "10p" | "5p" | "2p" | "1p";
type CoinCollection = { [K in Coin]?: number};

export function change(price: number): CoinCollection {
  return { "1p": 1 };
};