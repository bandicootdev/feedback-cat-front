import './styles.css'
export const Badge =({onClick,text})=><button onClick={onClick} className={'btn badge badge-component p-2 m-1'}>{text}</button>