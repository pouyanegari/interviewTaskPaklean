import deleteSelectedUserService from "../../Services/deleteSelectedUserService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllUsersService from "../../Services/getAllUsersService";
import User from "../User/User";
import "./UserList.css";
import { toast } from "react-toastify";

const UsersList = () => {
  const [users, setUsers] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    try {
      const getAllUsers = async () => {
        const { data } = await getAllUsersService();
        setUsers(data);
        toast.success("Your Users List !");
      };
      getAllUsers();
    } catch (error) {
      setFetchError(true);
    }
  }, []);
  const deleteUserHandler = async (id) => {
    try {
      await deleteSelectedUserService(id);
      const filteredUsers = users.filter((u) => u.id !== id);
      setUsers(filteredUsers);
    } catch (error) {
      console.log(error);
      toast.error("Deleting Data Failed !");
    }
  };

  const renderUsersList = () => {
    let renderValue = <h2 className="ms-5">Loading ...</h2>;
    if (fetchError) {
      renderValue = <p>fetching data failed!</p>;
      toast.error("some error occured!");
    }
    if (users && !fetchError) {
      renderValue = (
        <section>
          <main className="container">
            {users ? (
              users.map((user) => {
                return (
                  <User
                    key={user.id}
                    user={user}
                    onDelete={deleteUserHandler}
                  />
                );
              })
            ) : (
              <p>Loading ...</p>
            )}
          </main>
          <div className="d-flex justify-content-center my-5">
            <Link className="text-decoration-none" to="add-user">
              <button className="addBtn">Add User</button>
            </Link>
          </div>
        </section>
      );
    }

    return renderValue;
  };

  return (
    <>{renderUsersList()}</>
    // <section>
    //   <main className="container">
    //     {users ? (
    //       users.map((user) => {
    //         return (
    //           <User key={user.id} user={user} onDelete={deleteUserHandler} />
    //         );
    //       })
    //     ) : (
    //       <p>Loading ...</p>
    //     )}
    //   </main>
    //   <div className="d-flex justify-content-center my-5">
    //     <Link className="text-decoration-none" to="add-user">
    //       <button className="addBtn">Add User</button>
    //     </Link>
    //   </div>
    // </section>
  );
};

export default UsersList;
