// Placeholder component - Actual search functionality requires backend/API integration

const SearchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex items-center border border-border rounded-lg overflow-hidden bg-card shadow-sm">
      <input 
        type="search" 
        placeholder="ابحث عن ملحنين، أعمال، عصور..."
        className="flex-grow p-3 text-foreground bg-transparent focus:outline-none focus:ring-1 focus:ring-ring"
        aria-label="شريط البحث"
      />
      <button 
        type="submit" 
        className="bg-primary hover:bg-accent text-primary-foreground p-3 px-6 transition-colors duration-200"
      >
        بحث
      </button>
    </form>
  );
};

export default SearchBar;

