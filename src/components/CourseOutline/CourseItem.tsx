import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ICourseItem, CourseItemType } from "../../types/course";
import useColorModePresets from "../../hooks/useColorModePresets";

const CourseItem = ({
  item,
  showDescription = true,
}: {
  item: ICourseItem<CourseItemType.LESSON | CourseItemType.MODULE>;
  showDescription?: boolean;
}) => {
  const { title, dates, description, type, items } = item;
  const { activeBg } = useColorModePresets();
  return (
    <Accordion defaultIndex={0} allowToggle>
      <AccordionItem>
        <h2>
          {type === CourseItemType.MODULE ? (
            <AccordionButton
              _expanded={{
                bg: activeBg,
              }}
              _hover={{
                bg: activeBg,
              }}
            >
              <Box as="span" flex="1" textAlign="left">
                {title} {dates && "(" + dates + ")"}
              </Box>
              {type === CourseItemType.MODULE && <AccordionIcon />}
            </AccordionButton>
          ) : (
            <UnorderedList>
              <ListItem cursor="pointer">
                <Text mb={1}>
                  {title} {dates && "(" + dates + ")"}
                </Text>
              </ListItem>
            </UnorderedList>
          )}
        </h2>
        {type === CourseItemType.MODULE && (
          <AccordionPanel>
            {showDescription && <Text mb={2}>{description}</Text>}
            {items.map((childItem, i) => {
              return <CourseItem key={i} item={childItem} />;
            })}
          </AccordionPanel>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default CourseItem;
