import { configureStore } from "@reduxjs/toolkit";
import slice from "./CreateSlice";

export default configureStore({
  reducer: {
    sagar: slice,
  },
});
