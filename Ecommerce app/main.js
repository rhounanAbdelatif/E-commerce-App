var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1;}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}

function login() {
	document.getElementById("modal").style.display = "block";
}

function cancelLogin() {
	document.getElementById("modal").style.display = "none";
}

function closeOpenMarque() {
	if (document.getElementById("open-marque").style.display == "none") {
		document.getElementById("close-marque").style.display = "none";
		document.getElementById("open-marque").style.display = "inline-block";
		document.getElementById("content-marque").style.display = "none";
	} else if (document.getElementById("close-marque").style.display = "none") {
		document.getElementById("close-marque").style.display = "inline-block";
		document.getElementById("open-marque").style.display = "none";
		document.getElementById("content-marque").style.display = "block";
	}
}

function closeOpenPrix() {
	if (document.getElementById("open-prix").style.display == "none") {
		document.getElementById("close-prix").style.display = "none";
		document.getElementById("open-prix").style.display = "inline-block";
		document.getElementById("content-prix").style.display = "none";
	} else if (document.getElementById("close-prix").style.display = "none") {
		document.getElementById("close-prix").style.display = "inline-block";
		document.getElementById("open-prix").style.display = "none";
		document.getElementById("content-prix").style.display = "block";
	}
}

function closeOpenRom() {
	if (document.getElementById("open-rom").style.display == "none") {
		document.getElementById("close-rom").style.display = "none";
		document.getElementById("open-rom").style.display = "inline-block";
		document.getElementById("content-rom").style.display = "none";
	} else if (document.getElementById("close-rom").style.display = "none") {
		document.getElementById("close-rom").style.display = "inline-block";
		document.getElementById("open-rom").style.display = "none";
		document.getElementById("content-rom").style.display = "block";
	}
}

function closeOpenRam() {
	if (document.getElementById("open-ram").style.display == "none") {
		document.getElementById("close-ram").style.display = "none";
		document.getElementById("open-ram").style.display = "inline-block";
		document.getElementById("content-ram").style.display = "none";
	} else if (document.getElementById("close-ram").style.display = "none") {
		document.getElementById("close-ram").style.display = "inline-block";
		document.getElementById("open-ram").style.display = "none";
		document.getElementById("content-ram").style.display = "block";
	}
}

function galaxyS9ImgHover() {
	document.getElementById("s9-first").style.display = "none";
	document.getElementById("s9-second").style.display = "block";
	document.getElementsByClassName("s9-dot-first")[0].style.backgroundColor = "gray";
	document.getElementsByClassName("s9-dot-second")[0].style.backgroundColor = "blue";
}

function galaxyS9ImgOut() {
	document.getElementById("s9-first").style.display = "block";
	document.getElementById("s9-second").style.display = "none";
	document.getElementsByClassName("s9-dot-first")[0].style.backgroundColor = "blue";
	document.getElementsByClassName("s9-dot-second")[0].style.backgroundColor = "gray";
}

function galaxyS8ImgHover() {
	document.getElementById("s8-first").style.display = "none";
	document.getElementById("s8-second").style.display = "block";
	document.getElementsByClassName("s8-dot-first")[0].style.backgroundColor = "gray";
	document.getElementsByClassName("s8-dot-second")[0].style.backgroundColor = "blue";
}

function galaxyS8ImgOut() {
	document.getElementById("s8-first").style.display = "block";
	document.getElementById("s8-second").style.display = "none";
	document.getElementsByClassName("s8-dot-first")[0].style.backgroundColor = "blue";
	document.getElementsByClassName("s8-dot-second")[0].style.backgroundColor = "gray";
}

function galaxyS7ImgHover() {
	document.getElementById("s7-first").style.display = "none";
	document.getElementById("s7-second").style.display = "block";
	document.getElementsByClassName("s7-dot-first")[0].style.backgroundColor = "gray";
	document.getElementsByClassName("s7-dot-second")[0].style.backgroundColor = "blue";
}

function galaxyS7ImgOut() {
	document.getElementById("s7-first").style.display = "block";
	document.getElementById("s7-second").style.display = "none";
	document.getElementsByClassName("s7-dot-first")[0].style.backgroundColor = "blue";
	document.getElementsByClassName("s7-dot-second")[0].style.backgroundColor = "gray";
}

function galaxyJ7ImgHover() {
	document.getElementById("j7-first").style.display = "none";
	document.getElementById("j7-second").style.display = "block";
	document.getElementsByClassName("j7-dot-first")[0].style.backgroundColor = "gray";
	document.getElementsByClassName("j7-dot-second")[0].style.backgroundColor = "blue";
}

function galaxyJ7ImgOut() {
	document.getElementById("j7-first").style.display = "block";
	document.getElementById("j7-second").style.display = "none";
	document.getElementsByClassName("j7-dot-first")[0].style.backgroundColor = "blue";
	document.getElementsByClassName("j7-dot-second")[0].style.backgroundColor = "gray";
}

function iphoneXImgHover() {
	document.getElementById("iphone-x-first").style.display = "none";
	document.getElementById("iphone-x-second").style.display = "block";
	document.getElementsByClassName("iphone-x-dot-first")[0].style.backgroundColor = "gray";
	document.getElementsByClassName("iphone-x-dot-second")[0].style.backgroundColor = "blue";
}

function iphoneXImgOut() {
	document.getElementById("iphone-x-first").style.display = "block";
	document.getElementById("iphone-x-second").style.display = "none";
	document.getElementsByClassName("iphone-x-dot-first")[0].style.backgroundColor = "blue";
	document.getElementsByClassName("iphone-x-dot-second")[0].style.backgroundColor = "gray";
}

function iphone7ImgHover() {
	document.getElementById("iphone-7-first").style.display = "none";
	document.getElementById("iphone-7-second").style.display = "block";
	document.getElementsByClassName("iphone-7-dot-first")[0].style.backgroundColor = "gray";
	document.getElementsByClassName("iphone-7-dot-second")[0].style.backgroundColor = "blue";
}

function iphone7ImgOut() {
	document.getElementById("iphone-7-first").style.display = "block";
	document.getElementById("iphone-7-second").style.display = "none";
	document.getElementsByClassName("iphone-7-dot-first")[0].style.backgroundColor = "blue";
	document.getElementsByClassName("iphone-7-dot-second")[0].style.backgroundColor = "gray";
}

function showIphoneX(n) {
	var x = document.getElementsByClassName("item-images-gallery-li");
	var i;
	var y = document.getElementsByClassName("iphone-x-shown")[0];
	for (i = 0; i < x.length; i++) {
		x[i].style.borderColor = "#ccc";
	}
	x[n-1].style.borderColor = "blue";
	switch (n) {
		case 1: 
		    y.src = 
		    "E:\\Ecommerce app\\img\\iphone-x-shown1.JPG";
		    break;
		case 2:
		    y.src =
		    "E:\\Ecommerce app\\img\\iphone-x-shown2.JPG";
		    break;
		case 3:
		    y.src =
		    "E:\\Ecommerce app\\img\\iphone-x-shown3.JPG";
		    break;
		case 4:
		    y.src =
		    "E:\\Ecommerce app\\img\\iphone-x-shown4.JPG";
		    break;
	}
}

function showTabInfo(n) {
	var x = document.getElementsByClassName("info-li-desc")[0];
	var y = document.getElementsByClassName("info-li-fiche")[0];
	var a = document.getElementsByClassName("info-desc")[0];
	var b = document.getElementsByClassName("info-fiche")[0];
	var e = document.getElementsByClassName("info-tab-desc")[0];
	var f = document.getElementsByClassName("info-tab-fiche")[0];
	x.style.borderBottomColor = "white";
	y.style.borderBottomColor = "white";
	a.style.color = "gray";
	b.style.color = "gray";
	switch (n) {
		case 1:
		    x.style.borderBottomColor = "#1390be";
		    a.style.color = "#1f6b88";
		    f.style.display = "none";
		    e.style.display = "block";
		    break;
		case 2:
		    y.style.borderBottomColor = "#1390be";
		    b.style.color = "#1f6b88";
		    e.style.display = "none";
		    f.style.display = "block";
		    break;
	}
}

