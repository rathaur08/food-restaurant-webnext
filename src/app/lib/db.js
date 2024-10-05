
const { username, password } = process.env
export const connectionStr = "mongodb+srv://" + username + ":" + password + "@cluster0.ucjgd.mongodb.net/restaurantdb?retryWrites=true&w=majority&appName=Cluster0";