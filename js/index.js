var banner = document.querySelector("#banner");
var bannerWhite = document.querySelector("#banner > div");
var navigation = document.querySelector("#navigation");
var footer = document.querySelector("#footer");
var footerBanner = document.querySelector("#footer_banner");
var footerBannerContent = document.querySelector("#footer_banner > div");
window.onscroll=function(event){

	// Scroll
	var y = window.scrollY;
	var pageHeight = document.body.offsetHeight - window.innerHeight;
	if(y<0){ y=0; }
	if(y>pageHeight){ y=pageHeight; }

	// Header
	if(y<200){
		banner.style.visibility = 'visible';
		banner.style.height = (200-y)+'px';
		var w = ((30-y)/30)*10;
		if(w<0) w=0;
		bannerWhite.style.borderLeftWidth = w+'px';
		bannerWhite.style.borderRightWidth = w+'px';
	}else{
		banner.style.visibility = 'hidden';
	}
	if(y<220){
		navigation.style.position='absolute';
		navigation.style.top='220px';
		navigation.style.borderBottom="none";
	}else{
		navigation.style.position='fixed';
		navigation.style.top='0px';
		navigation.style.borderBottom="1px solid #ddd";
	}

	// Footer
	if(pageHeight-y<220){
		footer.style.visibility='visible';
		var h = (200-(pageHeight-y));
		if(h<0) h=0;
		footerBanner.style.height = h+'px';
		footerBannerContent.style.top=(y-pageHeight)+'px';
	}else{
		footer.style.visibility='hidden';
	}

};