function filterPhoneMarque() {
	var checkApple = document.getElementById("check-marque-apple").checked;
	var checkSamsung = document.getElementById("check-marque-samsung").checked;
	var checkHuawei = document.getElementById("check-marque-huawei").checked;
	var checkAsus = document.getElementById("check-marque-asus").checked;
	var checkHonor = document.getElementById("check-marque-honor").checked;
	var checkSony = document.getElementById("check-marque-sony").checked;
	var checkWiko = document.getElementById("check-marque-wiko").checked;
	var checkHtc = document.getElementById("check-marque-htc").checked;
	var phoneItem = document.getElementsByClassName("container-item");
	var applePhone = document.getElementsByClassName("marque-apple");
	var samsungPhone = document.getElementsByClassName("marque-samsung");
	var huaweiPhone = document.getElementsByClassName("marque-huawei");
	var asusPhone = document.getElementsByClassName("marque-asus");
	var honorPhone = document.getElementsByClassName("marque-honor");
	var sonyPhone = document.getElementsByClassName("marque-sony");
	var wikoPhone = document.getElementsByClassName("marque-wiko");
	var htcPhone = document.getElementsByClassName("marque-htc");
	var i;
	var liAppleMarque = document.getElementById("li-choix-apple-marque");
	liAppleMarque.style.display = "none";
	var liSamsungMarque = document.getElementById("li-choix-samsung-marque");
	liSamsungMarque.style.display = "none";
	var liHuaweiMarque = document.getElementById("li-choix-huawei-marque");
	liHuaweiMarque.style.display = "none";
	var liAsusMarque = document.getElementById("li-choix-asus-marque");
	liAsusMarque.style.display = "none";
	var liHonorMarque = document.getElementById("li-choix-honor-marque");
	liHonorMarque.style.display = "none";
	var liSonyMarque = document.getElementById("li-choix-sony-marque");
	liSonyMarque.style.display = "none";
	var liWikoMarque = document.getElementById("li-choix-wiko-marque");
	liWikoMarque.style.display = "none";
	var liHtcMarque = document.getElementById("li-choix-htc-marque");
	liHtcMarque.style.display = "none";
	showDeleteAllFilter();
	for (i = 0; i < phoneItem.length; i++) {
		phoneItem[i].style.display = "none";
		phoneItem[i].className = phoneItem[i].className.replace("selected-marque","xx-marque");
	}
	if (checkApple == true) {
		for (i = 0; i < applePhone.length; i++) {
			var x = applePhone[i].className.search("selected-prix");
			var y = applePhone[i].className.search("selected-rom");
			var z = applePhone[i].className.search("selected-ram");
			applePhone[i].className = applePhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				applePhone[i].style.display = "inline-block";
			}
		}
		liAppleMarque.style.display = "inline-block";
	}
	if (checkSamsung == true) {
		for (i = 0; i < samsungPhone.length; i++) {
			var x = samsungPhone[i].className.search("selected-prix");
			var y = samsungPhone[i].className.search("selected-rom");
			var z = samsungPhone[i].className.search("selected-ram");
			samsungPhone[i].className = samsungPhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				samsungPhone[i].style.display = "inline-block";
			}
		}
		liSamsungMarque.style.display = "inline-block";
	}
	if (checkHuawei == true) {
		for (i = 0; i < huaweiPhone.length; i++) {
			var x = huaweiPhone[i].className.search("selected-prix");
			var y = huaweiPhone[i].className.search("selected-rom");
			var z = huaweiPhone[i].className.search("selected-ram");
			huaweiPhone[i].className = huaweiPhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				huaweiPhone[i].style.display = "inline-block";
			}
		}
		liHuaweiMarque.style.display = "inline-block";
	}
	if (checkAsus == true) {
		for (i = 0; i < asusPhone.length; i++) {
			var x = asusPhone[i].className.search("selected-prix");
			var y = asusPhone[i].className.search("selected-rom");
			var z = asusPhone[i].className.search("selected-ram");
			asusPhone[i].className = asusPhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				asusPhone[i].style.display = "inline-block";
			}
		}
		liAsusMarque.style.display = "inline-block";
	}
	if (checkHonor == true) {
		for (i = 0; i < honorPhone.length; i++) {
			var x = honorPhone[i].className.search("selected-prix");
			var y = honorPhone[i].className.search("selected-rom");
			var z = honorPhone[i].className.search("selected-ram");
			honorPhone[i].className = honorPhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				honorPhone[i].style.display = "inline-block";
			}
		}
		liHonorMarque.style.display = "inline-block";
	}
	if (checkSony == true) {
		for (i = 0; i < sonyPhone.length; i++) {
			var x = sonyPhone[i].className.search("selected-prix");
			var y = sonyPhone[i].className.search("selected-rom");
			var z = sonyPhone[i].className.search("selected-ram");
			sonyPhone[i].className = sonyPhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				sonyPhone[i].style.display = "inline-block";
			}
		}
		liSonyMarque.style.display = "inline-block";
	}
	if (checkWiko == true) {
		for (i = 0; i < wikoPhone.length; i++) {
			var x = wikoPhone[i].className.search("selected-prix");
			var y = wikoPhone[i].className.search("selected-rom");
			var z = wikoPhone[i].className.search("selected-ram");
			wikoPhone[i].className = wikoPhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				wikoPhone[i].style.display = "inline-block";
			}
		}
		liWikoMarque.style.display = "inline-block";
	}
	if (checkHtc == true) {
		for (i = 0; i < htcPhone.length; i++) {
			var x = htcPhone[i].className.search("selected-prix");
			var y = htcPhone[i].className.search("selected-rom");
			var z = htcPhone[i].className.search("selected-ram");
			htcPhone[i].className = htcPhone[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				htcPhone[i].style.display = "inline-block";
			}
		}
		liHtcMarque.style.display = "inline-block";
	}
	if (checkApple == false && checkSamsung == false && checkHuawei == false && checkAsus == false && checkHonor == false && checkSony == false && checkWiko == false && checkHtc == false) {
		for (i = 0; i < phoneItem.length; i++) {
			var x = phoneItem[i].className.search("selected-prix");
			var y = phoneItem[i].className.search("selected-rom");
			var z = phoneItem[i].className.search("selected-ram");
			phoneItem[i].className = phoneItem[i].className.replace("xx-marque","selected-marque");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneItem[i].style.display = "inline-block";
			}
		}
	}
}

