import Link from 'next/link';

const MODULES = [
  {
    num: '01',
    title: "Fondamentaux de l'IA et enjeux pour le Marketing de Réseau",
    duration: '4h',
    color: '#C8102E',
    competences: [
      "Comprendre les mécanismes de base de l'IA générative",
      "Identifier les transformations induites dans les fonctions commerciales et marketing",
    ],
    contenus: [
      "Définition et fonctionnement de l'intelligence artificielle générative",
      "Typologie des outils disponibles et cas d'usage professionnels",
      "Transformations des métiers commerciaux à l'ère de l'IA",
      "Opportunités et limites dans le secteur du marketing de réseau",
      "Cadre éthique, conformité et bonnes pratiques d'utilisation",
    ],
    tp: "Diagnostic des usages IA applicables à sa propre activité",
  },
  {
    num: '02',
    title: "Structuration de la Prospection Commerciale Assistée par IA",
    duration: '4h',
    color: '#1a6fc4',
    competences: [
      "Concevoir une stratégie de prospection optimisée",
      "Automatiser et structurer la qualification commerciale",
    ],
    contenus: [
      "Analyse et segmentation des cibles commerciales",
      "Construction de personas et qualification des prospects",
      "Rédaction assistée de scripts de prospection multicanaux",
      "Structuration d'un pipeline de prospection",
      "Mise en place de séquences de relance automatisées",
      "Introduction aux logiques de tunnel de conversion",
    ],
    tp: "Élaboration d'un dispositif de prospection personnalisé",
  },
  {
    num: '03',
    title: "Communication Digitale, Contenu et Personal Branding",
    duration: '4h',
    color: '#f0a500',
    competences: [
      "Structurer une communication professionnelle cohérente",
      "Produire des contenus marketing performants",
    ],
    contenus: [
      "Définition du positionnement et de la proposition de valeur",
      "Principes de personal branding appliqués au marketing de réseau",
      "Production de contenus textuels et visuels assistée par IA",
      "Construction d'une ligne éditoriale",
      "Élaboration d'un calendrier de communication structuré",
      "Mesure et optimisation des performances de contenu",
    ],
    tp: "Construction d'un plan éditorial mensuel personnalisé",
  },
  {
    num: '04',
    title: "Techniques de Conversion et Recrutement de Partenaires",
    duration: '4h',
    color: '#28a745',
    competences: [
      "Professionnaliser le processus de conversion commerciale",
      "Structurer un parcours de recrutement de partenaires",
    ],
    contenus: [
      "Formalisation du parcours prospect / client / partenaire",
      "Préparation assistée des rendez-vous commerciaux",
      "Structuration des argumentaires de vente",
      "Gestion des objections et techniques de closing",
      "Conception d'un parcours d'intégration des nouveaux entrants",
      "Standardisation des supports d'accompagnement",
    ],
    tp: "Simulation d'entretien commercial et traitement des objections",
  },
  {
    num: '05',
    title: "Automatisation, Pilotage et Organisation de l'Activité",
    duration: '4h',
    color: '#7b2d8b',
    competences: [
      "Optimiser la gestion opérationnelle de l'activité",
      "Structurer un système de pilotage performant",
    ],
    contenus: [
      "Identification des tâches automatisables",
      "Introduction aux outils d'automatisation et no-code",
      "Structuration de workflows simples intégrant l'IA",
      "Construction de tableaux de bord de suivi d'activité",
      "Pilotage de la performance commerciale individuelle et collective",
      "Méthodes de structuration d'une activité duplicable et scalable",
    ],
    tp: "Élaboration d'un tableau de bord de pilotage personnalisé",
  },
];

