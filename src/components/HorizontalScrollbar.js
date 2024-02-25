import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const visibilityContext = useContext(VisibilityContext);
  const isFirst = !visibilityContext.isStart;
  const isLast = !visibilityContext.isEnd;

  return (
    <ScrollMenu LeftArrow={<LeftArrow scrollPrev={visibilityContext.scrollPrev} isFirst={isFirst} bodyParts={bodyParts} />} 
                RightArrow={<RightArrow scrollNext={visibilityContext.scrollNext} isLast={isLast} bodyParts={bodyParts} />}>
      {data.map((item) => (
        <Box 
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item}/>} 
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;