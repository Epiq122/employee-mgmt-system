export const User = () => {
  return (
    <div>
      <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-500'>Rob</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-500'>Gleason</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-500'>robgleason122@gmail.com</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap'>
          <a
            href='#'
            className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer p-4'
          >
            Edit
          </a>
          <a
            href='#'
            className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'
          >
            Delete
          </a>
        </td>
      </tr>
    </div>
  );
};
