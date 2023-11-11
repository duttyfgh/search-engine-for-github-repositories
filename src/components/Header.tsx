import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="h-[70px] flex justify-between bg-[#212236] items-center text-white px-8">
            <h3 className="font-bold">Github search</h3>

            <div className='flex gap-[20px]'>
                <NavLink className={navData => navData.isActive
                    ? 'hover:text-slate-300 transition-all text-[#abb0bf]'
                    : 'hover:text-slate-300 transition-all'
                } to='/search-engine-for-github-repositories/'>Home</NavLink>

                <NavLink className={
                    navData => navData.isActive
                        ? 'hover:text-slate-300 transition-all text-[#abb0bf]'
                        : 'hover:text-slate-300 transition-all'
                } to='/favourites'>Favourite</NavLink>
            </div>
        </header>
    )
}

export default Header   
