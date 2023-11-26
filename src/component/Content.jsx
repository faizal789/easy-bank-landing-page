import { motion } from "framer-motion";

const Content = () => {
  return (
    <section className="flex flex-col px-28 max-lg:px-10 py-20 gap-16 bg-light-grayish-blue-neutral -mt-20 max-lg:mt-20 z-30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 w-1/2 max-sm:w-full max-sm:text-center"
      >
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:text-center gap-10"
      >
        <div className="flex flex-col max-sm:items-center gap-6">
          <img src="images/icon-online.svg" width={60} alt="icon" />
          <h2>Online Banking</h2>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="flex flex-col max-sm:items-center gap-6">
          <img src="images/icon-budgeting.svg" width={60} alt="icon" />
          <h2>Simple Budgeting</h2>
          <p>
            See exactly where your money goes each month. Receive notifications
            when {`you're`} close to hitting your limits.
          </p>
        </div>
        <div className="flex flex-col max-sm:items-center gap-6">
          <img src="images/icon-onboarding.svg" width={60} alt="icon" />
          <h2>Fast onboarding</h2>
          <p>
            We {`don't`} do branches. Open your account in minutes online and
            start taking control of your finances right way.
          </p>
        </div>
        <div className="flex flex-col max-sm:items-center gap-6">
          <img src="images/icon-api.svg" width={60} alt="icon" />
          <h2>Open API</h2>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Content;
