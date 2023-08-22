import {IsString, IsNotEmpty, IsBoolean, IsNumber} from 'class-validator';

export class OfferTwoDto {
    @IsNumber()
    @IsNotEmpty()
    campaign_id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    tracking_url: string;

    @IsString()
    @IsNotEmpty()
    instructions: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    icon: string;

    @IsBoolean()
    ios: boolean;

    @IsBoolean()
    web: boolean;

    @IsBoolean()
    android: boolean;
}