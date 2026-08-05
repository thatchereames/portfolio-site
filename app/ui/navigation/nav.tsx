import Link from 'next/link';
import NavLinks from './nav-links';

export default function Nav() {
    return (
        <div className="flex gap-10 w-fit">
            <NavLinks/>
        </div>
    );
}