import { motion } from 'framer-motion';
import Navbar from './Navbar';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.05,
    backgroundColor: "#14b8a6",
    color: "#ffffff",
    ring: 2,
    ringColor: "rgba(20,184,166,0.5)",
    transition: { duration: 0.15 }
  };

  return (
    <motion.div 
      className='h-fit w-full overflow-y-auto'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='flex-col items-center justify-around h-screen'>
        <Navbar />  
        <motion.div 
          className="flex items-center justify-around h-[70%] w-[100%]"
          variants={itemVariants}
        >
          <motion.div 
            className='w-[30%] h-[70%] flex justify-center items-center bg-gray-200' 
            whileHover={cardHover}
            variants={itemVariants}
          >
            <div className='w-[70%] text-xl text-center flex justify-center items-center'>
              Our vision is to encourage and nurture startups while aiming to reduce their failure rate by 50%. We support the Startup India initiative and strive to provide a robust platform for startups and investors. Our goal is to revolutionize retail investment in startups, making it more accessible and impactful.
            </div>    
          </motion.div> 
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
            variants={itemVariants}
          >
            <img src='src\assets\WhatsApp Image 2025-04-15 at 01.55.27_6d2b61b6.jpg' width={550} alt="Vision Image" />
          </motion.div>   
        </motion.div>  
        <motion.div 
          className='h-[70%]'
          variants={itemVariants}
        >
          <motion.div 
            className='text-7xl text-teal-600 font-bold text-center p-2'
            variants={itemVariants}
          >
            Our Focus
          </motion.div>
          <motion.div 
            className='flex h-[70%] w-[100%] mt-[2%] items-center justify-around'
            variants={containerVariants}
          >
            {[
              { src: 'src\\assets\\Exchange market analysis on holographic screen.png', width: 180, text: 'Mentors' },
              { src: 'src\\assets\\young man with laptop computer working at home office.png', width: 250, text: 'FreeLancer' },
              { src: 'src\\assets\\New business partners shaking hands.png', width: 180, text: 'Investor' },
              { src: 'src\\assets\\WhatsApp Image 2025-04-15 at 01.51.39_54b54404.jpg', width: 180, text: 'StartUp' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className='bg-gray-200 h-[80%] w-[20%] rounded-xl flex flex-col items-center justify-around'
                whileHover={cardHover}
                variants={itemVariants}
              >
                <img src={item.src} width={item.width} />
                <div className='text-3xl text-center font-bold'>{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className='h-[90%]'
          variants={itemVariants}
        >
          <motion.div 
            className='text-7xl text-teal-600 font-bold text-center p-2'
            variants={itemVariants}
          >
            STARTUP BENEFITS
          </motion.div>
          <motion.div 
            className='flex flex-col h-[70%] w-[100%] mt-[2%] items-center justify-around'
            variants={containerVariants}
          >
            {[
              [
                { title: 'NO COLLATERAL', text: 'Great For early Stage\nBelief on Founders Potential' },
                { title: 'SMART MONEY', text: 'Add Values beyond capital\nAchieve by CD' }
              ],
              [
                { title: 'FAST FUNDING', text: 'Skipping old Paper works with real world startup metrics' },
                { title: 'DELAY EQUITY DILUTION', text: 'CD makes flexible for both investors and startups' }
              ],
              [
                { title: 'WIDE EXPOSURE', text: 'Highly interactive seminars with all kind of investors' },
                { title: 'MARKETING BOOST', text: 'Mentors, Investors, Testers become your champions' }
              ]
            ].map((pair, index) => (
              <motion.div 
                key={index}
                className='h-[30%] flex w-[100%] justify-around'
                variants={containerVariants}
              >
                {pair.map((item, i) => (
                  <motion.div
                    key={i}
                    className='bg-gray-200 h-[100%] w-[40%] flex flex-col text-lg items-start pl-8 pr-4 justify-evenly'
                    whileHover={{ scale: 1.05, backgroundColor: "#14b8a6" }}
                    variants={itemVariants}
                  >
                    <div className='text-2xl font-bold'>{item.title}</div>
                    <div>{item.text}</div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;