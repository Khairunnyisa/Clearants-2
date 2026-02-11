export default function ContainerSecurity() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-6 items-stretch">
      <div className="flex flex-col gap-6 h-full">
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-5">
          <img
            src="icons/consec-icon.svg"
            alt="Security Icon"
            className="w-13 h-13 mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            Level Up Your Container Security with Top-Tier Protection
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            We protect application containers prior to deployment and
            installation to ensure they are protected from cyber attacks and
            conform to security standards and privacy regulations. This module
            is still in development and will be coming soon.
          </p>
        </div>

        <div className="relative flex-1 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <img
            src="images/container-img.png"
            alt=""
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-[-250px]
              w-[250px]
              md:w-[550px]
              pointer-events-none
              select-none
            "
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
        <div className="flex flex-col gap-3">
          <div className="bg-gray-100 rounded-[10px] p-3">
            <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
              Authentication and Authorization
            </h3>
            <p className="text-sm text-gray-500">
              Ensure that only authorized people have access to the containers
              and their apps.
            </p>
          </div>

          <div className="bg-gray-100 rounded-[10px] p-3">
            <h3 className="font-subtitl-desc font-bold text-gray-900 mb-1">
              Runtime Security
            </h3>
            <p className="text-sm text-gray-500">
              Ensure that the container and its app continue running during
              runtime.
            </p>
          </div>

          <div className="bg-gray-100 rounded-[10px] p-3">
            <h3 className="font-subtitl-desc font-bold text-gray-900 mb-1">
              Data & Network Security
            </h3>
            <p className="text-sm text-gray-500">
              Prioritize Data & Network Security in your containerized app to
              safeguard data transmission and protect communication channels
              between containers and their ecosystem.
            </p>
          </div>

          <div className="bg-gray-100 rounded-[10px] p-3">
            <h3 className="font-subtitl-desc font-bold text-gray-900 mb-1">
              Monitoring and Audit
            </h3>
            <p className="text-sm text-gray-500">
              Monitor activities and do regular audits to ensure that the
              containerized app is running properly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
