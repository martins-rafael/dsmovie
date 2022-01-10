import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar mb-12 text-neutral-content bg-neutral shadow-lg">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link href="/" >
            <a className="text-2xl font-bold align-middle">DSMovie</a>
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end ">
            <a
              className="btn btn-ghost rounded-btn text-base lowercase"
              href="https://github.com/martins-rafael"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/github.svg"
                alt="GitHub Icon"
                width={24}
                height={24}
              />
              <p className="ml-3">/martins-rafael</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
