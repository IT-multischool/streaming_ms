import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/login', { replace: true });
  };

  // Number counter animation
  useEffect(() => {
    const counters = document.querySelectorAll('.numscroller');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-max'));
      const increment = parseInt(counter.getAttribute('data-increment')) || 1;
      const delay = parseInt(counter.getAttribute('data-delay')) || 50;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (current > target) current = target;
          counter.textContent = current;
          setTimeout(updateCounter, delay);
        }
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(counter);
    });
  }, []);

  return (
    <div id="page" className="hfeed site">
      <header
        id="masthead"
        itemScope="itemscope"
        itemType="https://schema.org/WPHeader"
      >
        <p className="main-title bhf-hidden" itemProp="headline">
          <a href="/" title="Multischool" rel="home">Multischool</a>
        </p>
        <div
          data-elementor-type="wp-post"
          data-elementor-id="18"
          className="elementor elementor-18"
        >
          <div
            className="elementor-element elementor-element-81db745 e-flex e-con-boxed e-con e-parent"
            data-id="81db745"
            data-element-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-6334565 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image"
                data-id="6334565"
                data-element-type="widget"
                data-widget-type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    width="184"
                    height="40"
                    src="/stream/img/logotipo.png"
                    className="attachment-large size-large wp-image-70"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-3f1475d elementor-widget elementor-widget-tp-navigation-menu-lite"
                data-id="3f1475d"
                data-element-type="widget"
                data-widget-type="tp-navigation-menu-lite.default"
              >
                <div className="elementor-widget-container">
                  <div className="plus-navigation-wrap text-center nav-menu689937aa7725a">
                    <div
                      className="plus-navigation-inner menu-hover main-menu-indicator-style-1 sub-menu-indicator-none"
                      data-menu-transition="style-1"
                    >
                      <div
                        id="theplus-navigation-normal-menu"
                        className="collapse navbar-collapse navbar-ex1-collapse"
                      >
                        <div className="plus-navigation-menu menu-horizontal">
                          <div className="plus-navigation-menu menu-horizontal">
                            <ul
                              id="menu-menu"
                              className="nav navbar-nav yamm menu-hover-none"
                            >
                              <li
                                id="menu-item-8"
                                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item animate-dropdown menu-item-8 active"
                              >
                                <a title="Home" href="#" data-text="Home">Início</a>
                              </li>
                              <li
                                id="menu-item-7"
                                className="menu-item menu-item-type-custom menu-item-object-custom animate-dropdown menu-item-7"
                              >
                                <a title="About Us" href="#" data-text="About Us">Quem somos?</a>
                              </li>
                              <li
                                id="menu-item-9"
                                className="menu-item menu-item-type-custom menu-item-object-custom"
                              >
                                <a
                                  title="Services"
                                  href="#"
                                  className="dropdown-toggle"
                                  aria-haspopup="true"
                                  data-text="Services"
                                >Serviços</a>
                              </li>
                              <li
                                id="menu-item-12"
                                className="menu-item menu-item-type-custom menu-item-object-custom"
                              >
                                <a
                                  title="Indicadores"
                                  href="#"
                                  className="dropdown-toggle"
                                  aria-haspopup="true"
                                  data-text="Pages"
                                >Indicadores</a>
                              </li>
                              <li
                                id="menu-item-17"
                                className="menu-item menu-item-type-custom menu-item-object-custom animate-dropdown menu-item-17"
                              >
                                <a title="Contact Us" href="#" data-text="Contact Us">Contacte-nos</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-bd812e0 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-tp-button"
                data-id="bd812e0"
                data-element-type="widget"
                data-widget-type="tp-button.default"
              >
                <div className="elementor-widget-container">
                  <div className="pt-plus-button-wrapper text-">
                    <div className="button_parallax full-button">
                      <div
                        id="button689937aa7b93f"
                        className="text- ts-button content_hover_effect full-button"
                      >
                        <div className="pt_plus_button btn689937aa7b93e button-style-10 full-button">
                          <div className="animted-content-inner">
                            <a
                              href="/login"
                              className="button-link-wrap"
                              role="button"
                              data-hover="Fazer login"
                            >Fazer login</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        data-elementor-type="wp-post"
        data-elementor-id="92"
        className="elementor elementor-92"
      >
        {/* Hero Section - Convertido fielmente do HTML original */}
        <div
          className="elementor-element elementor-element-c43e2d0 e-flex e-con-boxed e-con e-parent"
          data-id="c43e2d0"
          data-element-type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-eaa01e3 e-con-full e-flex e-con e-child"
              data-id="eaa01e3"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-eaf7ac4 e-con-full e-flex e-con e-child"
                data-id="eaf7ac4"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-0da68b6 elementor-invisible elementor-widget elementor-widget-heading"
                  data-id="0da68b6"
                  data-element-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget-type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Aprendizagem ao Vivo, Sempre Contigo
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5478a16 text-left text--tabletcenter text--mobilecenter elementor-invisible elementor-widget elementor-widget-tp-heading-title"
                  data-id="5478a16"
                  data-element-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa83fb6 style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2
                            className="heading-title"
                            data-hover="Tecnologia que aproxima pessoas e ideias."
                          >
                            Streaming Educacional para uma Nova Geração<span className="title-s"></span>
                          </h2>
                        </div>
                        <p>
                          Aprende, assiste e participa de onde estiver. O melhor
                          de Angola e do mundo, num só lugar. De aulas a
                          eventos, tudo ao vivo ou on-demand. A experiência é
                          tua, o controlo também.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-7c135a4 e-con-full e-flex e-con e-child"
                data-id="7c135a4"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-6a24dbf text-left text--mobilecenter elementor-invisible elementor-widget elementor-widget-tp-number-counter"
                  data-id="6a24dbf"
                  data-element-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget-type="tp-number-counter.default"
                >
                  <div className="elementor-widget-container">
                    <div className="content_hover_effect">
                      <div
                        className="plus-number-counter counter-style-1 counter68983a29df342"
                        data-id="counter68983a29df342"
                      >
                        <div className="number-counter-inner-block">
                          <div className="counter-wrap-content">
                            <h5 className="counter-number">
                              <span className="number-counter-symbol">+</span>
                              <span
                                className="counter-number-inner numscroller"
                                data-min="0"
                                data-max="125"
                                data-delay="5"
                                data-increment="5"
                              >0</span>
                            </h5>
                            <h6 className="counter-title">Vídeos disponíveis</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-e925ff8 text-left text--mobilecenter elementor-invisible elementor-widget elementor-widget-tp-number-counter"
                  data-id="e925ff8"
                  data-element-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget-type="tp-number-counter.default"
                >
                  <div className="elementor-widget-container">
                    <div className="content_hover_effect">
                      <div
                        className="plus-number-counter counter-style-1 counter68983a29df650"
                        data-id="counter68983a29df650"
                      >
                        <div className="number-counter-inner-block">
                          <div className="counter-wrap-content">
                            <h5 className="counter-number">
                              <span className="number-counter-symbol">+</span>
                              <span
                                className="counter-number-inner numscroller"
                                data-min="0"
                                data-max="62"
                                data-delay="5"
                                data-increment="5"
                              >0</span>
                            </h5>
                            <h6 className="counter-title">Instituições</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-55b6bba e-con-full e-flex e-con e-child"
              data-id="55b6bba"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-8780272 elementor-widget__width-inherit elementor-invisible elementor-widget elementor-widget-image"
                data-id="8780272"
                data-element-type="widget"
                data-settings='{"_animation":"fadeIn"}'
                data-widget-type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    fetchPriority="high"
                    decoding="async"
                    width="410"
                    height="400"
                    src="/stream/img/bg/bg_hero.png"
                    className="attachment-large size-large wp-image-57"
                    alt=""
                    srcSet="/stream/img/bg/bg_hero.png"
                    sizes="(max-width: 410px) 100vw, 410px"
                  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-fcfc129 e-con-full e-flex elementor-invisible e-con e-child"
                data-id="fcfc129"
                data-element-type="container"
                data-settings='{"position":"absolute","animation":"fadeIn"}'
              >
                <div
                  className="elementor-element elementor-element-0bfce93 e-con-full e-flex elementor-invisible e-con e-child"
                  data-id="0bfce93"
                  data-element-type="container"
                  data-settings='{"background_background":"classic","animation":"fadeIn"}'
                >
                  <div
                    className="elementor-element elementor-element-90480cd elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="90480cd"
                    data-element-type="widget"
                    data-widget-type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-microphone"
                            viewBox="0 0 352 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-a7ba0b0 e-con-full e-flex e-con e-child"
                  data-id="a7ba0b0"
                  data-element-type="container"
                  data-settings='{"background_background":"classic"}'
                >
                  <div
                    className="elementor-element elementor-element-a08e163 elementor-widget elementor-widget-heading"
                    data-id="a08e163"
                    data-element-type="widget"
                    data-widget-type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        +50
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-6a8ee4d e-con-full e-flex elementor-invisible e-con e-child"
                data-id="6a8ee4d"
                data-element-type="container"
                data-settings='{"background_background":"classic","position":"absolute","animation":"fadeIn"}'
              >
                <div
                  className="elementor-element elementor-element-f414b62 text-left elementor-widget elementor-widget-tp-heading-title"
                  data-id="f414b62"
                  data-element-type="widget"
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa845f4 style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2 className="heading-title" data-hover="2X">
                            2X<span className="title-s"> </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-0c2bf4e elementor-widget__width-initial elementor-widget elementor-widget-tp-adv-text-block"
                  data-id="0c2bf4e"
                  data-element-type="widget"
                  data-widget-type="tp-adv-text-block.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pt-plus-text-block-wrapper">
                      <div className="text_block_parallax">
                        <div className="pt_plus_adv_text_block">
                          <div className="text-content-block">
                            <p>Cursos e workshops disponíveis para todos os níveis.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-53886b5 elementor-absolute elementor-widget elementor-widget-heading"
                  data-id="53886b5"
                  data-element-type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget-type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Soft Skills
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section - Quem Somos */}
        <div
          className="elementor-element elementor-element-2781760 e-flex e-con-boxed e-con e-parent"
          data-id="2781760"
          data-element-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-c98bfcb e-con-full e-flex e-con e-child"
              data-id="c98bfcb"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-ecc4520 elementor-widget__width-inherit elementor-widget elementor-widget-image"
                data-id="ecc4520"
                data-element-type="widget"
                data-widget-type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width="367"
                    height="214"
                    src="/stream/img/bg/bg_whoare.png"
                    className="attachment-large size-large wp-image-58"
                    alt=""
                    srcSet="/stream/img/bg/bg_whoare.png"
                    sizes="(max-width: 367px) 100vw, 367px"
                  />
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-e3de0d7 e-con-full e-flex e-con e-child"
              data-id="e3de0d7"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-963c0f7 e-con-full e-flex e-con e-child"
                data-id="963c0f7"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-6a44470 text-left text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                  data-id="6a44470"
                  data-element-type="widget"
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa848ac style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2 className="heading-title" data-hover="15,000+">
                            +2000 <span className="title-s"> </span>
                          </h2>
                        </div>
                        <div className="sub-heading">
                          <h3 className="heading-sub-title">
                            estudantes impactados
                          </h3>
                          <h3 className="heading-sub-title">
                            com <b>+50.000 </b>horas de conteúdo transmitido ao
                            vivo
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d436bf9 e-con-full e-flex e-con e-child"
                  data-id="d436bf9"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-bdb8980 elementor-widget elementor-widget-heading"
                    data-id="bdb8980"
                    data-element-type="widget"
                    data-widget-type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Avaliação
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-533fd67 e-con-full e-flex e-con e-child"
                    data-id="533fd67"
                    data-element-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-e4ceb01 elementor-view-default elementor-widget elementor-widget-icon"
                      data-id="e4ceb01"
                      data-element-type="widget"
                      data-widget-type="icon.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-wrapper">
                          <div className="elementor-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-star"
                              viewBox="0 0 576 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-8c5e385 elementor-widget elementor-widget-heading"
                      data-id="8c5e385"
                      data-element-type="widget"
                      data-widget-type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          4.8
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-77b780f e-con-full e-flex e-con e-child"
                data-id="77b780f"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-5f9f6bd text-left text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                  data-id="5f9f6bd"
                  data-element-type="widget"
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa84b46 style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2
                            className="heading-title"
                            data-hover="Call Center Optimization"
                          >
                            Confiabilidade Máxima<span className="title-s"> </span>
                          </h2>
                        </div>
                        <div className="sub-heading">
                          <h3 className="heading-sub-title">
                            99,9% de disponibilidade para que os seus conteúdos
                            estejam sempre no ar, sem falhas.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-a92e6d9 e-con-full e-flex e-con e-child"
                  data-id="a92e6d9"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-a8ba02b elementor-widget elementor-widget-image"
                    data-id="a8ba02b"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="60"
                        height="10"
                        src="/stream/img/cof.png"
                        className="attachment-large size-large wp-image-48"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-a643b16 elementor-widget elementor-widget-image-box"
                    data-id="a643b16"
                    data-element-type="widget"
                    data-widget-type="image-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image-box-wrapper">
                        <div className="elementor-image-box-content">
                          <h3 className="elementor-image-box-title">
                            José Cardoso
                          </h3>
                          <p className="elementor-image-box-description">
                            Chief Operating Officer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          className="elementor-element elementor-element-be0c0d0 e-flex e-con-boxed e-con e-parent"
          data-id="be0c0d0"
          data-element-type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-1671574 e-con-full e-flex elementor-invisible e-con e-child"
              data-id="1671574"
              data-element-type="container"
              data-settings='{"animation":"fadeInUp"}'
            >
              <div
                className="elementor-element elementor-element-e05e989 e-con-full e-flex e-con e-child"
                data-id="e05e989"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-2fb2ddb elementor-widget elementor-widget-image"
                  data-id="2fb2ddb"
                  data-element-type="widget"
                  data-widget-type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="60"
                      height="60"
                      src="/stream/img/activity.png"
                      className="attachment-large size-large wp-image-36"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-ae17c91 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                  data-id="ae17c91"
                  data-element-type="widget"
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa84dd2 style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2 className="heading-title" data-hover="Help Desk">
                            Personalização e Co-Branding<span className="title-s">
                            </span>
                          </h2>
                        </div>
                        <div className="sub-heading">
                          <h3 className="heading-sub-title">
                            Use a plataforma com a identidade visual da tua
                            instituição.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-38c7ad4 e-con-full e-flex e-con e-child"
                data-id="38c7ad4"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-8854670 elementor-widget elementor-widget-image"
                  data-id="8854670"
                  data-element-type="widget"
                  data-widget-type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="60"
                      height="60"
                      src="/stream/img/activity-1.png"
                      className="attachment-large size-large wp-image-25"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-81aaf26 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                  data-id="81aaf26"
                  data-element-type="widget"
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa85066 style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2 className="heading-title" data-hover="Live Chat">
                            Inclusão e Acessibilidade<span className="title-s">
                            </span>
                          </h2>
                        </div>
                        <div className="sub-heading">
                          <h3 className="heading-sub-title">
                            Legendas automáticas e suporte em vários idiomas.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-4f44222 e-con-full e-flex e-con e-child"
                data-id="4f44222"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-2c30eb7 elementor-widget elementor-widget-image"
                  data-id="2c30eb7"
                  data-element-type="widget"
                  data-widget-type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="60"
                      height="60"
                      src="/stream/img/activity-2.png"
                      className="attachment-large size-large wp-image-26"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-c989e15 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                  data-id="c989e15"
                  data-element-type="widget"
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa852e8 style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2 className="heading-title" data-hover="Knowledge Base">
                            Escalabilidade e Flexibilidade<span className="title-s">
                            </span>
                          </h2>
                        </div>
                        <div className="sub-heading">
                          <h3 className="heading-sub-title">
                            Suporta desde pequenas turmas até grandes eventos.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-d296d0d elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
              data-id="d296d0d"
              data-element-type="widget"
              data-widget-type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"> </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-f4147fd e-con-full e-flex elementor-invisible e-con e-child"
              data-id="f4147fd"
              data-element-type="container"
              data-settings='{"animation":"fadeInUp"}'
            >
              <div
                className="elementor-element elementor-element-95c4c76 e-con-full e-flex e-con e-child"
                data-id="95c4c76"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-4628a52 e-con-full e-flex e-con e-child"
                  data-id="4628a52"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-f458b66 elementor-invisible elementor-widget elementor-widget-heading"
                    data-id="f458b66"
                    data-element-type="widget"
                    data-settings='{"_animation":"fadeInLeft"}'
                    data-widget-type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Saiba mais sobre nós
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-b552360 text-left text--tabletcenter text--mobilecenter elementor-invisible elementor-widget elementor-widget-tp-heading-title"
                    data-id="b552360"
                    data-element-type="widget"
                    data-settings='{"_animation":"fadeInLeft"}'
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa8555e style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Conectando Educação e Futuro"
                            >
                              Conectando a Educação e o Futuro<span
                                className="title-s"
                              >
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-a18f914 text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-adv-text-block"
                    data-id="a18f914"
                    data-element-type="widget"
                    data-widget-type="tp-adv-text-block.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="pt-plus-text-block-wrapper">
                        <div className="text_block_parallax">
                          <div className="pt_plus_adv_text_block">
                            <div className="text-content-block">
                              <p>
                                Somos a plataforma que transforma o ensino em
                                experiências digitais ao vivo e on-demand,
                                aproximando estudantes, professores e
                                instituições para um aprendizado sem fronteiras.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d89b1ba elementor-widget elementor-widget-tp-button"
                  data-id="d89b1ba"
                  data-element-type="widget"
                  data-widget-type="tp-button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pt-plus-button-wrapper text-">
                      <div className="button_parallax full-button">
                        <div
                          id="button689937aa85b15"
                          className="text- ts-button content_hover_effect full-button"
                        >
                          <div className="pt_plus_button btn689937aa85b13 button-style-10 full-button">
                            <div className="animted-content-inner">
                              <a
                                href="#"
                                onClick={handleLoginClick}
                                className="button-link-wrap"
                                role="button"
                                data-hover="Learn More"
                              >Saber mais</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-8b57c97 e-con-full e-flex elementor-invisible e-con e-child"
                data-id="8b57c97"
                data-element-type="container"
                data-settings='{"animation":"fadeInRight"}'
              >
                <div
                  className="elementor-element elementor-element-b40bb25 elementor-widget__width-inherit elementor-widget elementor-widget-image"
                  data-id="b40bb25"
                  data-element-type="widget"
                  data-widget-type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="540"
                      height="389"
                      src="/stream/img/about_us.png"
                      className="attachment-large size-large wp-image-43"
                      alt=""
                      srcSet="/stream/img/about_us.png 540w, /stream/img/about_us.png 300w"
                      sizes="(max-width: 540px) 100vw, 540px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div
          className="elementor-element elementor-element-2a1768b e-flex e-con-boxed e-con e-parent"
          data-id="2a1768b"
          data-element-type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-5db1c32 e-con-full e-flex e-con e-child"
              data-id="5db1c32"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-b4c02ea elementor-invisible elementor-widget elementor-widget-heading"
                data-id="b4c02ea"
                data-element-type="widget"
                data-settings='{"_animation":"fadeInUp"}'
                data-widget-type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    O que temos para si?
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-a6f4ce9 text--tabletcenter text--mobilecenter text-center elementor-invisible elementor-widget elementor-widget-tp-heading-title"
                data-id="a6f4ce9"
                data-element-type="widget"
                data-settings='{"_animation":"fadeInUp"}'
                data-widget-type="tp-heading-title.default"
              >
                <div className="elementor-widget-container">
                  <div className="heading heading_style heading_style689937aa8f338 style-1">
                    <div className="sub-style">
                      <div className="head-title">
                        <h2
                          className="heading-title"
                          data-hover="Elevate Your Customer Support Experience "
                        >
                          Soluções que Potenciam a Educação Digital
                          <span className="title-s"> </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-c4971fa text-center text--tabletcenter text--mobilecenter elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-tp-adv-text-block"
                data-id="c4971fa"
                data-element-type="widget"
                data-settings='{"_animation":"fadeInUp"}'
                data-widget-type="tp-adv-text-block.default"
              >
                <div className="elementor-widget-container">
                  <div className="pt-plus-text-block-wrapper">
                    <div className="text_block_parallax">
                      <div className="pt_plus_adv_text_block">
                        <div className="text-content-block">
                          <p>
                            Oferecemos ferramentas completas para aulas ao vivo,
                            conteúdos on-demand e gestão integrada, tudo seguro
                            e personalizável para a sua instituição.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-afd1913 e-con-full e-flex e-con e-child"
              data-id="afd1913"
              data-element-type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-7be0aad e-con-full e-flex e-con e-child"
                data-id="7be0aad"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-a6717f7 e-con-full e-flex e-con e-child"
                  data-id="a6717f7"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-afb9f4d elementor-widget elementor-widget-image"
                    data-id="afb9f4d"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="60"
                        height="60"
                        src="/stream/img/activity-3.png"
                        className="attachment-large size-large wp-image-27"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-6e8158c text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                    data-id="6e8158c"
                    data-element-type="widget"
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa8f66a style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Ticket Management"
                            >
                              Transmissão ao Vivo<span className="title-s"> </span>
                            </h2>
                          </div>
                          <div className="sub-heading">
                            <h3 className="heading-sub-title">
                              Aulas e eventos em tempo real, com qualidade e
                              interatividade.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-c382429 e-con-full e-flex e-con e-child"
                  data-id="c382429"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-e345e47 elementor-widget elementor-widget-image"
                    data-id="e345e47"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="60"
                        height="60"
                        src="/stream/img/activity-5.png"
                        className="attachment-large size-large wp-image-29"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-e23e298 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                    data-id="e23e298"
                    data-element-type="widget"
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa8f918 style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Live Chat Support"
                            >
                              Vídeos On-Demand<span className="title-s"> </span>
                            </h2>
                          </div>
                          <div className="sub-heading">
                            <h3 className="heading-sub-title">
                              Vídeos gravados acessíveis a qualquer hora, em
                              qualquer dispositivo.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-da76f64 e-con-full e-flex e-con e-child"
                  data-id="da76f64"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-8e08be9 elementor-widget elementor-widget-image"
                    data-id="8e08be9"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="60"
                        height="60"
                        src="/stream/img/activity-8.png"
                        className="attachment-large size-large wp-image-33"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-c3070f2 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                    data-id="c3070f2"
                    data-element-type="widget"
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa8fbaf style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Multilingual Support"
                            >
                              Podcasts Educacionais<span className="title-s">
                              </span>
                            </h2>
                          </div>
                          <div className="sub-heading">
                            <h3 className="heading-sub-title">
                              Áudio e vídeo para aprender onde e quando quiser.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-2bc7019 e-con-full e-flex e-con e-child"
                data-id="2bc7019"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-ce727aa e-con-full e-flex e-con e-child"
                  data-id="ce727aa"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-57b9376 elementor-widget elementor-widget-image"
                    data-id="57b9376"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="60"
                        height="60"
                        src="/stream/img/activity-4.png"
                        className="attachment-large size-large wp-image-28"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-2518d37 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                    data-id="2518d37"
                    data-element-type="widget"
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa8fe32 style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2 className="heading-title" data-hover="AI-Powered">
                              Integração Académica<span className="title-s"> </span>
                            </h2>
                          </div>
                          <div className="sub-heading">
                            <h3 className="heading-sub-title">
                              Gestão simples de turmas, quizzes e certificados.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1e03fad e-con-full e-flex e-con e-child"
                  data-id="1e03fad"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-36e0f41 elementor-widget elementor-widget-image"
                    data-id="36e0f41"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="60"
                        height="60"
                        src="/stream/img/activity-6.png"
                        className="attachment-large size-large wp-image-30"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-30e44c3 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                    data-id="30e44c3"
                    data-element-type="widget"
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa900b2 style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Customer Insights"
                            >
                              Inteligência Artificial<span className="title-s">
                              </span>
                            </h2>
                          </div>
                          <div className="sub-heading">
                            <h3 className="heading-sub-title">
                              Chatbots, transcrição e sugestões automáticas
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-bbbc6d7 e-con-full e-flex e-con e-child"
                  data-id="bbbc6d7"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-64439bd elementor-widget elementor-widget-image"
                    data-id="64439bd"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="60"
                        height="60"
                        src="/stream/img/activity-7.png"
                        className="attachment-large size-large wp-image-31"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-142f939 text-left text--tabletcenter text--mobilecenter elementor-widget__width-inherit elementor-widget elementor-widget-tp-heading-title"
                    data-id="142f939"
                    data-element-type="widget"
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa9131a style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Protecção de Conteúdos"
                            >
                              Protecção de Conteúdos<span className="title-s">
                              </span>
                            </h2>
                          </div>
                          <div className="sub-heading">
                            <h3 className="heading-sub-title">
                              Segurança avançada contra acessos não autorizados.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div
          className="elementor-element elementor-element-7cdf283 e-con-full e-flex e-con e-parent"
          data-id="7cdf283"
          data-element-type="container"
        >
          <div
            className="elementor-element elementor-element-8fe8aaa elementor-widget elementor-widget-tp-video-player"
            data-id="8fe8aaa"
            data-element-type="widget"
            data-widget-type="tp-video-player.default"
          >
            <div className="elementor-widget-container">
              <div className="pt_plus_video-box-shadow video_player689937aa9546d">
                <div className="pt_plus_video_player text-">
                  <a
                    href="https://www.youtube.com/embed/_puSN6A0S08?si=C_eHOjitkoZ_n8GH"
                    data-lity
                  >
                    <img
                      decoding="async"
                      height="40"
                      className="ts-video-image-zoom set-image"
                      content="/stream/img/bg/bg_video.png"
                      src="/stream/img/bg/bg_video.png"
                      alt=""
                    />
                    <div className="tp-video-popup-icon">
                      <div className="tp-video-icon">
                        <img
                          decoding="async"
                          className="ts-video-caption"
                          src="/stream/img/Icon.png"
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          className="elementor-element elementor-element-51dcfe9 e-flex e-con-boxed e-con e-parent"
          data-id="51dcfe9"
          data-element-type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-9e5c4fd e-con-full e-flex e-con e-child"
              data-id="9e5c4fd"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-31c7a43 e-con-full e-flex e-con e-child"
                data-id="31c7a43"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-da7c513 elementor-widget__width-inherit elementor-widget elementor-widget-image"
                  data-id="da7c513"
                  data-element-type="widget"
                  data-widget-type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="483"
                      height="503"
                      src="/stream/img/bg/bg_choose.png"
                      className="attachment-large size-large wp-image-45"
                      alt=""
                      srcSet="/stream/img/bg/bg_choose.png 483w, /stream/img/bg/bg_choose.png 288w"
                      sizes="(max-width: 483px) 100vw, 483px"
                    />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-c87b485 e-con-full e-flex e-con e-child"
                  data-id="c87b485"
                  data-element-type="container"
                  data-settings='{"background_background":"classic","position":"absolute"}'
                >
                  <div
                    className="elementor-element elementor-element-41be9d7 elementor-widget elementor-widget-image"
                    data-id="41be9d7"
                    data-element-type="widget"
                    data-widget-type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="32"
                        height="32"
                        src="/stream/img/activity-9.png"
                        className="attachment-large size-large wp-image-34"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-41e0299 text--mobilecenter text-center elementor-widget elementor-widget-tp-number-counter"
                    data-id="41e0299"
                    data-element-type="widget"
                    data-widget-type="tp-number-counter.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="content_hover_effect">
                        <div
                          className="plus-number-counter counter-style-1 counter68983a2a0bfb7"
                          data-id="counter68983a2a0bfb7"
                        >
                          <div className="number-counter-inner-block">
                            <div className="counter-wrap-content">
                              <h5 className="counter-number">
                                <span
                                  className="counter-number-inner numscroller"
                                  data-min="0"
                                  data-max="90"
                                  data-delay="5"
                                  data-increment="5"
                                >0</span>
                                <span className="number-counter-symbol">%</span>
                              </h5>
                              <h6 className="counter-title">Up-time garantido</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-e90f1b6 e-con-full e-flex e-con e-child"
                data-id="e90f1b6"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-6a4cd79 e-con-full e-flex e-con e-child"
                  data-id="6a4cd79"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-bde38cf elementor-invisible elementor-widget elementor-widget-heading"
                    data-id="bde38cf"
                    data-element-type="widget"
                    data-settings='{"_animation":"fadeInLeft"}'
                    data-widget-type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Por que Somos a Melhor Escolha
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-0bbe2db text-left text--tabletcenter text--mobilecenter elementor-invisible elementor-widget elementor-widget-tp-heading-title"
                    data-id="0bbe2db"
                    data-element-type="widget"
                    data-settings='{"_animation":"fadeInLeft"}'
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa9573a style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Support Your Customers Better"
                            >
                              Tecnologia, Educação e Acessibilidade.<span
                                className="title-s"
                              >
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-43f9a1e text--tabletcenter text--mobilecenter elementor-widget__width-initial elementor-widget elementor-widget-tp-adv-text-block"
                    data-id="43f9a1e"
                    data-element-type="widget"
                    data-widget-type="tp-adv-text-block.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="pt-plus-text-block-wrapper">
                        <div className="text_block_parallax">
                          <div className="pt_plus_adv_text_block">
                            <div className="text-content-block">
                              <p>
                                Plataforma inovadora que une tecnologia,
                                educação e acessibilidade para transformar a
                                forma como ensinas e aprendes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3e1102e elementor-tablet-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="3e1102e"
                  data-element-type="widget"
                  data-widget-type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-check-circle"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                          </svg>
                        </span>
                        <span className="elementor-icon-list-text">Tecnologia de ponta</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-check-circle"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                          </svg>
                        </span>
                        <span className="elementor-icon-list-text">Foco no ensino</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-check-circle"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                          </svg>
                        </span>
                        <span className="elementor-icon-list-text">Flexibilidade total</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="elementor-element elementor-element-e7fabbc e-flex e-con-boxed e-con e-parent"
          data-id="e7fabbc"
          data-element-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-0d2ea02 e-con-full e-flex e-con e-child"
              data-id="0d2ea02"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-755d573 e-con-full e-flex e-con e-child"
                data-id="755d573"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-51e7e56 e-con-full e-flex e-con e-child"
                  data-id="51e7e56"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-8ef77ad elementor-widget elementor-widget-heading"
                    data-id="8ef77ad"
                    data-element-type="widget"
                    data-widget-type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Indicadores
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-b1f7bcd text-left text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                    data-id="b1f7bcd"
                    data-element-type="widget"
                    data-widget-type="tp-heading-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="heading heading_style heading_style689937aa959e8 style-1">
                        <div className="sub-style">
                          <div className="head-title">
                            <h2
                              className="heading-title"
                              data-hover="Customers Review"
                            >
                              Resultados que Falam por Si<span className="title-s">
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-2e23647 e-con-full e-flex e-con e-child"
                  data-id="2e23647"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-786138b e-con-full e-flex e-con e-child"
                    data-id="786138b"
                    data-element-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-a96fdff elementor-widget elementor-widget-heading"
                      data-id="a96fdff"
                      data-element-type="widget"
                      data-widget-type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Total de Instituições
                        </h2>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-0ebd743 text-left text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                      data-id="0ebd743"
                      data-element-type="widget"
                      data-widget-type="tp-heading-title.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="heading heading_style heading_style689937aa95c6c style-1">
                          <div className="sub-style">
                            <div className="head-title">
                              <h2 className="heading-title" data-hover="02 ">
                                +25 <span className="title-s"> </span>
                              </h2>
                            </div>
                            <div className="sub-heading">
                              <h3 className="heading-sub-title">
                                parceiras conectadas
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-43a0870 e-con-full e-flex e-con e-child"
                      data-id="43a0870"
                      data-element-type="container"
                      data-settings='{"background_background":"classic","position":"absolute"}'
                    >
                      <div
                        className="elementor-element elementor-element-63b294c text-left text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                        data-id="63b294c"
                        data-element-type="widget"
                        data-widget-type="tp-heading-title.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="heading heading_style heading_style689937aa95ed8 style-1">
                            <div className="sub-style">
                              <div className="head-title">
                                <h2 className="heading-title" data-hover="24%">
                                  24%<span className="title-s"> </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-236f615 elementor-view-default elementor-widget elementor-widget-icon"
                        data-id="236f615"
                        data-element-type="widget"
                        data-widget-type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-far-arrow-alt-circle-up"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-d549d0f e-con-full e-flex e-con e-child"
                    data-id="d549d0f"
                    data-element-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-515a4a6 elementor-widget elementor-widget-heading"
                      data-id="515a4a6"
                      data-element-type="widget"
                      data-widget-type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Taxa de Satisfação
                        </h2>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-5af40db text-left text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                      data-id="5af40db"
                      data-element-type="widget"
                      data-widget-type="tp-heading-title.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="heading heading_style heading_style689937aa971a7 style-1">
                          <div className="sub-style">
                            <div className="head-title">
                              <h2 className="heading-title" data-hover="4.8">
                                4.8/5<span className="title-s"> </span>
                              </h2>
                            </div>
                            <div className="sub-heading">
                              <h3 className="heading-sub-title">
                                dos utilizadores
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-53b59c0 e-con-full e-flex e-con e-child"
                data-id="53b59c0"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-34a0d05 elementor-widget__width-inherit elementor-widget elementor-widget-image"
                  data-id="34a0d05"
                  data-element-type="widget"
                  data-widget-type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="503"
                      height="380"
                      src="/stream/img/bg/bg_key.png"
                      className="attachment-large size-large wp-image-55"
                      alt=""
                      srcSet="/stream/img/bg/bg_key.png 483w, /stream/img/bg/bg_key.png 300w"
                      sizes="(max-width: 483px) 100vw, 483px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="elementor-element elementor-element-857e207 e-flex e-con-boxed e-con e-parent"
          data-id="857e207"
          data-element-type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-334567d e-con-full e-flex e-con e-child"
              data-id="334567d"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-800387b e-con-full e-flex e-con e-child"
                data-id="800387b"
                data-element-type="container"
              >
                <div
                  className="elementor-element elementor-element-20eed79 elementor-widget elementor-widget-heading"
                  data-id="20eed79"
                  data-element-type="widget"
                  data-widget-type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Não perca mais tempo
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-21dea50 text-left text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                  data-id="21dea50"
                  data-element-type="widget"
                  data-widget-type="tp-heading-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="heading heading_style heading_style689937aa97bbe style-1">
                      <div className="sub-style">
                        <div className="head-title">
                          <h2
                            className="heading-title"
                            data-hover="Grow Better With Talksie Today"
                          >
                            Cresça Com os Melhores<span className="title-s"> </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5e33fcb text--tabletcenter text--mobilecenter elementor-widget__width-initial elementor-widget elementor-widget-tp-adv-text-block"
                  data-id="5e33fcb"
                  data-element-type="widget"
                  data-widget-type="tp-adv-text-block.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pt-plus-text-block-wrapper">
                      <div className="text_block_parallax">
                        <div className="pt_plus_adv_text_block">
                          <div className="text-content-block">
                            <p>
                              Junte-se à nossa plataforma e transforme a sua
                              aprendizagem com tecnologia de ponta e suporte
                              especializado. O futuro da educação está aqui —
                              não fique para trás!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-90bfbff elementor-widget elementor-widget-tp-button"
                data-id="90bfbff"
                data-element-type="widget"
                data-widget-type="tp-button.default"
              >
                <div className="elementor-widget-container">
                  <div className="pt-plus-button-wrapper text-">
                    <div className="button_parallax full-button">
                      <div
                        id="button689937aa98f26"
                        className="text- ts-button content_hover_effect full-button"
                      >
                        <div className="pt_plus_button btn689937aa98f25 button-style-10 full-button">
                          <div className="animted-content-inner">
                            <a
                              href="#"
                              onClick={handleLoginClick}
                              className="button-link-wrap"
                              role="button"
                              data-hover="Learn More"
                            >Começar agora</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-083e4aa text-left text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                data-id="083e4aa"
                data-element-type="widget"
                data-widget-type="tp-heading-title.default"
              >
                <div className="elementor-widget-container">
                  <div className="heading heading_style heading_style689937aa991d6 style-1">
                    <div className="sub-style">
                      <div className="head-title">
                        <h2 className="heading-title" data-hover="Contact Sales ">
                          Contactos: 
                          <span className="title-s"> +244 (999) 999 999 | +244 (222) 111 000 </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-46db43b e-con-full e-flex e-con e-child"
              data-id="46db43b"
              data-element-type="container"
            >
              <div
                className="elementor-element elementor-element-c56060b elementor-widget__width-inherit elementor-widget elementor-widget-image"
                data-id="c56060b"
                data-element-type="widget"
                data-widget-type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="560"
                    height="419"
                    src="/stream/img/bg/bg_cta.png"
                    className="attachment-large size-large wp-image-50"
                    alt=""
                    srcSet="/stream/img/bg/bg_cta.png 560w, /stream/img/bg/bg_cta.png 300w"
                    sizes="(max-width: 560px) 100vw, 560px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        itemType="https://schema.org/WPFooter"
        itemScope="itemscope"
        id="colophon"
        role="contentinfo"
      >
        <div className="footer-width-fixer">
          <div
            data-elementor-type="wp-post"
            data-elementor-id="77"
            className="elementor elementor-77"
          >
            <div
              className="elementor-element elementor-element-0132565 e-flex e-con-boxed e-con e-parent"
              data-id="0132565"
              data-element-type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-bbb180c e-con-full e-flex e-con e-child"
                  data-id="bbb180c"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-b06d061 e-con-full e-flex e-con e-child"
                    data-id="b06d061"
                    data-element-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-8a46f28 elementor-widget elementor-widget-image"
                      data-id="8a46f28"
                      data-element-type="widget"
                      data-widget-type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          width="184"
                          height="40"
                          src="/stream/img/logotipo.png"
                          className="attachment-large size-large wp-image-70"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-b99f988 text--tabletcenter text--mobilecenter elementor-widget elementor-widget-tp-adv-text-block"
                      data-id="b99f988"
                      data-element-type="widget"
                      data-widget-type="tp-adv-text-block.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="pt-plus-text-block-wrapper">
                          <div className="text_block_parallax">
                            <div className="pt_plus_adv_text_block">
                              <div className="text-content-block">
                                <p>
                                  A Educação na Palma da Tua Mão
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-db6cf0b e-grid-align-left e-grid-align-tablet-center elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                      data-id="db6cf0b"
                      data-element-type="widget"
                      data-widget-type="social-icons.default"
                    >
                      <div className="elementor-widget-container">
                        <div
                          className="elementor-social-icons-wrapper elementor-grid"
                          role="list"
                        >
                          <span className="elementor-grid-item" role="listitem">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-758710d"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="elementor-screen-only">Twitter</span>
                              <svg
                                className="e-font-icon-svg e-fab-twitter"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                              </svg>
                            </a>
                          </span>
                          <span className="elementor-grid-item" role="listitem">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-c797ad4"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="elementor-screen-only">Instagram</span>
                              <svg
                                className="e-font-icon-svg e-fab-instagram"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                              </svg>
                            </a>
                          </span>
                          <span className="elementor-grid-item" role="listitem">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-f5a8928"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="elementor-screen-only">Youtube</span>
                              <svg
                                className="e-font-icon-svg e-fab-youtube"
                                viewBox="0 0 576 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                              </svg>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-875544f e-con-full e-flex e-con e-child"
                    data-id="875544f"
                    data-element-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-287c3eb e-con-full e-flex e-con e-child"
                      data-id="287c3eb"
                      data-element-type="container"
                    >
                      <div
                        className="elementor-element elementor-element-cb7fc8a text-left text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                        data-id="cb7fc8a"
                        data-element-type="widget"
                        data-widget-type="tp-heading-title.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="heading heading_style heading_style689937aa9c8e9 style-1">
                            <div className="sub-style">
                              <div className="head-title">
                                <h2 className="heading-title" data-hover="Company">
                                  Links<span className="title-s"></span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-01b2a3c elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="01b2a3c"
                        data-element-type="widget"
                        data-widget-type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-text">Quem somos</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-text">Serviços</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-text">Indicadores</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-text">Contactos</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-d5fc97a e-con-full e-flex e-con e-child"
                      data-id="d5fc97a"
                      data-element-type="container"
                    >
                      <div
                        className="elementor-element elementor-element-4eff2b8 text-left text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                        data-id="4eff2b8"
                        data-element-type="widget"
                        data-widget-type="tp-heading-title.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="heading heading_style heading_style689937aa9cbc8 style-1">
                            <div className="sub-style">
                              <div className="head-title">
                                <h2 className="heading-title" data-hover="Help">
                                  Ajuda<span className="title-s"> </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-6e4763e elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="6e4763e"
                        data-element-type="widget"
                        data-widget-type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-text">Apoio ao Cliente</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-text">Termos e Condições</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-text">Serviços Multischool</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-61a2431 e-con-full e-flex e-con e-child"
                      data-id="61a2431"
                      data-element-type="container"
                    >
                      <div
                        className="elementor-element elementor-element-cb735a5 text-left text--mobilecenter elementor-widget elementor-widget-tp-heading-title"
                        data-id="cb735a5"
                        data-element-type="widget"
                        data-widget-type="tp-heading-title.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="heading heading_style heading_style689937aa9dea0 style-1">
                            <div className="sub-style">
                              <div className="head-title">
                                <h2
                                  className="heading-title"
                                  data-hover="Get Updates"
                                >
                                  Subscrever<span className="title-s"> </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-ef87d83 elementor-widget elementor-widget-tp-plus-form"
                        data-id="ef87d83"
                        data-element-type="widget"
                        data-widget-type="tp-plus-form.default"
                      >
                        <div className="elementor-widget-container">
                          <div
                            className="tpae-form-container"
                            data-formdata='{"form_id":"tpae-form-main","Required_mask":"hide-asterisks","invalid_form":"Invalid form! Please check it again.","required_fields":"This field is required.","form_error":"There was an error in submitting the form.","success_message":"Form Submitted Successfully","server_error":"A server error occurred."}'
                          >
                            <form
                              id="tpae-form-main"
                              className="tpae-form"
                              method="post"
                            >
                              <div
                                className="tpae-form-field"
                                data-width="100"
                                data-tablet-width=""
                                data-mobile-width="100"
                              >
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="O seu e-mail..."
                                  required
                                  className="medium"
                                  defaultValue=""
                                  aria-description=""
                                />
                                <span className="tpae-help-text"></span>
                              </div>
                              <div className="tpae-form-submit-container">
                                <button
                                  id="tpae-form-button"
                                  type="submit"
                                  className="tpae-form-submit tpae-form-button tpae-icon-after"
                                >
                                  Submeter
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-f9c352c e-con-full e-flex e-con e-child"
                  data-id="f9c352c"
                  data-element-type="container"
                >
                  <div
                    className="elementor-element elementor-element-3a36568 elementor-widget elementor-widget-heading"
                    data-id="3a36568"
                    data-element-type="widget"
                    data-widget-type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Todos os direitos reservados © 2025
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-f9ebecd elementor-widget elementor-widget-heading"
                    data-id="f9ebecd"
                    data-element-type="widget"
                    data-widget-type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Multischool Company
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
