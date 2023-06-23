import { ClassType, SelectedPage } from '@/shared/types'
import image1 from "../../public/assets/image1.png"
import image2 from "../../public/assets/image2.png"
import image3 from "../../public/assets/image3.png"
import image4 from "../../public/assets/image4.png"
import image5 from "../../public/assets/image5.png"
import image6 from "../../public/assets/image6.png"
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import fitness from "../../public/assets/fitness.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'
import Image from 'next/image'

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Unleash your strength and sculpt your body in our invigorating weight classes. Led by expert trainers, these sessions will help you build muscle, increase endurance, and achieve remarkable results.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Discover inner harmony and restore balance in our rejuvenating yoga classes. Guided by experienced instructors, these sessions will enhance flexibility, improve mindfulness, and promote overall well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Ignite your core strength and sculpt your abs in our dynamic abdomen core classes. Targeting your midsection, these workouts will help you achieve a toned and defined abdominal region.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on exhilarating fitness adventures with our action-packed classes. From obstacle courses to outdoor challenges, experience thrilling workouts that push your limits and ignite your adventurous spirit.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Transform your body and restore hormonal balance in our empowering fitness classes. Dynamic workouts that sculpt, energize, and bring harmony to your hormones. Experience a balanced and vibrant life.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Elevate your training to new heights with our dynamic training classes. From functional exercises to intense circuits, our sessions will challenge and transform your body, maximizing your strength and endurance.",
    image: image6,
  },
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  const container = document.getElementById("pictures-container");
	const firstLi = document.querySelector("li")?.offsetWidth;

  const handleScrollLeft = () => { 
		if (container && firstLi) {
			container.scrollBy({
        left: -firstLi, // Scroll left by the width of the li element
        behavior: "smooth",
      });
		}    
  };

  const handleScrollRight = () => {
		if (container && firstLi) {
			container.scrollBy({
        left: firstLi, // Scroll right by the width of the li element
        behavior: "smooth",
      });  
		}		  
  };


	return (
    <section
      id="ourclasses"
      className="min-h-screen w-full bg-primary-100 pt-28 antialiased"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              From heart-pumping cardio sessions to high-intensity interval
              training, strength and conditioning classes to mind-body wellness
              practices, we have curated a wide variety of workouts to cater to
              every fitness enthusiast.
            </p>
          </div>
        </motion.div>
        <div className="relative mt-10 px-12 h-fit flex justify-center items-center">
          {/* ARROWS OVERLAY */}
          <button
            id="scroll-left"
            className={`group absolute left-0 z-20 flex h-16 w-8 xs:h-10 xxl:h-24 items-center justify-center bg-primary-500 opacity-50 hover:opacity-80`}
            onClick={handleScrollLeft}
          >
            <ChevronDoubleLeftIcon className="h-6 w-6 text-gray-20 group-active:scale-75" />
          </button>
          <button
            id="scroll-right"
            className={`group absolute right-0 z-20 flex h-16 w-8 xs:h-10 xxl:h-24 items-center justify-center bg-primary-500 opacity-50 hover:opacity-80`}
            onClick={handleScrollRight}
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-gray-20 group-active:scale-75" />
          </button>

          {/* PICTURES */}
          <div
						id="pictures-container"
            className="mt-2 h-fit w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap"
          >
            <ul className="w-fit whitespace-nowrap pb-2">
              {classes.map((item: ClassType, index) => (
                <Class
                  key={`${item.name}-${index}}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </div>
        <motion.div
          className="mx-auto flex h-[280px] w-full p-10 pl-14 pt-20 xs:pt-5 md:pl-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="relative font-montserrat text-xl font-bold md:w-3/5 xs:text-lg">
            &quot;Believe in yourself, push your limits, and embrace the sweat.
            The journey to fitness may be tough, but the reward is a stronger,
            healthier you.&quot;
            <Image
              alt="fitness"
              src={fitness}
              className="absolute -bottom-7 -right-7 h-20 w-20 rotate-12 xs:h-16 xs:w-16 md:-rotate-12"
            />
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OurClasses