import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <main>
      <h1>Halo — saya [Muchammad Rasyid Syafiyullah]</h1>
      <p>Ini website sederhana yang saya edit sendiri.</p>
      <img className='w-40 h-auto' src="https://png.pngtree.com/png-clipart/20190905/original/pngtree-number-three-gesture-illustration-png-image_4523677.jpg" alt="Jari3" />
      </main>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Muchammad Rasyid Syafiyullah and tab advocate, finding unmatched efficiency in
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
