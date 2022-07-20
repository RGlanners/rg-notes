// import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { Pagination, Typography } from "@mui/material";
import { NotesQuery } from "~/generated/graphql";
import { NotesGrid } from "./NotesGrid";
import styled from "@emotion/styled";

interface Props {
  data: NotesQuery;
  page: number;
  pageSize: number;
  totalCount: number;
  handlePagination: (page: number) => void;
  handleEdit: (id: number, text: string) => void;
}

const NotesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden auto;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
`;

const NotesList: React.FC<Props> = (props: Props) => (
  <NotesContainer>
    <Typography variant="h2">Notes</Typography>
    {/* Option 1 - MUI DataGrid with server side pagination*/}
    {/* <DataGrid
      page={props.page}
      onPageChange={(page: any) => props.handlePagination(page)}
      pageSize={props.pageSize}
      rows={props.data.notes}
      rowCount={props.totalCount}
      rowsPerPageOptions={[10, 25, 50, 100]}
      paginationMode="server"
      onCellEditCommit={(params) =>
        props.handleEdit(Number(params.id), params.value)
      }
      columns={[
        {
          field: "id",
          headerName: "string",
          filterable: false,
          sortable: false,
        },
        {
          field: "text",
          headerName: "text",
          filterable: false,
          sortable: false,
          editable: true,
        },
      ]}
    /> */}

    {/* Option 2 - MUI Grid and Styled Notes */}
    <NotesGrid notesData={props.data.notes} handleEdit={props.handleEdit} />
    <Pagination
      sx={{ margin: "20px 0" }}
      color={"primary"}
      size={"large"}
      count={Math.ceil(props.totalCount / props.pageSize)}
      page={props.page + 1}
      onChange={(_e, page) => props.handlePagination(page - 1)}
    />
  </NotesContainer>
);

export default NotesList;
