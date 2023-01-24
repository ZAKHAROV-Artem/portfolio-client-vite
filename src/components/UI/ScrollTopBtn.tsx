import { FC, useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { Box } from "@mui/material";

const ScrollTopBtn: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {scrollPosition > 150 && (
        <Box
          onClick={scrollTop}
          sx={{
            position: "fixed",
            zIndex: "10",
            bottom: "5%",
            right: "2%",

            width: "45px",
            height: "45px",
            borderRadius: "50%",

            boxShadow: "1px 1px 10px rgba(0,0,0,0.2)",
            transition: "0.3s",
            ":hover": {
              cursor: "pointer",
              boxShadow: "1px 1px 10px rgba(0,0,0,0.3)",
            },

            display: "grid",
            placeContent: "center",
          }}
        >
          <BsArrowUpShort size={35} className="arrow_up" />
        </Box>
      )}
    </div>
  );
};

export default ScrollTopBtn;
