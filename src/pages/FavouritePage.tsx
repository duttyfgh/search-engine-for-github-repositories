import { useActions } from "../hooks/actions"
import useAppSelector from "../hooks/redux"
import star from '../assets/star.png'

const FavouritePage = () => {

    const { favourites } = useAppSelector(state => state.github)
    const { removeFromFavorites } = useActions()

    const removeToFavourite = (url: string) => {
        removeFromFavorites(url)
    }

    if (favourites.length === 0) return <p className="text-center p-4 text-lg">No items.</p>
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen ">
            <ul className="list-none max-h-[600px] mx-[10px]  overflow-y-scroll">
                {favourites.map(f => (
                    <li key={f} className="border w-[100%] overflow-hidden py-4 px-4 mb-2 hover:bg-slate-100 flex flex-wrap items-center justify-between  ">
                        <a href={f} target={'_blank'} >{f}</a>
                        <img
                            className="max-w-[50px] max-h-[50px] hover:cursor-pointer"
                            src={star}
                            onClick={() => removeToFavourite(f)}
                            title='remove from favorites'
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FavouritePage