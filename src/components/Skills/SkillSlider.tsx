import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { ISkillItem } from "../../models/SkillTypes";
import SkillItem from "./SkillItem";
import { Fade } from "react-awesome-reveal";

interface ISkillSlider {
  skills: ISkillItem[];
}
const SkillSlider: FC<ISkillSlider> = ({ skills }) => {
  return (
    <Fade cascade>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{ delay: 3000 }}
        navigation
      >
        {skills.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SkillItem skill={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fade>
  );
};

export default SkillSlider;