function removeChoixFilter(n) {
	switch (n) {
		case 1:
		    var liAppleMarque = document.getElementById("li-choix-apple-marque");
	        liAppleMarque.style.display = "none";
	        document.getElementById("check-marque-apple").checked = false;
	        filterPhoneMarque();
	        break;
	    case 2:
		    var liSamsungMarque = document.getElementById("li-choix-samsung-marque");
	        liSamsungMarque.style.display = "none";
	        document.getElementById("check-marque-samsung").checked = false;
	        filterPhoneMarque();
	        break;
	    case 3:
		    var liHuaweiMarque = document.getElementById("li-choix-huawei-marque");
	        liHuaweiMarque.style.display = "none";
	        document.getElementById("check-marque-huawei").checked = false;
	        filterPhoneMarque();
	        break;
	    case 4:
		    var liAsusMarque = document.getElementById("li-choix-asus-marque");
	        liAsusMarque.style.display = "none";
	        document.getElementById("check-marque-asus").checked = false;
	        filterPhoneMarque();
	        break;
	    case 5:
		    var liHonorMarque = document.getElementById("li-choix-honor-marque");
	        liHonorMarque.style.display = "none";
	        document.getElementById("check-marque-honor").checked = false;
	        filterPhoneMarque();
	        break;
	    case 6:
		    var liSonyMarque = document.getElementById("li-choix-sony-marque");
	        liSonyMarque.style.display = "none";
	        document.getElementById("check-marque-sony").checked = false;
	        filterPhoneMarque();
	        break;
	    case 7:
		    var liWikoMarque = document.getElementById("li-choix-wiko-marque");
	        liWikoMarque.style.display = "none";
	        document.getElementById("check-marque-wiko").checked = false;
	        filterPhoneMarque();
	        break;
	    case 8:
		    var liHtcMarque = document.getElementById("li-choix-htc-marque");
	        liHtcMarque.style.display = "none";
	        document.getElementById("check-marque-htc").checked = false;
	        filterPhoneMarque();
	        break;
	    case 11:
		    var li0à200Prix = document.getElementById("li-choix-0-200-prix");
	        li0à200Prix.style.display = "none";
	        document.getElementById("check-prix-0-200").checked = false;
	        filterPhonePrix();
	        break;
	    case 12:
		    var li200à500Prix = document.getElementById("li-choix-200-500-prix");
	        li200à500Prix.style.display = "none";
	        document.getElementById("check-prix-200-500").checked = false;
	        filterPhonePrix();
	        break;
	    case 13:
		    var li500à700Prix = document.getElementById("li-choix-500-700-prix");
	        li500à700Prix.style.display = "none";
	        document.getElementById("check-prix-500-700").checked = false;
	        filterPhonePrix();
	        break;
	    case 14:
		    var li700àplusPrix = document.getElementById("li-choix-700-plus-prix");
	        li700àplusPrix.style.display = "none";
	        document.getElementById("check-prix-700-plus").checked = false;
	        filterPhonePrix();
	        break;
	    case 21:
		    var li256rom = document.getElementById("li-choix-256-rom");
	        li256rom.style.display = "none";
	        document.getElementById("check-rom-256").checked = false;
	        filterPhoneRom();
	        break;
	    case 22:
		    var li128rom = document.getElementById("li-choix-128-rom");
	        li128rom.style.display = "none";
	        document.getElementById("check-rom-128").checked = false;
	        filterPhoneRom();
	        break;
	    case 23:
		    var li64rom = document.getElementById("li-choix-64-rom");
	        li64rom.style.display = "none";
	        document.getElementById("check-rom-64").checked = false;
	        filterPhoneRom();
	        break;
	    case 24:
		    var li32rom = document.getElementById("li-choix-32-rom");
	        li32rom.style.display = "none";
	        document.getElementById("check-rom-32").checked = false;
	        filterPhoneRom();
	        break;
	    case 25:
		    var li16rom = document.getElementById("li-choix-16-rom");
	        li16rom.style.display = "none";
	        document.getElementById("check-rom-16").checked = false;
	        filterPhoneRom();
	        break;
	    case 26:
		    var li8rom = document.getElementById("li-choix-8-rom");
	        li8rom.style.display = "none";
	        document.getElementById("check-rom-8").checked = false;
	        filterPhoneRom();
	        break;
	    case 31:
		    var li8ram = document.getElementById("li-choix-8-ram");
	        li8ram.style.display = "none";
	        document.getElementById("check-ram-8").checked = false;
	        filterPhoneRam();
	        break;
	    case 32:
		    var li4ram = document.getElementById("li-choix-4-ram");
	        li4ram.style.display = "none";
	        document.getElementById("check-ram-4").checked = false;
	        filterPhoneRam();
	        break;
	    case 33:
		    var li3ram = document.getElementById("li-choix-3-ram");
	        li3ram.style.display = "none";
	        document.getElementById("check-ram-3").checked = false;
	        filterPhoneRam();
	        break;
	    case 34:
		    var li2ram = document.getElementById("li-choix-2-ram");
	        li2ram.style.display = "none";
	        document.getElementById("check-ram-2").checked = false;
	        filterPhoneRam();
	        break;
	    case 35:
		    var li1demiram = document.getElementById("li-choix-1-demi-ram");
	        li1demiram.style.display = "none";
	        document.getElementById("check-ram-1.5").checked = false;
	        filterPhoneRam();
	        break;
	    case 36:
		    var li1ram = document.getElementById("li-choix-1-ram");
	        li1ram.style.display = "none";
	        document.getElementById("check-ram-1").checked = false;
	        filterPhoneRam();
	        break;
	    case 40:
		    var li1ram = document.getElementById("li-choix-1-ram");
	        li1ram.style.display = "none";
	        document.getElementById("check-ram-1").checked = false;
	        var li1demiram = document.getElementById("li-choix-1-demi-ram");
	        li1demiram.style.display = "none";
	        document.getElementById("check-ram-1.5").checked = false;
	        var li2ram = document.getElementById("li-choix-2-ram");
	        li2ram.style.display = "none";
	        document.getElementById("check-ram-2").checked = false;
	        var li3ram = document.getElementById("li-choix-3-ram");
	        li3ram.style.display = "none";
	        document.getElementById("check-ram-3").checked = false;
	        var li4ram = document.getElementById("li-choix-4-ram");
	        li4ram.style.display = "none";
	        document.getElementById("check-ram-4").checked = false;
	        var li8ram = document.getElementById("li-choix-8-ram");
	        li8ram.style.display = "none";
	        document.getElementById("check-ram-8").checked = false;
	        filterPhoneRam();
	        var li8rom = document.getElementById("li-choix-8-rom");
	        li8rom.style.display = "none";
	        document.getElementById("check-rom-8").checked = false;
	        var li16rom = document.getElementById("li-choix-16-rom");
	        li16rom.style.display = "none";
	        document.getElementById("check-rom-16").checked = false;
	        var li32rom = document.getElementById("li-choix-32-rom");
	        li32rom.style.display = "none";
	        document.getElementById("check-rom-32").checked = false;
	        var li64rom = document.getElementById("li-choix-64-rom");
	        li64rom.style.display = "none";
	        document.getElementById("check-rom-64").checked = false;
	        var li128rom = document.getElementById("li-choix-128-rom");
	        li128rom.style.display = "none";
	        document.getElementById("check-rom-128").checked = false;
	        var li256rom = document.getElementById("li-choix-256-rom");
	        li256rom.style.display = "none";
	        document.getElementById("check-rom-256").checked = false;
	        filterPhoneRom();
	        var li700àplusPrix = document.getElementById("li-choix-700-plus-prix");
	        li700àplusPrix.style.display = "none";
	        document.getElementById("check-prix-700-plus").checked = false;
	        var li500à700Prix = document.getElementById("li-choix-500-700-prix");
	        li500à700Prix.style.display = "none";
	        document.getElementById("check-prix-500-700").checked = false;
	        var li200à500Prix = document.getElementById("li-choix-200-500-prix");
	        li200à500Prix.style.display = "none";
	        document.getElementById("check-prix-200-500").checked = false;
	        var li0à200Prix = document.getElementById("li-choix-0-200-prix");
	        li0à200Prix.style.display = "none";
	        document.getElementById("check-prix-0-200").checked = false;
	        filterPhonePrix();
	        var liAppleMarque = document.getElementById("li-choix-apple-marque");
	        liAppleMarque.style.display = "none";
	        document.getElementById("check-marque-apple").checked = false;
		    var liSamsungMarque = document.getElementById("li-choix-samsung-marque");
	        liSamsungMarque.style.display = "none";
	        document.getElementById("check-marque-samsung").checked = false;
		    var liHuaweiMarque = document.getElementById("li-choix-huawei-marque");
	        liHuaweiMarque.style.display = "none";
	        document.getElementById("check-marque-huawei").checked = false;
		    var liAsusMarque = document.getElementById("li-choix-asus-marque");
	        liAsusMarque.style.display = "none";
	        document.getElementById("check-marque-asus").checked = false;
		    var liHonorMarque = document.getElementById("li-choix-honor-marque");
	        liHonorMarque.style.display = "none";
	        document.getElementById("check-marque-honor").checked = false;
		    var liSonyMarque = document.getElementById("li-choix-sony-marque");
	        liSonyMarque.style.display = "none";
	        document.getElementById("check-marque-sony").checked = false;
		    var liWikoMarque = document.getElementById("li-choix-wiko-marque");
	        liWikoMarque.style.display = "none";
	        document.getElementById("check-marque-wiko").checked = false;
		    var liHtcMarque = document.getElementById("li-choix-htc-marque");
	        liHtcMarque.style.display = "none";
	        document.getElementById("check-marque-htc").checked = false;
	        filterPhoneMarque();
	        break;
	}
}

