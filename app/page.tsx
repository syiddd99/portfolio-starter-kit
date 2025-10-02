import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <main>
      <h1>Halo — saya [Regata Delavin Abirama]</h1>
      <p>Ini website sederhana yang saya edit sendiri.</p>
      <img className='w-40 h-auto' src="https://upload.wikimedia.org/wikipedia/id/1/15/SMK_Negeri_2_Malang.png" alt="foto" />
      </main>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Rega and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
