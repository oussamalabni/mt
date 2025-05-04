// Placeholder page for browsing composers

export default function BrowseComposersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6 text-primary">تصفح الملحنين</h1>
      {/* Placeholder for composer list/grid and filtering options */}
      <div className="bg-card border border-border p-8 rounded-lg">
        <h2 className="text-xl font-semibold font-serif mb-4 text-primary">قائمة الملحنين</h2>
        <p className="text-muted-foreground">سيتم عرض قائمة بالملحنين الأوروبيين هنا، مع إمكانية التصفية والفرز.</p>
        {/* Example placeholder items */}
        <ul className="list-disc pl-5 mt-4 text-foreground">
          <li>يوهان سباستيان باخ (عصر الباروك)</li>
          <li>فولفغانغ أماديوس موزارت (العصر الكلاسيكي)</li>
          <li>لودفيج فان بيتهوفن (العصر الكلاسيكي/الرومانسي)</li>
          {/* Add more placeholder composers as needed */} 
        </ul>
      </div>
    </div>
  );
}