function filterPhonePrix() {
	var check0à200 = document.getElementById("check-prix-0-200").checked;
	var check200à500 = document.getElementById("check-prix-200-500").checked;
	var check500à700 = document.getElementById("check-prix-500-700").checked;
	var check700àplus = document.getElementById("check-prix-700-plus").checked;
	var phoneItem = document.getElementsByClassName("container-item");
	var phonePrix700àplus = document.getElementsByClassName("prix-700-plus");
	var phonePrix500à700 = document.getElementsByClassName("prix-500-700");
	var phonePrix200à500 = document.getElementsByClassName("prix-200-500");
	var phonePrix0à200 = document.getElementsByClassName("prix-0-200");
	var li0à200Prix = document.getElementById("li-choix-0-200-prix");
	li0à200Prix.style.display = "none";
	var li200à500Prix = document.getElementById("li-choix-200-500-prix");
	li200à500Prix.style.display = "none";
	var li500à700Prix = document.getElementById("li-choix-500-700-prix");
	li500à700Prix.style.display = "none";
	var li700àplusPrix = document.getElementById("li-choix-700-plus-prix");
	li700àplusPrix.style.display = "none";
	var i;
	showDeleteAllFilter();
	for (i = 0; i < phoneItem.length; i++) {
		phoneItem[i].style.display = "none";
		phoneItem[i].className = phoneItem[i].className.replace("selected-prix","xx-prix");
	}
	if (check0à200 == true) {
		for (i = 0; i < phonePrix0à200.length; i++) {
			var x = phonePrix0à200[i].className.search("selected-marque");
			var y = phonePrix0à200[i].className.search("selected-rom");
			var z = phonePrix0à200[i].className.search("selected-ram");
			phonePrix0à200[i].className = phonePrix0à200[i].className.replace("xx-prix","selected-prix");
			if (x != -1 && y!= -1 && z!= -1) {
				phonePrix0à200[i].style.display = "inline-block";
			}
		}
		li0à200Prix.style.display = "inline-block";
	}
	if (check200à500 == true) {
		for (i = 0; i < phonePrix200à500.length; i++) {
			var x = phonePrix200à500[i].className.search("selected-marque");
			var y = phonePrix200à500[i].className.search("selected-rom");
			var z = phonePrix200à500[i].className.search("selected-ram");
			phonePrix200à500[i].className = phonePrix200à500[i].className.replace("xx-prix","selected-prix");
			if (x != -1 && y!= -1 && z!= -1) {
				phonePrix200à500[i].style.display = "inline-block";
			}
		}
		li200à500Prix.style.display = "inline-block";
	}
	if (check500à700 == true) {
		for (i = 0; i < phonePrix500à700.length; i++) {
			var x = phonePrix500à700[i].className.search("selected-marque");
			var y = phonePrix500à700[i].className.search("selected-rom");
			var z = phonePrix500à700[i].className.search("selected-ram");
			phonePrix500à700[i].className = phonePrix500à700[i].className.replace("xx-prix","selected-prix");
			if (x != -1 && y!= -1 && z!= -1) {
				phonePrix500à700[i].style.display = "inline-block";
			}
		}
		li500à700Prix.style.display = "inline-block";
	}
	if (check700àplus == true) {
		for (i = 0; i < phonePrix700àplus.length; i++) {
			var x = phonePrix700àplus[i].className.search("selected-marque");
			var y = phonePrix700àplus[i].className.search("selected-rom");
			var z = phonePrix700àplus[i].className.search("selected-ram");
			phonePrix700àplus[i].className = phonePrix700àplus[i].className.replace("xx-prix","selected-prix");
			if (x != -1 && y!= -1 && z!= -1) {
				phonePrix700àplus[i].style.display = "inline-block";
			}
		}
		li700àplusPrix.style.display = "inline-block";
	}
	if (check0à200 == false && check200à500 == false && check500à700 == false && check700àplus == false) {
		for (i = 0; i < phoneItem.length; i++) {
			var x = phoneItem[i].className.search("selected-marque");
			var y = phoneItem[i].className.search("selected-rom");
			var z = phoneItem[i].className.search("selected-ram");
			phoneItem[i].className = phoneItem[i].className.replace("xx-prix","selected-prix");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneItem[i].style.display = "inline-block";
			}
		}
	}
}

function filterPhoneRom() {
	var check256 = document.getElementById("check-rom-256").checked;
	var check128 = document.getElementById("check-rom-128").checked;
	var check64 = document.getElementById("check-rom-64").checked;
	var check32 = document.getElementById("check-rom-32").checked;
	var check16 = document.getElementById("check-rom-16").checked;
	var check8 = document.getElementById("check-rom-8").checked;
	var phoneItem = document.getElementsByClassName("container-item");
	var phoneRom256 = document.getElementsByClassName("rom-256");
	var phoneRom128 = document.getElementsByClassName("rom-128");
	var phoneRom64 = document.getElementsByClassName("rom-64");
	var phoneRom32 = document.getElementsByClassName("rom-32");
	var phoneRom16 = document.getElementsByClassName("rom-16");
	var phoneRom8 = document.getElementsByClassName("rom-8");
	var i;
	var li256rom = document.getElementById("li-choix-256-rom");
	li256rom.style.display = "none";
	var li128rom = document.getElementById("li-choix-128-rom");
	li128rom.style.display = "none";
	var li64rom = document.getElementById("li-choix-64-rom");
	li64rom.style.display = "none";
	var li32rom = document.getElementById("li-choix-32-rom");
	li32rom.style.display = "none";
	var li16rom = document.getElementById("li-choix-16-rom");
	li16rom.style.display = "none";
	var li8rom = document.getElementById("li-choix-8-rom");
	li8rom.style.display = "none";
	showDeleteAllFilter();
	for (i = 0; i < phoneItem.length; i++) {
		phoneItem[i].style.display = "none";
		phoneItem[i].className = phoneItem[i].className.replace("selected-rom","xx-rom");
	}
	if (check256 == true) {
		for (i = 0; i < phoneRom256.length; i++) {
			var x = phoneRom256[i].className.search("selected-marque");
			var y = phoneRom256[i].className.search("selected-prix");
			var z = phoneRom256[i].className.search("selected-ram");
			phoneRom256[i].className = phoneRom256[i].className.replace("xx-rom","selected-rom");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRom256[i].style.display = "inline-block";
			}
		}
		li256rom.style.display = "inline-block";
	}
	if (check128 == true) {
		for (i = 0; i < phoneRom128.length; i++) {
			var x = phoneRom128[i].className.search("selected-marque");
			var y = phoneRom128[i].className.search("selected-prix");
			var z = phoneRom128[i].className.search("selected-ram");
			phoneRom128[i].className = phoneRom128[i].className.replace("xx-rom","selected-rom");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRom128[i].style.display = "inline-block";
			}
		}
		li128rom.style.display = "inline-block";
	}
	if (check64 == true) {
		for (i = 0; i < phoneRom64.length; i++) {
			var x = phoneRom64[i].className.search("selected-marque");
			var y = phoneRom64[i].className.search("selected-prix");
			var z = phoneRom64[i].className.search("selected-ram");
			phoneRom64[i].className = phoneRom64[i].className.replace("xx-rom","selected-rom");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRom64[i].style.display = "inline-block";
			}
		}
		li64rom.style.display = "inline-block";
	}
	if (check32 == true) {
		for (i = 0; i < phoneRom32.length; i++) {
			var x = phoneRom32[i].className.search("selected-marque");
			var y = phoneRom32[i].className.search("selected-prix");
			var z = phoneRom32[i].className.search("selected-ram");
			phoneRom32[i].className = phoneRom32[i].className.replace("xx-rom","selected-rom");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRom32[i].style.display = "inline-block";
			}
		}
		li32rom.style.display = "inline-block";
	}
	if (check16 == true) {
		for (i = 0; i < phoneRom16.length; i++) {
			var x = phoneRom16[i].className.search("selected-marque");
			var y = phoneRom16[i].className.search("selected-prix");
			var z = phoneRom16[i].className.search("selected-ram");
			phoneRom16[i].className = phoneRom16[i].className.replace("xx-rom","selected-rom");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRom16[i].style.display = "inline-block";
			}
		}
		li16rom.style.display = "inline-block";
	}
	if (check8 == true) {
		for (i = 0; i < phoneRom8.length; i++) {
			var x = phoneRom8[i].className.search("selected-marque");
			var y = phoneRom8[i].className.search("selected-prix");
			var z = phoneRom8[i].className.search("selected-ram");
			phoneRom8[i].className = phoneRom8[i].className.replace("xx-rom","selected-rom");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRom8[i].style.display = "inline-block";
			}
		}
		li8rom.style.display = "inline-block";
	}
	if (check256 == false && check128 == false && check64 == false && check32 == false && check16 == false && check8 == false) {
		for (i = 0; i < phoneItem.length; i++) {
			var x = phoneItem[i].className.search("selected-marque");
			var y = phoneItem[i].className.search("selected-prix");
			var z = phoneItem[i].className.search("selected-ram");
			phoneItem[i].className = phoneItem[i].className.replace("xx-rom","selected-rom");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneItem[i].style.display = "inline-block";
			}
		}
	}
}

