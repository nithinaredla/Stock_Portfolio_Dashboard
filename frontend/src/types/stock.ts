export interface StockData {
  name: string;
  symbol: string;
  qty: number;
  purchasePrice: number;
  cmp: number;
  investment: number;
  presentValue: number;
  gainLoss: number;
  peRatio: number;
  latestEarnings: number;
  sector: string;
  exchange: string;
  portfolioPercent: number;
}