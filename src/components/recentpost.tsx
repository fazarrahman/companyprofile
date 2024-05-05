import Link from "next/link";
import { useState } from "react";
import NewsCards from "./ui/newscards";

const RecentPost = () => {
    //const [recentNews, setRecentNews] = useState();
    const news = [
        { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/news1", ImageUrl:"/images/carousel/wallhaven-3lepy9.jpg", ImageAlt:"image 1", publishedDate: "2024-05-05" },
        { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/news2", ImageUrl:"/images/carousel/wallhaven-kx6e7d.png", ImageAlt:"image 2", publishedDate: "2024-05-04" },
        { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/news3", ImageUrl:"/images/carousel/wallhaven-m3m57k.jpg", ImageAlt:"image 3", publishedDate: "2024-05-03" },
        { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/news1", ImageUrl:"/images/carousel/wallhaven-m3m57k.jpg", ImageAlt:"image 1", publishedDate: "2024-05-02" },
        { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/news2", ImageUrl:"/images/carousel/wallhaven-3lepy9.jpg", ImageAlt:"image 2", publishedDate: "2024-05-01" },
        { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/news3", ImageUrl:"/images/carousel/wallhaven-kx6e7d.png", ImageAlt:"image 3", publishedDate: "2024-05-01" },
    ];
    //setRecentNews(news);
    return (
        <section className="w-full mt-32 px-48 flex flex-col items-center justify-center">
            <div className="flex w-full justify-between">
                <h2 className="inline-block font-bold capitalize text-3xl">
                    Recent News
                </h2>
                <Link href="/recent-news"
                    className="inline-block font-medium 
                    hover:underline hover:underline-offset-2 text-md hover:text-orange-500">view all</Link>
            </div>                
            <NewsCards news={news} />
        </section>
    );
}

export default RecentPost;