function filterPhoneRam() {
	var check8 = document.getElementById("check-ram-8").checked;
	var check4 = document.getElementById("check-ram-4").checked;
	var check3 = document.getElementById("check-ram-3").checked;
	var check2 = document.getElementById("check-ram-2").checked;
	var check1demi = document.getElementById("check-ram-1.5").checked;
	var check1 = document.getElementById("check-ram-1").checked;
	var phoneItem = document.getElementsByClassName("container-item");
	var phoneRam8 = document.getElementsByClassName("ram-8");
	var phoneRam4 = document.getElementsByClassName("ram-4");
	var phoneRam3 = document.getElementsByClassName("ram-3");
	var phoneRam2 = document.getElementsByClassName("ram-2");
	var phoneRam1demi = document.getElementsByClassName("ram-1.5");
	var phoneRam1 = document.getElementsByClassName("ram-1");
	var i;
	var li8ram = document.getElementById("li-choix-8-ram");
	li8ram.style.display = "none";
	var li4ram = document.getElementById("li-choix-4-ram");
	li4ram.style.display = "none";
	var li3ram = document.getElementById("li-choix-3-ram");
	li3ram.style.display = "none";
	var li2ram = document.getElementById("li-choix-2-ram");
	li2ram.style.display = "none";
	var li1demiram = document.getElementById("li-choix-1-demi-ram");
	li1demiram.style.display = "none";
	var li1ram = document.getElementById("li-choix-1-ram");
	li1ram.style.display = "none";
	showDeleteAllFilter();
	for (i = 0; i < phoneItem.length; i++) {
		phoneItem[i].style.display = "none";
		phoneItem[i].className = phoneItem[i].className.replace("selected-ram","xx-ram");
	}
	if (check8 == true) {
		for (i = 0; i < phoneRam8.length; i++) {
			var x = phoneRam8[i].className.search("selected-marque");
			var y = phoneRam8[i].className.search("selected-prix");
			var z = phoneRam8[i].className.search("selected-rom");
			phoneRam8[i].className = phoneRam8[i].className.replace("xx-ram","selected-ram");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRam8[i].style.display = "inline-block";
			}
		}
		li8ram.style.display = "inline-block";
	}
	if (check4 == true) {
		for (i = 0; i < phoneRam4.length; i++) {
			var x = phoneRam4[i].className.search("selected-marque");
			var y = phoneRam4[i].className.search("selected-prix");
			var z = phoneRam4[i].className.search("selected-rom");
			phoneRam4[i].className = phoneRam4[i].className.replace("xx-ram","selected-ram");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRam4[i].style.display = "inline-block";
			}
		}
		li4ram.style.display = "inline-block";
	}
	if (check3 == true) {
		for (i = 0; i < phoneRam3.length; i++) {
			var x = phoneRam3[i].className.search("selected-marque");
			var y = phoneRam3[i].className.search("selected-prix");
			var z = phoneRam3[i].className.search("selected-rom");
			phoneRam3[i].className = phoneRam3[i].className.replace("xx-ram","selected-ram");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRam3[i].style.display = "inline-block";
			}
		}
		li3ram.style.display = "inline-block";
	}
	if (check2 == true) {
		for (i = 0; i < phoneRam2.length; i++) {
			var x = phoneRam2[i].className.search("selected-marque");
			var y = phoneRam2[i].className.search("selected-prix");
			var z = phoneRam2[i].className.search("selected-rom");
			phoneRam2[i].className = phoneRam2[i].className.replace("xx-ram","selected-ram");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRam2[i].style.display = "inline-block";
			}
		}
		li2ram.style.display = "inline-block";
	}
	if (check1demi == true) {
		for (i = 0; i < phoneRam1demi.length; i++) {
			var x = phoneRam1demi[i].className.search("selected-marque");
			var y = phoneRam1demi[i].className.search("selected-prix");
			var z = phoneRam1demi[i].className.search("selected-rom");
			phoneRam1demi[i].className = phoneRam1demi[i].className.replace("xx-ram","selected-ram");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRam1demi[i].style.display = "inline-block";
			}
		}
		li1demiram.style.display = "inline-block";
	}
	if (check1 == true) {
		for (i = 0; i < phoneRam1.length; i++) {
			var x = phoneRam1[i].className.search("selected-marque");
			var y = phoneRam1[i].className.search("selected-prix");
			var z = phoneRam1[i].className.search("selected-rom");
			phoneRam1[i].className = phoneRam1[i].className.replace("xx-ram","selected-ram");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneRam1[i].style.display = "inline-block";
			}
		}
		li1ram.style.display = "inline-block";
	}
	if (check8 == false && check4 == false && check3 == false && check2 == false && check1demi == false && check1 == false) {
		for (i = 0; i < phoneItem.length; i++) {
			var x = phoneItem[i].className.search("selected-marque");
			var y = phoneItem[i].className.search("selected-prix");
			var z = phoneItem[i].className.search("selected-rom");
			phoneItem[i].className = phoneItem[i].className.replace("xx-ram","selected-ram");
			if (x != -1 && y!= -1 && z!= -1) {
				phoneItem[i].style.display = "inline-block";
			}
		}
	}
}

function showDeleteAllFilter() {
	var check8ram = document.getElementById("check-ram-8").checked;
	var check4ram = document.getElementById("check-ram-4").checked;
	var check3ram = document.getElementById("check-ram-3").checked;
	var check2ram = document.getElementById("check-ram-2").checked;
	var check1demiram = document.getElementById("check-ram-1.5").checked;
	var check1ram = document.getElementById("check-ram-1").checked;
	var check256rom = document.getElementById("check-rom-256").checked;
	var check128rom = document.getElementById("check-rom-128").checked;
	var check64rom = document.getElementById("check-rom-64").checked;
	var check32rom = document.getElementById("check-rom-32").checked;
	var check16rom = document.getElementById("check-rom-16").checked;
	var check8rom = document.getElementById("check-rom-8").checked;
	var check0à200 = document.getElementById("check-prix-0-200").checked;
	var check200à500 = document.getElementById("check-prix-200-500").checked;
	var check500à700 = document.getElementById("check-prix-500-700").checked;
	var check700àplus = document.getElementById("check-prix-700-plus").checked;
	var checkApple = document.getElementById("check-marque-apple").checked;
	var checkSamsung = document.getElementById("check-marque-samsung").checked;
	var checkHuawei = document.getElementById("check-marque-huawei").checked;
	var checkAsus = document.getElementById("check-marque-asus").checked;
	var checkHonor = document.getElementById("check-marque-honor").checked;
	var checkSony = document.getElementById("check-marque-sony").checked;
	var checkWiko = document.getElementById("check-marque-wiko").checked;
	var checkHtc = document.getElementById("check-marque-htc").checked;
	var liDeleteAll = document.getElementById("li-choix-tout-supprimer");
	liDeleteAll.style.display = "none";
	if (checkApple == true || checkSamsung == true || checkHuawei == true || checkAsus == true || checkHonor == true || checkSony == true || checkWiko == true || checkHtc == true) {
		liDeleteAll.style.display = "inline-block";
	}
	if (check0à200 == true || check200à500 == true || check500à700 == true || check700àplus == true) {
		liDeleteAll.style.display = "inline-block";
	}
	if (check256rom == true || check128rom == true || check64rom == true || check32rom == true || check16rom == true || check8rom == true) {
		liDeleteAll.style.display = "inline-block";
	}
	if (check8ram == true || check4ram == true || check3ram == true || check2ram == true || check1demiram == true || check1ram == true) {
		liDeleteAll.style.display = "inline-block";
	}
}

function panierVide() {
	var panierVideContainer = document.getElementById("mon-panier-vide");
	var panierPlein = document.getElementById("container-item-added-panier");
	var totalàpayer = document.getElementById("ticket-total-to-pay-montant-value");
	if (totalàpayer.innerHTML != 0) {
		panierVideContainer.style.display = "none";
		panierPlein.style.display = "block";
	}
	if (totalàpayer.innerHTML == 0) {
		panierVideContainer.style.display = "block";
		panierPlein.style.display = "none";
	}
}

