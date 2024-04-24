import * as S from "./carousel_style";

export default function Item({image, text, link}) {
    return (
        <S.Item>
            <div className="card">
                <div className='image'>
                    <img src={image} alt="Tela do respectivo projeto." />
                </div>
                <div className='text'>
                    <h2>{text}</h2>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Ver mais
                    </a>
                </div>
            </div>
        </S.Item>
    );
}