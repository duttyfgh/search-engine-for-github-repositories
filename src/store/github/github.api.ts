import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRepo, IUser, ServerResponse } from '../../modules'

export const githubApi = createApi({
    reducerPath: 'gihubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        }),
        getRepo: build.query<IRepo, { username: string; repoName: string }>({
            query: ({ username, repoName }) => ({
                url: `https://api.github.com/repos/${username}/${repoName}`
            })
        }),


    })
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery, useGetRepoQuery } = githubApi