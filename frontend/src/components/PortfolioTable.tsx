import { StockData } from '../types/stock';
import { useEffect, useState } from 'react';
import SectorSection from './SectorTable';

interface Props {
  stocks: StockData[];
}

export default function PortfolioTable({ stocks }: Props) {
  const groupedBySector = stocks.reduce((acc, stock) => {
    if (!acc[stock.sector]) acc[stock.sector] = [];
    acc[stock.sector].push(stock);
    return acc;
  }, {} as Record<string, StockData[]>);

  const totalPortfolioInvestment = stocks.reduce((sum, s) => sum + s.investment, 0);
  const [loadingFields, setLoadingFields] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const updated: Record<string, boolean> = {};
    stocks.forEach((stock) => {
      updated[stock.symbol] = true;
    });
    setLoadingFields(updated);

    const timer = setTimeout(() => {
      setLoadingFields({});
    }, 1000);

    return () => clearTimeout(timer);
  }, [stocks]);

  return (
    <div className="space-y-10">
      {Object.entries(groupedBySector).map(([sector, sectorStocks]) => (
        <SectorSection
          key={sector}
          sector={sector}
          stocks={sectorStocks}
          totalPortfolioInvestment={totalPortfolioInvestment}
          loadingFields={loadingFields}
        />
      ))}
    </div>
  );
}

