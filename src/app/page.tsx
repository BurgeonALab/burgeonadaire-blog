import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="font-medium text-lg sm:text-2xl">Burgeon Adaire <span className="font-normal">Blog</span></p>

      <Link className='blog-link' href="https://burgeonadaire.com" target='_blank' rel='noopener'>
        <p className="mt-3 font-normal">Coming Soon</p>
      </Link>
    </div>
  );
}
