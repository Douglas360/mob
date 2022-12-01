export const TotalPercentage = ({ items, liga }) => {
  const totalRed = [...items]
    .flatMap(item => item)
    .reduce(
      (prev, curr) => prev + Number(curr.background === 'red' ? 1 : 0),
      0,
    );
  const totalGreen = [...items]
    .flatMap(item => item)
    .reduce(
      (prev, curr) => prev + Number(curr.background === 'green' ? 1 : 0),
      0,
    );

  const total = totalRed + totalGreen;

  const percentageRed = Number((totalRed / total) * 100).toFixed(2);
  const percentageGreen = Number((totalGreen / total) * 100).toFixed(2);

  return (
    <div className="flex gap-1 justify-center">
      <div className="flex items-center bg-red-600 rounded-full px-2">
        <p className="text-sm text-white font-medium">{percentageRed}%</p>
      </div>

      <p className="text-lg text-white font-medium mx-1">{liga}</p>

      <div className="flex items-center bg-green-600 rounded-full px-2">
        <p className="text-sm text-white font-medium">{percentageGreen}%</p>
      </div>
    </div>
  );
};
