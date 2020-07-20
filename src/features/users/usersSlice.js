import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ludovic BRISSET" },
  { id: "1", name: "Jessica SUNTOO" },
  { id: "2", name: "Philippe WATZKY" }
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
