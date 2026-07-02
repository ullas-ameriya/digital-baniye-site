import { motion } from "framer-motion";

const HeroVisual = () => {
  return (
    <div className="relative h-[620px] w-full">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100 blur-3xl opacity-60" />

      {/* Laptop */}
      <motion.div
        //initial={{ opacity: 0, y: 40 }}
        animate={{ x: [-8, 8, -8], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-10 left-0 w-[85%]"
      >
        <div className="rounded-3xl border border-neutral-200 bg-white shadow-2xl overflow-hidden">

          <div className="h-8 bg-neutral-100 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-yellow-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
          </div>

          <img
            src="../../images/CaseStudies/swastik.png"
            alt=""
            className="w-full"
          />

        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute right-0 top-44 w-44"
      >
        <div className="rounded-[2.5rem] bg-black p-2 shadow-2xl">

          <div className="rounded-[2rem] overflow-hidden bg-white">

            <img
              src="../../images/CaseStudies/dradityasoral - home.jpg"
              alt=""
            />

          </div>

        </div>
      </motion.div>

      {/* Card 1 */}

      {/* <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute left-4 bottom-16 bg-white rounded-2xl shadow-xl px-5 py-4 border border-neutral-200"
      > */}
        <div className="absolute left-4 bottom-32 bg-white rounded-2xl shadow-xl px-5 py-4 border border-neutral-200">
        <p className="text-xs text-neutral-500 mb-1 ">
          Digital Presence
        </p>

        <p className="font-semibold text-lg">
          Live in 7 days
        </p>
        </div>

      {/* </motion.div> */}

      {/* Card 2 */}

      {/* <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-20 bottom-0 bg-white rounded-2xl shadow-xl px-5 py-4 border border-neutral-200"
      > */}
        <div className="absolute right-20 bottom-0 bg-white rounded-2xl shadow-xl px-5 py-4 border border-neutral-200">
        <p className="text-xs text-neutral-500">
          Mobile Optimized
        </p>

        <p className="font-semibold mt-1">
          100%
        </p>
        </div>
      {/* </motion.div> */}

    </div>
  );
};

export default HeroVisual;