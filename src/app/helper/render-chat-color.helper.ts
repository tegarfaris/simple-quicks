import { CHATS_COLORS } from "@simple-quicks/theme/theme.utility";

export const renderChatColor = (isSender: boolean) => {
  let textColor;
  let bgColor;
  let alignItems;
  let direction;

  if (isSender) {
    textColor = CHATS_COLORS.PURPLE_PRIMARY;
    bgColor = CHATS_COLORS.PURPLE_SLATE;
    alignItems = "end";
    direction = "row-reverse";
  } else {
    textColor = CHATS_COLORS.GREEN_PRIMARY;
    bgColor = CHATS_COLORS.GREEN_SLATE;
    alignItems = "start";
    direction = "row";
  }

  return { textColor, bgColor, alignItems, direction };
};
