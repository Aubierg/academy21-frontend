'use client';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function HomePage() {
  const { user, loading } = useAuth();

  return (
    <div>

      {/* ══ HERO ══ */}
      <section style={{
        height: '100vh',
        minHeight: '600px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 60%, rgba(200,16,46,0.15) 100%)',
        }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#C8102E' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '68px' }}>
          <div style={{ maxWidth: '640px' }}>

            <h1 style={{
              fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
              fontSize: 'clamp(44px, 7vw, 88px)',
              color: 'white', lineHeight: 1.0,
              marginBottom: '28px', letterSpacing: '-0.02em',
            }}>
              Dream.<br />
              <span style={{ color: '#C8102E' }}>Action.</span><br />
              Success.
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8, marginBottom: '44px',
              maxWidth: '480px', fontWeight: 300,
            }}>
              Academy 21 France vous accompagne vers l&apos;excellence entrepreneuriale avec des formations d&apos;élite, présents sur 5 continents.
            </p>

            {/* Boutons — différents selon connexion */}
            {!loading && (
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '56px' }}>
                <Link href="/formations" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: '#C8102E', color: 'white',
                  fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                  fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '16px 32px', borderRadius: '4px',
                }}>
                  Voir les formations
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>

                {user ? (
                  <Link href="/dashboard" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: 'white', color: '#1a1a1a',
                    fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                    fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '16px 32px', borderRadius: '4px',
                  }}>
                    Mon espace
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                ) : (
                  <Link href="/register" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: 'white', color: '#1a1a1a',
                    fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                    fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '16px 32px', borderRadius: '4px',
                  }}>
                    Rejoindre l&apos;académie
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                )}
              </div>
            )}

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
              width: 'fit-content',
              gap: '0',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
            }}>
              {[
                { num: '75+', label: 'Pays' },
                { num: '1M+', label: 'Participants' },
                { num: '2000+', label: 'Séminaires / an' },
                { num: '5', label: 'Continents' },
              ].map((s, i) => (
                <div key={s.label} style={{
                  paddingLeft: i === 0 ? '0' : 'clamp(16px, 3vw, 36px)',
                  paddingRight: i === 3 ? '0' : 'clamp(16px, 3vw, 36px)',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'white', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROGRAMMES ══ */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f7f8fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', background: '#C8102E' }} />
              <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E' }}>Catalogue</span>
              <div style={{ width: '40px', height: '2px', background: '#C8102E' }} />
            </div>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(26px, 4vw, 44px)', color: '#1a1a1a' }}>
              Nos <span style={{ color: '#C8102E' }}>Programmes</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'A21 Training', desc: 'La formation fondamentale pour développer votre mindset et vos compétences business.', tag: 'Fondamental', color: '#C8102E', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
              { title: 'LeaderCamp', desc: 'Un événement intensif de plusieurs jours pour décupler vos performances en leadership.', tag: 'Intensif', color: '#f0a500', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80' },
              { title: 'Business Show', desc: 'La grande conférence annuelle avec des speakers internationaux de premier plan.', tag: 'Événement', color: '#1a6fc4', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80' },
            ].map((p) => (
              <div key={p.title} style={{
                background: 'white', borderRadius: '8px', overflow: 'hidden',
                border: '1px solid #eceef1', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                  <div style={{ height: '3px', position: 'absolute', top: 0, left: 0, right: 0, background: p.color }} />
                  <span style={{
                    position: 'absolute', bottom: '14px', left: '16px',
                    background: p.color, color: 'white',
                    padding: '4px 12px', borderRadius: '3px',
                    fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>{p.tag}</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '18px', marginBottom: '10px', color: '#1a1a1a' }}>{p.title}</h3>
                  <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{p.desc}</p>
                  <Link href="/formations" style={{
                    color: p.color, fontFamily: 'Montserrat,sans-serif',
                    fontWeight: 700, fontSize: '12px', textTransform: 'uppercase',
                    letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    En savoir plus
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/formations" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              color: '#C8102E', fontFamily: 'Montserrat,sans-serif',
              fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '12px 28px', border: '1.5px solid #C8102E', borderRadius: '4px',
            }}>
              Voir toutes les formations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.88)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 5vw, 56px)',
            color: 'white', marginBottom: '16px', lineHeight: 1.1,
          }}>
            Reinvent Your Future
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            maxWidth: '440px', margin: '0 auto 40px', lineHeight: 1.75,
          }}>
            Rejoignez des milliers d&apos;entrepreneurs qui transforment leur avenir avec Academy 21 France.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {user ? (
              <Link href="/dashboard" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'white', color: '#C8102E',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 800,
                fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '16px 36px', borderRadius: '4px',
              }}>
                Mon espace membre
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ) : (
              <Link href="/register" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'white', color: '#C8102E',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 800,
                fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '16px 36px', borderRadius: '4px',
              }}>
                Créer mon compte
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            )}
            <Link href="/evenements" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'transparent', color: 'white',
              fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '16px 36px', borderRadius: '4px',
              border: '2px solid rgba(255,255,255,0.5)',
            }}>
              Voir les événements
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}