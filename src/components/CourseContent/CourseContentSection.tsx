import { Box, Text, Image, Spinner } from "@chakra-ui/react";
import { useCourseContext } from "../../context/CourseContext";
import CourseContentSectionDetails from "./CourseContentSectionDetails";
// TODO: Rename to CourseContentLesson
const CourseContentSection = () => {
  const { activeTopics, isFetchingCourse, isFetchingLesson } =
    useCourseContext();
  // TODO: Extract this to a component
  const loadingGif = (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Spinner size={["lg", "xl"]} />
      <Text mt={5}>Generating Lesson Content - estimated time 1 minute</Text>
    </Box>
  );

  return (
    <Box
      display="flex"
      flexDir="column"
      pt={2}
      px={["20px", "10px"]}
      width="100%"
      maxHeight="90vh"
      overflowY="auto"
    >
      {isFetchingCourse || isFetchingLesson || !activeTopics?.length
        ? loadingGif
        : activeTopics.map((topic: any, i: number) => (
            <CourseContentSectionDetails content={topic} key={i} />
          ))}
    </Box>
  );
};

export default CourseContentSection;
