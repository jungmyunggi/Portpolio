import { forwardRef } from "react";
import "../styles/AboutMe.scss";
const AboutMe = forwardRef((props, ref) => {
  return (
    <section>
      <div className="AboutMe" ref={(aboutRef) => (ref.current[1] = aboutRef)}>
        <div className="AboutMe_Image">
          <img
            src="../../public/assets/images/photo.jpg"
            alt="내사진"
            className="AboutMe_photo"
          />
        </div>
        <div className="AboutMe_text">
          <div className="AboutMe_text_element">
            <img src="../../public/assets/images/Icons/icons8-사람-30.png" />
            <p>정명기</p>
          </div>
          <div className="AboutMe_text_element">
            <img src="../../public/assets/images/Icons/icons8-생일-24.png" />
            <p>2000.10.17</p>
          </div>
          <div className="AboutMe_text_element">
            <img src="../../public/assets/images/Icons/icons8-주소-48.png" />
            <p>대구광역시 달서구</p>
          </div>
          <div className="AboutMe_text_element">
            <img src="../../public/assets/images/Icons/icons8-전화-30.png" />
            <p>010-6881-9005</p>
          </div>
          <div className="AboutMe_text_element">
            <img src="../../public/assets/images/Icons/icons8-우편-24.png" />
            <p>jung.myung.gi9@gamil.com</p>
          </div>
          <div className="AboutMe_text_element">
            <img src="../../public/assets/images/Icons/icons8-학교-30.png" />
            <p>영남대학교(컴퓨터공학과)</p>
          </div>
        </div>
      </div>
    </section>
  );
});
export default AboutMe;
