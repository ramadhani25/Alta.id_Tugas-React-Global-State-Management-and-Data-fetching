import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newData = {
        ...action.payload,
        id: uuidv4(),
      };
      state.todo = [newData, ...state.todo];
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todo = state.todo.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