function ajouterAuPanierSamsungS9() {
	var divSamsungS9 = document.getElementsByClassName("div-samsung-s9-panier");
	if (divSamsungS9.length == 0) {
		var divItem = document.createElement("div");
		var classDivItem = document.createAttribute("class");
		classDivItem.value = "div-samsung-s9-panier div-item-panier";
		divItem.setAttributeNode(classDivItem);
		var itemLinkImg = document.createElement("a");
		var classLinkImg = document.createAttribute("class");
		classLinkImg.value = "item-link-img-panier";
		itemLinkImg.setAttributeNode(classLinkImg);
		var hrefLinkImg = document.createAttribute("href");
		hrefLinkImg.value = "#";
		itemLinkImg.setAttributeNode(hrefLinkImg);
		var itemImg = document.createElement("img");
		var srcAttItemImg = document.createAttribute("src");
		srcAttItemImg.value = "E:\\Ecommerce app\\img\\galaxy-s9-panier.PNG";
		itemImg.setAttributeNode(srcAttItemImg);
		itemLinkImg.appendChild(itemImg);
		divItem.appendChild(itemLinkImg);
		var detail = document.createElement("div");
		var classdetail = document.createAttribute("class");
		classdetail.value = "item-detail-panier";
		detail.setAttributeNode(classdetail);
		var marque = document.createElement("div");
		var classmarque = document.createAttribute("class");
		classmarque.value = "item-detail-marque-panier";
		marque.setAttributeNode(classmarque);
		var marqueContent = document.createTextNode("SAMSUNG");
		marque.appendChild(marqueContent);
		detail.appendChild(marque);
		var desc = document.createElement("div");
		var descContent = document.createTextNode("Galaxy S9 - Bleu Corail");
		desc.appendChild(descContent);
		detail.appendChild(desc);
		var quantity = document.createElement("div");
		var classquantity = document.createAttribute("class");
		classquantity.value = "item-detail-quantity-panier";
		quantity.setAttributeNode(classquantity);
		var moins = document.createElement("span");
		var classmoins = document.createAttribute("class");
		classmoins.value = "item-detail-moins-panier";
		moins.setAttributeNode(classmoins);
		var moinsClickAtt = document.createAttribute("onclick");
		moinsClickAtt.value = "moinsQuantity(1)";
		moins.setAttributeNode(moinsClickAtt);
		var moinsContent = document.createTextNode("-");
		moins.appendChild(moinsContent);
		quantity.appendChild(moins);
		var quantityNumber = document.createElement("span");
		var classquantityNumber = document.createAttribute("class");
		classquantityNumber.value = "item-detail-quantity-number-panier samsung-s9-quantity-panier";
		quantityNumber.setAttributeNode(classquantityNumber);
		var quantityNumberContent = document.createTextNode("1");
		quantityNumber.appendChild(quantityNumberContent);
		quantity.appendChild(quantityNumber);
		var plus = document.createElement("span");
		var classplus = document.createAttribute("class");
		classplus.value = "item-detail-plus-panier";
		plus.setAttributeNode(classplus);
		var plusClickAtt = document.createAttribute("onclick");
		plusClickAtt.value = "plusQuantity(1)";
		plus.setAttributeNode(plusClickAtt);
		var plusContent = document.createTextNode("+");
		plus.appendChild(plusContent);
		quantity.appendChild(plus);
		detail.appendChild(quantity);
		var enstock = document.createElement("div");
		var bulletvert = document.createElement("span");
		var classbulletvert = document.createAttribute("class");
		classbulletvert.value = "item-detail-bullet-enstock-panier";
		bulletvert.setAttributeNode(classbulletvert);
		enstock.appendChild(bulletvert);
		var enstocktext = document.createElement("span");
		var enstockContent = document.createTextNode("En stock");
		enstocktext.appendChild(enstockContent);
		enstock.appendChild(enstocktext);
		detail.appendChild(enstock);
		divItem.appendChild(detail);
		var x = document.createElement("div");
		var classx = document.createAttribute("class");
		classx.value = "item-x-panier";
		x.setAttributeNode(classx);
		var ximg = document.createElement("img");
		var xsrcAtt = document.createAttribute("src");
		xsrcAtt.value = "E:\\Ecommerce app\\img\\delete-all-icon.GIF";
		ximg.setAttributeNode(xsrcAtt);
		var xClickAtt = document.createAttribute("onclick");
		xClickAtt.value = "removeItemPanier(1)";
		ximg.setAttributeNode(xClickAtt);
		x.appendChild(ximg);
		divItem.appendChild(x);
		var itemPrixPanier = document.createElement("div");
		var classItemPrixPanier = document.createAttribute("class");
		classItemPrixPanier.value = "item-prix-panier item-s9-prix-panier";
		itemPrixPanier.setAttributeNode(classItemPrixPanier);
		divItem.appendChild(itemPrixPanier);
		var element = document.getElementById("item-added-to-panier");
		element.appendChild(divItem);
		var divItemTicket = document.createElement("div");
		var classDivItemTicket = document.createAttribute("class");
		classDivItemTicket.value = "item-div-ticket div-samsung-s9-ticket";
		divItemTicket.setAttributeNode(classDivItemTicket);
		var itemTicketMarque = document.createElement("div");
		var classItemTicketMarque = document.createAttribute("class");
		classItemTicketMarque.value = "item-marque-ticket-panier";
		itemTicketMarque.setAttributeNode(classItemTicketMarque);
		var itemTicketMarqueContent = document.createTextNode("SAMSUNG");
		itemTicketMarque.appendChild(itemTicketMarqueContent);
		divItemTicket.appendChild(itemTicketMarque);
		var itemPrixTicket = document.createElement("div");
		var classItemPrixTicket = document.createAttribute("class");
		classItemPrixTicket.value = "item-prix-ticket";
		itemPrixTicket.setAttributeNode(classItemPrixTicket);
		var itemTicketQuantity = document.createElement("span");
		var classItemTicketQuantity = document.createAttribute("class");
		classItemTicketQuantity.value = "item-s9-quantity-ticket item-quantity-ticket";
		itemTicketQuantity.setAttributeNode(classItemTicketQuantity);
		var itemTicketQuantityX = document.createElement("span");
		var classItemTicketQuantityX = document.createAttribute("class");
		classItemTicketQuantityX.value = "item-s9-quantityX-ticket";
		itemTicketQuantityX.setAttributeNode(classItemTicketQuantityX);
		var itemPrixTicketValeur = document.createElement("span");
		var classItemPrixTicketValeur = document.createAttribute("class");
		classItemPrixTicketValeur.value = "item-prix-ticket-valeur";
		itemPrixTicketValeur.setAttributeNode(classItemPrixTicketValeur);
		var itemPrixTicketValeurContent = document.createTextNode("849");
		itemPrixTicketValeur.appendChild(itemPrixTicketValeurContent);
		itemPrixTicketValeur.appendChild(itemPrixTicketValeurContent);
		var itemPrixTicketEuro = document.createElement("span");
		var classItemPrixTicketEuro = document.createAttribute("class");
		classItemPrixTicketEuro.value = "item-s9-euro-ticket";
		itemPrixTicketEuro.setAttributeNode(classItemPrixTicketEuro);
		itemPrixTicket.appendChild(itemTicketQuantity);
		itemPrixTicket.appendChild(itemTicketQuantityX);
		itemPrixTicket.appendChild(itemPrixTicketValeur);
		itemPrixTicket.appendChild(itemPrixTicketEuro);
		divItemTicket.appendChild(itemPrixTicket);
		var itemTicketDesc = document.createElement("div");
		var itemTicketDescContent = document.createTextNode("Galaxy S9 - Bleu Corail");
		itemTicketDesc.appendChild(itemTicketDescContent);
		divItemTicket.appendChild(itemTicketDesc);
		var elementticket = document.getElementById("result-item-added-panier");
		elementticket.appendChild(divItemTicket);
		var addEuro = document.getElementsByClassName("item-s9-prix-panier")[0];
		addEuro.innerHTML = "849 &euro;";
		var addEuroTicket = document.getElementsByClassName("item-s9-euro-ticket")[0];
		addEuroTicket.innerHTML = " &euro;";
		totalToPay();
		panierVide();
	}
}

function ajouterAuPanierSamsungS8() {
	var divSamsungS8 = document.getElementsByClassName("div-samsung-s8-panier");
	if (divSamsungS8.length == 0) {
		var divItem = "<div class='div-samsung-s8-panier div-item-panier'>" + 
		"<a class='item-link-img-panier' href='#'><img src='E:\\Ecommerce app\\img\\galaxy-s8-panier.JPG'></img></a>" + 
		"<div class='item-detail-panier'>" + 
		"<div class='item-detail-marque-panier'>SAMSUNG</div>" + 
		"<div>Galaxy S8 - Noir Carbonne</div>" + 
		"<div class='item-detail-quantity-panier'>" + 
		"<span class='item-detail-moins-panier' onclick='moinsQuantity(2)'>-</span>" + 
		"<span class='item-detail-quantity-number-panier samsung-s8-quantity-panier'>1</span>" + 
		"<span class='item-detail-plus-panier' onclick='plusQuantity(2)'>+</span></div>" + 
		"<div><span class='item-detail-bullet-enstock-panier'></span>" + 
		"<span>En stock</span></div></div>" + 
		"<div class='item-x-panier'><img src='E:\\Ecommerce app\\img\\delete-all-icon.GIF' onclick='removeItemPanier(2)'></img></div>" + 
		"<div class='item-prix-panier'>620 &euro;</div></div>";
		$("#item-added-to-panier-title").after(divItem);
		var divItemTicket = "<div class='item-div-ticket div-samsung-s8-ticket'>" + 
		"<div class='item-marque-ticket-panier'>SAMSUNG</div>" + 
		"<div class='item-prix-ticket'><span class='item-s8-quantity-ticket item-quantity-ticket'></span>" + 
		"<span class='item-s8-quantityX-ticket'></span>" + 
		"<span class='item-prix-ticket-valeur'>620</span>" + 
		"<span> &euro;</span></div>" + 
		"<div>Galaxy S8 - Noir Carbonne</div></div>";
		$("#result-item-added-panier").prepend(divItemTicket);
		totalToPay();
		panierVide();
	}
}

