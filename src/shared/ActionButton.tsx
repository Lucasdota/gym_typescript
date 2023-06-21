import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
	children: React.ReactNode;
	setSelectedPage: (vale: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
	return (
    <AnchorLink
      className="custom-button bg-secondary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton