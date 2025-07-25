import axios from 'axios';
import { StockData } from '../types/stock';

export async function fetchBackendData(): Promise<StockData[]> {
  const res = await axios.get('http://localhost:4004/api/stocks');
  return res.data;
}