function rdfaToJSONLD() {
    const jsonld = {
      "@context": {
        "foaf": "http://xmlns.com/foaf/0.1/",
        "schema": "http://schema.org/"
      }
     };
  
    const name = document.querySelector('[property="schema:name"]').textContent;
    const imageSrc = document.querySelector('[property="schema:image"]').getAttribute('src');
    const email = document.querySelector('[property="schema:email"]').getAttribute('href').replace('mailto:', '');
    const phone = document.querySelector('[property="schema:telephone"]').getAttribute('href').replace('tel:', '');
    const linkedin = document.querySelector('[property="schema:profile"]').getAttribute('href');
    
    jsonld["@id"] = "#me";
    jsonld["@type"] = "foaf:Person";
    jsonld["schema:name"] = name;
    jsonld["schema:image"] = imageSrc;
    jsonld["schema:description"] = Array.from(document.querySelectorAll('[property="schema:description"]')).map(p => p.textContent.trim());
    jsonld["schema:email"] = email;
    jsonld["schema:telephone"] = phone;
    jsonld["schema:profile"] = linkedin;
  
    console.log(JSON.stringify(jsonld, null, 2));
  }
  rdfaToJSONLD();