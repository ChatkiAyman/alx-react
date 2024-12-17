import * as notifications from '../../notifications.json';
import { schema } from 'normalizr';

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {'idAttribute': 'guid'});
const notification = new schema.Entity('notifications', {
    'author': 'user',
    'context': 'message'
});
function getAllNotificationsByUser(userId) {
    const userNotifications = notifications.default.filter(notification => notification.author.id === userId);
    const context = [];
    for (let i = 0; i < userNotifications.length; i++){
        context.push(userNotifications[i].context);
    }
    //return userNotifications.map(notification => notification.context);
    return context;
}

export default getAllNotificationsByUser;