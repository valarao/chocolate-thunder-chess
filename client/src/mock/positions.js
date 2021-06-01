import CaroKannDefenceImage from './positions-images/caro-kann_defence.png';
import EnglishOpeningImage from './positions-images/english_opening.png';
import FrenchDefenceImage from './positions-images/french_defence.png';
import ItalianGameImage from './positions-images/italian_game.png';
import KingsIndianDefenceImage from './positions-images/kings_indian_defence.png';
import NimzoIndianDefenceImage from './positions-images/nimzo-indian_defence.png';
import QueensGambitImage from './positions-images/queens_gambit.png';
import RuyLopezImage from './positions-images/ruy_lopez.png';
import SicilianDefenceImage from './positions-images/sicilian_defence.png';

export const getMockPositions = () => {
    return [
        {
            name: 'Caro-Kann Defence',
            imageLink: CaroKannDefenceImage,
        },
        {
            name: 'English Opening',
            imageLink: EnglishOpeningImage,
        },
        {
            name: 'French Defence',
            imageLink: FrenchDefenceImage,
        },
        {
            name: 'Italian Game',
            imageLink: ItalianGameImage,
        },
        {
            name: 'King\'s Indian Defence',
            imageLink: KingsIndianDefenceImage,
        },
        {
            name: 'Nimzo-Indian Defence',
            imageLink: NimzoIndianDefenceImage,
        },
        {
            name: 'Queen\'s Gambit',
            imageLink: QueensGambitImage,
        },
        {
            name: 'Ruy Lopez',
            imageLink: RuyLopezImage,
        },
        {
            name: 'Sicilian Defence',
            imageLink: SicilianDefenceImage,
        }
    ]
}
