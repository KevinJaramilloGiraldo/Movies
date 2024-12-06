import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer" style={styles.footer}>
      <div style={styles.menuContainer}>
        <button
          onClick={toggleMenu}
          style={styles.button}
          aria-expanded={isOpen}
        >
          Menú Desplegable
        </button>
        {isOpen && (
          <ul style={styles.menu}>
            <li style={styles.menuItem}>Creado por Kevin J.</li>
            <li style={styles.menuItem}>Proyecto React, Node y Vite</li>
            <li style={styles.copyright}> 2023 Mi Aplicación. Todos los derechos reservados</li>
          </ul>
        )}
      </div>
    </footer>
  );
};

// Estilos en línea para el componente
const styles = {

  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#333",
    borderTop: "1px solid #ddd",
  },
  menuContainer: {
    position: "relative",
    display: "flex",    
    widith: "50px",
    justifySelf: "center",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  menu: {
    position: "absolute",
    backgroundColor: "#333",
    border: "1px solid #ddd",
    borderRadius: "4px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    width: "200px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    alignSelf: "center",
    color: "#ffffff",
    top: "-420%",
    left: "-8%",
  },
  menuItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
  },
  menuItemLast: {
    borderBottom: "none",
  },
  copyright: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0px",
    fontSize: "14px",
    color: "#6c757d",
  },
};

export default Footer;