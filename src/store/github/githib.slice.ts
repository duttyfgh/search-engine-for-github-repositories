import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRepo } from "../../modules"

const SOLO_GIT_REPO = 'SOLO_GIT_REPO'

interface GithubState {
    favourites: IRepo[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(SOLO_GIT_REPO) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addToFavorites(state, actions: PayloadAction<IRepo>) {
            state.favourites.push(actions.payload)
            localStorage.setItem(SOLO_GIT_REPO, JSON.stringify(state.favourites))
        },
        removeFromFavorites(state, action: PayloadAction<IRepo>) {
            state.favourites = state.favourites.filter(f => f.id !== action.payload.id);
            localStorage.setItem(SOLO_GIT_REPO, JSON.stringify(state.favourites));
        },
        
    }
})

export const githubAction = githubSlice.actions
export const githubReducer = githubSlice.reducer