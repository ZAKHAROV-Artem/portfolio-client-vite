import { FC, useContext, useState } from "react";
import { AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { GoTriangleUp } from "react-icons/go";
import { ISkillGroupItem, ISkillItem } from "../../models/SkillTypes";
import Box from "@mui/material/Box";
import { Context } from "../../main";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

interface ISkillAccordionProps {
  setSkillItems: (skillItems: ISkillItem[]) => void;
}

const SkillsAccordion: FC<ISkillAccordionProps> = ({ setSkillItems }) => {
  const { app } = useContext(Context);
  const [expanded, setExpanded] = useState<number | null>(0);
  const [, setSelected] = useState<number | null>(null);
  const [highlighted, setHighlighted] = useState<number>();

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    };

  const handleGroupItemSelect = (
    index: number,
    skillGroupItem: ISkillGroupItem
  ) => {
    setSelected(index);
    setHighlighted(skillGroupItem.id);
    setSkillItems(skillGroupItem.skillItems);
  };
  return (
    <Box sx={{ mb: 3 }}>
      {app.skills.map((skill, index) => {
        return (
          <Accordion
            key={skill.id}
            expanded={expanded === index}
            onChange={handleChange(index)}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<GoTriangleUp />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" sx={{ p: 1 }}>
                {skill.attributes.skillGroup}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {skill.attributes.skillGroupItems.map((skillGroupItem, i) => {
                return (
                  <Typography
                    key={skillGroupItem.id}
                    onClick={() => handleGroupItemSelect(i, skillGroupItem)}
                    variant="h6"
                    sx={{
                      p: 1,
                      ml: 3,
                      mb: 1,
                      color: `${
                        highlighted === skillGroupItem.id && "secondary.light"
                      }`,
                      transition: "0.4s",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateX(20px)",
                      },
                    }}
                  >
                    {skillGroupItem.name}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default SkillsAccordion;
