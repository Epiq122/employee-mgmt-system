export const UserList = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-md text-gray-500 uppercase tracking-wide py-3 px-6">
                First Name
              </th>
              <th className="text-left font-md text-gray-500 uppercase tracking-wide py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-md text-gray-500 uppercase tracking-wide py-3 px-6">
                Email
              </th>
              <th className="text-right font-md text-gray-500 uppercase tracking-wide py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Rob</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Gleason</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  robgleason122@gmail.com
                </div>
              </td>
              <td className="text-right px-6 py-4 whitespace-nowrap">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer p-4"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
