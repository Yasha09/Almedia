import {registerAs} from '@nestjs/config';
import * as process from "process";
import {IsNumber, IsString} from "class-validator";
import {validateUtil} from "./validate-util";

export class DataBaseEnvVariables {
    @IsString()
    POSTGRES_TYPE: string;

    @IsString()
    POSTGRES_HOST: string;

    @IsNumber()
    POSTGRES_PORT: number;

    @IsString()
    POSTGRES_USER: string;

    @IsString()
    POSTGRES_PASSWORD: string;

    @IsString()
    POSTGRES_NAME: string;
}

export interface DataBaseConfigInterface {
    url: string;
    type: string;
    host: string;
    password: string;
    name: string;
    username: string;
    port: number;
    synchronize: boolean
}

export default registerAs('database_config', (): DataBaseConfigInterface => {
    validateUtil(process.env, DataBaseEnvVariables)
    return {
        url: process.env.POSTGRES_URL,
        type: process.env.POSTGRES_TYPE,
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
        password: process.env.POSTGRES_PASSWORD,
        name: process.env.POSTGRES_NAME,
        username: process.env.POSTGRES_USER,
        synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true',
    }
});
