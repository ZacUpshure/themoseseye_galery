import { NavLinks } from '@/constants';
import Link from 'next/link';
import AuthProvider from './AuthProvider';

const Navbar = () => {
    const session = {};
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href={'/'}>
                <img src="/logo.png" width={30} alt="logo" />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='flexCenter gap-4'>
            {session ? (
                <>
                    UserPhoto
                    <Link href={"/create-project"}>
                        Share Work
                    </Link>
                </>
            ) : (
                <AuthProvider />
            )}
        </div>
    </nav>
  )
}

export default Navbar