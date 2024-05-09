const urlJoin = require('url-join');
const { AppService } = require('@activitypods/app');
const { AS_PREFIX } = require('@semapps/activitypub');
const CONFIG = require('../config/config');

module.exports = {
  mixins: [AppService],
  settings: {
    app: {
      name: 'Welcome to my Place',
      description: 'An ActivityPods-compatible app',
      thumbnail: urlJoin(CONFIG.FRONT_URL, 'logo192.png'),
      frontUrl: CONFIG.FRONT_URL
    },
    oidc: {
      clientUri: CONFIG.FRONT_URL,
      redirectUris: urlJoin(CONFIG.FRONT_URL, 'auth-callback'),
      postLogoutRedirectUris: urlJoin(CONFIG.FRONT_URL, 'login?logout=true'),
      tosUri: null
    },
    accessNeeds: {
      required: [
        {
          registeredClass: 'as:Event',
          accessMode: ['acl:Read', 'acl:Write']
        },
        {
          registeredClass: 'vcard:Individual',
          accessMode: 'acl:Read'
        },
        'apods:ReadInbox',
        'apods:ReadOutbox',
        'apods:CreateAclGroup',
        'apods:CreateCollection',
        'apods:UpdateWebId'
      ],
      optional: ['apods:SendNotification']
    },
    classDescriptions: {
      'as:Event': {
        label: {
          en: 'Events',
          fr: 'Événements'
        },
        labelPredicate: 'as:name',
        openEndpoint: urlJoin(CONFIG.FRONT_URL, '/r')
      }
    },
    queueServiceUrl: CONFIG.QUEUE_SERVICE_URL
  }
};