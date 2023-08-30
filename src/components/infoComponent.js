export default function infoComponent() {
  const section = document.createElement("section");
  const paragraph = document.createElement("p");
  const link = document.createElement("a");
  const title = document.createElement("h1");
  
  section.classList.add("info-section");
  
  title.textContent = "Kalkulator kosztów rekompensaty";

  paragraph.innerText =
    "Kalkulator pozwala w prosty sposób obliczyć kwotę, jakiej może domagać się przedsiębiorca od swojego kontrahenta za opóźnienie w płatności. Aby użyć kalkulatora po prostu wprowadź datę płatności faktury (a najlepiej datę jej wymagalności - pierwszego dnia po dniu płatności) w okno powyżej. Możesz do tego użyć klawiatury lub kliknąć w kalendarz, który pozwoli ci wybrać odpowiednią datę. Jeśli chcesz dokładnie zrozumieć, z czego wynika należność, wejdź w link poniżej.";

  link.innerText =
    "https://www.inlegis.pl/baza-wiedzy/wierzytelnosci/rekompensata-kosztow-odzyskiwana-naleznosci/";

  link.href =
    "https://www.inlegis.pl/baza-wiedzy/wierzytelnosci/rekompensata-kosztow-odzyskiwana-naleznosci/";
    link.target = "_blank";
    
  section.appendChild(title);
  section.appendChild(paragraph);
  section.appendChild(link);

  return section;
}

document.body.appendChild(infoComponent());
