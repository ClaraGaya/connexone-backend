import cors from 'cors';

const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: "POST, PUT, OPTIONS, DELETE, GET",
    allowedHeaders: "X-Requested-With, Content-Type, Authorization"
}

const corsMiddleware = cors(corsOptions)

export default corsMiddleware;
