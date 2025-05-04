// Placeholder page for displaying a single article/encyclopedia entry

// This structure assumes you pass the article slug via the URL
// e.g., /article/bach-cantatas

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the article content based on params.slug
  const articleSlug = params.slug;

  return (
    <article className="prose lg:prose-xl dark:prose-invert max-w-none bg-card border border-border p-8 rounded-lg">
      {/* Apply prose styles for typography, colors applied via globals.css */}
      <h1 className="text-4xl font-bold font-serif mb-4">عنوان المقال/المدخل الموسوعي (مثال: {articleSlug})</h1>
      
      {/* Placeholder content */}
      <p className="text-lg mb-4">
        هذه هي صفحة عرض المقال أو المدخل الموسوعي. سيتم هنا عرض المحتوى التفصيلي للموضوع المحدد بناءً على الرابط (slug) في العنوان.
      </p>
      <p>
        يمكن أن يتضمن المحتوى نصوصًا، صورًا للمخطوطات أو الآلات، اقتباسات، وربما مقاطع صوتية أو فيديو (في تطوير مستقبلي).
      </p>
      <figure className="my-6">
        {/* Placeholder for an image */}
        <div className="bg-secondary dark:bg-muted h-64 flex items-center justify-center text-muted-foreground rounded">
          [صورة توضيحية للمقال]
        </div>
        <figcaption className="text-center text-sm mt-2 text-muted-foreground">
          تعليق توضيحي للصورة (مثال: مخطوطة موسيقية)
        </figcaption>
      </figure>
      <h2 className="text-2xl font-semibold font-serif mt-6 mb-3">قسم فرعي 1</h2>
      <p>
        محتوى تفصيلي للقسم الفرعي الأول. يمكن تنظيم المقال في عدة أقسام لتسهيل القراءة.
      </p>
      <h2 className="text-2xl font-semibold font-serif mt-6 mb-3">قسم فرعي 2</h2>
      <p>
        محتوى تفصيلي للقسم الفرعي الثاني.
      </p>
      
      <div className="mt-8 border-t border-border pt-4">
        <h3 className="text-lg font-semibold font-serif mb-2">المراجع والمصادر</h3>
        {/* Placeholder for references */}
        <ul className="list-disc pl-5 text-sm">
          <li>مصدر 1 (سيتم إدراج المراجع هنا)</li>
          <li>مصدر 2</li>
        </ul>
      </div>
    </article>
  );
}

// Optional: Generate static paths if you know all article slugs beforehand
// export async function generateStaticParams() {
//   // Fetch all article slugs from your data source
//   const articles = [{ slug: 'bach-cantatas' }, { slug: 'mozart-symphonies' }]; // Example
//   return articles.map((article) => ({
//     slug: article.slug,
//   }));
// }

