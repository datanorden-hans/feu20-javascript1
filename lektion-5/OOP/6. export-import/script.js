import User from "./models/User.js";
import UserService from "./services/UserService.js";
import { validate as va, sendSMS } from "./functions/Functions.js";


const user = new User('Hans', 'Mattin-Lassei', 'h@d.com', 'bytmig123')
UserService.signUp(user)
UserService.signIn(user.email, user.password)

va()
sendSMS()