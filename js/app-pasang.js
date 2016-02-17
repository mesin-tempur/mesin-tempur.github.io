// PASANG IKLAN IMG
function imgUploadPrev() {
	var w 		= $('.product-img-upload'),
		btn 	= w.find('.upload-trigger'),
		add 	= w.find('.add-one'),
		input 	= w.find('.imgUpload'),
		box 	= w.find('.img-box'),
		count 	= $(box).children().length;

	btn.on('click tap', function(e){
		$(this).siblings(input).click();
		e.preventDefault();
	});
	function hideUpload() {
		// console.log(box.find('.img-block').length);
		if(box.find('.img-block').length > 5) {
			add.css('display','none');
		}else {
			add.css('display','');
		}
	}
	input.on('change', function () {
		
		if (typeof (FileReader) !== "undefined") {
			var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
			var active = '';
			var img_count = 0;
			$($(this)[0].files).each(function () {
				if (img_count > 5) { return false; }
                var file = $(this);
                if (regex.test(file[0].name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                    	var idx=count+1;
                    	if(idx===1){
                        	active = 'is-active';
                        } else {
                        	active = '';
                        }
                        var img = 	'<div class="img-block align-middle">' +
				                  	'<span class="img-helper"></span>' +
				                  	'<img src="'+e.target.result+'" alt="">' +
				                  	'<button class="close-button" data-close="" aria-label="Close" type="button">' +
                    				'<span aria-hidden="false">×</span>' +
                  					'</button>' +
				                	'</div>';
				        box.prepend(img);
				        hideUpload();
				        count++;
                    };
                    reader.readAsDataURL(file[0]);
                } else {
                    window.alert(file[0].name + " is not a valid image file.");
                    return false;
                }
                img_count++;
            });
		} else {
            window.alert("This browser does not support HTML5 FileReader.");
        }
	});
	$(w).on('click', '.close-button', function () {
		var button = $(this);
		button.parent().remove();
		hideUpload();
	});
}
// PASANG IKLAN HARGA DISKON
function discField() {
	var check 	= $('#add-disc'),
		disc 	= $('.harga-diskon');
	check.on('change', function() {
		if(check.is(':checked')){
			disc.css('display', 'block');
		}else {disc.css('display', 'none');}
	});
}
// PASANG IKLAN HARGA DISKON
function productVariant() {
	var w 		= $('.add-product-form'),
		addBtn	= w.find('.add-variant'),
		hrg 	= w.find('#harga'),
		hrgDsc 	= w.find('#harga-diskon'),
		stk 	= w.find('#stockInput'),
		vw 		= w.find('.variant-wrapper'),
		count	= vw.children().length;
	
	count	= count+1;
	// READONLY
	function readOnly() {
		if(vw.children().length > 0) {
			hrg.add(hrgDsc).add(stk).attr('readonly', true);
		}else {hrg.add(hrgDsc).add(stk).attr('readonly', false);}
	}
	addBtn.on('click tap', function(e){		
		var hrgX 	= hrg.val(),
			hrgDscX	= hrgDsc.val(),
			stkX	= stk.val(),
			// vb 		= vw.find('.variant-box'),
			// vbL		= vb.last(),
			// hrgV 	= vbL.find('.varharga'),
			// hrgDscV = vbL.find('.varhargadisk'),
			// stkV 	= vbL.find('.varstockInput'),
		 	vField	= 	
			'<div class="variant-box variant'+count+'">' +
                '<div class="row">' +
                  '<div class="small-12 column">' +
                    '<div class="var-title"><strong>Varian <span class="idx">'+count+'</span></strong><a class="fr del-var">Hapus</a></div>' +
                    '<div class="fblock variant-kind">' +
                      '<input type="text" id="variantName" placeholder="Contoh: Merah atau Size S">' +
                    '</div>' +
                    '<div class="fblock harga-block">' +
                      '<label for="varharga">Harga Normal</label>' +
                      '<div class="input-group">' +
                        '<span class="input-group-label">Rp</span>' +
                        '<input type="text" id="varharga" class="harga varharga" value="'+hrgX+'">' +
                      '</div>' +
                    '</div>' +
                    '<div class="fblock harga-diskon">' +
                      '<label for="harga-diskon">Harga Diskon</label>' +
                      '<div class="input-group">' +
                        '<span class="input-group-label">Rp</span>' +
                        '<input type="text" id="varharga-diskon" class="harga varhargadisk" value="'+hrgDscX+'">' +
                      '</div>' +
                    '</div>' +
                    '<div class="fblock stock-input">' +
                      '<label for="varstockInput">Stock</label>' +
                      '<input type="text" id="varstockInput" class="numbers varstockInput" value="'+stkX+'">' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>';
        count++;
        vw.append(vField);
        // if (count > 0) {
        // 	// hrgV = hrgV.val();
        // 	// hrgX = hrgV;
        // 	// console.log(hrgX);
        // 	vw.append(vField);
        // }else {
        // 	vw.append(vField);
        // }
		
		
		readOnly();
		e.preventDefault();
	});
	w.on('click tap','.del-var', function(){
		$(this).parents('.variant-box').remove();
		--count;
		$('.variant-box').each(function(idx){
			$(this).find(".idx").text(idx + 1);
		});
		readOnly();
	});
}

imgUploadPrev();
discField();
productVariant();