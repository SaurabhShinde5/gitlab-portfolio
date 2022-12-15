class Logos {
  constructor(logos) {
    this.logo = logos;
  }
  addLogosBySection(_section, _url, _position, _id) {
    return this.logo[_section].push({
      url: _url,
      position: _position,
      id: _id,
    });
  }
  getLogoListBySection(section) {
    return this.logo[section];
  }
  getLogosFromLocalStorage() {
    let previewed = localStorage.getItem("logos");
    if (previewed) {
      return JSON.parse(previewed);
    }
  }
}

//

class Form {
  constructor(_formData) {
    this.form = _formData;
  }
  getFormField() {
    return this.form;
  }
}
