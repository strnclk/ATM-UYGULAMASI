/*
1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış

*/
let yeniSatir="\r\n";
let bakiye=1000;

let metin="1-BAKİYE GÖRÜNTÜLEME"+yeniSatir
+"2-PARA ÇEKME"+yeniSatir
+"3-PARA YATIRMA"+yeniSatir
+"4-ÇIKIŞ"+yeniSatir
+"LÜTFEN BİR DEĞER SEÇİNİZ!";

let secim=prompt(metin);

switch(secim){
    case"1":
    alert("BAKİYENİZ:"+bakiye);
    break;

    case "2":
        let cekilecekTutar =Number( prompt("ÇEKMEK İSTEDİĞİNİZ TUTARI GİRİNİZ:"));
        if(cekilecekTutar<bakiye){
bakiye=bakiye-cekilecekTutar
alert("KALAN BAKİYE:"+bakiye);
        }else{
            alert("BAKİYENİZDEN FAZLA PARA ÇEKEMEZSİNİZ")+yeniSatir
            +"BAKİYENİZ:" +bakiye+" "+"ÇEKİLECEK TUTAR:"+cekilecekTutar;
        }
        break;

        case "3":
            let yatırılacakTutar=Number(prompt("YATIRILACAK  TUTARI GİRİNİZ:"));
            bakiye=bakiye+yatırılacakTutar
            alert("GÜNCEL BAKİYENİZ:"+bakiye);
            break;

            case "4":
            alert("SİSTEMDEN ÇIKIŞ YAPILMIŞTIR");
            break;

            default:
                alert("LÜTFEN 1-4 ARASINDA BİR DEĞER GİRİNİZ");
                break;
}

