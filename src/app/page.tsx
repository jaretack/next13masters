import { ProductList } from "@/ui/organisms/ProductList";
import { ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Kubek",
		price: 10,
		coverImage: {
			alt: "",
			src: "/product_1.png",
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "Plecak",
		price: 100,
		coverImage: {
			alt: "",
			src: "/product_2.png",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Bluza",
		price: 250,
		coverImage: {
			alt: "",
			src: "/product_3.png",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Spodnie",
		price: 150,
		coverImage: {
			alt: "",
			src: "/product_4.png",
		},
	},
];

export default function Home() {
	return (
		<main>
			<ProductList products={products} />
		</main>
	);
}
