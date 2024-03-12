import { Link } from "react-router-dom";

export function DynamicRoute() {
    return (
        <div>
            <Link to="/">back</Link>
            <h1 className="text-sm">I am a Dynamic Route</h1>
            <p className='text-pink-500 text-sm'>{import.meta.env.VITE_BUILD_DATE}</p>
        </div>
    )
}