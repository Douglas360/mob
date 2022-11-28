import { LoadingSpinner } from './LoadingSpinner';

export const Loading = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <LoadingSpinner />
      <span className="text-white font-medium">Carregando...</span>
    </div>
  );
};
