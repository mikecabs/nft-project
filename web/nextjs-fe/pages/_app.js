import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
    return <div>
        <div className="banner">
            <div className={styles.inner_banner}>
                <div className={styles.banner_item}>
                    <Link href="/">
                        <a className={styles.inner_banner_item}>Untitled NFT Project</a>
                    </Link>
                </div>
                <div className={styles.banner_item}>
                    <Link href="/">
                        <a className={styles.inner_banner_item}>Home</a>
                    </Link>
                    <Link href="/development">
                        <a className={styles.inner_banner_item}>Development</a>
                    </Link>
                </div>
            </div>
        </div>
        <Component {...pageProps} />
        <footer className={styles.footer}>
            Yup yup footer time
        </footer>
    </div>
}

export default MyApp
