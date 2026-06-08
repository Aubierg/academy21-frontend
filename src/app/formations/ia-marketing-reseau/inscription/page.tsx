'use client';
import { useState } from 'react';
import Link from 'next/link';

const FORMATION = {
  id: 'ia-marketing-reseau',
  title: "IA appliquée au Marketing de Réseau",
  price: 490,
};

export default function InscriptionPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    entreprise: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Étape 1 → 2 : valider le formulaire et passer au paiement
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.prenom || !form.nom || !form.email || !form.telephone) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Étape 2 : paiement — on envoie les infos avec le paiement
  const handlePayment = async (method: 'stripe' | 'paypal') => {
    setLoading(true);
    setError('');
    try {
      // On stocke les infos du client en sessionStorage
      // pour les récupérer sur la page de succès
      sessionStorage.setItem('inscription_data', JSON.stringify(form));

      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('ato_token');

      if (method === 'stripe') {
        const res = await fetch(`${BASE_URL}/api/payments/checkout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            formationId: FORMATION.id,
            amount: FORMATION.price,
            title: FORMATION.title,
            // Infos client envoyées au backend
            clientInfo: form,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Erreur Stripe');
        window.location.href = data.url;
      } else {
        const res = await fetch(`${BASE_URL}/api/payments/paypal/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            formationId: FORMATION.id,
            amount: FORMATION.price,
            title: FORMATION.title,
            clientInfo: form,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Erreur PayPal');
        window.location.href = data.url;
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur paiement');
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(32px, 5vw, 56px) 0 clamp(20px, 3vw, 32px)' }}>
        <div className="container">
          <Link href="/formations/ia-marketing-reseau" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            ← Retour à la formation
          </Link>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px, 4vw, 34px)', color: '#1a1a1a', marginBottom: '6px' }}>
            Inscription — <span style={{ color: '#C8102E' }}>IA & Marketing de Réseau</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '14px' }}>Academy Twenty One Paris · 20 heures · Distanciel synchrone</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(24px, 4vw, 48px) 24px' }}>

        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '36px', maxWidth: '400px' }}>
          {[
            { num: 1, label: 'Vos informations' },
            { num: 2, label: 'Paiement' },
            { num: 3, label: 'Confirmation' },
          ].map((s, i) => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < 2 ? 1 : 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px',
                  background: step >= s.num ? '#C8102E' : '#e0e2e6',
                  color: step >= s.num ? 'white' : '#aaa',
                  transition: 'all 0.3s',
                }}>
                  {step > s.num ? '✓' : s.num}
                </div>
                <span style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: step >= s.num ? '#1a1a1a' : '#aaa', whiteSpace: 'nowrap' }}>
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div style={{ flex: 1, height: '2px', background: step > s.num ? '#C8102E' : '#e0e2e6', margin: '0 6px', marginBottom: '20px', transition: 'background 0.3s' }} />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: '28px', alignItems: 'start' }} className="inscription-grid">

          {/* ══ ÉTAPE 1 : Infos personnelles ══ */}
          {step === 1 && (
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px, 4vw, 36px)' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', marginBottom: '8px', color: '#1a1a1a' }}>
                Vos informations personnelles
              </h2>
              <p style={{ color: '#aaa', fontSize: '13px', marginBottom: '24px', lineHeight: 1.6 }}>
                Ces informations nous permettront de vous contacter et de vous envoyer vos accès à la formation après confirmation du paiement.
              </p>

              {error && <div className="error-msg">{error}</div>}

              <form onSubmit={handleNext}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Prénom *</label>
                    <input name="prenom" className="form-input" placeholder="Jean" value={form.prenom} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nom *</label>
                    <input name="nom" className="form-input" placeholder="Dupont" value={form.nom} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" name="email" className="form-input" placeholder="jean.dupont@email.com" value={form.email} onChange={handleChange} required />
                  <p style={{ fontSize: '11px', color: '#aaa', marginTop: '5px' }}>Vos identifiants de connexion seront envoyés à cette adresse.</p>
                </div>

                <div className="form-group">
                  <label className="form-label">Téléphone *</label>
                  <input type="tel" name="telephone" className="form-input" placeholder="+33 6 XX XX XX XX" value={form.telephone} onChange={handleChange} required />
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label">Entreprise / Activité</label>
                  <input name="entreprise" className="form-input" placeholder="Votre activité MLM (optionnel)" value={form.entreprise} onChange={handleChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '28px' }}>
                  <label className="form-label">Message / Questions (optionnel)</label>
                  <textarea name="message" className="form-input" placeholder="Vos questions sur la formation..." value={form.message} onChange={handleChange} rows={3} style={{ resize: 'vertical' }} />
                </div>

                {/* Info importante */}
                <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.2)', borderRadius: '8px', padding: '14px 16px', marginBottom: '24px', display: 'flex', gap: '10px' }}>
                  <span style={{ fontSize: '16px', flexShrink: 0 }}>ℹ️</span>
                  <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.65 }}>
                    <strong>Aucun compte ne sera créé à cette étape.</strong> Après confirmation de votre paiement, notre équipe vous enverra vos identifiants de connexion par email sous 24h ouvrées.
                  </p>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px' }}>
                  Continuer vers le paiement →
                </button>
              </form>
            </div>
          )}

          {/* ══ ÉTAPE 2 : Paiement ══ */}
          {step === 2 && (
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px, 4vw, 36px)' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', marginBottom: '8px', color: '#1a1a1a' }}>
                Choisir votre mode de paiement
              </h2>

              {/* Récap client */}
              <div style={{ background: '#f7f8fa', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '14px 18px', marginBottom: '24px' }}>
                <div style={{ fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '8px' }}>Récapitulatif</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>{form.prenom} {form.nom}</div>
                    <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{form.email}</div>
                    <div style={{ fontSize: '13px', color: '#888' }}>{form.telephone}</div>
                  </div>
                  <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#C8102E', fontSize: '12px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', alignSelf: 'flex-start' }}>
                    Modifier
                  </button>
                </div>
              </div>

              {/* Récap formation */}
              <div style={{ background: '#f7f8fa', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '14px 18px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a', marginBottom: '4px' }}>
                      IA appliquée au Marketing de Réseau
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '12px', color: '#888' }}>
                      <span>⏱ 20 heures</span>
                      <span>📡 Distanciel</span>
                      <span>📋 5 modules</span>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '22px', color: '#C8102E' }}>
                    {FORMATION.price.toLocaleString('fr-FR')} €
                  </div>
                </div>
              </div>

              {error && <div className="error-msg">{error}</div>}

              {/* Boutons paiement */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <button
                  onClick={() => handlePayment('stripe')}
                  disabled={loading}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 20px', background: 'white', border: '2px solid #C8102E', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', width: '100%', transition: 'background 0.2s' }}
                >
                  <div style={{ width: '44px', height: '44px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/stripe.png" alt="Stripe" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', color: '#1a1a1a' }}>Payer par carte bancaire</div>
                    <div style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>Visa, Mastercard, CB — via Stripe sécurisé</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: '#C8102E', fontWeight: 900, fontSize: '20px' }}>→</span>
                </button>

                <button
                  onClick={() => handlePayment('paypal')}
                  disabled={loading}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 20px', background: 'white', border: '2px solid #e0e2e6', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', width: '100%', transition: 'all 0.2s' }}
                >
                  <div style={{ width: '44px', height: '44px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/paypal.png" alt="PayPal" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', color: '#1a1a1a' }}>Payer via PayPal</div>
                    <div style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>Compte PayPal ou carte via PayPal</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: '#f0a500', fontWeight: 900, fontSize: '20px' }}>→</span>
                </button>
              </div>

              {loading && (
                <div style={{ textAlign: 'center', color: '#aaa', fontSize: '13px', padding: '8px' }}>
                  <div className="loading-spinner" style={{ width: '24px', height: '24px', margin: '0 auto 8px' }} />
                  Redirection vers le paiement sécurisé...
                </div>
              )}

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f0f1f3' }}>
                {['🔒 Paiement SSL sécurisé', '✓ Données protégées', '📧 Confirmation par email'].map(t => (
                  <span key={t} style={{ fontSize: '11px', color: '#aaa', fontFamily: 'Montserrat,sans-serif', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* ══ SIDEBAR ══ */}
          <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* Récap formation */}
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ background: '#1a1a1a', padding: '16px 20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>🤖</span>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '12px', color: 'white', lineHeight: 1.4 }}>
                  IA appliquée au<br />Marketing de Réseau
                </div>
              </div>
              <div style={{ padding: '14px 18px' }}>
                {[
                  { icon: '⏱', val: '20 heures' },
                  { icon: '📋', val: '5 modules de 4h' },
                  { icon: '📡', val: 'Distanciel synchrone' },
                  { icon: '👥', val: '12–20 participants' },
                  { icon: '📄', val: 'Support de cours inclus' },
                  { icon: '📋', val: 'Templates post-formation' },
                ].map(item => (
                  <div key={item.val} style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #f7f8fa', fontSize: '13px', color: '#555' }}>
                    <span style={{ flexShrink: 0 }}>{item.icon}</span> {item.val}
                  </div>
                ))}
              </div>
            </div>

            {/* Ce qui se passe après */}
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '16px 18px' }}>
              <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: '#1a1a1a', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Après votre paiement
              </h4>
              {[
                { icon: '✅', step: '1', text: 'Vous recevez un email de confirmation de paiement' },
                { icon: '👨‍💼', step: '2', text: 'Notre équipe prépare votre accès' },
                { icon: '🔑', step: '3', text: 'Vous recevez vos identifiants par email sous 24h' },
                { icon: '🎓', step: '4', text: 'Vous vous connectez et accédez à votre formation' },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>
                    {item.step}
                  </div>
                  <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.6 }}>
                    {item.icon} {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.15)', borderRadius: '8px', padding: '14px 18px' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: '#C8102E', marginBottom: '6px' }}>
                Une question ?
              </div>
              <a href="mailto:contact@academy21france.fr" style={{ fontSize: '12px', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>
                ✉️ contact@academy21france.fr
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .inscription-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
