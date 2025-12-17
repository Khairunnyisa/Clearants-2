export default function Footer() {
  return (
    <footer className="w-full bg-[#12181F] text-white mt-20 py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <img 
              src="images/logo/logo-clearants.svg" 
              alt="Clearants Logo" 
              className="h-12 mb-5"
            />
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl"><img src="icons/icon-solution.svg" alt="" /></span> Solutions
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Application Security</li>
              <li>Dynamic Security</li>
              <li>Mobile Security</li>
              <li>Container Security</li>
              <li>Infrastructure Security</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl"><img src="icons/icon-resource.svg" alt="" /></span> Resources
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Articles</li>
              <li>Documentation</li>
              <li>FAQs</li>
              <li>Vulnerability Database</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl"><img src="icons/icon-GIT.svg" alt="" /></span> Get In Touch
            </h3>
            <p className="text-gray-300 mb-2">Contact us</p>
            <p className="text-gray-300 mb-1">info@clearants.com</p>
            <p className="text-gray-300 mb-4">(+62) 21 290 23393</p>

            <p className="font-semibold text-sm mb-1">
              PT Inovasi Informatika Indonesia (i3)
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Graha BIP 6th Floor<br />
              Jl. Jend. Gatot Subroto Kav.23<br />
              Jakarta 12930, Indonesia
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-gray-400 text-sm">
            ©2025 Clearants Inc., All Rights Reserved | Terms of Service | Privacy Policy
          </p>

          <div className="flex gap-6 text-xl">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Footer Description */}
        <p className="mt-10 text-sm text-gray-400 max-w-4xl leading-relaxed">
          Clearants is an end-to-end platform that integrates security testing 
          tools and DevSecOps tools into a single dashboard. With its commercial 
          modular capabilities and easy enhancement managing DevSecOps to assist 
          companies across a variety of industries in protecting their business 
          right from the development process.
        </p>
      </div>
    </footer>
  );
}
