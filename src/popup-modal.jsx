import { X } from "lucide-react";

export default function LiveDemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 h-screen w-screen bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-[#E8ECF2] border border-white/10 p-8">
        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 hover:text-red-500"
        >
          <X size={22} />
        </button>

        {/* HEADER */}
        <h2 className="font-subtitle2 text-black">
          Start Your DevSecOps Journey NOW!
        </h2>
        <p className="mt-1 font-desc text-gray-400">
          Fill out the form below your personal information will stay private.
        </p>

        {/* FORM */}
        <form className="mt-6 grid grid-cols-2 gap-4">
          {/* NAME */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Name</label>
            <input
              className="p-3 border-2 rounded-lg border-gray-300 placeholder:text-gray-500"
              placeholder="Your full name"
            />
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Company</label>
            <input
              className="p-3 border-2 rounded-lg border-gray-300 placeholder:text-gray-500"
              placeholder="e.g. PT. Example"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Email</label>
            <input
              className="p-3 border-2 rounded-lg border-gray-300 placeholder:text-gray-500"
              placeholder="e.g. someone@example.com"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Phone Number
            </label>
            <input
              className="p-3 border-2 rounded-lg border-gray-300 placeholder:text-gray-500"
              placeholder="e.g. +62 123 XXX XXXX"
            />
          </div>

          {/* MODULE */}
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-sm font-medium text-black">Module</label>
            <select className="p-3 border-2 rounded-lg border-gray-300 text-gray-500">
              <option>Choose Module</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-sm font-medium text-black">Message</label>
            <textarea
              className="p-3 border-2 rounded-lg border-gray-300 placeholder:text-gray-500 h-28 resize-none"
              placeholder="Write your message here..."
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="col-span-2 flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-red-400 text-white hover:bg-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
