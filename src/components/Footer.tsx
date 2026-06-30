'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: 'white', padding: '60px 0 28px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '22px', marginBottom: '12px' }}>
              <span style={{ color: '#C8102E' }}>ACADEMY</span> 21
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#666', fontWeight: 400, marginTop: '2px' }}>FRANCE</div>
            </div>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.8, marginBottom: '20px' }}>Dream. Action. Success.<br />Reinvent Your Future.</p>
            {/* Réseaux sociaux */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.facebook.com/academy21france" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#1877F2'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#2a2a2a'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.youtube.com/@academytwentyone" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#FF0000'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#2a2a2a'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/academy21france" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#0A66C2'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#2a2a2a'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg>
              </a>
              <a href="https://www.instagram.com/academy21france" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#E1306C'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#2a2a2a'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', color: '#C8102E', marginBottom: '20px', textTransform: 'uppercase' }}>Navigation</h4>
            {[{ href: '/', label: 'Accueil' }, { href: '/formations', label: 'Formations' }, { href: '/evenements', label: 'Événements' }, { href: '/dashboard', label: 'Mon espace' }].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: '#888', fontSize: '13px', marginBottom: '10px', textDecoration: 'none' }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', color: '#C8102E', marginBottom: '20px', textTransform: 'uppercase' }}>Légal</h4>
            {['CGV', 'Politique de confidentialité', 'Mentions légales'].map(t => (
              <span key={t} style={{ display: 'block', color: '#888', fontSize: '13px', marginBottom: '10px', cursor: 'pointer' }}>{t}</span>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', color: '#C8102E', marginBottom: '20px', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ color: '#888', fontSize: '13px', lineHeight: 2.2 }}>
              <div>6 Rue des Deux Communes, Quincy-sous-Sénart</div>
              <div>contact@academy21.fr</div>
              <div>📞 +33 6 74 89 59 69</div>
            </div>
          </div>
        </div>
        {/* CARTE */}
        <div style={{ marginBottom: '48px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #2a2a2a' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.5!2d2.5167!3d48.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6+Rue+des+Deux+Communes%2C+91480+Quincy-sous-S%C3%A9nart!5e0!3m2!1sfr!2sfr!4v1"
            width="100%"
            height="250"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ color: '#555', fontSize: '12px' }}>© {new Date().getFullYear()} Academy 21 France. Tous droits réservés.</span>
          <div style={{ height: '3px', width: '40px', background: '#C8102E', borderRadius: '2px' }} />
        </div>
      </div>
    </footer>
  );
}
