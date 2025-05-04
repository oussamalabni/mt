import SearchBar from "@/components/common/SearchBar";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-4xl font-bold font-serif mb-4 text-primary">استكشف عالم الموسيقى الأوروبية</h1>
      <p className="text-lg text-foreground mb-8 max-w-2xl">
        بوابتك الشاملة للبحث في التراث الموسيقي الأوروبي الغني والمتنوع. اكتشف الملحنين، العصور، المقالات البحثية، والتسجيلات التاريخية.
      </p>
      
      <div className="w-full max-w-xl mb-12">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="p-6 border border-border rounded-lg bg-card shadow-md">
          <h2 className="text-2xl font-semibold font-serif mb-3 text-primary">البحث المتقدم</h2>
          <p className="text-muted-foreground">استخدم أدوات البحث المتقدمة والفلاتر للعثور على معلومات دقيقة حول الملحنين، الأعمال، أو العصور الموسيقية.</p>
          <Link href="/search" className="text-primary hover:text-accent mt-4 inline-block">اذهب إلى البحث المتقدم</Link>
        </div>
        <div className="p-6 border border-border rounded-lg bg-card shadow-md">
          <h2 className="text-2xl font-semibold font-serif mb-3 text-primary">تصفح الموسوعات</h2>
          <p className="text-muted-foreground">اكتشف مقالات موسوعية معمقة حول مختلف جوانب الموسيقى الأوروبية، من العصور الوسطى حتى العصر الحديث.</p>
          <Link href="/browse/eras" className="text-primary hover:text-accent mt-4 inline-block">تصفح حسب العصور</Link>
        </div>
        <div className="p-6 border border-border rounded-lg bg-card shadow-md">
          <h2 className="text-2xl font-semibold font-serif mb-3 text-primary">الملحنون البارزون</h2>
          <p className="text-muted-foreground">تعرف على حياة وأعمال أشهر الملحنين الأوروبيين وتأثيرهم على تاريخ الموسيقى.</p>
          <Link href="/browse/composers" className="text-primary hover:text-accent mt-4 inline-block">تصفح الملحنين</Link>
        </div>
      </div>
    </div>
  );
}

