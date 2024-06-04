import { CHATS_COLORS } from "@simple-quicks/theme/theme.utility";

export const renderChatColor = (role: string) => {
  let textColor;
  let bgColor;
  let alignItems;
  let direction;

  switch (role) {
    case "me":
      textColor = CHATS_COLORS.PURPLE_PRIMARY;
      bgColor = CHATS_COLORS.PURPLE_SLATE;
      alignItems = "end";
      direction = "row-reverse";
      break;
    case "other":
      const randomColor =
        Math.random() < 0.5
          ? CHATS_COLORS.GREEN_PRIMARY
          : CHATS_COLORS.ORANGE_PRIMARY;
      textColor = randomColor;
      bgColor =
        randomColor === CHATS_COLORS.GREEN_PRIMARY
          ? CHATS_COLORS.GREEN_SLATE
          : CHATS_COLORS.ORANGE_SLATE;
      alignItems = "start";
      direction = "row";
      break;
  }

  return { textColor, bgColor, alignItems, direction };
};
