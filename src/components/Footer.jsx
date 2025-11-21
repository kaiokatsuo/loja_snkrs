function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>Bigode Sneakers &copy; {new Date().getFullYear()} - Vitrine Virtual</p>
        <p className="footer-small">
          Projeto desenvolvido em React JS com consumo da API ViaCEP.
          Feito por Kaio Katsuo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
