'use client';
import { useState } from 'react';
import Link from 'next/link';

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Notre ADN',
    title: 'Nos Valeurs',
    subtitle: 'Academy Twenty One place l\'être humain au centre de tout. Voici les valeurs fondamentales qui guident chaque membre de notre communauté.',
    quote: '"L\'argent est important, la liberté financière aussi. Mais c\'est l\'être humain qui donne de la valeur à l\'argent, et non l\'inverse."',
    author: '— Dr Raoul Ruben Njionou, Fondateur d\'Academy Twenty One',
    mission: 'Notre Mission',
    missionText: 'Nous sommes un système qui construit des hommes et des femmes ! Nous renouvelons les esprits parce que nous avons tous une mission en nous. Nous vous poussons à rêver, nous vous guidons dans l\'action, et le succès est inévitable.',
    vision: 'Notre Vision',
    visionText: 'Nous avons parcouru un long chemin et nous sommes restés fermes grâce aux principes qui ont servi d\'ancre tout au long de notre processus. La vision portée par notre système n\'est pas une utopie, elle grandit avec le temps.',
    cta: 'Rejoindre l\'Académie',
    ctaDesc: 'Partagez ces valeurs ? Rejoignez une communauté internationale d\'entrepreneurs.',
    postuler: 'Déposer ma candidature →',
  },
  en: {
    back: '← Back',
    tag: 'Our DNA',
    title: 'Our Values',
    subtitle: 'Academy Twenty One places the human being at the center of everything. Here are the core values that guide every member of our community.',
    quote: '"Money is important, financial freedom too. However, it is the human being who gives value to money and not the other way round."',
    author: '— Dr Raoul Ruben Njionou, Founder of Academy Twenty One',
    mission: 'Our Mission',
    missionText: 'We are a system that builds people! We renew minds because we all have a mission invested in us. We push you to dream, we see you through action, and success is inevitable in the end.',
    vision: 'Our Vision',
    visionText: 'We\'ve come a long way and we stood firm thanks to the principles that served as an anchor throughout our process. The vision born by our system is not a utopia, rather it grows with time.',
    cta: 'Join the Academy',
    ctaDesc: 'Share these values? Join an international community of entrepreneurs.',
    postuler: 'Submit my application →',
  },
};

const VALUES = [
  { icon: '🙏', name: { fr: 'Foi', en: 'Faith' }, desc: { fr: 'La foi est le fondement de tout ce que nous accomplissons. Elle nous permet de croire en nos rêves même quand le chemin semble difficile.', en: 'Faith is the foundation of everything we accomplish. It allows us to believe in our dreams even when the path seems difficult.' }, color: '#C8102E' },
  { icon: '🤝', name: { fr: 'Charité', en: 'Charity' }, desc: { fr: 'Plus nous donnons, plus nous recevons. La générosité est au cœur de notre communauté et de notre réussite collective.', en: 'The more we give, the more we receive. Generosity is at the heart of our community and our collective success.' }, color: '#1a6fc4' },
  { icon: '💪', name: { fr: 'Persévérance', en: 'Perseverance' }, desc: { fr: 'Le succès n\'est pas immédiat. Nous croyons fermement que la persévérance face aux obstacles est la clé de tout accomplissement durable.', en: 'Success is not immediate. We firmly believe that perseverance in the face of obstacles is the key to any lasting achievement.' }, color: '#f0a500' },
  { icon: '☀️', name: { fr: 'Attitude Positive', en: 'Positive Attitude' }, desc: { fr: 'Notre état d\'esprit détermine nos résultats. Une attitude positive transforme les défis en opportunités et attire le succès.', en: 'Our mindset determines our results. A positive attitude transforms challenges into opportunities and attracts success.' }, color: '#28a745' },
  { icon: '🎯', name: { fr: 'Ambition', en: 'Ambition' }, desc: { fr: 'Viser grand est le premier pas vers la réalisation de ses rêves. Nous encourageons chaque membre à repousser ses limites.', en: 'Aiming high is the first step towards achieving your dreams. We encourage every member to push their limits.' }, color: '#7b2d8b' },
  { icon: '🔥', name: { fr: 'Ne Jamais Abandonner', en: 'Never Give Up' }, desc: { fr: 'Chaque chute est une leçon. L\'échec n\'est pas la fin — c\'est une étape vers la réussite. Nous ne baissons jamais les bras.', en: 'Every fall is a lesson. Failure is not the end — it\'s a step towards success. We never give up.' }, color: '#C8102E' },
  { icon: '👑', name: { fr: 'Style de Vie', en: 'Lifestyle' }, desc: { fr: 'L\'excellence se reflète dans chaque aspect de notre vie. Nous cultivons un style de vie qui inspire et attire la prospérité.', en: 'Excellence is reflected in every aspect of our life. We cultivate a lifestyle that inspires and attracts prosperity.' }, color: '#1a6fc4' },
  { icon: '🛡️', name: { fr: 'Loyauté', en: 'Loyalty' }, desc: { fr: 'La loyauté envers notre communauté, nos partenaires et nos valeurs est ce qui nous rend forts et durables.', en: 'Loyalty to our community, our partners and our values is what makes us strong and lasting.' }, color: '#f0a500' },
  { icon: '⚡', name: { fr: 'Rigueur', en: 'Rigor' }, desc: { fr: 'La discipline et la rigueur dans l\'action quotidienne sont les garantes de résultats exceptionnels sur le long terme.', en: 'Discipline and rigor in daily action are the guarantors of exceptional results in the long term.' }, color: '#28a745' },
];

