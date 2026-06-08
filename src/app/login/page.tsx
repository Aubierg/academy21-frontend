'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, user, loading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard';

  // Si déjà connecté, rediriger
  useEffect(() => {
    if (!authLoading && user) {
      router.push(redirect);
    }
  }, [user, authLoading, router, redirect]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      router.push(redirect);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Identifiants incorrects');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '68px', display: 'flex', background: '#f7f8fa' }}>

      {/* Panneau gauche rouge */}
      <div style={{ width: '420px', flexShrink: 0, background: '#C8102E', padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="auth-panel">
        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '36px', color: 'white', marginBottom: '24px', lineHeight: 1 }}>ACADEMY<br />21</div>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px' }}>
          Votre espace personnel pour accéder à vos formations et suivre votre progression.
        </p>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '32px' }}>
          {['Dream', 'Action', 'Success'].map(w => (
            <div key={w} style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '22px', marginBottom: '8px' }}>{w}.</div>
          ))}
        </div>
      </div>

      {/* Formulaire */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '32px', marginBottom: '8px', color: '#1a1a1a' }}>Connexion</h1>
          <p style={{ color: '#999', fontSize: '15px', marginBottom: '36px' }}>
            Bienvenue ! Connectez-vous à votre espace membre.
          </p>

          {/* Message si redirigé depuis une page protégée */}
          {searchParams.get('redirect') && (
            <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: '6px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#856404' }}>
              Connectez-vous pour accéder à cette page.
            </div>
          )}

          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="votre@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group" style={{ marginBottom: '28px' }}>
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px' }}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.6s linear infinite' }} />
                  Connexion...
                </span>
              ) : 'Se connecter'}
            </button>
          </form>

          <div className="divider" />

          <p style={{ textAlign: 'center', color: '#999', fontSize: '14px' }}>
            Pas encore de compte ?{' '}
            <Link href="/register" style={{ color: '#C8102E', fontWeight: 700 }}>
              S&apos;inscrire gratuitement
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .auth-panel { display: none !important; } }
      `}</style>
    </div>
  );
}