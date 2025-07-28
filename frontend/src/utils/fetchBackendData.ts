import axios from 'axios';
import { StockData } from '../types/stock';

export async function fetchBackendData(): Promise<StockData[]> {
  const url = process.env.NEXT_PUBLIC_API_URL as string;

  const response = await axios.get<StockData[]>(url);
  return response.data;
}
