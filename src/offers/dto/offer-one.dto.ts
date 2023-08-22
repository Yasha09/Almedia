import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class OfferOneDto {
    @IsString()
    @IsNotEmpty()
    offer_id: string;

    @IsString()
    @IsNotEmpty()
    offer_name: string;

    @IsString()
    @IsNotEmpty()
    offer_desc: string;

    @IsString()
    @IsNotEmpty()
    call_to_action: string;

    @IsString()
    @IsNotEmpty()
    offer_url: string;

    @IsString()
    @IsNotEmpty()
    image_url: string;

    @IsString()
    @IsNotEmpty()
    platform: string;

    @IsString()
    @IsNotEmpty()
    device: string;
}