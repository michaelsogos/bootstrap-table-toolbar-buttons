/**
 * @author Michael Sogos <michael.sogos@gurustudioweb.it>
 * @version v1.0.0
 * @link https://github.com/michaelsogos/bootstrap-table-toolbar-buttons
 */

(function ($) {
	'use strict';
	var sprintf = $.fn.bootstrapTable.utils.sprintf;

	$.extend($.fn.bootstrapTable.defaults, {
		customToolbarButtons: []
	});

	$.extend($.fn.bootstrapTable.defaults);

	var BootstrapTable = $.fn.bootstrapTable.Constructor,
		_initToolbar = BootstrapTable.prototype.initToolbar;

	BootstrapTable.prototype.initToolbar = function () {
		var self = this;
		_initToolbar.apply(this, Array.prototype.slice.apply(arguments));

		if (this.options.customToolbarButtons.length > 0) {
			this.showToolbar = true;

			$.each(this.options.customToolbarButtons, function (index, item) {
				var btnGroup = self.$toolbar.find('>.btn-group');
				var button = btnGroup.find('button[name=' + item.name + ']');
				if (!button.length) {

					var htmlButton = '<button ' +
						sprintf('name="%s" ', item.name) +
						sprintf('title="%s" ', item.title) +
						sprintf('aria-label="%s" ', item.title) +
						'class="btn ' +
						sprintf('btn-%s ', self.options.buttonsClass) +
						sprintf('btn-%s ', self.options.iconSize) +
						'" type="button"><i class="' +
						sprintf('%s ', self.options.iconsPrefix) +
						sprintf('%s ', item.icon) +
						'"></i></button>';

					button = $(htmlButton).appendTo(btnGroup);

					button.on("click", item.callback);
				}
			});
		}
	};
})(jQuery);