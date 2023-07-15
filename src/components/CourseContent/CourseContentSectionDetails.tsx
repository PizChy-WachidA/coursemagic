import {
  Heading,
  Box,
  ListItem,
  Text,
  UnorderedList,
  OrderedList,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useColorModePresets from "../../hooks/useColorModePresets";

const CourseContentSectionDetails = ({ content }: { content: any }) => {
  const { secondaryBgColor } = useColorModePresets();
  if (typeof content === "string") {
    content = JSON.parse(content);
  }

  return (
    <Box mb={8}>
      <Box
        bg={secondaryBgColor}
        p={5}
        borderRadius="5px"
        display="inline-block"
      >
        <Heading size="xl">{content.title}</Heading>
      </Box>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // @ts-ignore
          h1: ({ node, ...props }) => (
            <Heading my={3} {...props} size="lg" as="h2" />
          ),
          h2: ({ node, ...props }) => (
            <Heading my={3} {...props} as="h2" size="lg" />
          ),
          h3: ({ node, ...props }) => (
            <Heading my={3} {...props} as="h3" size="md" />
          ),
          p: ({ node, ...props }) => <Text my={2} {...props} />,
          ul: ({ node, ...props }) => <UnorderedList {...props} />,
          ol: ({ node, ...props }) => <OrderedList {...props} />,
          li: ({ node, ...props }) => <ListItem {...props} />,
          table: ({ node, ...props }) => (
            <TableContainer>
              <Table {...props} />
            </TableContainer>
          ),
          thead: ({ node, ...props }) => <Thead {...props} />,
          tbody: ({ node, ...props }) => <Tbody {...props} />,
          tfoot: ({ node, ...props }) => <Tfoot {...props} />,
          tr: ({ node, ...props }) => <Tr {...props} />,
          th: ({ node, ...props }) => <Th {...props} />,
          td: ({ node, ...props }) => <Td {...props} />,
          caption: ({ node, ...props }) => <TableCaption {...props} />,
        }}
      >
        {content.content}
      </ReactMarkdown>
    </Box>
  );
};

export default CourseContentSectionDetails;
