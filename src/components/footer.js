export default function footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.appendChild(
    createLink(
      "mailto:pawelstepniak22@gmail.com",
      "pawelstepniak22@gmail.com",
      "footer__link"
    )
  );

  const unorderdList = document.createElement("ul");
  unorderdList.classList.add("social-list");
  footer.appendChild(unorderdList);

  const socialListTwitter = document.createElement("li");
  socialListTwitter.classList.add("social-list__item");
  unorderdList.appendChild(socialListTwitter);

  socialListTwitter.appendChild(
    createLink(
      "https://twitter.com/kainpets",
      "placeholder",
      "social-list__link"
    )
  );

  const twitterIcon = document.createElement("i");
  twitterIcon.classList.add("fab");
  twitterIcon.classList.add("fa-twitter");
  socialListTwitter.appendChild(twitterIcon);

  const socialListGithub = document.createElement("li");
  socialListGithub.classList.add("social-list__item");
  unorderdList.appendChild(socialListGithub);

  return footer;
}

document.body.appendChild(footer());

function createLink(url, text, className) {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = text;
  link.classList.add(className);
  return link;
}
