function adSetter(){
//alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: '',
        interstitial: ''
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-5984477348101952/1369255416',
        interstitial: ''
    };
} else {
    admobid = { // for Windows Phone
        banner: '',
        interstitial: ''
    };
}

if(AdMob) AdMob.createBanner( {
    isTesting:false, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

}
  function onDeviceReady(){
      adSetter();
  }


function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}