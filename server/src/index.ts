import express, { NextFunction, Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(urlencoded({ extended: true }))
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: err.message
    })
})

const port = process.env.PORT || 4500

app.listen(port, ()=>{
    console.log(`Server up and running at port: ${port}`);
    
})