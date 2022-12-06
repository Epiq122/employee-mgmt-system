// import User
import { User } from './User';

export const UserList = () => {
  return (
    <div className='container mx-auto my-8'>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-md text-gray-500 uppercase tracking-wide py-3 px-6'>
                First Name
              </th>
              <th className='text-left font-md text-gray-500 uppercase tracking-wide py-3 px-6'>
                Last Name
              </th>
              <th className='text-left font-md text-gray-500 uppercase tracking-wide py-3 px-6'>
                Email
              </th>
              <th className='text-right font-md text-gray-500 uppercase tracking-wide py-3 px-6'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            <User />
          </tbody>
        </table>
      </div>
    </div>
  );
};
