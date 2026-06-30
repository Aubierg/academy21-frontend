'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CandidaturePage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    nationalite: '',
    residence: '',
    motivation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.prenom || !form.nom || !form.email || !form.telephone || !form.nationalite || !form.residence) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.motivation) { setError('Veuillez écrire une lettre de motivation.'); return; }
    if (form.motivation.length > 500) { setError('La lettre de motivation ne doit pas dépasser 500 caractères.'); return; }
    setLoading(true);
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

      const res = await fetch(`${BASE_URL}/api/candidatures`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          nationalite: form.nationalite,
          residence: form.residence,
          motivation: form.motivation,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur envoi');
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ minHeight: '100vh', background: '#f7f8fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ maxWidth: '520px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(40,167,69,0.1)', border: '3px solid #28a745', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', margin: '0 auto 24px' }}>✓</div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,36px)', color: '#1a1a1a', marginBottom: '12px' }}>
            Candidature envoyée !
          </h1>
          <p style={{ color: '#777', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
            Merci <strong>{form.prenom}</strong> ! Votre candidature a bien été reçue. Vous recevrez un email de confirmation et notre équipe vous contactera dans les plus brefs délais.
          </p>
          <div style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid #C8102E', borderRadius: '8px', padding: '16px 20px', marginBottom: '28px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Prochaines étapes</div>
            {[
              'Vous recevez un email de confirmation',
              'Notre équipe étudie votre candidature',
              'Vous êtes contacté par email ou téléphone',
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '10px', flexShrink: 0 }}>{i + 1}</div>
                <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C8102E', color: 'white', padding: '14px 32px', borderRadius: '8px', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(32px,5vw,56px) 0 clamp(20px,3vw,32px)' }}>
        <div className="container">
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', textDecoration: 'none' }}>
            ← Retour à l&apos;accueil
          </Link>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span style={{ background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Candidature</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,4vw,38px)', color: '#1a1a1a', marginBottom: '8px' }}>
            Rejoindre <span style={{ color: '#C8102E' }}>Academy 21</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '14px', maxWidth: '500px' }}>
            Remplissez ce formulaire pour soumettre votre candidature. Notre équipe vous répondra dans les meilleurs délais.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(24px,4vw,48px) 24px' }}>

        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '36px', maxWidth: '360px' }}>
          {[{ num: 1, label: 'Vos informations' }, { num: 2, label: 'Motivation' }].map((s, i) => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < 1 ? 1 : 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px', background: step >= s.num ? '#C8102E' : '#e0e2e6', color: step >= s.num ? 'white' : '#aaa' }}>
                  {step > s.num ? '✓' : s.num}
                </div>
                <span style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: step >= s.num ? '#1a1a1a' : '#aaa', whiteSpace: 'nowrap' }}>{s.label}</span>
              </div>
              {i < 1 && <div style={{ flex: 1, height: '2px', background: step > s.num ? '#C8102E' : '#e0e2e6', margin: '0 8px', marginBottom: '20px' }} />}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: '28px', alignItems: 'start' }} className="candidature-grid">

          {/* Étape 1 */}
          {step === 1 && (
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px,4vw,36px)' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', marginBottom: '24px', color: '#1a1a1a' }}>
                Vos informations personnelles
              </h2>
              {error && <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.3)', borderLeft: '4px solid #C8102E', borderRadius: '6px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#C8102E' }}>{error}</div>}
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
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone *</label>
                  <input type="tel" name="telephone" className="form-input" placeholder="+33 6 XX XX XX XX" value={form.telephone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Nationalité *</label>
                  <input name="nationalite" className="form-input" placeholder="Ex: Française, Camerounaise..." value={form.nationalite} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{ marginBottom: '28px' }}>
                  <label className="form-label">Lieu de résidence *</label>
                  <input name="residence" className="form-input" placeholder="Ex: Paris, France" value={form.residence} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px' }}>
                  Continuer → Motivation
                </button>
              </form>
            </div>
          )}

          {/* Étape 2 */}
          {step === 2 && (
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px,4vw,36px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', color: '#1a1a1a' }}>
                  Motivation
                </h2>
                <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#C8102E', fontSize: '12px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>
                  ← Modifier mes infos
                </button>
              </div>

              {/* Récap */}
              <div style={{ background: '#f7f8fa', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '14px 18px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>{form.prenom} {form.nom}</div>
                <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{form.email} · {form.telephone}</div>
                <div style={{ fontSize: '13px', color: '#888' }}> {form.nationalite} · {form.residence}</div>
              </div>

              {error && <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.3)', borderLeft: '4px solid #C8102E', borderRadius: '6px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#C8102E' }}>{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label">Lettre de motivation *</label>
                  <textarea
                    name="motivation"
                    className="form-input"
                    placeholder="Expliquez pourquoi vous souhaitez rejoindre Academy 21, vos objectifs, votre parcours... (500 caractères max)"
                    value={form.motivation}
                    onChange={handleChange}
                    rows={8}
                    maxLength={500}
                    style={{ resize: 'vertical' }}
                    required
                  />
                  <div style={{ fontSize: '12px', color: form.motivation.length > 450 ? '#C8102E' : '#aaa', textAlign: 'right', marginTop: '4px' }}>
                    {form.motivation.length}/500 caractères
                  </div>
                </div>



                <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px' }}>
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.6s linear infinite' }} />
                      Envoi en cours...
                    </span>
                  ) : 'Envoyer ma candidature'}
                </button>
              </form>
            </div>
          )}

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ background: 'linear-gradient(135deg, white 0%, #1a0005 100%)', borderRadius: '12px', padding: '24px', color: 'white' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', marginBottom: '8px' }}>
              
              </div>
             
              
                
               <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: 'white', marginBottom: '6px' }}>Une question ?</div>
              <a href="mailto:contact@academy21france.fr" style={{ fontSize: '12px', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>
               ndjiyaaubierge@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) { .candidature-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}