function ajouterAuPanierIphoneX() {
	var divIphoneX = document.getElementsByClassName("div-apple-iphoneX-panier");
	if (divIphoneX.length == 0) {
		var divItem = document.createElement("div");
		var classDivItem = document.createAttribute("class");
		classDivItem.value = "div-apple-iphoneX-panier div-item-panier";
		divItem.setAttributeNode(classDivItem);
		var itemLinkImg = document.createElement("a");
		var classLinkImg = document.createAttribute("class");
		classLinkImg.value = "item-link-img-panier";
		itemLinkImg.setAttributeNode(classLinkImg);
		var hrefLinkImg = document.createAttribute("href");
		hrefLinkImg.value = "E:\\Ecommerce app\\item-iphone-x.html";
		itemLinkImg.setAttributeNode(hrefLinkImg);
		var itemImg = document.createElement("img");
		var srcAttItemImg = document.createAttribute("src");
		srcAttItemImg.value = "E:\\Ecommerce app\\img\\iphone-x-panier.JPG";
		itemImg.setAttributeNode(srcAttItemImg);
		itemLinkImg.appendChild(itemImg);
		divItem.appendChild(itemLinkImg);
		var detail = document.createElement("div");
		var classdetail = document.createAttribute("class");
		classdetail.value = "item-detail-panier";
		detail.setAttributeNode(classdetail);
		var marque = document.createElement("div");
		var classmarque = document.createAttribute("class");
		classmarque.value = "item-detail-marque-panier";
		marque.setAttributeNode(classmarque);
		var marqueContent = document.createTextNode("APPLE");
		marque.appendChild(marqueContent);
		detail.appendChild(marque);
		var desc = document.createElement("div");
		var descContent = document.createTextNode("iPhone X - 256 Go - Gris Sideral");
		desc.appendChild(descContent);
		detail.appendChild(desc);
		var quantity = document.createElement("div");
		var classquantity = document.createAttribute("class");
		classquantity.value = "item-detail-quantity-panier";
		quantity.setAttributeNode(classquantity);
		var moins = document.createElement("span");
		var classmoins = document.createAttribute("class");
		classmoins.value = "item-detail-moins-panier";
		moins.setAttributeNode(classmoins);
		var moinsClickAtt = document.createAttribute("onclick");
		moinsClickAtt.value = "moinsQuantity(5)";
		moins.setAttributeNode(moinsClickAtt);
		var moinsContent = document.createTextNode("-");
		moins.appendChild(moinsContent);
		quantity.appendChild(moins);
		var quantityNumber = document.createElement("span");
		var classquantityNumber = document.createAttribute("class");
		classquantityNumber.value = "item-detail-quantity-number-panier apple-iphone-x-quantity-panier";
		quantityNumber.setAttributeNode(classquantityNumber);
		var quantityNumberContent = document.createTextNode("1");
		quantityNumber.appendChild(quantityNumberContent);
		quantity.appendChild(quantityNumber);
		var plus = document.createElement("span");
		var classplus = document.createAttribute("class");
		classplus.value = "item-detail-plus-panier";
		plus.setAttributeNode(classplus);
		var plusClickAtt = document.createAttribute("onclick");
		plusClickAtt.value = "plusQuantity(5)";
		plus.setAttributeNode(plusClickAtt);
		var plusContent = document.createTextNode("+");
		plus.appendChild(plusContent);
		quantity.appendChild(plus);
		detail.appendChild(quantity);
		var enstock = document.createElement("div");
		var bulletvert = document.createElement("span");
		var classbulletvert = document.createAttribute("class");
		classbulletvert.value = "item-detail-bullet-enstock-panier";
		bulletvert.setAttributeNode(classbulletvert);
		enstock.appendChild(bulletvert);
		var enstocktext = document.createElement("span");
		var enstockContent = document.createTextNode("En stock");
		enstocktext.appendChild(enstockContent);
		enstock.appendChild(enstocktext);
		detail.appendChild(enstock);
		divItem.appendChild(detail);
		var x = document.createElement("div");
		var classx = document.createAttribute("class");
		classx.value = "item-x-panier";
		x.setAttributeNode(classx);
		var ximg = document.createElement("img");
		var xsrcAtt = document.createAttribute("src");
		xsrcAtt.value = "E:\\Ecommerce app\\img\\delete-all-icon.GIF";
		ximg.setAttributeNode(xsrcAtt);
		var xClickAtt = document.createAttribute("onclick");
		xClickAtt.value = "removeItemPanier(5)";
		ximg.setAttributeNode(xClickAtt);
		x.appendChild(ximg);
		divItem.appendChild(x);
		var itemPrixPanier = document.createElement("div");
		var classItemPrixPanier = document.createAttribute("class");
		classItemPrixPanier.value = "item-prix-panier item-iphoneX-prix-panier";
		itemPrixPanier.setAttributeNode(classItemPrixPanier);
		divItem.appendChild(itemPrixPanier);
		var element = document.getElementById("item-added-to-panier");
		element.appendChild(divItem);
		var divItemTicket = document.createElement("div");
		var classDivItemTicket = document.createAttribute("class");
		classDivItemTicket.value = "item-div-ticket div-apple-iphoneX-ticket";
		divItemTicket.setAttributeNode(classDivItemTicket);
		var itemTicketMarque = document.createElement("div");
		var classItemTicketMarque = document.createAttribute("class");
		classItemTicketMarque.value = "item-marque-ticket-panier";
		itemTicketMarque.setAttributeNode(classItemTicketMarque);
		var itemTicketMarqueContent = document.createTextNode("APPLE");
		itemTicketMarque.appendChild(itemTicketMarqueContent);
		divItemTicket.appendChild(itemTicketMarque);
		var itemPrixTicket = document.createElement("div");
		var classItemPrixTicket = document.createAttribute("class");
		classItemPrixTicket.value = "item-prix-ticket";
		itemPrixTicket.setAttributeNode(classItemPrixTicket);
		var itemTicketQuantity = document.createElement("span");
		var classItemTicketQuantity = document.createAttribute("class");
		classItemTicketQuantity.value = "item-iphoneX-quantity-ticket item-quantity-ticket";
		itemTicketQuantity.setAttributeNode(classItemTicketQuantity);
		var itemTicketQuantityX = document.createElement("span");
		var classItemTicketQuantityX = document.createAttribute("class");
		classItemTicketQuantityX.value = "item-iphoneX-quantityX-ticket";
		itemTicketQuantityX.setAttributeNode(classItemTicketQuantityX);
		var itemPrixTicketValeur = document.createElement("span");
		var classItemTicketPrixValeur = document.createAttribute("class");
		classItemTicketPrixValeur.value = "item-prix-ticket-valeur";
		itemPrixTicketValeur.setAttributeNode(classItemTicketPrixValeur);
		var itemPrixTicketValeurContent = document.createTextNode("1229");
		itemPrixTicketValeur.appendChild(itemPrixTicketValeurContent);
		var itemPrixTicketEuro = document.createElement("span");
		var classItemPrixTicketEuro = document.createAttribute("class");
		classItemPrixTicketEuro.value = "item-iphoneX-euro-ticket";
		itemPrixTicketEuro.setAttributeNode(classItemPrixTicketEuro);
		itemPrixTicket.appendChild(itemTicketQuantity);
		itemPrixTicket.appendChild(itemTicketQuantityX);
		itemPrixTicket.appendChild(itemPrixTicketValeur);
		itemPrixTicket.appendChild(itemPrixTicketEuro);
		divItemTicket.appendChild(itemPrixTicket);
		var itemTicketDesc = document.createElement("div");
		var itemTicketDescContent = document.createTextNode("iPhone X - 256 Go - Gris Sideral");
		itemTicketDesc.appendChild(itemTicketDescContent);
		divItemTicket.appendChild(itemTicketDesc);
		var elementticket = document.getElementById("result-item-added-panier");
		elementticket.appendChild(divItemTicket);
		var addEuro = document.getElementsByClassName("item-iphoneX-prix-panier")[0];
		addEuro.innerHTML = "1229 &euro;";
		var addEuroTicket = document.getElementsByClassName("item-iphoneX-euro-ticket")[0];
		addEuroTicket.innerHTML = " &euro;";
		totalToPay();
		panierVide();
	}
}

function removeItemPanier(n) {
	switch (n) {
		case 1:
		    var itemDivPanier = document.getElementsByClassName("div-samsung-s9-panier")[0];
		    var itemDivTicket = document.getElementsByClassName("div-samsung-s9-ticket")[0];
		    itemDivPanier.parentNode.removeChild(itemDivPanier);
		    itemDivTicket.parentNode.removeChild(itemDivTicket);
		    break;
		case 2:
		    var itemDivPanier = document.getElementsByClassName("div-samsung-s8-panier")[0];
		    var itemDivTicket = document.getElementsByClassName("div-samsung-s8-ticket")[0];
		    itemDivPanier.parentNode.removeChild(itemDivPanier);
		    itemDivTicket.parentNode.removeChild(itemDivTicket);
		    break;
		case 5:
		    var itemDivPanier = document.getElementsByClassName("div-apple-iphoneX-panier")[0];
		    var itemDivTicket = document.getElementsByClassName("div-apple-iphoneX-ticket")[0];
		    itemDivPanier.parentNode.removeChild(itemDivPanier);
		    itemDivTicket.parentNode.removeChild(itemDivTicket);
		    break;
	}
	totalToPay();
	panierVide();
}

