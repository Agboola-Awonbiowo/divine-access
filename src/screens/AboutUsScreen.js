import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutUsScreen() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="about_banner"></div>
      <div className="about_container">
        <div className="about_header">
          <h1>About Us</h1>
        </div>
        <div className="ourhistory_container" data-aos="fade-up">
          <div className="history_header">
            <h1>OUR HISTORY</h1>
          </div>
          <div className="history_content">
            <p>
              Reverend Josiah Akindayomi founded the Redeemed Christian Church
              of God in 1952. Pa. Akindayomi had a vision of words that appeared
              to be written on a blackboard. The words were “The Redeemed
              Christian Church of God.” Amazingly, Pa Akindayomi who could not
              read or write was supernaturally able to write these words down.
              In this visitation, God also said to him that this church would go
              to the ends of the earth and that when the Lord Jesus Christ
              appeared in glory, He would meet the church. The Lord then
              established a covenant with Pa Akindayomi, synonymous to the
              Abrahamic covenant in the Bible. He said that He the Lord would
              meet all the needs of the church in an awesome way if only members
              would serve Him faithfully and be obedient to His Word. It is upon
              this covenant that the Redeemed Christian Church of God was built.
              Thus, the Redeemed Christian Church of God was born in 1952,
              destined by the Lord Himself to take the world for Him. The church
              continued to meet at 9 Willoughby Street until they were able to
              acquire some land thereby witnessing a relocation to the present
              site of the Headquarters of the church at 1-5 Redemption Way,
              Ebute-Metta, Lagos (formerly 1a, Cemetery Street). In 1981,Daddy
              G.O,Pastor E.A Adeboye became the General Overseer of The Redeemed
              Christian Church of God with a membership of 100,000.Since he
              becomes the general overseer, the church has increased numerically
              with parishes in over 180 countries.
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="history_header">
            <h1>DIVINE ASSEMBLY FAMILY</h1>
          </div>
          <div className="history_content">
            <p>
              Divine Assembly Parish was planted on the 23rd March, 2003 by
              Dominion Assembly, then Glory Model Area, Zone 6. Pastor Jide
              Kolade was the pioneer Parish Pastor along five (5) other
              ministers and forty-three (43) workers that just concluded their
              Workers-in-Training at Dominion Assembly In September 2004, Pastor
              Phillip Okogie replaced Pastor Jide Kolade as the Parish Pastor.
              The Parish graciously became an Area Headquarter in September 2005
              with Pastor Thompson Olulade becoming the first Area Pastor. In
              September 2006, Pastor Rotimi Akintan took over from Pastor
              Phillip Okogie as the Parish Pastor. Two years later i.e in
              September 2008, Divine Assembly was upgraded to a Zonal
              Headquarter and Pastor Samson Anifowose became the Pastor in
              charge of the Zone. In September 2009, Pastor ‘Wole Babalola was
              transferred to replace Pastor Olulade as the Pastor-in-Charge of
              the Area and subsequently took over from Pastor Anifowose as the
              Pastor in charge of the zone in October 2015. Since inception till
              date, we give God the glory for his mercy, kindness, manifestation
              of his power as evidence in our testimony from time to time. Let
              somebody shout halleluyah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
