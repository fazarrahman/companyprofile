import Image from "next/image";
import Link from "next/link";

const NewsCards = ({ news }: any) => {
    return (
        <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {news.map((n: any) =>
                <Link key={n.id} href={n.url}>
                    <div className="p-3 border border-gray-400 rounded shadow-lg shadow-gray-400">
                        <div className="cursor-pointer">
                            <Image
                                priority
                                src={n.ImageUrl}
                                alt={n.ImageAlt}
                                width={200}
                                height={200}
                                className="w-full rounded-sm"
                            />
                        </div>
                        <p className="text-xs mt-4 text-gray-500">{n.publishedDate}</p>
                        <h3 className="cursor-pointer mb-2 font-bold hover:text-orange-600">
                            {n.title}
                        </h3>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default NewsCards; 