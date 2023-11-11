import { useActions } from "../hooks/actions"
import useAppSelector from "../hooks/redux"
import star from '../assets/star.png'
import { IRepo } from "../modules"

const FavouritePage = () => {
    const { favourites } = useAppSelector(state => state.github)
    const { removeFromFavorites } = useActions()

    const removeToFavourite = (repo: IRepo) => {
        removeFromFavorites(repo)
    }

    if (favourites.length === 0) return <p className="text-center p-4 text-lg">No items.</p>
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen ">
            <ul className="list-none max-h-[600px] mx-[10px] overflow-y-scroll">
                {favourites.map(repo => (
                    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100
                     transition-all flex items-center">
                        <img
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                            className='w-[100px] h-[100px] rounded-[50%] mr-[20px]'
                        />

                        <div className='flex justify-between items-center w-[100%] md'>
                            <a href={repo.html_url} target='_blank' className="hover:cursor-pointer hover:underline max-w-[600px]">
                                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                                <p className="text-sm">
                                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                                    Watchers: <span className="font-bold">{repo.watchers}</span>
                                </p>
                                <p className="text-small font-thin">{repo.description}</p>
                            </a>
                            <div className="star">
                                <img
                                    className="max-w-[50px] max-h-[50px] hover:cursor-pointer ml-[20px]"
                                    src={star}
                                    onClick={() => removeToFavourite(repo)}
                                    title='remove from favorites'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default FavouritePage