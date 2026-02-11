export default function MobileSecurity() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[2fr] gap-6">
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <img
            src="/images/mobsec-img.png"
            alt=""
            className="
        absolute
        bottom-[-100px]
        right-[-80px]
        w-[280px]
        md:w-[550px]
        pointer-events-none
        select-none
      "
          />

          <div className="relative p-5">
            <img
              src="icons/mobsec-icon.svg"
              alt="Security Icon"
              className="w-13 h-13 mb-4"
            />

            <h3 className="font-subtitle2 mb-4 text-gray-900 leading-tight">
              The Ultimate App Security, Right in Your Hands
            </h3>

            <p className="text-sm text-gray-400 max-w-[500px]">
              Our Mobile Security solution helps keep your mobile applications
              secure by scanning them for vulnerabilities. It analyzes the
              source code, architecture, and configuration of your mobile app to
              identify potential weaknesses such as SQL injection, OWASP Top 10
              attacks, and other types of threats.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6 items-stretch">
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
          <img
            src="images/mobsec-img2.png"
            alt=""
            className="
        absolute left-1/2 -translate-x-1/2 bottom-[-50px] w-[220px] md:w-[480px] pointer-events-none select-none
      "
          />
        </div>

        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-5 flex">
          <div className="flex flex-col gap-3 w-full justify-center">
            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
                Android APK & XAPK Scan
              </h3>
              <p className="text-sm text-gray-500">
                Scan APK and XAPK (Extended Android Package) files to detect
                security vulnerabilities and ensure safe deployment of Android
                apps.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
                iOS IPA Scan
              </h3>
              <p className="text-sm text-gray-500">
                Analyze IPA (iOS App Store Package) files to identify potential
                vulnerabilities and strengthen your app's security posture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
