import { ClassType, SelectedPage } from '@/shared/types'
import image1 from "../../public/assets/image1.png"
import image2 from "../../public/assets/image2.png"
import image3 from "../../public/assets/image3.png"
import image4 from "../../public/assets/image4.png"
import image5 from "../../public/assets/image5.png"
import image6 from "../../public/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

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
	return (
    <section
      id="ourclasses"
      className="min-h-screen w-full bg-primary-100 pb-20 pt-28 antialiased"
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
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
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
        <motion.div
					className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
					<p className='mt-10 py-5 text-2xl font-bold'>FUN CLASSES FOR ALL TASTES!</p>
				</motion.div>
      </motion.div>
    </section>
  );
}

export default OurClasses