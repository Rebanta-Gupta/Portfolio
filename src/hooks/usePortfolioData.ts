import portfolioData from '../content/portfolioData';
import type { PortfolioData } from '../types';

interface UsePortfolioDataResult {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

export function usePortfolioData(): UsePortfolioDataResult {
  return {
    data: portfolioData,
    loading: false,
    error: null,
  };
}
