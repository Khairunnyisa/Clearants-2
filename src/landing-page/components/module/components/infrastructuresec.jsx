export default function InfrastructureSecurity() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.65fr] gap-6">
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <div className="relative p-5">
            <img
              src="icons/infra-icon.svg"
              alt="Security Icon"
              className="w-13 h-13 mb-4"
            />
            <h3 className="font-subtitle2 mb-4 text-gray-900 leading-tight">
              Maximizing Time Efficiency with Infrastructure as Code Tools
            </h3>

            <p className="text-sm text-gray-400 max-w-3xl">
              Protecting your infrastructure is critical which is why we offer
              Infrastructure as Code tools to automate hardening processes and
              defend against potential threats. From networks and systems to
              data, applications, and devices, our security coverage is
              comprehensive. This module is currently in beta and will be
              available soon.
            </p>
          </div>
        </div>

        <div className="relative p-5 rounded-2xl shadow-sm border border-gray-100 bg-white ">
          <img
            src="images/content/module/infra-img.png"
            alt=""
            className="w-[250px] rounded-[5px] md:w-[550px] select-none pointer-events-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr] gap-6">
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-8 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
                Playbook Management
              </h3>
              <p className="text-sm text-gray-500">
                Create and manage playbooks to automate incident response and
                hardening tasks, ensuring consistency across environments.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
                Pre-Harden
              </h3>
              <p className="text-sm text-gray-500">
                Assess your infrastructure for security gaps and
                misconfigurations before deployment. Gain actionable insights to
                prepare systems for a hardened state.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
                Credentials Management
              </h3>
              <p className="text-sm text-gray-500">
                Securely store, access, and rotate credentials using encrypted
                vaults and role-based access control. Prevent unauthorized
                access and reduce the risk of credential leaks.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[10px] p-3">
              <h3 className="font-subtitl-desc font-bold mb-1 text-gray-900">
                Harden
              </h3>
              <p className="text-sm text-gray-500">
                Automatically apply security best practices and configurations
                to protect your infrastructure. Ensure compliance and resilience
                with minimal manual effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
