import Link from "next/link"
function Header() {
  return (
    <header>
      <div className="container flex justify-between h-16 mx-auto pt-2">
        <div className="flex">
         <Link href="/">
          <a className="font-black md:text-3xl">VMoney</a>
         </Link>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button
            className="bg-white text-vmmain-light bg-opacity-25 rounded-2xl px-6 py-2 mr-10 hover:text-vmmain-default">
             <Link
              href="login"
             > 
              <a>Log in </a>
            </Link>
          </button>
          <button 
            className="bg-white text-vmmain-light bg-opacity-25 rounded-2xl px-6 py-2 ">
              <Link
              href="register"
             > 
              <a>Register</a>
            </Link>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
