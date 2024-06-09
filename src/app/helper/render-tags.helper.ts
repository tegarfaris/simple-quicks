import { STICKERS_COLORS } from "@simple-quicks/theme/theme.utility";
import { EBadge } from "../interface/task.interface";

export const renderTags = (tag: EBadge) => {
  let text;
  let bgColor;

  switch (tag) {
    case EBadge.IMPORTANT_ASAP:
      text = "Important ASAP";
      bgColor = STICKERS_COLORS.NEUTRAL;
      break;
    case EBadge.OFFLINE_MEETING:
      text = "Offline Meeting";
      bgColor = STICKERS_COLORS.ORANGE;
      break;
    case EBadge.VIRTUAL_MEETING:
      text = "Virtual Meeting";
      bgColor = STICKERS_COLORS.ORANGE_SLATE;
    case EBadge.ASAP:
      text = "ASAP";
      bgColor = STICKERS_COLORS.GREEN;
      break;
    case EBadge.CLIENT_RELATED:
      text = "Client Related";
      bgColor = STICKERS_COLORS.GREEN_MINTH;
      break;
    case EBadge.SELF_TASK:
      text = "Self Task";
      bgColor = STICKERS_COLORS.PURPLE;
      break;
    case EBadge.APPOINMENT:
      text = "Appoinment";
      bgColor = STICKERS_COLORS.PINK;
      break;
    case EBadge.COURT_RELATED:
      text = "Court Related";
      bgColor = STICKERS_COLORS.BLUE;
      break;
  }

  return { text, bgColor };
};
