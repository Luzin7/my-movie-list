import React from "react";
import Header from "../components/Header";
import AdminMovies from "../components/AdminMovies";

function AdminHome() {
  return (
    <div className="home">
      <Header />
      <AdminMovies />
    </div>
  );
}

export default AdminHome;
