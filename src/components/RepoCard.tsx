import { IRepo } from "../modules"
import star from '../assets/star.png'
import regularStar from '../assets/regularStar.png'
import { useState } from "react"
import { useActions } from "../hooks/actions"
import useAppSelector from "../hooks/redux"

const RepoCard = ({ repo }: { repo: IRepo }) => {
    const { addToFavorites, removeFromFavorites } = useActions()
    const { favourites } = useAppSelector(state => state.github)
    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
    
    const addToFavourite = () => {
        setIsFav(true)
        addToFavorites(repo.html_url)
    }

    const removeToFavourite = () => {
        setIsFav(false)
        removeFromFavorites(repo.html_url)

    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md  hover:bg-gray-100 transition-all flex justify-between ">
            <a href={repo.html_url} target='_blank' className="hover:cursor-pointer hover:underline w-[400px]">
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-small font-thin">{repo.description}</p>
            </a>
            <div className="flex cursor-default h-[50px] overflow-hidden">
                {isFav
                    ? <img
                        className="max-w-[50px] max-h-[50px] hover:cursor-pointer"
                        src={star}
                        onClick={removeToFavourite}
                        title='remove from favorites'
                    />

                    : <img
                        className="max-w-[50px] max-h-[50px] hover:cursor-pointer"
                        src={regularStar}
                        onClick={addToFavourite}
                        title='add to favorites'
                    />
                }


            </div>
        </div>
    )
}

export default RepoCard