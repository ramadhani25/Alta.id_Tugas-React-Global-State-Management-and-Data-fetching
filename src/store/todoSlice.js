import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialState,
  },
  reducers: {
    addTodo: (state, action) => {
      const newData = {
        ...action.payload,
        id: uuidv4(),
      };

      state.todos = [newData, ...state.todos];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((item) => {
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
