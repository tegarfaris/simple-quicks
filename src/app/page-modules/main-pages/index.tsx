import React, { useState } from "react";
import { Flex, Box, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ButtonCircle from "@simple-quicks/app/components/button-circle";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import TaskSection from "./_sub-modules/task";
import InboxSection from "./_sub-modules/inbox";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";

const MotionFlex = motion(Flex);

const MainPages: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const [openQuicks, setOpenQuicks] = useState({
    task: false,
    inbox: false,
  });

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
    onToggle();
  };

  const toggleTask = () => {
    setOpenQuicks({
      task: !openQuicks.task,
      inbox: openQuicks.task ? openQuicks.inbox : false,
    });
  };

  const toggleInbox = () => {
    setOpenQuicks({
      task: openQuicks.inbox ? openQuicks.task : false,
      inbox: !openQuicks.inbox,
    });
  };

  return (
    <Flex bg={COLORS.SECONDARY} minH="100vh">
      <Flex
        flexDir="row-reverse"
        gap="10px"
        pos="fixed"
        bottom="20px"
        right="20px"
      >
        <ButtonCircle
          icons={ICONS.FEATHER_WHITE}
          bgColor={COLORS.PRIMARY_BLUE}
          width="18px"
          height="32px"
          onClick={handleButtonClick}
        />
        <MotionFlex
          gap="10px"
          animate={{
            x: isExpanded ? -5 : 0,
          }}
          transition={{
            type: "ease-in-out",
            duration: 0.2,
          }}
        >
          {isExpanded && (
            <>
              <Flex pos="relative">
                {/* TASK SECTION */}
                <Flex
                  display={openQuicks.task ? "flex" : "none"}
                  pos="absolute"
                  bottom="100px"
                  right="0px"
                >
                  <TaskSection />
                </Flex>
                <ButtonCircle
                  icons={ICONS.TASK_YELLOW}
                  bgColor={COLORS.SLATE}
                  width="26.67px"
                  height="26.67px"
                  withTitle
                  title="Task"
                  onClick={toggleTask}
                />
              </Flex>
              <Flex>
                {/* INBOX SECTION */}
                <Flex
                  display={openQuicks.inbox ? "flex" : "none"}
                  pos="absolute"
                  bottom="100px"
                  right="0px"
                >
                  <InboxSection />
                </Flex>
                <ButtonCircle
                  icons={ICONS.CHAT_PURPLE}
                  bgColor={COLORS.SLATE}
                  width="26.67px"
                  height="26.67px"
                  withTitle
                  title="Inbox"
                  onClick={toggleInbox}
                />
              </Flex>
            </>
          )}
        </MotionFlex>
      </Flex>
    </Flex>
  );
};

export default MainPages;
