'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    if (password !== confirm) { setError('Les mots de passe ne correspondent pas.'); return; }
    if (password.length < 6) { setError('Le mot de passe doit faire au moins 6 caractères.'); return; }
    setLoading(true);
    try { await register(email, password); router.push('/dashboard'); }
    catch (err: unknown) { setError(err instanceof Error ? err.message : "Erreur lors de l'inscription"); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '68px', display: 'flex', background: '#f7f8fa' }}>
      <div style={{ width: '420px', flexShrink: 0, background: '#1a1a1a', padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="auth-panel">
        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '36px', marginBottom: '24px' }}>
          <span style={{ color: '#C8102E' }}>ACADEMY</span><br /><span style={{ color: 'white' }}>21</span>
        </div>
        <p style={{ color: '#888', fontSize: '15px', lineHeight: 1.8, marginBottom: '36px' }}>Rejoignez des milliers d&apos;entrepreneurs qui transforment leur avenir avec Academy 21.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {['Accès à toutes les formations', 'Espace membre personnalisé', 'Historique de paiements', 'Communauté internationale'].map(p => (
            <div key={p} style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#ccc', fontSize: '14px' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0, color: 'white' }}>✓</div>
              {p}
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ width: '100%', maxWidth: '420px', animation: 'fadeUp 0.5s ease' }}>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '32px', marginBottom: '8px', color: '#1a1a1a' }}>Créer un compte</h1>
          <p style={{ color: '#999', fontSize: '15px', marginBottom: '36px' }}>Gratuit et sans engagement.</p>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="votre@email.com" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
            </div>
            <div className="form-group">
              <label className="form-label">Mot de passe</label>
              <input type="password" className="form-input" placeholder="Minimum 6 caractères" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="new-password" />
            </div>
            <div className="form-group" style={{ marginBottom: '28px' }}>
              <label className="form-label">Confirmer</label>
              <input type="password" className="form-input" placeholder="••••••••" value={confirm} onChange={e => setConfirm(e.target.value)} required autoComplete="new-password" />
            </div>
            <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px' }}>
              {loading ? 'Création...' : 'Créer mon compte gratuitement'}
            </button>
          </form>
          <div className="divider" />
          <p style={{ textAlign: 'center', color: '#999', fontSize: '14px' }}>
            Déjà membre ?{' '}<Link href="/login" style={{ color: '#C8102E', fontWeight: 700 }}>Se connecter</Link>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width: 768px) { .auth-panel { display: none !important; } }
      `}</style>
    </div>
  );
}