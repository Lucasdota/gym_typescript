import Image, { StaticImageData } from "next/image"


type Props = {
	name: string,
	description?: string,
	image: StaticImageData
}

const Class = ({name, description, image}: Props) => {
	const overlayStyles = `p-5 absolute z-10 flex h-full w-full 
	flex-col items-center justify-center whitespace-normal bg-primary-500 
	text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

	return (
    <li
      className="relative mr-6 inline-block w-[47%] min-w-[100px] max-w-[500px] border-8 border-dashed border-secondary-400 xs:mr-0 xs:w-[99.9%] xs:min-w-[30px] md:w-[49.1%]"
    >
      <div className={overlayStyles}>
        <p className="text-2xl xs:text-[14px]">{name}</p>
        <p className="mt-5 xs:mt-1 xs:text-[10px]">{description}</p>
      </div>
      <Image alt={`${image}`} src={image} />
    </li>
  );
}

export default Class