import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Topbar from "@simple-quicks/app/components/navbar/topbar";
import Sidebar from "@simple-quicks/app/components/navbar/sidebar";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex inset={0} justifyContent="space-between">
      <Sidebar />
      <Box
        w="100%"
        minH="100vh"
        position="relative"
        id="top"
        transition="all ease-in 0.25s"
      >
        <Flex flexDir="column" minH="100%" pb={{ base: "50px", md: "0" }}>
          <Topbar />
          <Flex
            flexDir="column"
            w="100%"
            minH="100%"
            overflowY="hidden"
            p={{ base: "20px", md: "24px" }}
            flexGrow="1"
          >
            {children}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainLayout;
