'use client';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';

const STATS = [
  { num: '75+', label: 'Pays', icon: '🌍' },
  { num: '1M+', label: 'Participants', icon: '👥' },
  { num: '2000+', label: 'Séminaires / an', icon: '📅' },
  { num: '5', label: 'Continents', icon: '🌐' },
];

const PROGRAMMES = [
  { title: 'A21 Training', desc: 'La formation fondamentale pour développer votre mindset et vos compétences business.', tag: 'Fondamental', color: '#C8102E', bg: '#fff5f5', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', href: '/rejoindre-academie/a21-training' },
  { title: 'LeaderCamp', desc: 'Un événement intensif de plusieurs jours pour décupler vos performances en leadership.', tag: 'Intensif', color: '#f0a500', bg: '#fffbf0', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80', href: '/rejoindre-academie/leadercamp' },
  { title: 'Business Show', desc: 'La grande conférence annuelle avec des speakers internationaux de premier plan.', tag: 'Événement', color: '#1a6fc4', bg: '#f0f6ff', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80', href: '/rejoindre-academie/business-show' },
];

const VALUES = [
  { icon: '🙏', label: 'Foi' },
  { icon: '🤝', label: 'Charité' },
  { icon: '💪', label: 'Persévérance' },
  { icon: '☀️', label: 'Attitude Positive' },
  { icon: '🎯', label: 'Ambition' },
  { icon: '🔥', label: 'Never Give Up' },
  { icon: '👑', label: 'Lifestyle' },
  { icon: '🛡️', label: 'Loyauté' },
  { icon: '⚡', label: 'Rigueur' },
];

export default function HomePage() {
  const { user, loading } = useAuth();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(c => (c + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, []);

  const WORDS = ['Votre Avenir.', 'Votre Succès.', 'Votre Liberté.'];

  return (
    <div style={{ background: 'white' }}>

      {/* ══ HERO ══ */}
      <section style={{
        background: 'linear-gradient(135deg, #fff 0%, #fff5f5 50%, #fff 100%)',
        padding: 'clamp(60px,8vw,120px) 0 clamp(40px,6vw,80px)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #f0f1f3',
      }}>
        {/* Déco géométrique */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(200,16,46,0.04)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(240,165,0,0.05)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(26,111,196,0.04)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }} className="hero-grid">

            {/* Texte */}
            <div>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff5f5', border: '1px solid rgba(200,16,46,0.2)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C8102E', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Présents sur 5 continents
                </span>
              </div>

              <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,72px)', color: '#1a1a1a', lineHeight: 1.05, marginBottom: '16px', letterSpacing: '-0.02em' }}>
                Réinventez<br />
                <span style={{ color: '#C8102E', display: 'inline-block', transition: 'all 0.5s' }}>
                  {WORDS[count]}
                </span>
              </h1>

              <p style={{ fontSize: 'clamp(16px,1.8vw,20px)', color: '#555', lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px', fontWeight: 400 }}>
                Academy 21 France vous accompagne vers l&apos;excellence entrepreneuriale avec des formations d&apos;élite et un réseau international de leaders.
              </p>

              {/* Boutons */}
              {!loading && (
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
                  <Link href="/rejoindre-academie" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: '#C8102E', color: 'white',
                    fontFamily: 'Montserrat,sans-serif', fontWeight: 800,
                    fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '16px 32px', borderRadius: '8px', textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(200,16,46,0.3)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}>
                    Rejoindre l&apos;Académie
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  {user ? (
                    <Link href="/dashboard" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '10px',
                      background: 'white', color: '#1a1a1a',
                      fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                      fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '16px 32px', borderRadius: '8px', textDecoration: 'none',
                      border: '2px solid #e0e2e6',
                    }}>
                      Mon espace
                    </Link>
                  ) : (
                    <Link href="/formations" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '10px',
                      background: 'white', color: '#1a1a1a',
                      fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                      fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '16px 32px', borderRadius: '8px', textDecoration: 'none',
                      border: '2px solid #e0e2e6',
                    }}>
                      Voir les formations
                    </Link>
                  )}
                </div>
              )}

              {/* Stats inline */}
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                {STATS.map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,2.5vw,28px)', color: '#C8102E' }}>{s.num}</div>
                    <div style={{ fontSize: '11px', color: '#aaa', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuel droit */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)', aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                  alt="Academy 21 France"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(200,16,46,0.3) 0%, transparent 60%)', borderRadius: '16px' }} />
              </div>

              {/* Badge flottant */}
              <div style={{
                position: 'absolute', bottom: '-20px', left: '-20px',
                background: 'white', borderRadius: '12px',
                padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🏆</div>
                <div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>Leader Academy</div>
                  <div style={{ fontSize: '12px', color: '#aaa' }}>Réseau international</div>
                </div>
              </div>

              {/* Badge Dream Action Success */}
              <div style={{
                position: 'absolute', top: '-16px', right: '-16px',
                background: '#C8102E', borderRadius: '12px',
                padding: '14px 18px', boxShadow: '0 8px 32px rgba(200,16,46,0.3)',
              }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px', color: 'white', lineHeight: 1.4 }}>
                  Dream.<br />Action.<br />Success.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALEURS DÉFILANTES ══ */}
      <section style={{ background: '#C8102E', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '48px', animation: 'scroll 20s linear infinite', whiteSpace: 'nowrap' }}>
          {[...VALUES, ...VALUES].map((v, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span>{v.icon}</span> {v.label}
              <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: '24px' }}>●</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══ PROGRAMMES ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f7f8fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,60px)' }}>
            <span style={{ display: 'inline-block', background: '#fff5f5', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', padding: '4px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
              Catalogue
            </span>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#1a1a1a', marginBottom: '12px' }}>
              Nos <span style={{ color: '#C8102E' }}>Programmes</span>
            </h2>
            <p style={{ color: '#888', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
              Trois parcours d&apos;excellence pour chaque étape de votre développement entrepreneurial.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {PROGRAMMES.map(p => (
              <Link key={p.title} href={p.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eceef1', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
                >
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }} />
                    <div style={{ height: '4px', position: 'absolute', top: 0, left: 0, right: 0, background: p.color }} />
                    <span style={{ position: 'absolute', top: '16px', left: '16px', background: p.color, color: 'white', padding: '4px 14px', borderRadius: '100px', fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.tag}</span>
                    <h3 style={{ position: 'absolute', bottom: '16px', left: '16px', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '22px', color: 'white', margin: 0 }}>{p.title}</h3>
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{p.desc}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: p.color, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      En savoir plus
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/formations" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', border: '2px solid #C8102E', borderRadius: '8px', textDecoration: 'none' }}>
              Voir toutes les formations
            </Link>
            <Link href="/rejoindre-academie" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Rejoindre l&apos;Académie →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ POURQUOI A21 ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }} className="why-grid">
            <div>
              <span style={{ display: 'inline-block', background: '#f0f6ff', color: '#1a6fc4', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', padding: '4px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>
                Pourquoi A21 ?
              </span>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(26px,3.5vw,42px)', color: '#1a1a1a', marginBottom: '20px', lineHeight: 1.15 }}>
                Un système qui construit des <span style={{ color: '#C8102E' }}>leaders</span>
              </h2>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.8, marginBottom: '28px' }}>
                Academy Twenty One est un système de support international axé sur le Marketing de Réseau. Nous sommes une académie spécialisée dans le développement personnel et le coaching en leadership.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: '🎯', title: 'Mission', text: 'Apporter de la vie dans la vie des autres à travers des valeurs, des rêves et l\'action.' },
                  { icon: '🔭', title: 'Vision', text: 'Faire de chaque membre un pionnier dans sa propre vie.' },
                  { icon: '🌍', title: 'Impact', text: '75+ pays, 1M+ participants, 2000+ séminaires par an.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', background: '#f7f8fa', borderRadius: '10px', border: '1px solid #e0e2e6' }}>
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {STATS.map(s => (
                <div key={s.label} style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>{s.icon}</div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,3vw,36px)', color: '#C8102E', marginBottom: '4px' }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: '#aaa', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f7f8fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: '#fdf9e8', color: '#f0a500', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', padding: '4px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
              Notre ADN
            </span>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#1a1a1a' }}>
              Nos <span style={{ color: '#f0a500' }}>9 Valeurs</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e0e2e6', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{v.icon}</div>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{v.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/nos-valeurs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#f0a500', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', border: '2px solid #f0a500', borderRadius: '8px', textDecoration: 'none' }}>
              Découvrir nos valeurs →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: '#e8f5e9', color: '#28a745', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', padding: '4px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
              Témoignages
            </span>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#1a1a1a' }}>
              Ils ont <span style={{ color: '#28a745' }}>transformé</span> leur vie
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {[
              { nom: 'Marie K.', pays: '🇫🇷 France', grade: 'Executive Ambassador', texte: 'Academy 21 a complètement transformé ma vision des affaires. En moins d\'un an, j\'ai atteint ma liberté financière.' },
              { nom: 'Jean-Pierre M.', pays: '🇨🇩 Congo', grade: 'Senior Ambassador', texte: 'Les formations A21 m\'ont donné les outils pour transformer ma vie et celle de ma famille. Le système fonctionne.' },
              { nom: 'Aisha D.', pays: '🇸🇳 Sénégal', grade: 'Ambassador', texte: 'Ce qui m\'a le plus marquée c\'est la communauté. Des personnes bienveillantes qui s\'entraident pour réussir.' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#f7f8fa', borderRadius: '12px', padding: '24px', border: '1px solid #e0e2e6', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '48px', color: 'rgba(200,16,46,0.08)', fontFamily: 'Georgia,serif', lineHeight: 1 }}>"</div>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>"{t.texte}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #C8102E, #1a0005)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '16px', color: 'white', flexShrink: 0 }}>{t.nom[0]}</div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>{t.nom}</div>
                    <div style={{ fontSize: '12px', color: '#aaa' }}>{t.pays} · {t.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/temoignages" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#28a745', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', border: '2px solid #28a745', borderRadius: '8px', textDecoration: 'none' }}>
              Voir tous les témoignages →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #C8102E 0%, #8b0000 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,56px)', color: 'white', marginBottom: '16px', lineHeight: 1.1 }}>
            Reinvent Your Future
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(16px,1.8vw,18px)', maxWidth: '440px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            Rejoignez des milliers d&apos;entrepreneurs qui transforment leur avenir avec Academy 21 France.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {user ? (
              <Link href="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'white', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
                Mon espace membre →
              </Link>
            ) : (
              <Link href="/rejoindre-academie" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'white', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
                Rejoindre l&apos;Académie →
              </Link>
            )}
            <Link href="/evenements" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Voir les événements
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}