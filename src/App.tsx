import { Navigate, Route, Routes } from 'react-router-dom';
import { usePortfolioData } from './hooks/usePortfolioData';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

export default function App() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center text-slate-100">
        Loading portfolio...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="grid min-h-screen place-items-center p-8">
        <div className="w-full max-w-[680px] rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-white">
          <strong>Failed to load portfolio data.</strong>
          {error ? <div className="mt-2 opacity-[0.85]">{error}</div> : null}
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage data={data} />} />
      <Route path="/projects/:projectId" element={<ProjectDetailsPage data={data} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
