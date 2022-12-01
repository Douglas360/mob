import { forwardRef } from 'react';

export const TableCell = forwardRef(function TableCellComponent(
  { children, background, ...rest },
  ref,
) {
  const backgroundColor =
    background === 'red'
      ? 'bg-red-800'
      : background === 'green'
      ? 'bg-green-600'
      : background === 'gray'
      ? 'bg-slate-700'
      : 'bg-amber-600';

  return (
    <td
      ref={ref}
      {...rest}
      className={`${backgroundColor}  text-white p-1 border border-solid border-black font-normal text-base`}
    >
      {children}
    </td>
  );
});
