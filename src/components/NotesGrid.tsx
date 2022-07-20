import * as React from "react";
import { styled } from "@mui/material/styles";
import { Notes } from "~/generated/graphql";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

type NotesGridProps = {
  notesData: Notes[];
  handleEdit: (id: number, text: string) => void;
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
};

const Item = styled(TextField)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary.main,
  overflow: "hidden",
  whiteSpace: "break-spaces",
}));

export const NotesGrid = (props: NotesGridProps) => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ width: "100%", flexGrow: 2, overflow: "scroll" }}
    >
      <Grid container spacing={1}>
        {props.notesData.map((note) => (
          <Grid item sx={gridContainer} key={note.id}>
            <Item
              sx={{ height: "100%" }}
              variant="outlined"
              color={"primary"}
              minRows={10}
              maxRows={10}
              key={`item_${note.id}`}
              defaultValue={note.text}
              multiline={true}
              onChange={(e) => props.handleEdit(note.id, e.currentTarget.value)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
