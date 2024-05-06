import Image from "next/image";
import Link from "next/link";

const NewsCards = ({ news }: any) => {
    return (
        <div className="card-group">
            {news.map((n: any) =>
                <Link key={n.id} href={n.url}>
                    <div className="p-4 card">
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
                        <h3 className="cursor-pointer mb-2 font-bold link-text">
                            {n.title}
                        </h3>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default NewsCards; 