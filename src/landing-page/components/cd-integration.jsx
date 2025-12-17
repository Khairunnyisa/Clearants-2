export default function CdIntegration() {
  return (
    
    <section className="relative w-full lg:px-20 overflow-hidden ">
      <img
        src="images/circle-gray.svg"
        alt="Background Left"
        className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none select-none"
      />
      <img
        src="images/circle-red.svg"
        alt="Background Right"
        className="absolute bottom-0 right-0 w-72 h-72 opacity-30 pointer-events-none select-none"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="font-subtitle">CI/CD Integration</h2>
          <p className="font-body secondary">
            Integrating i3gis with CI/CD tools can greatly enhance your software
            development and deployment processes. By incorporating security and
            operational considerations throughout the development lifecycle.
          </p>

          <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 w-fit shadow-sm">
            <img src="images/logo/jenkins.png" alt="Jenkins" className="h-10 mx-2" />
            <img src="images/logo/github.png" alt="GitHub" className="h-10 mx-2" />
            <img src="images/logo/bamboo.png" alt="GitLab" className="h-10 mx-2" />
            <img src="images/logo/tekton.png" alt="Bitbucket" className="h-10 mx-2" />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative">
          <img
            src="images/content/integration/cdci-img.png"
            alt="Code Preview"
            className="w-[480px] max-w-full"
          />
        </div>
      </div>

      {/* === BAGIAN BAWAH === */}
      <div className="grid md:grid-cols-3 gap-6 mt-20 relative z-10">
        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src="images/content/integration/ci-img1.png"
            alt="Notification Integration"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-8 left-8 right-4 white z-10">
            <h3 className="text-xl font-semibold">Notification Integration</h3>
            <p className="font-desc white mt-1 max-w-sm">
              Send real-time system alerts and updates directly to Telegram or email.
              Ensure your team is instantly informed and able to respond swiftly to
              critical events.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src="images/content/integration/ci-img2.png"
            alt="Notification Integration"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-8 left-8 right-4 text-white z-10">
            <h3 className="text-xl font-semibold">Notification Integration</h3>
            <p className="font-desc white mt-1 max-w-sm">
              Send real-time system alerts and updates directly to Telegram or email.
              Ensure your team is instantly informed and able to respond swiftly to
              critical events.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src="images/content/integration/ci-img3.png"
            alt="Notification Integration"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-8 left-8 right-4 text-white z-10">
            <h3 className="text-xl font-semibold">Notification Integration</h3>
            <p className="font-desc white mt-1 max-w-sm">
              Send real-time system alerts and updates directly to Telegram or email.
              Ensure your team is instantly informed and able to respond swiftly to
              critical events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
