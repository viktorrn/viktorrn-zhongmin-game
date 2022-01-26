
export function getCardDiv(card){
    let div = document.createElement('div');
    div.setAttribute('class','card');
    div.setAttribute('cardName',card.name);
   
    let image = document.createElement('div');
    image.classList.add('image');
    
    var url = '../assets/CardImages/'+ card.name.replace(/\s/g,'')+'.svg';
    try{
    checkIfImageExists(url,(result)=>{
        if(result)image.style.backgroundImage = 'url('+url+')';
        else {
            url = '../assets/CardImages/'+ card.name.replace(/\s/g,'')+'.png';
            checkIfImageExists(url,(result)=>{
                if(result)image.style.backgroundImage = 'url('+url+')';
                else console.log("no picture")
            });
        }
    })
    }catch(error){}
    div.appendChild(image);


    let imageSword = document.createElement('div');
    imageSword.classList.add('damageIcon');
    div.appendChild(imageSword);

    let imagehealth = document.createElement('div');
    imagehealth.classList.add('healthIcon');
    div.appendChild(imagehealth);

    let factionSymbol = document.createElement('div');
    factionSymbol.classList.add('factionSymbol');
    switch(card.faction){
        case 'Humanity':
            factionSymbol.innerText = "H";
            break;
        case 'Beasts':
            factionSymbol.innerText = "B";
            break;
        case 'Graveyard':
            factionSymbol.innerText = "G";
            break;

        default:
            factionSymbol.innerText = "N";
            break;
    }

    div.appendChild(factionSymbol);

    let hdiv = document.createElement('div');
    hdiv.innerText = card.name;
    hdiv.classList.add('name')
    div.appendChild(hdiv);

    let dmg = document.createElement('div');
    dmg.innerText = card.damage;
    dmg.setAttribute('class','damage')
    div.appendChild(dmg);

    let hp = document.createElement('div');
    hp.innerText = card.health;
    hp.setAttribute('class','health')
    div.appendChild(hp);

    let cost = document.createElement('div');
    for(let i = 0; i < card.cost;i++){
        let blood = document.createElement('div');
        blood.classList.add('blood');
        cost.appendChild(blood);
    }
    cost.classList.add('cost')
    div.appendChild(cost);

    let description = document.createElement('div');
     
    description.innerText = textAmulets(card);
    description.classList.add('description')
    div.appendChild(description);

    if(card.rarity === "rare") {
        let bg = document.createElement('div');
        bg.classList.add('rareCardBackground');
        div.appendChild(bg);
      }
      
    let sac = document.createElement('div')
    sac.classList.add('saccrificeSymbol')
    sac.innerHTML =" &dagger;";
    
    div.appendChild(sac)
    return div;
}
export function textAmulets(card){
    let msg = "";
    for(let a of card.amulets){
        switch(a){
            case 'Rush':
                msg += "RS";
                break;
            case 'High Block':
                msg += "HB ";
                break;
            case 'Shield':
                msg += "SH ";
                break;
            case 'Drunk':
                msg += "DR ";
                break;
            case 'Mirror':
                msg += "MR ";
                break;
            case 'Marching':
                msg += "MA "
                break;
            case 'Valiant Hearts':
                msg += "VH ";
                break;
            case 'Reach':
                msg += "RH ";
                break;
            case 'Rebirth':
                msg += "RB ";
                break;
            case 'Flying':
                msg += "FL ";
                break;
            case 'Hound Master':
                msg += "HM ";
                break;
            case 'Headed Hunter':
                msg += "HH ";
                break;
            case 'Growth':
                msg += "GW ";
                break;
            case 'Manic':
                msg += "MN "
                break;
            default:
                msg+="";
                break;
        }
    }
    return msg;
}
function checkIfImageExists(url,callback) {
    const img = new Image();

    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      
      img.onerror = () => {
        callback(false);
      };
    }
  }