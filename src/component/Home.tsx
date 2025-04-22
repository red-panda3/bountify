
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './Navbar';

function Home() {
  const { scrollYProgress } = useScroll();

  // Use useSpring for smoother scroll-based animations
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });

  // Define scroll-based transformations with wider ranges and smoother easing
  const heroOpacity = useTransform(smoothScroll, [0, 0.3], [0, 1]);
  const heroY = useTransform(smoothScroll, [0, 0.3], [80, 0]);
  const foundationsOpacity = useTransform(smoothScroll, [0.3, 0.5], [0, 1]);
  const foundationsScale = useTransform(smoothScroll, [0.3, 0.5], [0.9, 1]);
  const eventsOpacity = useTransform(smoothScroll, [0.5, 0.7], [0, 1]);
  const eventsX = useTransform(smoothScroll, [0.5, 0.7], [150, 0]);
  const freelancerOpacity = useTransform(smoothScroll, [0.7, 0.9], [0, 1]);
  const freelancerY = useTransform(smoothScroll, [0.7, 0.9], [80, 0]);

  // Common transition settings for smoothness
  const smoothTransition = {
    duration: 0.4,
    ease: 'easeInOut',
  };

  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <div className=" h-screen w-full">
        <div className="flex-col items-center justify-around h-screen overflow-y-auto">
          {/* Hero Section */}
          <motion.div
            className="flex items-center justify-around h-[70%]"
            style={{ opacity: heroOpacity, y: heroY, willChange: 'opacity, transform' }}
            transition={smoothTransition}
          >
            <div className="flex flex-col justify-center items-center w-[30%] h-[75%] gap-4 bg-center bg-contain">
              <h1 className="text-6xl text-center mt-[5%]">Bountify</h1>
              <div className="text-3xl text-center mt-4">Your Growth Partner</div>
              <button className="bg-gray-800 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded cursor-pointer text-center mt-4 w-[75%] transition-transform transform hover:scale-105">
                Click Me
              </button>
            </div>
            <motion.div
              className="flex flex-col justify-center items-center w-[40%] h-[75%] rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ ...smoothTransition, duration: 1 }}
              viewport={{ once: false }}
            >
              <img
                src="public\assets\WhatsApp Image 2025-04-15 at 01.55.27_7f91d90b.jpg"
                alt="Bountify"
                className="w-[90%] h-[90%] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className="p-3 text-xl bg-teal-600 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, duration: 0.4 }}
            viewport={{ once: false }}
          >
            <div >
              Platform connecting investors with high-potential startups, offering funding, mentorship, and networking to accelerate growth.
            </div>
          </motion.div>

          {/* Foundations Section */}
          <motion.div
            className="text-xl text-center mt-[10%]"
            style={{ opacity: foundationsOpacity, scale: foundationsScale, willChange: 'opacity, transform' }}
            transition={smoothTransition}
          >
            <div className="text-5xl text-teal-600 font-bold">Empowering Entrepreneurs</div>
            <div className="text-3xl font-bold mt-[1%]">with The 4 Foundation of Bountify</div>
          </motion.div>
          <div className="flex justify-around items-center h-[40%] mt-6 font-semibold">
            {[
              'Funding: Innovate startup funding by connecting with visionary investors',
              'Freelancers: Provide passionate, highly skilled workers for project',
              'Testing Team: Test products and offer valuable feedback.',
              'Mentors: Offer strategic advice from industry veterans',
            ].map((text, index) => (
              <motion.div
                key={index}
                className="p-3 text-xl w-[20%] h-[80%] bg-gray-200 hover:bg-teal-500 text-center flex items-center justify-center border-2 border-gray-400 hover:border-teal-600 rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition duration-150"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...smoothTransition, duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: false }}
              >
                <div>{text}</div>
              </motion.div>
            ))}
          </div>

          {/* Events Section */}
          <motion.div
            className="h-[70%] flex justify-around item-center mt-[2%]"
            style={{ opacity: eventsOpacity, x: eventsX, willChange: 'opacity, transform' }}
            transition={smoothTransition}
          >
            <motion.div
              className="flex flex-col justify-center items-center w-[50%] h-[75%] rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ ...smoothTransition, duration: 1 }}
              viewport={{ once: false }}
            >
              <img
                src="public\assets\WhatsApp Image 2025-04-15 at 01.55.30_f7e677ec.jpg"
                className="w-[90%] h-[100%] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center items-center w-[40%] h-[75%] bg-teal-700 gap-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...smoothTransition, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <div className="text-lg w-[70%]">
                We host events to showcase startups, connecting them with investors and mentors. Our platform offers valuable connections, exposure, and insights. Partner with us to gain a competitive advantage and secure funding. Apply now to join our upcoming events.
              </div>
              <div className="w-[80%] p-2 bg-gray-800 text-white text-center hover:bg-teal-400 transition duration-150">
                <button>Learn More</button>
              </div>
            </motion.div>
          </motion.div>

          {/* Freelancer Section */}
          <motion.div
            className="h-[100%] flex"
            style={{ opacity: freelancerOpacity, y: freelancerY, willChange: 'opacity, transform' }}
            transition={smoothTransition}
          >
            <div className="h-[90%] flex flex-col item-center gap-10">
              <motion.div
                className="flex flex-col gap-2 ml-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...smoothTransition, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <div className="text-5xl text-teal-700 font-bold">Provide Freelancer</div>
                <div className="text-2xl">On Demand</div>
                <div className="text-xl font-light">
                  Fulfill all demands with efficient team provided whenever required.
                </div>
              </motion.div>
              <div className="h-[100%] flex flex-col justify-between w-[80%] ml-16 gap-10">
                <div className="h-[50%] flex justify-between">
                  {[
                    {
                      title: 'Future Preparation',
                      desc: 'Our network is ready for future business challenges by embracing advanced and specialized skills',
                    },
                    {
                      title: 'Future Preparation',
                      desc: 'Our network is ready for future business challenges by embracing advanced and specialized skills',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="w-[40%] flex flex-col gap-4 items-center justify-center text-center rounded-2xl bg-gray-200 hover:bg-teal-500 hover:scale-105 transition duration-150 cursor-pointer text-teal-700 hover:text-white shadow-1xl"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ ...smoothTransition, duration: 0.7, delay: index * 0.2 }}
                      viewport={{ once: false }}
                    >
                      <div className=" text-2xl font-medium">{item.title}</div>
                      <div className="w-[90%] text-black">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="h-[50%] flex justify-between">
                  {[
                    {
                      title: 'Hire Efficiently',
                      desc: 'Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.',
                    },
                    {
                      title: 'Hire Efficiently',
                      desc: 'Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="w-[40%] flex flex-col gap-4 items-center justify-center text-center rounded-2xl bg-gray-200 hover:bg-teal-500 hover:scale-105 transition duration-150 cursor-pointer text-teal-700 hover:text-white shadow-1xl "
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ ...smoothTransition, duration: 0.7, delay: index * 0.2 }}
                      viewport={{ once: false }}
                    >
                      <div className=" text-2xl font-medium">{item.title}</div>
                      <div className="w-[90%] text-black">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[40%] mr-[5%] flex flex-col gap-2">
              {[
                'public/assets/WhatsApp Image 2025-04-15 at 01.55.31_5f15773d.jpg',
                'public/assets/WhatsApp Image 2025-04-15 at 01.55.33_92090558.jpg',
                'public/assets/WhatsApp Image 2025-04-15 at 01.55.31_9c3da767.jpg',
                'public/assets/WhatsApp Image 2025-04-15 at 01.55.27_b228cac8.jpg'
              ].map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  width={250}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ...smoothTransition, duration: 0.7, delay: index * 0.25 }}
                  viewport={{ once: false }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;