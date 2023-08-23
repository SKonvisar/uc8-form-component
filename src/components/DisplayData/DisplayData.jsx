import React from "react";
import { useSelector } from "react-redux";
import "./DisplayData.css";

export const DisplayData = () => {
  const formData = useSelector((state) => state);

  return (
    <div className="display-data-container">
      <h2>Form Data</h2>
      <table className="data-table">
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{formData.first_name}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{formData.last_name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>{formData.message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
