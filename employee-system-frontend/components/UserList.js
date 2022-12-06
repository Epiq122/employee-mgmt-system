import { User } from "./User";
import { useEffect, useState } from "react";
import { EditUser } from "./EditUser";

export const UserList = ({ user }) => {
  // Call the api
  const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

  // state to fetch users from backend
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [responseUser, setResponseUser] = useState(null);

  // use effect to fetch data from backend
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [user, responseUser]);

  // delete user from backend and UI
  const deleteUser = async (e, id) => {
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (users) {
        setUsers(users.filter((user) => user.id !== id));
      }
    });
  };

  // Edit User
  const editUser = async (e, id) => {
    e.preventDefault();
    setUserId(id);
  };

  return (
    <>
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
            {!loading && (
              <tbody className="bg-white">
                {/*if there is a user we will check */}
                {users?.map((user) => (
                  <User
                    user={user}
                    key={user.id}
                    deleteUser={deleteUser}
                    editUser={editUser}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <EditUser userId={userId} setResponseUser={setResponseUser} />
    </>
  );
};
