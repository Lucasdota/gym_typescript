import Image from "next/image"
import Logo from "../../public/assets/Logo.png"
import Instagram from "../../public/assets/instagram.png"
import Twitter from "../../public/assets/twitter.png"
import Facebook from "../../public/assets/facebook.png"
import Phone from "../../public/assets/Phone.png"

import Link from "next/link";

const Footer = () => {
	return (
    <footer className="bg-primary-100 py-16 antialiased">
      <div className="mx-auto mt-16 w-5/6 md:mt-0 md:flex">
        {/* COPYRIGHT */}
        <div className="mb-16 basis-1/2 text-left md:mb-0">
          <Image alt="logo" src={Logo} aria-hidden="true" />
          <p className="mt-8">
            Stay connected with us through our website for the latest updates,
            news, and fitness inspiration. Unauthorized use or reproduction of
            content, including images and text, is strictly prohibited.
            Protecting our intellectual property is important to us.
          </p>
          <p className="mt-8">© 2023 GYMIT gym. All rights reserved.</p>
        </div>

        {/* LINKS */}
        <div className="mb-16 basis-1/4 text-left md:flex md:flex-col md:items-center">
          <h4 className="text-xl font-bold">Social Media</h4>
          <div>
            {/* INSTAGRAM */}
            <Link
							aria-label="go to our instagram"
              href=""
              target="_blank"
              className="group mt-8 flex w-fit items-center gap-2"
            >
              <Image
                alt="instagram-logo"
                src={Instagram}
                className="h-6 w-6"
                aria-hidden="true"
              />
              <p className="underline-offset-2 group-hover:text-black group-hover:underline">
                Instagram
              </p>
            </Link>
            {/* TWITTER */}
            <Link
							aria-label="go to our twitter"
              href=""
              target="_blank"
              className="group mt-8 flex w-fit items-center gap-2"
            >
              <Image
                alt="instagram-logo"
                src={Twitter}
                className="h-6 w-6"
                aria-hidden="true"
              />
              <p className="underline-offset-2 group-hover:text-black group-hover:underline">
                Twitter
              </p>
            </Link>
            {/* FACEBOOK */}
            <Link
							aria-label="go to our facebook"
              href=""
              target="_blank"
              className="group mt-8 flex w-fit items-center gap-2"
            >
              <Image
                alt="instagram-logo"
                src={Facebook}
                className="h-6 w-6"
                aria-hidden="true"
              />
              <p className="underline-offset-2 group-hover:text-black group-hover:underline">
                Facebook
              </p>
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div className="mb-16 basis-1/4 text-left md:flex md:flex-col md:items-end">
          <h4 className="text-xl font-bold">Contact Us</h4>
          <p className="mt-8">Call us for a fitness revolution.</p>
          <div className="mt-8 flex w-fit items-center gap-2">
            <Image
              alt="phone-logo"
              src={Phone}
              className="h-6 w-6 md:h-8 md:w-8"
              aria-hidden="true"
            />
            <p>(333) 999-9999</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer