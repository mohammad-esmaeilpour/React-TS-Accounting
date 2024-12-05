const TableSkeleton = () => {
  return (
    <tbody>
      <tr className="border-b transition-all cursor-pointer hover:bc-secondary">
        <th className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </th>
        <td className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </td>
        <td className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </td>
        <td className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </td>
        <td className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </td>
        <td className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </td>
        <td className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </td>
        <td className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </td>
        <th className="border-l py-5 text-nowrap max-w-48 overflow-auto ">
          <span className="skeleton h-1 block w-full"></span>
        </th>
      </tr>
    </tbody>
  );
};

export default TableSkeleton;
