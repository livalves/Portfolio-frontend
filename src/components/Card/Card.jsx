import * as S from "./card_style";

export default function Card({text, icon}) {
    return (
        <S.Card>
            <div className='card'>
                <p>{text}</p>
                {icon}
            </div>
        </S.Card>
    );
}