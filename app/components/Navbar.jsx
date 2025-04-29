import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="w-11/12 mx-auto flex items-center justify-between py-5">
                <Link href='#' className="text-yellow-500 font-bold text-lg" >Zeaspend</Link>
                <div className="hidden lg:flex items-center gap-3">
                    <Link href='#' className="hover:text-yellow-500 duration-500">Home</Link>
                    <Link href='#' className="hover:text-yellow-500 duration-500">Plans</Link>
                    <Link href='#' className="hover:text-yellow-500 duration-500">Contact us</Link>
                    <Link href='#' className="hover:text-yellow-500 duration-500">Profit Calculator</Link>
                    <Link href='#' className="hover:text-yellow-500 duration-500">Top Investors</Link>
                </div>
                <div className="flex items-center gap-3">
                    <Link href='#' className="py-1 px-3 rounded-sm bg-yellow-500 font-medium hover:bg-yellow-500/80 duration-500">Login</Link>
                </div>
            </div>
        </nav>
    );
}