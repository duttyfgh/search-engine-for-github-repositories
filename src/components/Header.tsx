import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="h-[70px] flex justify-between bg-slate-700 items-center text-white px-8">
            <h3 className="font-bold">Github search</h3>

            <div>
                <Link className='mr-3 hover:text-slate-300 transition-all' to='/search-engine-for-github-repositories'>Home</Link>
                <Link className='hover:text-slate-300 transition-all' to='/favourites'>Favourite</Link>
            </div>
        </header>
    )
}

export default Header   