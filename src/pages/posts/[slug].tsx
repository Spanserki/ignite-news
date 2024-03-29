import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"
import styles from './post.module.scss'

interface PostProps {
    post: {
        slug: string;
        title: string;
        content: string;
        update: string;
    }
}

export default function Post({post}: PostProps) {
    return (
        <>
            <Head>
                <title>{post.title} | Ignews</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.update}</time>
                    <div 
                        dangerouslySetInnerHTML={{__html: post.content}} 
                        className={styles.postContent}
                    />
                </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const session = await getSession({req})
    const {slug} = params;

    if (!session) {}

    const prismic = getPrismicClient(req)

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        update: new Date(response.last_publication_date).toLocaleString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        props: {
            post,
        }
    }

}