export default function FormationIAPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* HERO */}
      <div style={{
        background: '#1a1a1a',
        borderBottom: '4px solid #C8102E',
        padding: 'clamp(48px, 8vw, 96px) 0 clamp(32px, 5vw, 64px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(200,16,46,0.12) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/formations" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px' }}>
            ← Retour aux formations
          </Link>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span className="tag tag-red">Formation Professionnelle</span>
            <span className="tag tag-blue">Distanciel synchrone</span>
            <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(126,200,42,0.15)', color: '#7EC82A', border: '1px solid rgba(126,200,42,0.3)' }}>✓ Éligible CPF</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(26px, 4vw, 52px)', color: 'white', lineHeight: 1.15, marginBottom: '16px', maxWidth: '760px' }}>
            Intelligence Artificielle appliquée au{' '}
            <span style={{ color: '#C8102E' }}>Marketing de Réseau</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.75, maxWidth: '640px', marginBottom: '36px' }}>
            Intégrez de manière structurée les outils d&apos;intelligence artificielle dans votre organisation commerciale afin d&apos;optimiser vos pratiques et professionnaliser votre activité.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', overflow: 'hidden' }}>
            {[
              { icon: '⏱', label: 'Durée', val: '20 heures' },
              { icon: '📡', label: 'Format', val: 'Distanciel synchrone' },
              { icon: '📋', label: 'Sessions', val: '5 × 4 heures' },
              { icon: '👥', label: 'Effectif', val: '12 à 20 participants' },
            ].map((info, i) => (
              <div key={info.label} style={{ flex: '1 1 130px', padding: '18px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontSize: '18px', marginBottom: '6px' }}>{info.icon}</div>
                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, marginBottom: '4px' }}>{info.label}</div>
                <div style={{ color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px' }}>{info.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(32px, 5vw, 64px) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: '32px', alignItems: 'start' }} className="formation-grid">

          {/* COLONNE GAUCHE */}
          <div>
            {/* Objectifs */}
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px, 4vw, 36px)', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px, 3vw, 24px)', marginBottom: '20px', color: '#1a1a1a' }}>Objectifs pédagogiques</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  "Comprendre les principes fondamentaux de l'IA générative et ses applications professionnelles",
                  "Identifier les usages pertinents de l'IA dans une activité de marketing de réseau",
                  "Structurer une démarche de prospection commerciale assistée par l'IA",
                  "Produire des contenus marketing adaptés à leurs cibles et à leur positionnement",
                  "Professionnaliser leurs techniques de conversion et de recrutement",
                  "Mettre en place des outils de suivi, d'automatisation et de pilotage",
                  "Élaborer un plan de transformation opérationnelle intégrant l'IA",
                ].map((obj, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>✓</div>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.65 }}>{obj}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules */}
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px, 3vw, 24px)', marginBottom: '20px', color: '#1a1a1a' }}>Programme détaillé</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {MODULES.map(mod => (
                <div key={mod.num} style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid ' + mod.color, borderRadius: '8px', overflow: 'hidden' }}>
                  <div style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid #f0f1f3' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: mod.color, color: 'white', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px' }}>{mod.num}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 'clamp(13px, 2vw, 15px)', color: '#1a1a1a', lineHeight: 1.3 }}>Module {mod.num} — {mod.title}</h3>
                        <span style={{ background: mod.color + '15', color: mod.color, border: '1px solid ' + mod.color + '35', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, whiteSpace: 'nowrap' }}>{mod.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="module-grid">
                    <div>
                      <div style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '8px' }}>Compétences visées</div>
                      {mod.competences.map((c, i) => (
                        <div key={i} style={{ display: 'flex', gap: '6px', marginBottom: '6px', fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                          <span style={{ color: mod.color, flexShrink: 0 }}>→</span> {c}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '8px' }}>Contenus pédagogiques</div>
                      {mod.contenus.map((c, i) => (
                        <div key={i} style={{ display: 'flex', gap: '6px', marginBottom: '6px', fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                          <span style={{ color: '#ddd', flexShrink: 0 }}>•</span> {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: '10px 22px', background: '#fafafa', borderTop: '1px solid #f0f1f3', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '13px', flexShrink: 0 }}>🔬</span>
                    <div>
                      <span style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa' }}>TP — </span>
                      <span style={{ fontSize: '13px', color: '#555' }}>{mod.tp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modalités */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="modalites-grid">
              {[
                { title: "Modalités pédagogiques", icon: '🎓', items: ["Formation en classe virtuelle synchrone", "Alternance apports théoriques et pratiques", "Études de cas contextualisées", "Exercices individuels et collectifs", "Accompagnement méthodologique"] },
                { title: "Modalités d'évaluation", icon: '📊', items: ["Évaluations formatives par module", "Exercices pratiques par module", "Étude de cas fil rouge", "Présentation finale d'un plan d'intégration IA"] },
              ].map(m => (
                <div key={m.title} style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '20px' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', marginBottom: '14px', color: '#1a1a1a' }}>{m.icon} {m.title}</h3>
                  {m.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '7px', fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
                      <span style={{ color: '#C8102E', flexShrink: 0 }}>•</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
              <div style={{ padding: '24px', borderBottom: '1px solid #f0f1f3', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, marginBottom: '8px' }}>Tarif</div>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '36px', color: '#C8102E', lineHeight: 1 }}>Sur devis</div>
                <div style={{ color: '#aaa', fontSize: '12px', marginTop: '6px' }}>Contactez-nous pour un devis personnalisé</div>
              </div>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0f1f3' }}>
                {[
                  { icon: '⏱', label: 'Durée', val: '20 heures' },
                  { icon: '📋', label: 'Modules', val: '5 × 4h' },
                  { icon: '📡', label: 'Modalité', val: 'Distanciel synchrone' },
                  { icon: '👥', label: 'Groupe', val: '12–20 participants' },
                  { icon: '🏢', label: 'Organisme', val: 'Academy 21 Paris' },
                ].map(info => (
                  <div key={info.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #f7f8fa', fontSize: '13px' }}>
                    <span style={{ color: '#888' }}>{info.icon} {info.label}</span>
                    <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, color: '#1a1a1a' }}>{info.val}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/formations/ia-marketing-reseau/inscription" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%', fontSize: '13px', padding: '14px' }}>
                  S&apos;inscrire à cette formation →
                </Link>
                <a href="mailto:contact@academy21france.fr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '11px', border: '1.5px solid #e0e2e6', borderRadius: '6px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  ✉️ Demander un devis
                </a>
              </div>
              <div style={{ padding: '14px 20px', background: '#fafafa', borderTop: '1px solid #f0f1f3' }}>
                <div style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '8px' }}>Inclus</div>
                {['📄 Support de cours numérique', '🔧 Accès aux outils', '📚 Bibliothèque de ressources', '📋 Templates post-formation'].map(item => (
                  <div key={item} style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{item}</div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '16px 20px' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', color: '#1a1a1a', marginBottom: '10px' }}>📍 Academy Twenty One Paris</div>
              <div style={{ fontSize: '12px', color: '#aaa', lineHeight: 1.8 }}>
                7 boulevard Suchet, 75016 Paris<br />
                SIRET : 924 778 431 400 019<br />
                Code NAF 85.59a
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .formation-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .module-grid { grid-template-columns: 1fr !important; } .modalites-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}