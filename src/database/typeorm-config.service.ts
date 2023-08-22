import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
import {ConfigService} from "@nestjs/config";
import {Injectable} from "@nestjs/common";
import {Offer} from "../offers/entity/offer.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {
    }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: this.configService.get('POSTGRES_TYPE'),
            url: this.configService.get('POSTGRES_URL'),
            host: this.configService.get('POSTGRES_HOST'),
            port: this.configService.get('POSTGRES_PORT'),
            username: this.configService.get('POSTGRES_USER'),
            password: this.configService.get('POSTGRES_PASSWORD'),
            database: this.configService.get('POSTGRES_USER'),
            entities: [Offer],
            synchronize: true,
        } as TypeOrmModuleOptions
    }
}