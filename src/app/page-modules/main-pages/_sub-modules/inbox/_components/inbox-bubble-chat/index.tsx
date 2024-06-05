import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { renderChatColor } from "@simple-quicks/app/helper/render-chat-color.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React, { useState } from "react";

interface InboxBubbleChatProps {
  senderRole: string;
  senderName: string;
  bodyMessage: string;
  time: string;
}

const InboxBubbleChat: React.FC<InboxBubbleChatProps> = ({
  senderName,
  senderRole,
  bodyMessage,
  time,
}) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [editMode, setEditMode] = useState(false);
  const [editedMessage, setEditedMessage] = useState(bodyMessage);

  React.useEffect(() => {
    if (editMode && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [editMode]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Implement save logic here
    // Simpan editedMessage ke server misalnya
    setEditMode(false);
  };

  const handleDelete = () => {
    // Implement delete logic here
    // Hapus chat
  };

  return (
    <Flex
      w="full"
      alignItems={renderChatColor(senderRole).alignItems}
      flexDir="column"
      gap="5px"
    >
      <Text
        fontFamily="lato"
        fontSize="14px"
        fontWeight={700}
        color={renderChatColor(senderRole).textColor}
      >
        {senderName}
      </Text>
      <Flex
        flexDir={renderChatColor(senderRole).direction as "row" | "row-reverse"}
        alignItems="start"
        gap="5px"
      >
        <Box
          as={Flex}
          flexDir="column"
          p="10px"
          rounded="5px"
          gap="10px"
          fontFamily="lato"
          fontSize="14px"
          bg={renderChatColor(senderRole).bgColor}
          maxW="518px"
        >
          {editMode ? (
            <Textarea
              ref={textareaRef}
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              style={{ display: editMode ? "block" : "none" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSave();
                }
              }}
            />
          ) : (
            <Text>{editedMessage}</Text>
          )}
          <Text>{time}</Text>
        </Box>
        <Menu>
          <MenuButton>
            <Image src="/assets/icons/triple_dots.svg" w="16px" alt="actions" />
          </MenuButton>
          <MenuList>
            <MenuItem
              color={COLORS.PRIMARY_BLUE}
              onClick={editMode ? handleSave : handleEdit}
            >
              {editMode ? "Save" : "Edit"}
            </MenuItem>
            <MenuItem color={COLORS.RED} onClick={handleDelete}>
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default InboxBubbleChat;
