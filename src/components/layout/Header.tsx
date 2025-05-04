import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-secondary shadow-md dark:bg-card">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold font-serif text-primary">
          <Link href="/">موسيقى أوروبا</Link> {/* Site Title/Logo Placeholder */}
        </div>
        <ul className="flex space-x-4 space-x-reverse font-sans">
          <li><Link href="/search" className="text-foreground hover:text-accent dark:text-gray-light-dark dark:hover:text-tan-gold-dark">البحث المتقدم</Link></li>
          {/* Placeholder for Encyclopedia link */}
          {/* <li><Link href="/encyclopedia" className="text-foreground hover:text-accent dark:text-gray-light-dark dark:hover:text-tan-gold-dark">الموسوعات</Link></li> */} 
          <li><Link href="/browse/composers" className="text-foreground hover:text-accent dark:text-gray-light-dark dark:hover:text-tan-gold-dark">الملحنون</Link></li>
          <li><Link href="/browse/eras" className="text-foreground hover:text-accent dark:text-gray-light-dark dark:hover:text-tan-gold-dark">العصور</Link></li>
           {/* Placeholder for Blog/News link */}
          {/* <li><Link href="/blog" className="text-foreground hover:text-accent dark:text-gray-light-dark dark:hover:text-tan-gold-dark">المدونة</Link></li> */} 
          <li><Link href="/about" className="text-foreground hover:text-accent dark:text-gray-light-dark dark:hover:text-tan-gold-dark">حول الموقع</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

