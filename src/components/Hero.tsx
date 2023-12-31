import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "../../public/assets/HomePageText.png";
import HomePageGraphic from "../../public/assets/HomePageGraphic.png";
import SponsorRedBull from "../../public/assets/SponsorRedBull.png";
import SponsorFortune from "../../public/assets/SponsorFortune.png";
import SponsorForbes from "../../public/assets/SponsorForbes.png";
import React from 'react'
import Image from 'next/image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
	setSelectedPage: (vale: SelectedPage) => void;
}

const Hero = ({setSelectedPage}: Props) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div
                className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext"
                aria-hidden="true"
              >
                <Image
                  alt="home-page-text"
                  src={HomePageText}
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className="mt-8 text-sm antialiased">
              The ultimate destination for bodybuilders and fitness enthusiasts
              alike. With top-of-the-line heavy lifting equipment, we provide an
              exceptional environment for strength training. But we do not stop
              there! Our diverse range of holistic classes caters to all ages
              and interests, ensuring everyone finds their perfect fit. Join us
              on this empowering journey, where strength, wellness, and
              community come together for unparalleled fitness experiences.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              aria-label="join now, click to go to join now section"
              role="button"
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p
                role="button"
                aria-label="learn more, go to contact us section"
              >
                Learn More
              </p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
				md:ml-40 md:mt-16 md:justify-end"
        >
          <Image
            alt="home-page-graphic"
            src={HomePageGraphic}
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <Image alt="redbull-sponsor" src={SponsorRedBull} />
              <Image alt="forbes-sponsor" src={SponsorForbes} />
              <Image alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero