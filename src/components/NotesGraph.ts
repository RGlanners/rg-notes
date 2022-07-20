
import { gql } from '@apollo/client';

export const SubscribeToNotes = gql`subscription SubscribeNotes( $limit: Int, $offset: Int, $order_by: [notes_order_by!], $where: notes_bool_exp ){
  notes(distinct_on: [id], limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    id
    text
  }
}`;

export const SubscribeToNoteByPk = gql`subscription SubscribeNote($id: Int!){
    notes_by_pk(id: $id) {
      id
      text
    }
  }`;

export const InsertNotes = gql`mutation InsertNotes($notes: [notes_insert_input!]!) {
    insert_notes(objects: $notes, on_conflict: { constraint: notes_pkey }) {
      affected_rows
      returning {
        id
        text
      }
    }
  }`;

export const InsertNote = gql`mutation InsertNote($note: notes_insert_input!) {
    insert_notes_one(object: $note, on_conflict: { constraint: notes_pkey }) {
      id
      text
    }
  }`;

export const UpdateNotes = gql`mutation UpdateNotes($notes: notes_set_input, $where: notes_bool_exp! ){
    update_notes(_set: $notes, where: $where) {
      affected_rows
      returning {
        id
        text
      }
    }
  }`;

export const UpdateNoteByPk = gql`mutation UpdateNoteByPk($note: notes_set_input, $id: Int! ){
    update_notes_by_pk(_set: $note, pk_columns: { id: $id }) {
      id
      text
    }
  }`;


export const NotesByPk = gql`
    query NotesByPk($id: Int!) {
  notes_by_pk(id: $id) {
    id
    text
  }
}`;

export const Notes = gql`
    query Notes($limit: Int!, $offset: Int!) {
  notes(
    limit: $limit
    offset: $offset
    distinct_on: [id]
    order_by: [{id: desc_nulls_last}]
    where: {}
  ) {
    id
    text
  }
}`;
