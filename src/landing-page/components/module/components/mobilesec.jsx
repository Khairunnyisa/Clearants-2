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
        bottom-[-80px]
        right-[-100px]
        w-[280px]
        md:w-[500px]
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

      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6">
        <div className="relative h-[260px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
          <img
            src="images/mobsec-img2.png"
            alt=""
            className="
      absolute
      left-1/2
      -translate-x-1/2
      bottom-[-50px]
      w-[220px]
      md:w-[480px]
      pointer-events-none
      select-none
    "
          />
        </div>

        <div className="relative h-[260px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
          <div className="flex h-full items-center justify-center">
            <img
              src="images/mobsec-img3.png"
              alt="API Dashboard"
              className="
        max-h-[180px]
        w-auto
        object-contain
        pointer-events-none
        select-none
      "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
