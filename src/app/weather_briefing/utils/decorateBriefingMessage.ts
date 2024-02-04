import { Palette } from '@mui/material';

type CloudSeverity = 'BKN' | 'FEW' | 'SCT';

export class BriefingMessageDecorator {
    constructor(
        private messageToDecorate: string,
        private palette: Palette
    ) {}

    decorate(): string {
        return this.decorateClouds('BKN').decorateClouds('FEW').decorateClouds('SCT')
            .messageToDecorate;
    }

    private decorateClouds(cloudSeverity: CloudSeverity): BriefingMessageDecorator {
        const regex = new RegExp(`\\b(${cloudSeverity}[0-9]{3})\\b`, 'g');
        this.messageToDecorate = this.messageToDecorate.replace(regex, (match) => {
            const number = Number(match.slice(-3));
            return `<font color=\"${this.shouldBeBlue(number) ? this.themeSpecificBlue() : 'red'}\">${match}</font>`;
        });
        return this;
    }

    private themeSpecificBlue(): string {
        return this.palette.mode === 'dark' ? this.palette.primary.main : 'blue';
    }

    private shouldBeBlue(number: number): boolean {
        return number <= 30;
    }
}
