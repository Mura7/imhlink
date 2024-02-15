const muratBilgi = '{"firstName":"Murat", "lastName":"Altay", "link1":" | Twitter, Instagram | Linktree", "link2":"murataltay.com", "link3":"Murat Hoca Hakkında Bilmediğiniz 5 Şey", "profile":"MA"}'
const murat = JSON.parse(muratBilgi);

const yusaBilgi = '{"firstName":"Yüşa Yusuf", "lastName":"Aslan", "link1":" | Twitter, Instagram | Linktree", "link2":"sadecedoit.com", "link3":"Benim Hakkımda Bilmediğiniz 5 Şey", "profile":"YYA"}'
const yusa = JSON.parse(yusaBilgi);


function mura7(){
    //Sayfa elementlerinin JSON formatı ile değişmesi
    document.getElementById("profile").innerHTML = murat.profile;
    document.getElementById("name").innerHTML = murat.firstName + " " + murat.lastName;
    document.getElementById("social").innerHTML = murat.firstName + " " + murat.lastName + " " + murat.link1;
    document.getElementById("website").innerHTML = murat.link2;
    document.getElementById("about").innerHTML = murat.link3;
    //Instagram butonu link değişimi
    const link = document.getElementById("instaLink");
    link.href = "https://www.instagram.com/murat/";
}

function yya(){
    //Sayfa elementlerinin JSON formatı ile değişmesi
    document.getElementById("profile").innerHTML = yusa.profile;
    document.getElementById("name").innerHTML = yusa.firstName + " " + yusa.lastName;
    document.getElementById("social").innerHTML = yusa.firstName + " " + yusa.lastName + " " + yusa.link1;
    document.getElementById("website").innerHTML = yusa.link2;
    document.getElementById("about").innerHTML = yusa.link3;
    //Instagram butonu link değişimi
    const link = document.getElementById("instaLink");
    link.href = "https://www.instagram.com/yusayaslan/";
}