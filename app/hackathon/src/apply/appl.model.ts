import { Express } from 'express'

export interface Appl {
    id: string;
    name: string;
    email: string;
    encryInfo: string;
    cv: Express.Multer.File;
    status: ApplStatus;
}

export enum ApplStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    NOT_PDF = 'NOT_PDF',
}