function plusQuantity(n) {
	switch (n) {
		case 1:
		    var quantity = document.getElementsByClassName("samsung-s9-quantity-panier")[0];
		    var quantityNumber = quantity.innerHTML;
		    quantityNumber++;
		    quantity.innerHTML = quantityNumber;
		    var quantityTicket = document.getElementsByClassName("item-s9-quantity-ticket")[0];
		    quantityTicket.innerHTML = quantityNumber;
		    var quantityXTicket = document.getElementsByClassName("item-s9-quantityX-ticket")[0];
		    quantityXTicket.innerHTML = "x ";
		    totalToPay();
		    break;
		case 2:
		    var quantity = document.getElementsByClassName("samsung-s8-quantity-panier")[0];
		    var quantityNumber = quantity.innerHTML;
		    quantityNumber++;
		    quantity.innerHTML = quantityNumber;
		    var quantityTicket = document.getElementsByClassName("item-s8-quantity-ticket")[0];
		    quantityTicket.innerHTML = quantityNumber;
		    var quantityXTicket = document.getElementsByClassName("item-s8-quantityX-ticket")[0];
		    quantityXTicket.innerHTML = "x ";
		    totalToPay();
		    break;
		case 5:
		    var quantity = document.getElementsByClassName("apple-iphone-x-quantity-panier")[0];
		    var quantityNumber = quantity.innerHTML;
		    quantityNumber++;
		    quantity.innerHTML = quantityNumber;
		    var quantityTicket = document.getElementsByClassName("item-iphoneX-quantity-ticket")[0];
		    quantityTicket.innerHTML = quantityNumber;
		    var quantityXTicket = document.getElementsByClassName("item-iphoneX-quantityX-ticket")[0];
		    quantityXTicket.innerHTML = "x ";
		    totalToPay();
		    break;
	}
}

function moinsQuantity(n) {
	switch (n) {
		case 1:
		    var quantity = document.getElementsByClassName("samsung-s9-quantity-panier")[0];
		    var quantityTicket = document.getElementsByClassName("item-s9-quantity-ticket")[0];
		    var quantityXTicket = document.getElementsByClassName("item-s9-quantityX-ticket")[0];
		    var quantityNumber = quantity.innerHTML;
		    if (quantityNumber > 1) {
		    	quantityNumber--;
		    	quantity.innerHTML = quantityNumber;
		    }
		    if (quantityNumber != 1) {
		        quantityTicket.innerHTML = quantityNumber;
		        quantityXTicket.innerHTML = "x ";
		    }
		    if (quantityNumber == 1) {
		        quantityTicket.innerHTML = "";
		        quantityXTicket.innerHTML = "";
		    }
		    totalToPay();
		    break;
		case 2:
		    var quantity = document.getElementsByClassName("samsung-s8-quantity-panier")[0];
		    var quantityTicket = document.getElementsByClassName("item-s8-quantity-ticket")[0];
		    var quantityXTicket = document.getElementsByClassName("item-s8-quantityX-ticket")[0];
		    var quantityNumber = quantity.innerHTML;
		    if (quantityNumber > 1) {
		    	quantityNumber--;
		    	quantity.innerHTML = quantityNumber;
		    }
		    if (quantityNumber != 1) {
		        quantityTicket.innerHTML = quantityNumber;
		        quantityXTicket.innerHTML = "x ";
		    }
		    if (quantityNumber == 1) {
		        quantityTicket.innerHTML = "";
		        quantityXTicket.innerHTML = "";
		    }
		    totalToPay();
		    break;
		case 5:
		    var quantity = document.getElementsByClassName("apple-iphone-x-quantity-panier")[0];
		    var quantityTicket = document.getElementsByClassName("item-iphoneX-quantity-ticket")[0];
		    var quantityXTicket = document.getElementsByClassName("item-iphoneX-quantityX-ticket")[0];
		    var quantityNumber = quantity.innerHTML;
		    if (quantityNumber > 1) {
		    	quantityNumber--;
		    	quantity.innerHTML = quantityNumber;
		    }
		    if (quantityNumber != 1) {
		        quantityTicket.innerHTML = quantityNumber;
		        quantityXTicket.innerHTML = "x ";
		    }
		    if (quantityNumber == 1) {
		        quantityTicket.innerHTML = "";
		        quantityXTicket.innerHTML = "";
		    }
		    totalToPay();
		    break;
	}
}

function totalToPay() {
	var quantity = document.getElementsByClassName("item-quantity-ticket");
	var prix = document.getElementsByClassName("item-prix-ticket-valeur");
	var àpayer = document.getElementById("ticket-total-to-pay-montant-value");
	var prixTotal = 0;
	var i;
	for (i = 0; i < prix.length; i++) {
		if (quantity[i].innerHTML == "") {
			prixTotal += Number(prix[i].innerHTML);
		}else {
			prixTotal += Number(prix[i].innerHTML) * Number(quantity[i].innerHTML);
		}
	}
	àpayer.innerHTML = prixTotal;
}

function showPanier() {
	var page = document.getElementsByClassName("page")[0];
	var panier = document.getElementsByClassName("page-panier")[0];
	var smartphone = document.getElementsByClassName("active")[0];
	var title = document.getElementsByTagName("title")[0];
	page.style.display = "none";
	panier.style.display = "block";
	smartphone.className = smartphone.className.replace("active","xx-active");
	title.innerHTML = "Mon Panier";
}

function hidePanier() {
	var page = document.getElementsByClassName("page")[0];
	var panier = document.getElementsByClassName("page-panier")[0];
	var smartphone = document.getElementsByClassName("xx-active")[0];
	var title = document.getElementsByTagName("title")[0];
	page.style.display = "block";
	panier.style.display = "none";
	smartphone.className = smartphone.className.replace("xx-active","active");
	title.innerHTML = "Smartphones Shooping";
	returnToPanier();
}

function createCompte(n) {
	var newCompte = document.getElementById("input-new-compte");
	var existeCompteInput = document.getElementById("input-existing-compte");
	var existeCompteForget = document.getElementById("forget-password-validation-identification");
	var identifier = document.getElementById("checkbox-s'identifier");
	var createNew = document.getElementById("checkbox-créer-compte");
	switch (n) {
		case 1:
		    identifier.className = identifier.className.replace("xx-choice","active-choice");
		    createNew.className = createNew.className.replace("active-choice","xx-choice");
		    existeCompteInput.style.display = "block";
		    existeCompteForget.style.display = "block";
		    newCompte.style.display = "none";
		    break;
		case 2:
		    identifier.className = identifier.className.replace("active-choice","xx-choice");
		    createNew.className = createNew.className.replace("xx-choice","active-choice");
		    existeCompteInput.style.display = "none";
		    existeCompteForget.style.display = "none";
		    newCompte.style.display = "block";
		    break;
	}
}

function validerPanier() {
	var itemAdded = document.getElementById("item-added-to-panier");
	var identifier = document.getElementById("validation-identification");
	var etape1 = document.getElementsByClassName("panier-1-etape")[0];
	var etape2 = document.getElementsByClassName("panier-2-etape")[0];
	var etape1icon = document.getElementsByClassName("panier-etape1-icon")[0];
	var etape2icon = document.getElementsByClassName("panier-etape2-icon")[0];
	etape1text = document.getElementsByClassName("panier-etape-panier")[0];
	etape2text = document.getElementsByClassName("panier-etape-livraison")[0];
	itemAdded.style.display = "none";
	identifier.style.display = "inline-block";
	etape1.style.borderColor = "white";
	etape2.style.borderColor = "#1390be";
	etape1icon.style.backgroundColor = "gray";
	etape2icon.style.backgroundColor = "#1390be";
	etape1text.style.color = "gray";
	etape2text.style.color = "#1390be";
}

function returnToPanier() {
	var itemAdded = document.getElementById("item-added-to-panier");
	var identifier = document.getElementById("validation-identification");
	var etape1 = document.getElementsByClassName("panier-1-etape")[0];
	var etape2 = document.getElementsByClassName("panier-2-etape")[0];
	var etape1icon = document.getElementsByClassName("panier-etape1-icon")[0];
	var etape2icon = document.getElementsByClassName("panier-etape2-icon")[0];
	etape1text = document.getElementsByClassName("panier-etape-panier")[0];
	etape2text = document.getElementsByClassName("panier-etape-livraison")[0];
	itemAdded.style.display = "inline-block";
	identifier.style.display = "none";
	etape1.style.borderColor = "#1390be";
	etape2.style.borderColor = "white";
	etape1icon.style.backgroundColor = "#1390be";
	etape2icon.style.backgroundColor = "gray";
	etape1text.style.color = "#1390be";
	etape2text.style.color = "gray";
}