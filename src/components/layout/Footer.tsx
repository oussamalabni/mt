const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-muted-foreground py-6 mt-12 font-sans dark:bg-card">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-2">
          <a href="/about" className="text-primary hover:text-accent dark:text-blue-light-dark dark:hover:text-tan-gold-dark mx-2">حول الموقع</a>
          {/* Placeholder links - replace with actual links if needed */}
          {/* <a href="/privacy-policy" className="hover:text-accent mx-2">سياسة الخصوصية</a> */}
          {/* <a href="/terms-of-use" className="hover:text-accent mx-2">شروط الاستخدام</a> */}
          {/* <a href="/contact" className="hover:text-accent mx-2">اتصل بنا</a> */}
        </div>
        <p>&copy; {currentYear} موقع موسيقى أوروبا. جميع الحقوق محفوظة.</p>
        <p className="text-sm mt-1">تم الإنشاء بواسطة Manus AI</p> 
      </div>
    </footer>
  );
};

export default Footer;

