import { ReactElement } from "react";
import { Article } from "../../pages";
import Picture from "../Picture";
import dayjs from 'dayjs';
import FixedTruncatedHtml from "../FixedTruncatedHtml";
import Link from 'next/link';


export function formatDate(ts: number = null, format: string = 'DD.MM.YYYY'): string {
    return (ts ? dayjs.unix(ts) : dayjs()).format(format);
}

interface Props {
    articles: Article[];
}

export default function ArticleScroll({articles}: Props): ReactElement {
    return <div className={'articles'}>
        {articles.map(({id, body, created, title, cover, coverJP2, coverWEBP, author: {name}, slug}) => <Link key={id} href={'/artikel/[slug]'} as={'/artikel/' + slug}>
            <div className={'articleRow'}>
                <div className={'cover'}>
                    <Picture alt={title} rounded webp={coverWEBP} src={cover} jp2={coverJP2} />
                </div>
                <div className={'details'}>
                    <h2>{title}</h2>
                    <div className={'published'}>veröffentlicht am {formatDate(created)} von {name}</div>
                    <FixedTruncatedHtml content={body} />
                </div>
            </div>
        </Link>)}

        <style jsx>{`
            .articleRow {
                display: flex;
                align-items: center;
                margin: -1rem -1rem 1rem -1rem;
                cursor: pointer;
                padding-bottom: 1rem;
            }

            .articleRow:not(:last-child) {
                border-bottom: 1px solid #EEE;
            }

            .cover, .details {
                padding: 1rem 1rem 0 1rem;
            }

            .cover {
                width: 33%;
                position: relative;
            }

            .details {
                width: 66%;
            }

            h2 {
                margin-bottom: .25rem;
                margin-top: 0;
                font-size: 1.25rem;
            }

            .published {
                font-size: .75rem;
                margin-bottom: 1rem;
            }

            @media only screen and (max-width: 750px) {
                .articleRow {
                    flex-wrap: wrap;
                }

                .cover, .details {
                    width: 95%;
                }

            }
        `}</style>
    </div>
}
