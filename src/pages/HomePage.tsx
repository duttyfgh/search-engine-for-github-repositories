import { ChangeEvent, useState, useEffect } from 'react'
import RepoCard from '../components/RepoCard'
import { useDebounse } from '../hooks/debounced'
import { IUser, IRepo } from '../modules'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api'

const HomePage = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounse(search)
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })
    const [dropdown, setDropdown] = useState(false)
    const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    useEffect(() => {
        setDropdown(debounced.length > 2 && data?.length! > 0)
    }, [debounced])

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">

            <div className="relative w-[560px]">
                <input type="text"
                    className="border py-2 px-4 w-full h-[50px] mb-2 text-lg"
                    placeholder="Search for Github username..."
                    onChange={searchHandler}
                    value={search}
                />
                {isError && <span className='text-red-500'>Something went wrong...</span>}
                {isLoading && <span>Users are loaning...</span>}

                {dropdown && <ul className='list-none shadow-md'>
                    {data?.map((user: IUser) => (
                        <li
                            key={user.id}
                            onClick={() => clickHandler(user.login)}
                            className="py-2 px-2 hover:bg-slate-200 transition-colors cursor-pointer flex items-center font-medium"
                        >
                            <div className="mx-4 max-w-[40px] rounded-full overflow-hidden">
                                <img src={user.avatar_url} alt="..." />
                            </div>
                            {user.login}
                        </li>
                    ))}
                </ul>}

                {areReposLoading && <span>Repos are loaning...</span>}
                <div className=' max-h-[500px] overflow-hidden overflow-y-scroll '>
                    {repos?.map(repo => <RepoCard repo={repo} />)}
                </div>

            </div>
        </div>
    )
}

export default HomePage