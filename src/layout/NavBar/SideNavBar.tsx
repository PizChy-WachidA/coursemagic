import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import useColorModePresets from "../../hooks/useColorModePresets";
import useActivePath from "./hooks/useActiveNavItem";
import pathPatternMapper from "./util/pathPatternMapper";
import { Link } from "react-router-dom";
import SignInButton from "../../components/SignInButton";
import { useSupabase } from "../../context/SupabaseContext";
import { AccountAvatar } from "../../components/AccountAvatar";

const SideNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn } = useSupabase();
  const { primaryBgColor, activeBg } = useColorModePresets();
  const activePath = useActivePath();

  return (
    <>
      <Flex alignItems="center" mr="8px">
        <IconButton
          w="30px"
          variant="ghost"
          aria-label="side-navigation"
          onClick={onOpen}
          icon={<GiHamburgerMenu size="25px" />}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background={primaryBgColor}>
          <DrawerCloseButton />
          <DrawerHeader>CourseGen</DrawerHeader>
          <DrawerBody>
            <Show below="sm">
              <Flex justifyContent="center" mb={5}>
                {!isLoggedIn ? <SignInButton /> : <AccountAvatar size="md" />}
              </Flex>
            </Show>
            {pathPatternMapper.map(
              ({ path, title, isProtected }) =>
                ((isProtected && isLoggedIn) || !isProtected) && (
                  <Link key={path} to={path}>
                    <Box
                      key={path}
                      cursor="pointer"
                      p="10px"
                      bg={`/${activePath}` === path ? activeBg : "initial"}
                      _hover={{ bg: activeBg }}
                    >
                      {title}
                    </Box>
                  </Link>
                )
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNavBar;
