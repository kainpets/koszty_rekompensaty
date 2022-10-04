import Icon from "../images/github-icon-1-logo-svgrepo-com.svg";

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

  const socialListGithub = document.createElement("li");
  socialListGithub.classList.add("social-list__item");
  unorderdList.appendChild(socialListGithub);

  socialListGithub.appendChild(
    createLink("https://github.com/kainpets", "GitHub", "social-list__link")
  );

  const gitHubIcon = new Image();
  gitHubIcon.src = Icon;
  gitHubIcon.classList.add("icon");
  socialListGithub.appendChild(gitHubIcon);

  return footer;
}

document.body.appendChild(footer());

function createLink(url, text, className) {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = text;
  link.classList.add(className);
  link.target = "_blank";
  return link;
}
