/**
 * Folder events
 *
 * @copyright (c) 2019 Passbolt SA
 * @licence GNU Affero General Public License http://www.gnu.org/licenses/agpl-3.0.en.html
 */
const {FolderCreateController} = require('../controller/folder/folderCreateController');
const {FolderEntity} = require('../model/entity/folder/folderEntity');
const {FolderModel} = require('../model/folder/folderModel');
const {ResourceModel} = require('../model/resource/resourceModel');
const {User} = require('../model/user');

const listen = function (worker) {

  // ================================
  // SERVICE ACTIONS
  // ================================

  /*
   * Create a new folder
   *
   * @listens passbolt.folders.create
   * @param requestId {uuid} The request identifier
   * @param folder {array} The folder
   */
  worker.port.on('passbolt.folders.create', async function (requestId, folderDto) {
    try {
      const clientOptions = await User.getInstance().getApiClientOptions();
      const folderCreateController = new FolderCreateController(worker, requestId, clientOptions);
      const folderEntity = await folderCreateController.main(new FolderEntity(folderDto));
      worker.port.emit(requestId, 'SUCCESS', folderEntity.toJSON());
    } catch (error) {
      worker.port.emit(requestId, 'ERROR', worker.port.getEmitableError(error));
    }
  });

  /*
   * Update a folder
   *
   * @listens passbolt.folders.update
   * @param requestId {uuid} The request identifier
   * @param folder {array} The folder
   */
  worker.port.on('passbolt.folders.update', async function (requestId, folderDto) {
    try {
      const folderModel = new FolderModel(await User.getInstance().getApiClientOptions());
      const folderEntity = await folderModel.update(new FolderEntity(folderDto));
      worker.port.emit(requestId, 'SUCCESS', folderEntity.toJSON());
    } catch (error) {
      worker.port.emit(requestId, 'ERROR', worker.port.getEmitableError(error));
    }
  });

  /*
   * delete a folder
   *
   * @listens passbolt.folders.delete
   * @param requestId {uuid} The request identifier
   * @param folder {array} The folder
   */
  worker.port.on('passbolt.folders.delete', async function (requestId, folderId, cascade) {
    try {
      const apiClientOptions = await User.getInstance().getApiClientOptions();
      const folderModel = new FolderModel(apiClientOptions);
      const resourceModel = new ResourceModel(apiClientOptions);

      await folderModel.delete(folderId, cascade);
      await resourceModel.updateLocalStorage();

      worker.port.emit(requestId, 'SUCCESS', folderId);
    } catch (error) {
      worker.port.emit(requestId, 'ERROR', worker.port.getEmitableError(error));
    }
  });

};

exports.listen = listen;
