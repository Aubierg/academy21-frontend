import Link from 'next/link';

export default function NosValeursPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: '#1a1a1a', borderBottom: '3px solid #C8102E', padding: '48px 0 32px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', fontSize: '13px', color: '#666', fontFamily: 'Montserrat,sans-serif' }}>
            <Link href="/" style={{ color: '#666' }}>Accueil</Link>
            <span>/</span>
            <span style={{ color: '#C8102E' }}>Nos Valeurs</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: 'white' }}>
            OUR VALUES
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(48px,6vw,80px) 24px' }}>

        {/* Intro */}
        <div style={{ maxWidth: '760px', margin: '0 auto 64px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: '#C8102E' }} />
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E' }}>Qui sommes-nous</span>
            <div style={{ width: '40px', height: '2px', background: '#C8102E' }} />
          </div>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,3vw,36px)', color: '#1a1a1a', marginBottom: '20px' }}>WHO ARE WE ?</h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.85 }}>
            We dream, we act, we make success! As a matter of fact, we reinvent the future! Through coaching, personal development and leadership, we strive each day to capacitate men and women with a tough mind, so as to accomplish their dreams with more efficiency.
          </p>
        </div>

        {/* Mission / Vision / Valeurs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          {[
            {
              img: 'https://academytwentyone.com/web/assets/img/about/a21-mission.jpg',
              title: 'OUR MISSION',
              text: 'We are a system that builds people! We renew minds because we all have a mission invested in us, therefore there is need for an ignition. We push you to dream, we see you through action, and success is inevitable in the end. Our core mission is to bring life into the lives of others.',
            },
            {
              img: 'https://academytwentyone.com/web/assets/img/about/a21-vision.jpg',
              title: 'OUR VISION',
              text: 'We have come a long way and stood firm thanks to the principles that served as an anchor throughout our process. The professionalism of our Academy is a result of repeated actions, focus and hard work. The vision born by our system is not a utopia — it grows with time.',
            },
            {
              img: 'https://academytwentyone.com/web/assets/img/about/26.jpg',
              title: 'OUR VALUES',
              text: 'Money is important, financial freedom too. However, we have understood that it is the human being who gives value to money and not the other way round. Money is the direct consequence of our positive actions daily, because the more we give, the more we receive.',
            },
          ].map(item => (
            <div key={item.title} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eceef1', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ height: '3px', width: '40px', background: '#C8102E', marginBottom: '16px', borderRadius: '2px' }} />
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#1a1a1a', marginBottom: '14px' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 12 Valeurs */}
        <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: 'clamp(28px,4vw,48px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,3vw,32px)', color: '#1a1a1a', marginBottom: '12px' }}>
              Les <span style={{ color: '#C8102E' }}>12 Valeurs</span> d&apos;Academy 21
            </h2>
            <p style={{ color: '#888', fontSize: '14px' }}>Les piliers fondamentaux de notre communauté</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {[
              'Intégrité', 'Excellence', 'Respect', 'Responsabilité',
              'Leadership', 'Persévérance', 'Générosité', 'Humilité',
              'Vision', 'Travail d\'équipe', 'Innovation', 'Impact',
            ].map((val, i) => (
              <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#f7f8fa', borderRadius: '6px', border: '1px solid #eceef1' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '11px', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#1a1a1a' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}