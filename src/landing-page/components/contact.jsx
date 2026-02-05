import { Field, Form, Formik } from "formik";
import CardBackgroundPath from "../../components/cards/cardBackgroundPath";
import useCreateLiveDemo from "../../hooks/queries/liveDemo/postLiveDemo";
import * as Yup from "yup";

const ContactSection = () => {
  const { mutate } = useCreateLiveDemo();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.string().required("Company is required"),
    message: Yup.string(),
    phone: Yup.string().required("Phone is required"),
  });

  return (
    <section id="contact" className="relative w-full py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden rounded-[20px]">
        <div className="absolute inset-0 z-0">
          <CardBackgroundPath
            tabPosition="right"
            fill="#e2e8f0"
            borderRadius={20}
            heightCorner={40}
            tabWidth={50}
            tabStart={300}
          />
        </div>

        <div className="relative z-10 pb-12 pt-24 flex justify-between items-end">
          <div className="flex-1">
            <h2
              className="font-subtitle text-[28px]
    sm:text-[32px]
    md:text-[45px] leading-snug mb-10 max-w-xl"
            >
              Interested in seeing{" "}
              <span className="text-red-500">ClearAnts</span> in flight?
            </h2>

            <div className="bg-white/70 p-8 rounded-2xl max-w-xl w-full relative z-20">
              <p className="font-medium mb-6 text-lg">Book a live demo!</p>

              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  name: "",
                  email: "",
                  company: "",
                  message: "",
                  phone: "",
                }}
                onSubmit={(values) => {
                  mutate(values);
                  console.log(values);
                }}
              >
                <Form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field name="name">
                      {({ field, form, meta }) => (
                        <div>
                          <input
                            type="text"
                            {...field}
                            placeholder="Name"
                            className="w-full p-3 rounded-lg shadow-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-red-400"
                          />
                          {meta.touched && meta.error && (
                            <div className="error text-sm text-red-500 mt-2">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form, meta }) => (
                        <div>
                          <input
                            type="email"
                            {...field}
                            placeholder="Email"
                            className="w-full p-3 rounded-lg shadow-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-red-400"
                          />
                          {meta.touched && meta.error && (
                            <div className="error text-sm text-red-500 mt-2">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>

                  <Field name="company">
                    {({ field, form, meta }) => (
                      <div>
                        <input
                          type="text"
                          {...field}
                          placeholder="Company"
                          className="w-full p-3 rounded-lg shadow-sm bg-white/80 mt-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {meta.touched && meta.error && (
                          <div className="error text-sm text-red-500 mt-2">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field, form, meta }) => (
                      <div>
                        <input
                          type="number"
                          {...field}
                          placeholder="Phone"
                          className="w-full p-3 rounded-lg shadow-sm bg-white/80 mt-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {meta.touched && meta.error && (
                          <div className="error text-sm text-red-500 mt-2">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>

                  <Field name="message">
                    {({ field, form, meta }) => (
                      <div>
                        <input
                          type="text"
                          {...field}
                          placeholder="Message"
                          className="w-full p-3 rounded-lg shadow-sm bg-white/80 mt-5 h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                    )}
                  </Field>

                  <button
                    className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl"
                    type="submit"
                  >
                    Request Live Demo
                  </button>
                </Form>
              </Formik>
            </div>
          </div>

          <div className="absolute bottom-[-20px] right-[-140px] z-0 pointer-events-none">
            <img
              src="images/ant-rocket.png"
              alt="Clearants Rocket Ant"
              className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[550px] object-contain drop-shadow-2xl transform transition-transform duration-500"
            />
            <div className="absolute bottom-[-50px] right-[-50px] md:bottom-[-100px] md:right-[-100px] -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none">
              <div className="absolute inset-0 bg-red-400/30 blur-[100px] rounded-full"></div>
              <div
                className="absolute inset-0 bg-red-200/40 rounded-full mix-blend-overlay opacity-80 blur-[30px]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
