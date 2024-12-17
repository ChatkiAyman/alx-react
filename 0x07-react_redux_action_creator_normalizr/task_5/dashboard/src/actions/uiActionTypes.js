import { filter } from "cheerio/lib/api/traversing";
import { MARK_AS_READ } from "./notificationActionTypes";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const DISPLAY_NOTIFICATION_DRAWER = "DISPLAY_NOTIFICATION_DRAWER";
export const HIDE_NOTIFICATION_DRAWER = "HIDE_NOTIFICATION_DRAWER";

const NotificationTypeFilters = {
    DEFAULT: 'DEFAULT',
    URGENT: 'URGENT'
  };
  
const NotificationTypeFilter = filter(MARK_AS_READ, NotificationTypeFilters.URGENT);
export default NotificationTypeFilter