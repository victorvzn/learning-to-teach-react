import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Pat Allen",
		email: "pat.allen@gexample.com",
		github: "pat.allen",
	},
	{
		id: "2",
		name: "Evelyn Little",
		email: "evelyn.little@gexample.com",
		github: "evelyn.little",
	},
	{
		id: "3",
		name: "Victor Villazon",
		email: "victor.villazon@gmail.com",
		github: "victorvzn",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;

			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
