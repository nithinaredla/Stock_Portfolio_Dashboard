import { useEffect, useState } from 'react';
import { fetchBackendData } from '../utils/fetchBackendData';
import { StockData } from '../types/stock';
import PortfolioTable from '../components/PortfolioTable';
import PortfolioChart from '../components/PortfolioChart';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function HomePage() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [view, setView] = useState<'table' | 'graph'>('table');

  useEffect(() => {
    fetchBackendData().then(setStocks);
    const interval = setInterval(() => fetchBackendData().then(setStocks), 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>📈 Nithin’s Portfolio Dashboard</title>
      </Head>
      <main className="min-h-screen bg-blue-950 text-white p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">📊 Portfolio Dashboard</h1>
          <Navbar view={view} setView={setView} />
          {view === 'table' ? <PortfolioTable stocks={stocks} /> : <PortfolioChart stocks={stocks} />}
        </div>
      </main>
    </>
  );
}