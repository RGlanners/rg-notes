import * as React from "react";
import { useNotesQuery, useUpdateNoteByPkMutation } from "../generated/graphql";
import NotesList from "./NotesList";
import _ from "underscore";

export const NotesListContainer = () => {
  const [total, setTotal] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const pagesize = 10;
  const [noteEdit, setNoteEdit] = React.useState({ id: NaN, text: "" });
  const [noteMutation] = useUpdateNoteByPkMutation();
  const { data, error, loading } = useNotesQuery({
    variables: {
      limit: pagesize,
      offset: page * pagesize,
    },
  });

  const handleNoteEdit = (id: number, text: string) => {
    console.log(id, text);
    setNoteEdit({ id, text });
  };

  const debounceNoteEdit = _.debounce(noteMutation, 1000);

  React.useEffect(() => {
    if (data?.notes[0].id && data?.notes[0].id > total) {
      setTotal(data?.notes[0].id);
    }
  }, [data, total]);

  React.useEffect(() => {
    if (noteEdit.text.length <= 180 && Number.isInteger(noteEdit.id)) {
      console.log("dont edit yet");
      debounceNoteEdit({
        variables: { note: { text: noteEdit.text }, id: noteEdit.id },
      });
    }
  }, [noteEdit, noteMutation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <NotesList
      handlePagination={(page: number) => setPage(page)}
      page={page}
      pageSize={pagesize}
      data={data}
      totalCount={total}
      handleEdit={handleNoteEdit}
    />
  );
};
