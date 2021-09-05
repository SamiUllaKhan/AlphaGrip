import Footer from "./Footer";
import MenuBar from "./GroupMenu";

const Layout = ({ children }) => {
    return ( 
        <div>
            <MenuBar />
                {children}
            <Footer />
        </div>
     );
}
 
export default Layout;