import Link from 'next/link'
import Image from 'next/image' // custom image tag Next provides allowing us to optimize images
import styles from '@/styles/EventItem.module.css'

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        {/* have to add height and width the image tag */}
        <Image
          src={evt.image ? evt.image : '/images/event-default.png'}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  )
}
