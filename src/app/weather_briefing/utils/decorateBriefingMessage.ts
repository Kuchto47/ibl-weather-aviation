import { Palette } from '@mui/material';

type InfoType = 'BKN' | 'FEW' | 'SCT';

export class BriefingMessageDecorator {
    constructor(
        private messageToDecorate: string,
        private palette: Palette
    ) {}

    decorate(): string {
        return this.decorateClouds('BKN').decorateClouds('FEW').decorateClouds('SCT')
            .messageToDecorate;
    }

    private decorateClouds(infoType: InfoType): BriefingMessageDecorator {
        const regex = new RegExp(`\\b(${infoType}[0-9]{3})\\b`, 'g');
        this.messageToDecorate = this.messageToDecorate.replace(regex, (match) => {
            const number = Number(match.slice(-3));
            return `<font color=\"${this.shouldBeBlue(number) ? this.adaptBlueColor() : 'red'}\">${match}</font>`;
        });
        return this;
    }

    private adaptBlueColor(): string {
        return this.palette.mode === 'dark' ? this.palette.primary.main : 'blue';
    }

    private shouldBeBlue(number: number): boolean {
        return number <= 30;
    }
}