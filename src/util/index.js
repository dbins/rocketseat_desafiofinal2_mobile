const validacao = {
  email_validate(str) {
    const at = '@';
    const dot = '.';
    const lat = str.indexOf(at);
    const lstr = str.length;
    // var ldot=str.indexOf(dot)
    if (str.indexOf(at) === -1) {
      // alert("Invalid E-mail ID")
      return false;
    }

    if (str.indexOf(at) === -1 || str.indexOf(at) === 0 || str.indexOf(at) === lstr) {
      // alert("Invalid E-mail ID")
      return false;
    }

    if (str.indexOf(dot) === -1 || str.indexOf(dot) === 0 || str.indexOf(dot) === lstr) {
      // alert("Invalid E-mail ID")
      return false;
    }

    if (str.indexOf(at, lat + 1) !== -1) {
      // alert("Invalid E-mail ID")
      return false;
    }

    if (str.substring(lat - 1, lat) === dot || str.substring(lat + 1, lat + 2) === dot) {
      // alert("Invalid E-mail ID")
      return false;
    }

    if (str.indexOf(dot, lat + 2) === -1) {
      // alert("Invalid E-mail ID")
      return false;
    }

    if (str.indexOf(' ') !== -1) {
      // alert("Invalid E-mail ID")
      return false;
    }

    return true;
  },
};

export default validacao;
