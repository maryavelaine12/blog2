import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
<Head>
  <title>Blog 2</title>
  <meta name="description" content="My personal Next.js blog" />
  <link rel="icon" type="image/png" href="/favicon.png" />
</Head>

<main className={styles.main}>

  <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <Image
      src="/images/profile.jpg"
      alt="Profile Picture"
      width={150}
      height={150}
      style={{
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  </div>

  <h1 className={styles.title}>
    Mary Avelaine Buenaventura
  </h1>

        <section style={{ maxWidth: '700px', marginTop: '30px' }}>
          <h2>Why I Chose My IT Specialization</h2>

          <p>
            I chose Data Analytics because I am interested in how data can be
            used to understand problems and make better decisions. Today,
            businesses and organizations collect a lot of data, and they need
            people who can turn that data into useful information.
          </p>

          <p>
            What made me interested in this field is seeing how data is used in
            real-life situations, such as understanding customer behavior,
            improving business performance, and predicting future trends. I
            want to improve my skills in analyzing data and use them to solve
            real-world problems in the future.
          </p>

<p>
  (This is a sample website - you’ll be building a site like this on{' '}
  <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
    our Next.js tutorial.
  </a>)
</p>
        </section>
      </main>
    </div>
  )
}