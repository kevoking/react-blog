import Link from "next/link";
import TypeArticle from "../../app/types/article";
import { mongoClient } from "../../app/mongo";
import { InferGetServerSidePropsType } from "next";
import { useState, useEffect } from 'react'

export default function Blog({
    articles
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>            
            {/* List of recent articles */}
            {isClient &&
                <div>
                    {articles.map((article: any) => 
                        <div key={article["_id"]} className="max-w-6xl mx-auto bg-gray-100 dark:bg-gray-400 px-10 py-12 rounded-lg">
                            <h2 className="text-4xl font-extrabold text-gray-700 dark:text-white">
                                {article["title"]}
                            </h2>
                            <p className="my-4 text-lg text-gray-500">
                                {article["content"]}
                            </p>
                            <Link href={ '/blog/' + article['id'] } className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
                                Read more
                            </Link>
                        </div>
                    )}
                </div>
            }
            
        </>
    )
}

export async function getServerSideProps() {

    try {
        const db = (await mongoClient).db('kevinblog')

        const articles = await db.collection('articles').find({}).toArray()

        return {
            props: {articles: JSON.parse(JSON.stringify(articles))}
        }
        
    } catch (error) {
        
    }
}