/**
 * Debug page.
 *
 * @copyright (c) 2015-present Bolt Softwares Pvt Ltd
 * @licence GNU Affero General Public License http://www.gnu.org/licenses/agpl-3.0.en.html
 */

var passbolt = passbolt || {};
passbolt.debug = passbolt.debug || {};

$(function () {
  passbolt.debug.profiles = {};
  passbolt.debug.profiles['ada@passbolt.com'] = {
    id: 'cd49eb9e-73a2-3433-a018-6ed993d421e8',
    firstname: 'Ada',
    lastname: 'Lovelace',
    username: 'ada@passbolt.com',
    settings: {
      domain: 'http://passbolt.dev',
      securityToken: {
        color: '#ff3a3a',
        textcolor: '#ffffff',
        code: 'ADA'
      }
    },
    privateKey: "-----BEGIN PGP PRIVATE KEY BLOCK-----\n\
Comment: GPGTools - https://gpgtools.org\n\
\n\
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\n\
LWN2IVKPj2mia4lQHLub9OTlGkkO+pcgU1wQ\n\
=hgWr\n\
-----END PGP PRIVATE KEY BLOCK-----",
    publicKey: "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\
Comment: GPGTools - https://gpgtools.org\n\
\n\
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\n\
WoyDz96l/88asc2mV7bg82Zp0zo1iZvPeUw=\n\
=skmC\n\
-----END PGP PUBLIC KEY BLOCK-----"
  };
  passbolt.debug.profiles['betty@passbolt.com'] = {
    id: 'dc8d196f-f7e9-3531-a9de-b15a3b48b11b',
    firstname: 'Betty',
    lastname: 'Holberton',
    username: 'betty@passbolt.com',
    settings: {
      domain: 'http://passbolt.dev',
      securityToken: {
        color: '#ff3a3a',
        textcolor: '#ffffff',
        code: 'BET'
      }
    },
    privateKey: "-----BEGIN PGP PRIVATE KEY BLOCK-----\n\
Comment: GPGTools - https://gpgtools.org\n\
\n\
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\n\
=UjsM\n\
-----END PGP PRIVATE KEY BLOCK-----",
    publicKey: "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\
Comment: GPGTools - https://gpgtools.org\n\
\n\
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\n\
WoyDz96l/88asc2mV7bg82Zp0zo1iZvPeUw=\n\
=skmC\n\
-----END PGP PUBLIC KEY BLOCK-----"
  };
});