import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TimelineStep = ({ image, title, description, reverse }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20 relative`}
    >
      {reverse ? (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="text-right md:order-1 order-2"
          >
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <p className="text-gray-600 mt-3">{description}</p>
          </motion.div>

          <motion.img
            src={image}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto md:order-2 order-1"
          />
        </>
      ) : (
        <>
          <motion.img
            src={image}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className=""
          >
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <p className="text-gray-600 mt-3">{description}</p>
          </motion.div>
        </>
      )}

      {/* DOT MERAH */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-9 h-9 bg-[#FF6C6C] rounded-full border-[8px] border-[#FFD6D6]"></div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const steps = [
    {
      image: "images/content/asoc/timeline-1.png",
      title: "Connect Your Security Stack",
      description:
        "Create an ASOC project by selecting multiple security tools, both free and premium from an available integrations list.",
    },
    {
      image: "images/content/asoc/timeline-2.png",
      title: "View Consolidated Results",
      description:
        "Visualize and analyze the results from all connected tools. Identify overlaps, highlight gaps, and gain a unified view of your security posture.",
      reverse: true,
    },
    {
      image: "images/content/asoc/timeline-3.png",
      title: "Generate Actionable Reports",
      description:
        "Receive comprehensive reports that summarize vulnerabilities, highlight severity levels, and provide recommendations—empowering developers to act with clarity.",
    },
    {
      image: "images/content/asoc/timeline-4.png",
      title: "Push Issues to ITSM Platforms",
      description:
        "Transfer selected issues directly into your organization’s ITSM platform, such as Jira or ServiceNow, for streamlined tracking and remediation workflows.",
      reverse: true,
    },
  ];

  return (
    <section className="relative w-full bg-white pt-56 pb-40">
      <div className="-mt-60 relative">
        <div className="w-full flex flex-col items-center text-center mb-20">
          <h2 className="font-title md:text-4xl font-bold text-black">
            How <span className="text-red-600">ASOC</span> Work
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed font-desc md:text-base max-w-[700px]">
            ASOC simplifies and streamlines your application security process by
            integrating powerful DevSecOps tools in a seamless, automated
            workflow.
          </p>
        </div>

        <div className="relative max-w-[1500px] mx-auto px-6">
          <div
            className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[4px]
      h-full
      bg-gradient-to-b
      from-[#FF5A5A]
      to-[#D7DCE2]
      pointer-events-none
    "
          />

          {steps.map((step, i) => (
            <TimelineStep
              key={i}
              image={step.image}
              title={step.title}
              description={step.description}
              reverse={step.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
