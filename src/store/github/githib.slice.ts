import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const SOLO_GIT_REPO = 'SOLO_GIT_REPO'

interface GithubState {
    favourites: string[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(SOLO_GIT_REPO) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addToFavorites(state, actions: PayloadAction<string>) {
            state.favourites.push(actions.payload)
            localStorage.setItem(SOLO_GIT_REPO, JSON.stringify(state.favourites))
        },
        removeFromFavorites(state, actions: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== actions.payload)
            localStorage.setItem(SOLO_GIT_REPO, JSON.stringify(state.favourites))
        },
    }
})

export const githubAction = githubSlice.actions
export const githubReducer = githubSlice.reducer