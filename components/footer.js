import Link from "next/link"

function Footer() {
  return (
    <footer className="px-4 divide-y">
	    <div className="py-6 text-sm text-center">
        © 
        <Link href="https://www.linkedin.com/in/charity-darko/">
            <a 
              target="_blank"
            >Charity Darko</a>
        </Link>. 
        All rights reserved.</div>
    </footer>
  )
}

export default Footer
