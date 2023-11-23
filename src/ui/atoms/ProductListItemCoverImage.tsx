import Image from "next/image";

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return <Image width={320} height={320} src={src} alt={alt} />;
};
