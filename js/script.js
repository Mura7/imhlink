const data = {
  kadir: {
    firstName: "Kadir",
    lastName: "Tüzün",
    link: ['"Twitter, Instagram | Linktree"', "murataltay.com"],
    profile: "MA",
    instagram: "https://www.instagram.com/murat/",
  },
  yusa: {
    firstName: "Yüşa Yusuf",
    lastName: "Aslan",
    link: [
      '"Twitter, Instagram | Linktree"',
      "sadecedoit.com",
      "Benim Hakkımda Bilmediğiniz 5 Şey",
    ],
    profile: "YYA",
    instagram: "https://www.instagram.com/yusayaslan/",
  },
  melik: {
    firstName: "Melik ",
    lastName: "Günay",
    profile: "MG",
  },
};

function selectAccount(name = "yusa") {
  if (data?.[name]) {
    renderLink(data?.[name]);
  }
  //   !!data?.[name] && renderLink(data?.[name]);
}

function renderLink(data) {
  //Sayfa elementlerinin JSON formatı ile değişmesi
  document.getElementById("profile").innerHTML = data?.profile;
  document.getElementById("name").innerHTML =
    data?.firstName + " " + data?.lastName;
  //Instagram butonu link değişimi
  document.getElementById("instaLink").href = data?.instagram;
  renderButtonLinks(data?.link);
}

function renderButtonLinks(links) {
  let linkHtml = "";
  links?.forEach((item) => {
    linkHtml += `<button id="social" class="buttonshadow mb-2 p-3 px-5 btn btn-light border border-3 border-dark" style="width: 100%; max-width: 700px; font-size: 16px; font-weight: 700; border-radius: 50px;"><a href="#" class="text-dark" style="text-decoration: none;">${item}</a></button>`;
  });
  document.getElementById("linkButtons").innerHTML = linkHtml;
}

selectAccount();
