
import './App.css';

function header() {
  return (
  <header class="header_main">
    <div class="topHeader">
            <div class="slide">

                <marquee hspace="600px">
                    TENNIS OUTLET | HASTA 50% OFF EN REF. SELECCIONADAS
                </marquee>

            </div>
            <div class="login">
                <div class="help">
                    ¿NECESITAS AYUDA?
                </div>
                <div class="loginn">
                    INICIAR SESIÓN
                </div>
            </div>
        </div>
        <div class="logo">
            <div>
                <p class="icon_loctor">
                    TIENDAS
                </p>

            </div>
            <img src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/ec1508cb-2bf8-4dbe-8211-33e33fa6444d___aa29dd82c7e8875995264021213ec236.svg"
                alt="logo tennis.co"/>

            <div>

                <div class="search">
                    <input type="search" placeholder="Busca tus favoritos"/>
                </div>
                <a href="#"></a>
                <a href="#"></a>
            </div>



        </div>
        <nav>
            <div>
                <a href="#">
                    Nuevo
                </a>

                <a href="#">
                    Niño
                </a>

                <a href="#">
                    Niña
                </a>

                <a href="#">
                    Mujer
                </a>

                <a href="#">
                    Hombre
                </a>

                <a href="#">
                    Mascotas
                </a>

                <a href="#">
                    Sale
                </a>

            </div>
        </nav>
  </header>
  );
}

export default header;
