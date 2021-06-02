import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* If want to add styling, has to be on an a tag not link tag */}
        <Link href='/'>
          <a>DJ Events</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
