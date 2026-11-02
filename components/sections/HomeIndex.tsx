import Link from 'next/link';

const chapters = [
  ['01', 'Expertise', '#expertise'],
  ['02', 'Our firm', '#about'],
  ['03', 'Our people', '#team'],
  ['04', 'Industries', '#industries'],
  ['05', 'Perspectives', '#perspectives'],
];

export function HomeIndex() {
  return (
    <nav aria-label="Explore this page" className="chapter-nav">
      <div className="mx-auto flex max-w-container items-center gap-7 px-5 sm:px-6">
        <span className="chapter-label">Explore MSS</span>
        {chapters.map(([number, title, href]) => <Link key={href} href={href}><span>{number}</span>{title}</Link>)}
      </div>
    </nav>
  );
}
