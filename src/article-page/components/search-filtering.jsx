import { Search } from "lucide-react";

// Wrapper card reusable
function SectionCard({ children }) {
  return (
    <div className="bg-white p-4 rounded-xl grey-outline">
      {children}
    </div>
  );
}

// List with checkbox on right
function ListFilter({ title, items }) {
  return (
    <SectionCard>
      <h3 className="font-subtitle2 secondary mb-3">{title}</h3>

      <hr className="mb-5 secondary"/>

      <div className="space-y-3 font-desc secondary">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            {/* Text + count */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <span>{item.name}</span>
              <span className="secondary">({item.count})</span>
            </label>

            {/* Checkbox on right */}
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-600 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default function Filtering() {
  const kategori = [
    { name: "Security", count: 0 },
    { name: "Software", count: 2 },
    { name: "Hardware", count: 14 },
    { name: "Database", count: 10 },
  ];

  const produk = [
    { name: "Application Security", count: 5 },
    { name: "Dynamic Security", count: 2 },
    { name: "Mobile Security", count: 14 },
    { name: "Infrastructure Security", count: 10 },
    { name: "Container Security", count: 1 },
    { name: "ASOC", count: 11 },
  ];

  return (
    <aside className="w-full md:w-[500px] flex-shrink-0 space-y-6">
      
      {/* Search */}
    
        <div className="flex items-center gap-2 bg-white grey-outline px-3 py-5 rounded-lg">
          <Search size={18} className="secondary" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
     

      <ListFilter title="Kategori" items={kategori} />
      <ListFilter title="Produk" items={produk} />

    </aside>
  );
}
