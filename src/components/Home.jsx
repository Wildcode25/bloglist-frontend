import { useState } from "react";
import { Nav } from "./Nav";
import { Layout } from "./Layout";

export const Home = ({ user, setMessage }) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <h2>{user.username}</h2>
      <Nav setPage={setPage} page={page} />
      <Layout page={page} setMessage={setMessage} user={user} />
    </>
  );
};
