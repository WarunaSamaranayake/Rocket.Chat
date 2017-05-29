/* globals UploadFS */

const configStore = _.debounce(() => {
	const store = RocketChat.settings.get('FileUpload_Storage_Type');

	if (store) {
		console.log('Setting default file store to', store);
		UploadFS.getStores().Avatars = UploadFS.getStore(`${ store }:Avatars`);
		UploadFS.getStores().Uploads = UploadFS.getStore(`${ store }:Uploads`);
	}
}, 1000);

RocketChat.settings.get(/^FileUpload_/, configStore);