import { db } from "./db";
import * as schema from "./schema";

const movies = db.select().from(schema.movies).all()
const users = db.select().from(schema.users).all()

console.log(users);
console.log(movies);
