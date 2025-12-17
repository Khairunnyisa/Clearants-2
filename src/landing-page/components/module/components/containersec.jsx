export default function ContainerSecurity() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-stretch">
      {/* Kolom kiri */}
      <div className="p-6 rounded-2xl shadow-sm border border-gray-100 bg-white flex flex-col justify-between">
        <img
          src="icons/appsec-icon.svg"
          alt="Security Icon"
          className="w-13 h-13 mb-4"
        />
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            Invincible Application Security
          </h3>
          <p className="text-gray-500 leading-relaxed mb-4">
            Protect your source code with multi-layered defense against
            vulnerabilities and cyber threats throughout the entire development
            lifecycle.
          </p>
        </div>

        {/* Gambar di bawah */}
        <img
          src="images/appsec-img.png"
          alt="Application Security Illustration"
          className="w-full rounded-xl object-cover mt-4"
        />
      </div>

      {/* Kolom kanan */}
      <div className="grid grid-rows-[2fr_1fr] gap-6 h-full">
        <div className="rounded-2xl shadow-sm border border-gray-100 bg-white overflow-hidden flex items-center justify-center">
          <img
            src="images/appsec-img2.png"
            alt="Code Protection"
            className="w-3/4 max-h-[250px] object-contain"
          />
        </div>

        <div className="p-6 rounded-2xl shadow-sm border border-gray-100 bg-white flex flex-col justify-center">
          <h4 className="font-semibold text-gray-800 mb-2">
            Vulnerability Scan
          </h4>
          <p className="text-gray-500 text-sm">
            Automatically detect and fix potential weaknesses in your codebase.
          </p>
        </div>
      </div>
    </div>
  );
}
