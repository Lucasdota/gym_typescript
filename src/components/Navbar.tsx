import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../public/assets/Logo.png";
import Image from 'next/image';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { AnimatePresence, motion } from 'framer-motion';

const menuAnimation = {
  initial: {
    clipPath: "circle(0.4% at 80% 5%)",
    transition: { duration: 0.3 },
  },
  animate: {
    clipPath: "circle(70.7% at 50% 50%)",
    transition: { duration: 0.3 },
  },
  exit: {
    clipPath: "circle(0.4% at 80% 5%)",
    transition: { duration: 0.1 },
  },
};

type Props = {
	isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 antialiased`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <Image alt="logo" src={Logo} />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <div>Sign In</div>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className={`rounded-full bg-secondary-500 p-2 ${
                  isMenuToggled ? "opacity-0" : "opacity-100"
                }`}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className={`h-6 w-6 text-white`} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      <AnimatePresence>
        {!isAboveMediumScreens && isMenuToggled && (
          <motion.div
            className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
            variants={menuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* CLOSE ICON */}
            <motion.div className="flex justify-end p-12 pr-14 pt-8">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </motion.div>
            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar