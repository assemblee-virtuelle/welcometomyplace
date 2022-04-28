// Model https://github.com/marmelab/react-admin/blob/master/packages/ra-language-french/src/index.ts

module.exports = {
  app: {
    action: {
      accept: 'Accepter',
      add: 'Ajouter',
      contact_organizer: "Contacter l'organisateur",
      copy: 'Copier dans votre presse-papier',
      create_event: 'Proposer un événement',
      create_event_short: 'Proposer',
      edit_profile: 'Éditer mon profil',
      ignore: 'Ignorer',
      join: "Je m'inscris",
      leave: 'Je me désinscris',
      login: 'Se connecter avec un compte',
      reject: 'Refuser',
      send: 'Envoyer',
      send_invitation: "Envoyer l'invitation |||| Envoyer %{smart_count} invitations",
      send_message: 'Envoyer un message',
      share: 'Partager',
      share_event: "Partager l'événement",
      signup: 'Créer un nouveau compte',
      reset_password: 'Réinitialisation du mot de passe',
      set_new_password: 'Definir un nouveau mot de passe',
    },
    page: {
      events: 'Tableau de bord',
      addresses: 'Mes adresses',
      network: 'Mon réseau',
      profile: 'Mon profil',
    },
    tab: {
      next_events: 'Prochains événements',
      finished_events: 'Événements terminés',
    },
    card: {
      add_contact: 'Ajouter un contact',
      contact_requests: 'Demandes de contact',
      share_contact: 'Mon lien de contact',
    },
    block: {
      contact_requests: 'Nouvelles demandes de contact',
    },
    input: {
      about_you: 'Quelques mots sur vous',
      conditions: 'Conditions',
      date: 'Date',
      duration: 'Durée',
      message: 'Message',
      provider: 'Hébergeur',
      user_id: 'Identifiant utilisateur',
      new_password: 'Nouveau mot de passe',
      confirm_new_password: 'Confirmer le nouveau mot de passe'
    },
    helper: {
      add_contact:
        'Pour ajouter un utilisateur à votre réseau, vous devez connaître son identifiant (au format @bob@serveur.com).',
      addresses_visibility: 'Les adresses ne sont visibles que des personnes invité à vos événements',
      event_draft_mode: "Cet événement n'est actuellement visible que par vous. Dès que vous serez satisfait de sa présentation, vous pourrez le partager avec vos contacts (bouton en haut à droite).",
      event_join_right: "Vous avez été invité à cet événement. Pour accepter l'invitation, veuillez cliquer sur le bouton \"Je m'inscris\".",
      event_share_right: "L'organisateur vous a donné le droit de partager cet événement avec vos contacts (bouton en haut à droite).",
      first_event:
        "Si vous avez des questions ou difficultés concernant la création d'événements, n'hésitez pas à écrire à ",
      max_attendees: 'Attention: vous êtes compté comme participant',
      message_profile_show_right: "Envoyer un message à %{username} lui donnera le droit de voir votre profil, pour lui permettre de vous répondre.",
      no_contact: 'Vous devez ajouter des contacts à votre réseau pour pouvoir les inviter',
      no_address: 'Vous devez ajouter au moins une adresse à votre profil avant de pouvoir proposer un événement',
      other_conditions: 'Vous pouvez entrer plusieurs conditions supplémentaires (une par ligne)',
      profile_visibility: "Votre profil n'est visible que des personnes que vous avez accepté dans votre réseau",
      share_contact:
        'Pour vous connecter avec une personne que vous connaissez, vous pouvez lui envoyer le lien ci-dessous.',
      location_comment: 'Indications supplémentaires pour aider les invités à trouver ce lieu',
    },
    message: {
      copied_to_clipboard: 'Copié !',
      event_closed: 'Les inscriptions sont fermées',
      event_finished: 'Cet événement est terminé',
      no_condition: 'Aucune',
      you_participated_to_same_event: 'Vous avez participé au même événement',
    },
    notification: {
      contact_request_accepted: 'Demande de contact acceptée',
      contact_request_ignored: 'Demande de contact ignorée',
      contact_request_rejected: 'Demande de contact refusée',
      contact_request_sent: 'Demande de contact envoyée',
      event_joined: 'Vous vous êtes bien inscrit à cet événement',
      event_left: 'Vous vous êtes bien désinscrit de cet événement',
      invitation_sent: '1 invitation envoyée |||| %{smart_count} invitations envoyées',
      login_to_connect_user: 'Veuillez vous créer un compte pour vous connecter avec %{username}',
      login_to_view_event: 'Veuillez vous connecter pour voir cet événement',
      message_sent: 'Votre message a bien été envoyé',
      message_send_error: "Erreur lors de l'envoi du message: %{error}",
      profile_data_not_found: "Votre profil n'a pas été trouvé, veuillez vous déconnecter et vous reconnecter",
      user_not_found: "L'utilisateur %{username} n'existe pas",
      app_not_authorized: "Application non-autorisée: impossible de rediriger vers l'URL %{url}",
      reset_password_submited: "Un e-mail a été envoyé avec les instructions de réinitialisation du mot de passe",
      reset_password_error: "Une erreur s'est produite",
      password_changed: "Le mot de passe a été changé avec succès",
      new_password_error: "Une erreur s'est produite",
    },
    permission: {
      view: "Droit de s'inscrire",
      share: 'Inviter ses contacts',
    },
    time: {
      hours: '1 heure |||| %{smart_count} heures',
      minutes: '1 minute |||| %{smart_count} minutes',
      days: '1 jour |||| %{smart_count} jours',
    },
    user: {
      unknown: 'Inconnu',
    },
    validation: {
      futureDate: 'Doit être dans le futur',
      afterStartTime: "Doit être après la date de début de l'événement",
      beforeStartTime: "Doit être avant la date de début de l'événement",
    },
  },
};
