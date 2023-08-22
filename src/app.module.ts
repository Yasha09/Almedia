import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {ConfigModule} from "@nestjs/config";

import {OfferModule} from "./offers/offer.module";
import {TypeOrmConfigService} from "./database/typeorm-config.service";
import appConfig from "./config/app.config";
import databaseConfig from "./config/database.config";
import {CronModule} from "./cron/cron.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig, databaseConfig]
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService,
            dataSourceFactory: async (options) => {
                return await new DataSource(options).initialize();
            }
        }),
        CronModule,
        OfferModule,
    ],
})
export class AppModule {
}
