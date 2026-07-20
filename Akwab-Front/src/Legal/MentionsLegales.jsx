import { Link } from "react-router-dom";

function MentionsLegales() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px", lineHeight: "1.6" }}>
      <Link to="/">&larr; Retour à l'accueil</Link>
      <h1>Mentions légales</h1>
      <p>
        Le site Akwab'Event est un projet réalisé dans un cadre pédagogique.
        Éditeur : Akwab'Event. Contact : contact@akwab-event.example.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par Railway Corp., 500 Treat Ave, San Francisco, CA 94110, États-Unis.
      </p>

      <h1 style={{ marginTop: "40px" }}>Politique de confidentialité</h1>

      <h2>Données collectées</h2>
      <p>
        Lors de la création d'un compte, nous collectons votre nom, prénom, adresse e-mail,
        numéro de téléphone et mot de passe (stocké de façon chiffrée). Ces données sont
        nécessaires à la création et à la gestion de votre compte, ainsi qu'à la réservation
        de billets pour des événements.
      </p>

      <h2>Finalité du traitement</h2>
      <p>
        Vos données sont utilisées exclusivement pour vous permettre de créer un compte,
        réserver des billets, et recevoir les confirmations liées à vos réservations.
        Elles ne sont ni vendues ni partagées à des fins commerciales.
      </p>

      <h2>Sous-traitants</h2>
      <p>
        Nous utilisons Sentry (service de suivi des erreurs applicatives) pour améliorer
        la fiabilité du site. Ce service peut recevoir votre adresse IP et une géolocalisation
        approximative dérivée de celle-ci, uniquement en cas d'erreur technique.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées tant que votre compte est actif. Vous pouvez demander
        leur suppression à tout moment en nous contactant.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et
        d'effacement de vos données. Pour exercer ce droit, contactez-nous à
        contact@akwab-event.example.
      </p>

      <h2>Cookies</h2>
      <p>
        Le site utilise des cookies techniques nécessaires à votre connexion (session,
        authentification). Aucun cookie publicitaire ou de suivi tiers n'est utilisé.
      </p>
    </div>
  );
}

export default MentionsLegales;