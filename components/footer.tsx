import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => (
  <footer className='flex gap-8 items-center justify-center bg-black text-white p-20'>
    <Image src='/assets/logo.svg' width={18} height={18} alt='logo' />
    <Link href='/terms'>Terms</Link>
    <Link href='/privacy'>Privacy Policy</Link>
  </footer>
);
export default Footer;
