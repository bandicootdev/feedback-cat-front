import './style.css'
import MenuIconOpen from '../../assets/shared/mobile/icon-hamburger.svg';
import MenuIconClose from '../../assets/shared/mobile/icon-close.svg'

export const Header = ({isOpen, setIsOpen, className}) => {
    const onclickImage = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }
    return <header
        className={`card-header-a d-flex align-items-center justify-content-between px-4 w-100 d-md-flex flex-md-row justify-content-md-around align-items-md-center ${className}`}>
        <div className={'mt-md-5 mt-lg-3 text-light'}>
            <h3 className={'mb-0 mt-md-4'}>Frontend Mentor</h3>
            <p className={'mb-0'}>Feedback Board</p>
        </div>
        <img onClick={onclickImage} className={'img-fluid d-md-none'} src={isOpen ? MenuIconClose : MenuIconOpen}
             alt=""/>
    </header>
}