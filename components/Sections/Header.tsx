import { ReactElement, useCallback } from "react";
import Link from 'next/link';
import animateScrollTo from "animated-scroll-to";

export default function Header(): ReactElement {
    const scrollTo = useCallback((id: string) => {
        animateScrollTo(document.getElementById(id));
    }, []);
    
    return <header>
        <div className={'inner'}>
            <Link href={'/'}>
                <div className={'logo'}>
                    <img height={'50px'} src={'/images/logo.png'} />
                </div>
            </Link>

            <nav>
                <Link href={'/'}>
                    <a onClick={() => scrollTo('portfolio')}>
                        Portfolio
                    </a>
                </Link>
                <Link href={'/videos'}>
                    <a>
                        Alle Videos
                    </a>
                </Link>
                <Link href={'/articles'}>
                    <a>
                        Alle Artikel
                    </a>
                </Link>
                <a href={'https://3dsupply.de/de/shokztv/'} target={'_blank'} rel={'noopener noreferrer'}>
                    Merch
                </a>
            </nav>
        </div>

        <style jsx>{`
            header {
                position: fixed;
                width: 100vw;
                height: 4rem;
                color: #FFF;
                background-color: var(--blue);
                box-shadow: 2px 2px 10px rgba(0,0,0,.8);
                z-index: 2;
            }

            .inner {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                padding: 0 2rem;
                height: 100%;
            }

            .logo {
                height: 100%;
                padding: .75rem 0;
                margin-top: -3px;
                flex-shrink: 0;
                cursor: pointer:
            }

            nav {
                font-size: .9rem;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                flex-grow: 1;
                font-weight: bold;
            }

            a {
                color: #FFF;
                text-decoration: none;
            }

            @media only screen and (max-width: 700px) {
                .logo {
                    display: none;
                }
            }
        `}</style>
    </header>;
}