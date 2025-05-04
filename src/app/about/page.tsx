// Placeholder page for About Us information

export default function AboutPage() {
  return (
    <div className="prose lg:prose-xl dark:prose-invert max-w-none bg-card border border-border p-8 rounded-lg">
       {/* Apply prose styles for typography, colors applied via globals.css */}
      <h1 className="text-3xl font-bold font-serif mb-6">حول موقع موسيقى أوروبا</h1>
      
      <h2 className="text-2xl font-semibold font-serif mt-6 mb-3">هدفنا</h2>
      <p>
        يهدف موقع "موسيقى أوروبا" إلى أن يكون بوابة بحثية شاملة وموثوقة للباحثين والطلاب والموسيقيين وعشاق الموسيقى لاستكشاف وفهم التراث الموسيقي الأوروبي الغني والمتنوع. نسعى لتوفير وصول سهل ومنظم إلى مجموعة واسعة من الموارد الأكاديمية والرقمية.
      </p>

      <h2 className="text-2xl font-semibold font-serif mt-6 mb-3">المفهوم التصميمي</h2>
      <p>
        يعتمد تصميم الموقع على المزج بين العمق الأكاديمي وسهولة الاستخدام والجاذبية البصرية الحديثة. تم اختيار واجهة نظيفة ومنظمة، مع التركيز على قوة البحث وسهولة التصفح. استخدمنا لوحة ألوان هادئة ومحترفة (الأبيض الكريمي، الرمادي الداكن/الأزرق البحري، مع لمسات من البني/الذهبي الباهت) وخطوط واضحة لضمان تجربة مستخدم مريحة وموثوقة.
      </p>

      <h2 className="text-2xl font-semibold font-serif mt-6 mb-3">المحتوى والميزات</h2>
      <p>
        يقدم الموقع:
      </p>
      <ul className="list-disc pl-5">
        <li>محرك بحث متقدم للوصول إلى المقالات والمدخلات الموسوعية والبيانات الببليوغرافية.</li>
        <li>تصفح سهل للمحتوى حسب الملحنين، العصور الموسيقية، الأنواع، والآلات.</li>
        <li>مقالات ومدخلات موسوعية معمقة تغطي مختلف جوانب الموسيقى الأوروبية.</li>
        <li>(مستقبلاً) تكامل مع التسجيلات التاريخية والمخطوطات الرقمية.</li>
      </ul>

      <h2 className="text-2xl font-semibold font-serif mt-6 mb-3">التقنيات المستخدمة</h2>
      <p>
        تم بناء هذا الموقع باستخدام تقنيات الويب الحديثة لضمان الأداء العالي والتجاوب مع مختلف الأجهزة:
      </p>
      <ul className="list-disc pl-5">
        <li>الواجهة الأمامية: Next.js (React Framework)</li>
        <li>التصميم: Tailwind CSS</li>
        <li>تم التطوير بواسطة: Manus AI</li>
      </ul>

      <h2 className="text-2xl font-semibold font-serif mt-6 mb-3">تواصل معنا</h2>
      <p>
        نرحب بآرائكم ومقترحاتكم لتطوير الموقع. (سيتم إضافة معلومات الاتصال لاحقًا).
      </p>
    </div>
  );
}

