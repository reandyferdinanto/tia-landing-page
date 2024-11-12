import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hallo, namaku <span>Muthia Falisha Kaerani</span>.
          Saya adalah seorang pelajar SMA dengan keterampilan mendesain visualisasi produk secara kreatif. Saya sangat menyukai traveling,
          mengikuti loba desain, membuat portfolio design, dan membaca buku tentang segala hal yang berhubungan dengan desain.
          membuat konten kreatif merupakan habi saya yang saya tekuni selama 2 tahun terkahir ini, dan Anda dapat menemukan sebagian besar karya saya di sini.
          <br />
          Saya menawarkan jasa desain kemasan, jasa desain merchandise, dan jasa desain logo untuk membantu produk dan bisnis Anda tampil lebih menarik dan profesional.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Nama</p>
          <p className="about-detail-info">Muthia Falisha Kaerani</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Indonesia</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:(+1)2345678899'"
          >
            (+62) 234 567 8899
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:hello@biogi.com'"
          >
            muthia@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">2+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        {/*<div className="about-detail-main">*/}
        {/*  <p className="about-detail">Skype</p>*/}
        {/*  <p className="about-detail-info">hello.biogi</p>*/}
        {/*</div>*/}
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">Indoensia / English</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
