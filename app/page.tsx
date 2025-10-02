import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <main>
      <h1>Welome to OUR WEBSITE</h1>
      <h2>Halo nama saya Muchammad Rasyid Syafiyullah</h2>
      <h2>dan saya Regata Delavin Abirama</h2>
      <p>Ini website sederhana yang saya edit sendiri.</p>
      <img className='w-40 h-auto' src="file:///C:/Users/ASUS/Downloads/WhatsApp%20Image%202025-10-02%20at%2013.37.02.jpeg" alt="Jari3" />
      </main>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Student and tab advocate, finding unmatched efficiency in
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
