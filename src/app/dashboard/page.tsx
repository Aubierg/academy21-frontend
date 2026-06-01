'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api, Payment } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

interface DashboardData {
  user: { id: string; email: string; role: string; memberSince: string };
  payments: Payment[];
  totalSpent: number;
}

export default function DashboardPage() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      api.member.dashboard()
        .then(setData)
        .catch(() => setError('Impossible de charger votre tableau de bord.'))
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (authLoading || loading) {
    return (
      <div style={{ paddingTop: '68px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loading-spinner" />
      </div>
    );
  }

  if (!user) return null;

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  const statusLabel = (s: string) => {
    const map: Record<string, { label: string; color: string }> = {
      completed: { label: 'Payé', color: '#7EC82A' },
      success: { label: 'Payé', color: '#7EC82A' },
      pending: { label: 'En attente', color: '#F5C800' },
      failed: { label: 'Échoué', color: '#D41217' },
    };
    return map[s] || { label: s, color: '#888' };
  };

  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        padding: '60px 0 40px',
        background: 'linear-gradient(180deg, rgba(212,18,23,0.07) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="tag tag-red" style={{ marginBottom: '12px' }}>👤 Espace Membre</div>
              <h1 style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(28px, 4vw, 48px)',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>
                Bonjour, <span style={{ color: '#D41217' }}>{user.email.split('@')[0]}</span>
              </h1>
              {data && (
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Membre depuis {formatDate(data.user.memberSince)} · {user.role === 'admin' ? '🔑 Admin' : '✅ Membre'}
                </p>
              )}
            </div>
            <button onClick={() => { logout(); router.push('/'); }} className="btn btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      <div className="container section">
        {error && <div className="error-msg">{error}</div>}

        {/* Stats */}
        {data && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {[
              { label: 'Total dépensé', value: `${data.totalSpent.toLocaleString('fr-FR')} €`, icon: '💰', color: '#C8A200' },
              { label: 'Formations achetées', value: data.payments.length.toString(), icon: '📚', color: '#1E6FA8' },
              { label: 'Statut', value: user.role === 'admin' ? 'Admin' : 'Membre', icon: '🏅', color: '#D41217' },
            ].map(s => (
              <div key={s.label} style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <div style={{ fontSize: '32px' }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: '24px', color: s.color }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick links */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <Link href="/formations" className="btn btn-primary" style={{ fontSize: '14px' }}>
            📚 Voir les formations
          </Link>
          <Link href="/evenements" className="btn btn-outline" style={{ fontSize: '14px' }}>
            🗓 Voir les événements
          </Link>
        </div>

        {/* Payments history */}
        <div>
          <h2 style={{ fontSize: '28px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Historique des <span style={{ color: '#D41217' }}>paiements</span>
          </h2>

          {data?.payments && data.payments.length === 0 ? (
            <div style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px',
              padding: '60px',
              textAlign: 'center',
              color: '#555',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
              <p>Aucun achat pour le moment.</p>
              <Link href="/formations" className="btn btn-primary" style={{ marginTop: '20px', fontSize: '14px', display: 'inline-flex' }}>
                Découvrir les formations
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {data?.payments.map(p => {
                const s = statusLabel(p.status);
                return (
                  <div key={p.id} style={{
                    background: '#111',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}>
                    <div>
                      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {p.formation?.title || 'Formation'}
                      </div>
                      <div style={{ color: '#555', fontSize: '13px' }}>
                        {formatDate(p.createdAt)}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '3px',
                        fontSize: '12px',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        background: `${s.color}18`,
                        color: s.color,
                        border: `1px solid ${s.color}40`,
                      }}>
                        {s.label}
                      </span>
                      <div style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '22px',
                        color: '#C8A200',
                      }}>
                        {p.amount.toLocaleString('fr-FR')} €
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
