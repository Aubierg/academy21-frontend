export default function NosUniversitesPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f8fa' }}>
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>🔧</div>
        <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,40px)', color: '#1a1a1a', marginBottom: '16px' }}>
          Page en maintenance
        </h1>
        <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 32px' }}>
          Cette page est en cours de construction. Revenez bientôt !
        </p>
        <a href="/" style={{ display: 'inline-block', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none' }}>
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