export default function NosValeursPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(24px,4vw,40px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textDecoration: 'none' }}>{t.back}</Link>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['fr', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', background: lang === l ? '#C8102E' : '#f0f1f3', color: lang === l ? 'white' : '#555', textTransform: 'uppercase' }}>{l}</button>
              ))}
            </div>
          </div>
          <span style={{ background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '12px' }}>{t.tag}</span>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: '#1a1a1a', marginBottom: '10px' }}>{t.title}</h1>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '600px', lineHeight: 1.7 }}>{t.subtitle}</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(32px,5vw,56px) 24px' }}>

        {/* Citation */}
        <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', borderRadius: '12px', padding: 'clamp(28px,4vw,48px)', marginBottom: '48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '20px', fontSize: '120px', color: 'rgba(200,16,46,0.15)', fontFamily: 'Georgia,serif', lineHeight: 1 }}>"</div>
          <p style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(16px,2.5vw,22px)', color: 'white', lineHeight: 1.75, fontStyle: 'italic', maxWidth: '700px', margin: '0 auto 16px', position: 'relative', zIndex: 1 }}>
            {t.quote}
          </p>
          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1 }}>{t.author}</div>
        </div>

        {/* Mission + Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '48px' }} className="mv-grid">
          {[
            { title: t.mission, text: t.missionText, icon: '🎯', color: '#C8102E' },
            { title: t.vision, text: t.visionText, icon: '🔭', color: '#1a6fc4' },
          ].map(item => (
            <div key={item.title} style={{ background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6', borderTop: `4px solid ${item.color}`, padding: 'clamp(20px,3vw,32px)' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(16px,2vw,22px)', color: '#1a1a1a', marginBottom: '12px' }}>{item.title}</h2>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.75 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Les 9 valeurs */}
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3vw,32px)', color: '#1a1a1a', marginBottom: '24px', textAlign: 'center' }}>
          {lang === 'fr' ? 'Les 9 Valeurs Fondamentales' : 'The 9 Core Values'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', borderLeft: `4px solid ${v.color}`, padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '28px' }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '16px', color: v.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{v.name[lang]}</h3>
              </div>
              <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{v.desc[lang]}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', borderRadius: '12px', padding: 'clamp(32px,5vw,56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,34px)', color: 'white', marginBottom: '12px' }}>{t.cta}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', marginBottom: '28px' }}>{t.ctaDesc}</p>
          <Link href="/candidature" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            {t.postuler}
          </Link>
        </div>
      </div>

      <style>{`@media (max-width: 700px) { .mv-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}