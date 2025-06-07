import env from "@/env";
import { Client, Users, Avatars, Databases, Storage } from "node-appwrite";
const sdk = require('node-appwrite');

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.apikey) // Your secret API key// Use only on dev mode with a self-signed SSL cert
;

const users = new Users(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, users, avatars, databases, storage};