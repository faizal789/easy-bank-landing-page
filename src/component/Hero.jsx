import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-very-light-gray-neutral max-lg:bg-white flex items-center max-lg:flex-col-reverse gap-7 justify-between pl-28 max-lg:pl-0">
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col max-sm:items-center max-w-xl max-sm:text-center max-sm:px-10 gap-6"
      >
        <h1 className="text-5xl">Next generation digital banking</h1>
        <p>
          Take your financial life online. Your EasyBank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>
        <button className="w-fit hover:opacity-70 transition-transform hover:scale-105">
          Request Invite
        </button>
      </motion.div>
      <motion.div
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-intro-desktop bg-no-repeat bg-left max-lg:w-screen max-lg:flex max-lg:justify-center max-lg:-mt-64 max-sm:-mt-20"
      >
        <img
          src="images/image-mockups.png"
          width={900}
          className="relative z-20 max-lg:w-11/12"
          alt=""
        />
      </motion.div>
    </section>
  );
};

export default Hero;
