import { UnauthorizedError } from "../../domain/errors/unauthorized-error";

import { Request, Response, NextFunction } from "express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if(req?.auth){
        throw new UnauthorizedError("Unauthorized");
    }
    console.log(req.auth);
    next();
};

export { isAuthenticated };