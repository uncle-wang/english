var vm = new Vue({

	el: '#app',

	data: {

		// 视图控制
		viewCtrl: {
			// tab切换，study,record,picture,center
			tabShow: 'study',
		},
		// alert弹窗
		alertData: {
			text: '',
			showStatus: false,
			// 点击确定后的回调函数
			confirmCallback: null
		}
	},

	methods: {

		// tab切换
		showStudy: function() {
			this.viewCtrl.tabShow = 'study';
		},
		showRecord: function() {
			this.viewCtrl.tabShow = 'record';
		},
		showPicture: function() {
			this.viewCtrl.tabShow = 'picture';
		},
		showCenter: function() {
			this.viewCtrl.tabShow = 'center';
		},

		// alert回调
		cancelAlert: function() {
			this.alertData.showStatus = false;
		},
		confirmAlert: function() {
			this.alertData.showStatus = false;
			if (this.alertData.confirmCallback) {
				this.alertData.confirmCallback();
			}
		}
	}
});

// 弹窗
var showAlert = function(text, confirmCallback) {

	vm.alertData.text = text;
	vm.alertData.showStatus = true;
	vm.alertData.confirmCallback = confirmCallback || null;
};
