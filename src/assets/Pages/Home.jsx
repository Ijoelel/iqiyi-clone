import NavbarApp from "../Components/Home/Navbar";
import WrapperApp from "../Components/Home/Wrapper";
import HeroApp from "../Components/Home/Hero";
import FooterApp from "../Components/Home/Footer";

export default function Home() {
    return (
        <>
            <NavbarApp/>
            <HeroApp/>
            <WrapperApp type='popular' title='Popular Movies'/>
            <WrapperApp type='upcoming' title='Upcoming Movies'/>
            <FooterApp/>
        </>
    )
}