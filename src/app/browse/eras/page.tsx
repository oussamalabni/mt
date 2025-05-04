// Placeholder page for browsing musical eras

export default function BrowseErasPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6 text-primary">تصفح العصور الموسيقية</h1>
      {/* Placeholder for era list/grid and filtering options */}
      <div className="bg-card border border-border p-8 rounded-lg">
        <h2 className="text-xl font-semibold font-serif mb-4 text-primary">قائمة العصور الموسيقية</h2>
        <p className="text-muted-foreground">سيتم عرض قائمة بالعصور الموسيقية الأوروبية هنا، مع روابط لمعلومات تفصيلية حول كل عصر.</p>
        {/* Example placeholder items */}
        <ul className="list-disc pl-5 mt-4 text-foreground">
          <li>العصور الوسطى (حتى 1400)</li>
          <li>عصر النهضة (1400-1600)</li>
          <li>عصر الباروك (1600-1750)</li>
          <li>العصر الكلاسيكي (1730-1820)</li>
          <li>العصر الرومانسي (1800-1910)</li>
          <li>القرن العشرين وما بعده</li>
          {/* Add more placeholder eras as needed */} 
        </ul>
      </div>
    </div>
  );
}

