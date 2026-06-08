'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get('session_id');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f7f8fa',
      padding: '40px 24px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '560px', width: '100%', animation: 'fadeUp 0.6s ease' }}>

        {/* Check */}
        <div style={{
          width: '80px', height: '80px',
          background: 'rgba(40,167,69,0.1)',
          border: '3px solid #28a745',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '36px', margin: '0 auto 24px',
          animation: 'pulse-green 2s ease infinite',
        }}>✓</div>

        <div className="tag tag-blue" style={{ marginBottom: '16px' }}>Paiement confirmé</div>

        <h1 style={{
          fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
          fontSize: 'clamp(32px, 6vw, 52px)',
          textTransform: 'uppercase', lineHeight: 1, marginBottom: '12px', color: '#1a1a1a',
        }}>
          Inscription confirmée !
        </h1>

        <p style={{ color: '#777', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
          Votre paiement a bien été reçu. Voici ce qui se passe maintenant :
        </p>

        {/* Étapes */}
        <div style={{
          background: 'white', border: '1px solid #e0e2e6',
          borderTop: '4px solid #C8102E',
          borderRadius: '8px', padding: '24px',
          marginBottom: '28px', textAlign: 'left',
        }}>
          {[
            { icon: '📧', step: '1', text: 'Vous recevez un email de confirmation de paiement' },
            { icon: '👨‍💼', step: '2', text: 'Notre équipe vérifie votre inscription et prépare votre accès' },
            { icon: '🔑', step: '3', text: 'Vous recevez vos identifiants de connexion par email sous 24h ouvrées' },
            { icon: '🎓', step: '4', text: 'Vous vous connectez et accédez à votre formation' },
          ].map(item => (
            <div key={item.step} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{
                width: '30px', height: '30px', borderRadius: '50%',
                background: '#C8102E', color: 'white', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px',
              }}>
                {item.step}
              </div>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65, paddingTop: '4px' }}>
                {item.icon} {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Info importante */}
        <div style={{
          background: '#fff5f5', border: '1px solid rgba(200,16,46,0.2)',
          borderRadius: '8px', padding: '16px 20px', marginBottom: '28px',
          display: 'flex', gap: '10px', alignItems: 'flex-start', textAlign: 'left',
        }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.65 }}>
            <strong>Ne créez pas de compte vous-même.</strong> Vos identifiants vous seront envoyés par email par notre équipe dans un délai de 24h ouvrées après confirmation du paiement.
          </p>
        </div>

        {sessionId && (
          <p style={{ color: '#bbb', fontSize: '11px', marginBottom: '24px', fontFamily: 'monospace' }}>
            Réf : {sessionId.substring(0, 24)}...
          </p>
        )}

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/formations" className="btn btn-primary" style={{ fontSize: '14px', padding: '14px 32px' }}>
            Voir d&apos;autres formations
          </Link>
          <Link href="/" className="btn btn-outline" style={{ fontSize: '14px', padding: '14px 32px' }}>
            Retour à l&apos;accueil
          </Link>
        </div>

      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(40,167,69,0.3); }
          50% { box-shadow: 0 0 0 16px rgba(40,167,69,0); }
        }
      `}</style>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="loading-spinner" />}>
      <SuccessContent />
    </Suspense>
  );
}