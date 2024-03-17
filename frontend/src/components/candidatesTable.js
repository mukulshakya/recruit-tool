import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { statuses } from "../constants";
import { CircularProgress } from "@mui/material";
import api from "../services/api";

export default function CandidateTable({ candidates, updateCandidateStatus }) {
  const [statusLoading, setStatusLoading] = React.useState({});
  const columns = [
    { field: "name", headerName: "name", width: 130 },
    { field: "email", headerName: "email", width: 250 },
    { field: "phone", headerName: "phone", width: 150 },
    { field: "skills", headerName: "skills", width: 300 },
    {
      field: "status",
      headerName: "status",
      width: 200,
      renderCell: (ValueFormatterParams) => {
        const { row } = ValueFormatterParams;
        return statusLoading[row.id] ? (
          <div className="flex w-full justify-center">
            <CircularProgress size={20} />
          </div>
        ) : (
          <>
            <select
              className="block w-full bg-transparent p-2"
              value={row.status}
              onChange={(e) => handleSelectChange(e, row)}
            >
              <option value={null}>select status</option>
              {statuses.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </select>
          </>
        );
      },
    },
    { field: "expectedSalary", headerName: "expectedSalary", width: 150 },
  ];

  const handleSelectChange = (e, row) => {
    setStatusLoading({ ...statusLoading, [row.id]: true });

    const value = e.currentTarget.value;

    api
      .updateCandidateStatus(row.id, { status: value })
      .then((data) => {
        if (data.error) {
          return alert("Error updating status: " + JSON.stringify(data.error));
        }
        updateCandidateStatus(row.id, value);
      })
      .finally(() => {
        delete statusLoading[row.id];
        setStatusLoading({ ...statusLoading });
      });
  };

  return (
    <div>
      <DataGrid
        sx={{ "& .MuiDataGrid-cellContent": { padding: "5px 0" } }}
        rows={candidates}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } },
        }}
        rowSelection={false}
        autoHeight
      />
    </div>
  );
}
