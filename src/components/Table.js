import React from "react";
import "../styles/Table.css";

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Remove</th>
        </tr>
      </thead>
      <hr />
    </div>
  );
};

const TableBody = (props) => {
  console.log(`Props of TableBody`, props);

  const rows = props.linkData.map((row, index) => {
    console.log(index);
    return (
      <div>
        <tr key={index}>
          <td>{row.name}</td>
          <td>
            <a href={row.URL}>{row.URL}</a>
          </td>
          <td>
            <button onClick={() => props.removeLink(index)}>Delete</button>
          </td>
        </tr>
        <hr />
      </div>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  return (
    <div>
      <TableHeader />
      <TableBody linkData={props.linkData} removeLink={props.handleRemove} />
    </div>
  );
};

export default Table;
