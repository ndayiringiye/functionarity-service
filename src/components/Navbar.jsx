import { Link } from "react-router"

const Navbar = () => {
    return (
        <div className="bg-slate-300">
            <nav className="flex justify-between py-3 items-center px-4 capitalize front-semibold w-11/12 mx-auto bg-slate-300">
                <div>
                    <h1>logo</h1>
                </div>
                <div className="flex gap-6 ">
                    <ul className="flex gap-3 items-center">
                        <Link className="text-sm font-bold hover:text-white  border border-blue-800 py-1.5 px-3 rounded-md bg-white text-blue-800 hover:bg-blue-800">login</Link>
                        <Link className="text-sm font-bold py-1.5 px-3 rounded-md  bg-blue-800 text-white hover:border hover:border-blue-800 hover:bg-white hover:text-blue-800">register</Link>
                        <div className="flex gap-4">
                        <Link className="text-sm font-bold hover:text-blue-800 hover:underline hover:underline-offset-2">home</Link>
                        <Link className="text-sm font-bold hover:text-blue-800 hover:underline hover:underline-offset-2">blogs</Link>
                        </div>

                    </ul>
                    <div className="flex items-center">
                        <button>icon</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar