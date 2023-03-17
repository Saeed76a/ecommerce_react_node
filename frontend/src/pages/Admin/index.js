import React from "react";
import "./style.css";
import { Link, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import { Box } from "@chakra-ui/react";

function Admin() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Order</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Box mt="10">
        <Routes>
          <Route path="/" element={<AdminHome />} />
        </Routes>
      </Box>
    </div>
  );
}

export default Admin;
