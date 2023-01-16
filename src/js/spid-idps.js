
// * spid-idps.js *
// This script populate the SPID button with the SPID IDPS
//
// ** Configuration ***
// const idps define list of SPID IDPs
// - entityName - string with IDP name
// - entityID - string with IDP entityID
// - logo - url of IDP logo image
const idps = [
  {"entityName": "SPID Test", "entityID": "https://localhost:8080", "logo": ""},
  {"entityName": "Aruba ID", "entityID": "https://loginspid.aruba.it", "logo": "img/spid-idp-arubaid.svg"},
  {"entityName": "Infocert ID", "entityID": "https://identity.infocert.it", "logo": "img/spid-idp-infocertid.svg"},
  {"entityName": "Intesa ID", "entityID": "https://spid.intesa.it", "logo": "img/spid-idp-intesaid.svg"},
  {"entityName": "Lepida ID", "entityID": "https://id.lepida.it/idp/shibboleth", "logo": "img/spid-idp-lepidaid.svg"},
  {"entityName": "Namirial ID", "entityID": "https://idp.namirialtsp.com/idp", "logo": "img/spid-idp-namirialid.svg"},
  {"entityName": "Poste ID", "entityID": "https://posteid.poste.it", "logo": "img/spid-idp-posteid.svg"},
  {"entityName": "Sielte ID", "entityID": "https://identity.sieltecloud.it", "logo": "img/spid-idp-sielteid.svg"},
  {"entityName": "SPIDItalia Register.it", "entityID": "https://spid.register.it", "logo": "img/spid-idp-spiditalia.svg"},
  {"entityName": "Tim ID", "entityID": "https://login.id.tim.it/affwebservices/public/saml2sso", "logo": "img/spid-idp-timid.svg"},
  {"entityName": "TeamSystem ID", "entityID": "https://spid.teamsystem.com/idp", "logo": "img/spid-idp-teamsystemid.svg"}
].sort(() => Math.random() - 0.5)

// ** Values **
const urlParams = new URLSearchParams(window.location.search);
const servicePath = urlParams.get("return");
const entityID = urlParams.get('entityID');

// function addIdpEntry make a "li" element with the ipd link and prepend this in a element
//
// options:
// - data - is an object with "entityName", "entityID" and "logo" values
// - element - is the element where is added the new "li" element
function addIdpEntry(data, element) {
  let li = document.createElement('li');
  li.className = 'spid-idp-button-link'
  li.innerHTML = `<a class="dropdown-item" href="${servicePath}?entityID=${data['entityID']}&return=${servicePath}"><img src="${data['logo']}" alt="${data['entityName']}"></a>`
  element.prepend(li)
}

// when page is ready add each idps entry in the ul element
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    // var ul define the contain of ipds link
    
    var uls = document.querySelectorAll('.spid-button ul')
    for (var u = 0; u < uls.length; u++) {
      for (var i = 0; i < idps.length; i++) { addIdpEntry(idps[i], uls[u]); }
    }
  }
}
