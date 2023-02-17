import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../Hooks/useFetch";

const Users = () => {
  const { data, loading, errors, isError } = useFetch("/sdfjsdhfkj");

  if (isError) {
    errors.map((err) => {
      toast(err.message, { type: "error" });
    });

    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      Users
      <Link to={"/"}>Home</Link>
      <div className="container">
        {loading || !data ? (
          <h1>Loading...</h1>
        ) : (
          <ul className="list-group">
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Users;
