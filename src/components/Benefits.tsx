import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitPages from "./BenefitPages";
import Image from "next/image";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "../../public/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description: "From the moment you enter our doors, you'll be greeted by a pulsating atmosphere that inspires and drives you to push your limits."
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Classes",
		description: "Discover a wide range of classes tailored to suit all fitness preferences. Whether you prefer intense training or holistic practices."
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description: "Our team of experienced trainers is here to guide you every step of the way, ensuring you maximize your potential and reach new heights of excellence."
	},
];

const container = {
	hidden: {},
	visible: {
		transition: {staggerChildren: 0.2}
	}
}

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
	return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 pb-20 pt-28 antialiased">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>DEVELOPE YOURSELF.</HText>
          <p className="my-5 text-sm">
            Our commitment to your success goes beyond the gym walls. Join our
            thriving community, where you will find support, encouragement, and
            a network of individuals who share your aspirations. Take part in
            exciting events, challenges, and competitions that will push you to
            go further, celebrating your achievements every step of the way.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitPages
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/*  GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <Image
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    THOUSANDS OF USERS RESHAPING THEIR{" "}
                    <span className="text-primary-500">BODY</span> AND{" "}
                    <span className="text-primary-500">MIND</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Step into a world of modern elegance and invigorating energy as
                you embark on a transformative fitness journey. Our spacious and
                meticulously designed facility is equipped with the latest
                cutting-edge equipment, creating an environment that inspires
                and motivates you to push your boundaries.
              </p>
              <p className="mb-5">
                As you immerse yourself in your fitness routine, our team of
                passionate and certified trainers will be by your side,
                providing expert guidance and personalized support. Whether you
                are a seasoned athlete or just starting your fitness journey,
                our trainers are committed to helping you achieve your goals and
                surpass your own expectations.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits