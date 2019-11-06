setTimeout(function () {
    $('.alert').css({
        "opacity": "0",
        "right": "-50px"
    });
}, 5000)
// OKNO DO WYBORU TŁA :

document.querySelector('.button').addEventListener('click', function open() {
    document.querySelector('.chosebgc').classList.toggle('active');
})
document.querySelector('div.chosebgc .close').addEventListener('click', function close() {
    document.querySelector('.chosebgc').classList.remove('active');
})
// $('div.button').click(function open(){
//     $('div.chosebgc').addClass('active')
// })
// $('div.chosebgc .close').click(function close(){
//     $('div.chosebgc').removeClass('active')
// })

// WYBÓR PROGRAMÓW:

const tbp = "<div class='progbox'><a href='https://toyotabank.ironmountain.com.pl/toyota/login.aspx' target='_blank'>Archiwum AMS</a></div><div class='progbox'><a href='https://wnioski.toyotabank.pl/' target='_blank'>CF Wnioski PROD</a></div>"
$('nav li:nth-of-type(2)').click(() => {
    $('.centerprog').html("");
    $('.centerprogt').html("");
})

const cc = "<div class='progbox'><a href='https://sales.toyotaleasing.pl/weblsp-client/pages/bilboard/bilboardShow.xhtml' target='_blank'>Web<span style='color: yellow;'>.</span>lsp client</a></div><div class='progbox'><a href='https://smartplan.toyotaleasing.pl/kalkulator/mainPage.mod' target='_blank'><span style='color: #1baaf2; font-weight: 800;'>SMART</span>plan</a></div><div class='progbox'><a href='https://dfe.toyotabank.pl/WebDFE/login.jsp' target='_blank'>WebDFE</a></div><div class='progbox'><a href='https://webcrm.toyotaleasing.pl/' target='_blank'>WebCRM</a></div><div class='progbox'><a href='https://cbp-bo.pl.toyota-fs.com:7166/backoffice/auth/y/login.jsp' target='_blank'>CBP-BO PROD</a></div><div class='progbox'><a href='http://wicom-reports/Reports_TBP/Pages/Folder.aspx' target='_blank'>Wicom reports</a></div><div class='progbox'><a href='http://plwdv022p:8080/mig3rws' target='_blank'>Mig dz Prod</a></div><div class='progbox'><a href='http://defprod/' target='_blank'>Def3000</a></div><div class='progbox'><a href='https://e-faktura.toyotaleasing.pl/' target='_blank'>E-faktura</a></div><div class='progbox'><a href='https://wnioski.toyotabank.pl/' target='_blank'>CF Wnioski PROD</a></div><div class='progbox'><a href='http://eadmz198p.ea.toyota-fs.com/ibmcognos' target='_blank'>SUB</a></div><div class='progbox'><a href='http://kodo/default.aspx' target='_blank'>KODO PROD</a></div><div class='progbox'><a href='https://toyota.bankfaktur.pl/' target='_blank'>Bank Faktur Portal</a></div><div class='progbox'><a href='http://ekancelaria/' target='_blank'>eKancelaria PROD</a></div><div class='progbox'><a href='https://toyota-panel.inteliwise.com/#/en/login?_k=as8kiu' target='_blank'>panel. inteliwise</a></div><div class='progbox'><a href='https://toyota-supervisor.inteliwise.com/' target='_blank'>supervisor. inteliwise</a></div><div class='progbox'><a href='https://toyota-agent.inteliwise.com/login' target='_blank'>Bagent. inteliwise</a></div><div class='progbox'><a href='https://cbp-bo-drc.pl.toyota-fs.com:7166/backoffice/auth/y/login.jsp' target='_blank'>CBP BO PROD-DR</a></div><div class='progbox'><a href='https://toyota-panel.inteliwise.com/#/en/login?_k=as8kiu' target='_blank'>panel. inteliwise</a></div><div class='progbox'><a href='https://toyota-panel.inteliwise.com/#/en/login?_k=as8kiu' target='_blank'>panel. inteliwise</a></div>";

const cct = "<div id='ccline'><b>Testowe</b></div><div class='progbox'><a href='http://defuat/' target='_blank'>def testuat</a></div><div class='progbox'><a href='http://deftest2/' target='_blank'>DEF test2</a></div>"

const drm = "<div class='progbox'><a href='https://sales.toyotaleasing.pl/weblsp-client/pages/bilboard/bilboardShow.xhtml' target='_blank'>Web<span style='color: yellow;'>.</span>lsp client</a></div><div class='progbox'><a href='https://smartplan.toyotaleasing.pl/kalkulator/mainPage.mod' target='_blank'><span style='color: #1baaf2; font-weight: 800;'>SMART</span>plan</a></div><div class='progbox'><a href='https://dfe.toyotabank.pl/WebDFE/login.jsp' target='_blank'>WebDFE</a></div><div class='progbox'><a href='https://webcrm.toyotaleasing.pl/' target='_blank'>WebCRM</a></div><div class='progbox'><a href='formularz.html' target='_blank'>Account Maker</a></div>"

$('.mainprog .progboxm:nth-child(1)').click(() => $('.centerprog').html(tbp))
$('.mainprog .progboxm:nth-child(2)').click(() => $('.centerprog').html(tbp))
$('.mainprog .progboxm:nth-child(3)').click(() => {
    $('.centerprog').html(drm)
    $('.centerprogt').html("");
})
$('.mainprog .progboxm:nth-child(4)').click(() => {
    $('.centerprog').html(cc);
    $('.centerprogt').html(cct);
})
$('.mainprog .progboxm:nth-child(5)').click(() => $('.centerprog').html(tbp))


// WYBÓR TŁA STRONY
let activeElement = -1;
const BgcCar = document.querySelector('.tape');
const CarImageslemans = ['img/p1.jpg', 'img/p2.jpg', 'img/p3.jpg', 'img/p4.jpg', 'img/p5.jpg', 'img/p6.jpg', 'img/p7.jpg'];
const CarImageswrx = ['img/w1.jpg', 'img/w2.jpg', 'img/w3.jpg', 'img/w4.jpg', 'img/w5.jpg', 'img/w6.jpg', 'img/w7.jpg', 'img/w8.jpg']


document.querySelector('.chosebgc .empty').addEventListener('click', function close() {
    document.querySelector('.tape').classList.add('remove');
})

document.querySelector('.chosebgc .lemans').addEventListener('click', function lemas() {
    document.querySelector('.tape').classList.remove('remove');
    bgcm()

    function bgcm() {
        activeElement++;
        if (activeElement == 6) {
            activeElement = 0;
        }
        BgcCar.style.backgroundImage = 'url(' + CarImageslemans[activeElement] + ')';
    }
    setInterval(bgcm, 20000);
})


document.querySelector('.chosebgc .wrc').addEventListener('click', function wrc() {
    document.querySelector('.tape').classList.remove('remove');
    bgcm1()

    function bgcm1() {
        activeElement++;
        if (activeElement == 7) {
            activeElement = 0;
        }
        BgcCar.style.backgroundImage = 'url(' + CarImageswrx[activeElement] + ')';
    }
    setInterval(bgcm1, 20000);
})