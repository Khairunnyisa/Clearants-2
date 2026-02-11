export default function ApplicationSecurity() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-stretch">
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
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            To ensure maximum application security, you need a comprehensive,
            multi-layered security approach. We provide this with comprehensive
            application security tools that protect your app and its code from
            potential threats throughout the entire development lifecycle,
            ensuring the highest level of security while safeguarding them from
            vulnerabilities and cyber-attacks.
          </p>
        </div>

        <img
          src="images/appsec-img.png"
          alt="Application Security Illustration"
          className="w-full rounded-xl object-cover mt-4"
        />
      </div>

      <div className="grid grid-rows-[2fr] gap-6 h-full">
        <div className="p-5 rounded-2xl shadow-sm border border-gray-100 bg-white overflow-hidden">
          <div className="flex flex-col gap-3">
            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
                Static Application Security Testing (SAST)
              </h3>
              <p className="text-sm text-gray-500">
                Inspecting source code prior to execution, allowing you to
                resolve security issues before the application is developed and
                released.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb- text-gray-900">
                Software Composition Analysis (SCA)
              </h3>
              <p className="text-sm text-gray-500">
                Evaluates app security that involves analyzing apps, libraries,
                frameworks, and packets for vulnerabilities and security issues.
                released.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb- text-gray-900">
                Secret Check
              </h3>
              <p className="text-sm text-gray-500">
                Examines the source code and app configuration for secret
                information like credentials, tokens, and encryption keys to
                prevent a breach.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb- text-gray-900">
                Misconfiguration Repository
              </h3>
              <p className="text-sm text-gray-500">
                Gathers misconfigured app or system data to help you understand
                application security issues.
              </p>
            </div>
            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb- text-gray-900">
                Software Bill of Materials (SBOM)
              </h3>
              <p className="text-sm text-gray-500">
                A detailed list of components (libraries, dependencies, etc.)
                used in the application, helping track vulnerabilities and
                ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
