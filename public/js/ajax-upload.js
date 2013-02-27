var AjaxUpload = {

	init: function () {
		this.handleFiles();
	},

	handleFiles: function () {
		$('.is_selectedFiles').bind('change.filesSelected', function () {
			var i = 0,
				$fileQueue = $('.is_fileQueue')
				imageType = '/image.*/'
				fileList = this.files
				img = document.createElement('img')
				reader = new FileReader();

			for (i = 0; i < fileList.length; i++) {
				img.height = 110;
				img.file = fileList[i];
				img.name = 'pic_' + i;
				img.classList.add('obj');

				reader.onload = (function(aImg) {
					return function (e) {
						aImg.src = e.target.result;
					};
				})(img);

				reader.readAsDataURL(fileList[i]);

				$fileQueue.append(img);
			}
		});
	}
}