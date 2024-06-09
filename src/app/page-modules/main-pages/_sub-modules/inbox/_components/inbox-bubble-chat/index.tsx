import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { convertUTC } from "@simple-quicks/app/helper/convert-date.helper";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { renderChatColor } from "@simple-quicks/app/helper/render-chat-color.helper";
import useInbox from "@simple-quicks/app/hooks/api/useInbox";
import { COLORS } from "@simple-quicks/theme/theme.utility";

interface InboxBubbleChatProps {
  inboxId: string;
  chatId: string;
  isSender: boolean;
  isEdited: boolean;
  senderName: string;
  bodyMessage: string;
  time: string;
}

const InboxBubbleChat: React.FC<InboxBubbleChatProps> = ({
  inboxId,
  chatId,
  senderName,
  isSender,
  isEdited,
  bodyMessage,
  time,
}) => {
  const { editMessage, deleteMessage } = useInbox();
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
    editMessage({
      data: {
        bodyChat: editedMessage,
        id: chatId,
        senderName: senderName,
        createdAt: convertUTC(
          dayjs().format("YYYY-MM-DD"),
          dayjs().format("HH:mm")
        ),
        isSender: isSender,
        isEdited: true,
      },
      inboxId: inboxId,
    });
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteMessage({ inboxId: inboxId, id: chatId });
  };

  return (
    <Flex
      w="full"
      alignItems={renderChatColor(isSender).alignItems}
      flexDir="column"
      gap="5px"
    >
      <Text
        fontFamily="lato"
        fontSize="14px"
        fontWeight={700}
        color={renderChatColor(isSender).textColor}
      >
        {isSender ? "You" : senderName}
      </Text>
      <Flex
        flexDir={renderChatColor(isSender).direction as "row" | "row-reverse"}
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
          bg={renderChatColor(isSender).bgColor}
          maxW="418px"
        >
          {editMode ? (
            <Textarea
              ref={textareaRef}
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              style={{ display: editMode ? "block" : "none", width: "100%" }}
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
          <Flex alignItems="center" gap="10px">
            <Text>{dayjs(time).format("HH:mm")}</Text>
            <Text
              fontFamily="lato"
              fontSize="12px"
              fontWeight={600}
              color={COLORS.NEUTRAL}
            >
              {isEdited && "Edited"}
            </Text>
          </Flex>
        </Box>
        <Menu>
          <MenuButton>
            <Image src={ICONS.TRIPLE_DOTS} w="16px" alt="actions" />
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
