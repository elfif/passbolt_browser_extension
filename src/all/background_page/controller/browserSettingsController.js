var Log = require('../model/log').Log;

/**
 * Browser Settings Controller.
 *
 * @copyright (c) 2017 Passbolt SARL
 * @licence GNU Affero General Public License http://www.gnu.org/licenses/agpl-3.0.en.html
 */
/**
 * Get the value of given browser setting
 *
 * @param {string} key
 * @return {string} value
 */
var get = function (key) {
  switch (key) {
    case 'browser.download.dir':
    case 'browser.download.lastDir':
    //break;
    default:
      Log.write({level: 'error', message: 'Chrome browserSettingsController::get for key ' + key + ' not implemented'});
      return undefined;
      break;
  }
};
exports.get = get;

/**
 * Set the value of given browser setting
 *
 * @param {string} key
 * @param {string} value
 */
var set = function (key, value) {
  Log.write({level: 'error', message: 'Chrome browserSettingsController::set not implemented'});
};
exports.set = set;

/**
 * Get the extension version.
 *
 * @return {string}
 */
var getExtensionVersion = function () {
  return chrome.runtime.getManifest().version;
};
exports.getExtensionVersion = getExtensionVersion;
