import { StockData } from '.././types/stock';
import Spinner from './Spinner';

interface Props {
  sector: string;
  stocks: StockData[];
  totalPortfolioInvestment: number;
  loadingFields: Record<string, boolean>;
}

export default function SectorSection({ sector, stocks, totalPortfolioInvestment, loadingFields }: Props) {
  const totalInvestment = stocks.reduce((sum, s) => sum + (s.investment || 0), 0);
  const totalPresentValue = stocks.reduce((sum, s) => sum + (s.presentValue || 0), 0);
  const gainLoss = totalPresentValue - totalInvestment;

  return (
    <div className="relative group">
      <h2 className="text-xl font-semibold text-white mb-2 border-b border-blue-300 pb-1">
        {sector} Sector
      </h2>

      <div className="absolute top-0 right-0 bg-white text-sm text-gray-800 px-4 py-2 rounded shadow border border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div>Total Investment: ₹{totalInvestment.toFixed(2)}</div>
        <div>Present Value: ₹{totalPresentValue.toFixed(2)}</div>
        <div className={gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}>
          Gain/Loss: ₹{gainLoss.toFixed(2)}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl shadow bg-blue-100 border border-blue-300">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-200 text-xs uppercase text-blue-800">
            <tr>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Qty</th>
              <th className="px-4 py-2">Purchase</th>
              <th className="px-4 py-2">CMP</th>
              <th className="px-4 py-2">Investment</th>
              <th className="px-4 py-2">Present Value</th>
              <th className="px-4 py-2">Gain/Loss</th>
              <th className="px-4 py-2">P/E</th>
              <th className="px-4 py-2">Latest Earnings</th>
              <th className="px-4 py-2">Portfolio (%)</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, i) => {
              const weight = stock.investment ? (stock.investment / totalPortfolioInvestment) * 100 : 0;

              return (
                <tr key={i} className="border-t border-blue-300 text-blue-900">
                  <td className="px-4 py-2 font-medium">{stock.name}</td>
                  <td className="px-4 py-2 text-center">{stock.qty ?? 'N/A'}</td>
                  <td className="px-4 py-2 text-center">{stock.purchasePrice != null ? `₹${stock.purchasePrice}` : 'N/A'}</td>
                  <td className="px-4 py-2 text-center">
                    {loadingFields[stock.symbol] ? (<Spinner />) : stock.cmp != null ? (<>₹{stock.cmp}</>) : (<>N/A</>)}
                  </td>
                  <td className="px-4 py-2 text-center">{stock.investment != null ? `₹${stock.investment.toFixed(2)}` : 'N/A'}</td>
                  <td className="px-4 py-2 text-center">
                    {loadingFields[stock.symbol] ? (<Spinner />) : stock.presentValue != null ? (<>₹{stock.presentValue.toFixed(2)}</>) : (<>N/A</>)}
                  </td>
                  <td className={`px-4 py-2 font-semibold text-center ${stock.gainLoss != null && stock.gainLoss >= 0? 'text-green-600': 'text-red-600'}`}>
                    {loadingFields[stock.symbol] ? (<Spinner />) : stock.gainLoss != null ? (<>₹{stock.gainLoss.toFixed(2)}</>) : (<>N/A</>)}
                  </td>
                  <td className="px-4 py-2 text-center">{loadingFields[stock.symbol] ? <Spinner /> : stock.peRatio ?? 'N/A'}</td>
                  <td className="px-4 py-2 text-center">{loadingFields[stock.symbol] ? <Spinner /> : stock.latestEarnings ?? 'N/A'}</td>
                  <td className="px-4 py-2 text-center">{weight.toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
