import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Sagar Gawai", email: "sagar@gmail.com" },
  { id: "2", name: "Tushar Shelake", email: "tushar@gmail.com" },
];
const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload);
    },
    userEdit(state, action) {
      const { id, name, email } = action.payload;
      let existingUser = state.find((item) => item.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.id = id;
      }
    },
    userDelete(state, action) {
      const { id } = action.payload;
      console.log("id", id);
      return state.filter((item) => item.id != id);
    },
  },
});
export const { userAdded, userEdit, userDelete } = slice.actions;
export default slice.reducer;
