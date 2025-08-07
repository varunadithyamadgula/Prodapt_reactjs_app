function Footer() {
    return (
        <footer style={{textAlign: "center", color: "white", height: "30px", left: 0 , bottom: 0, position: "fixed", width: "100%", backgroundColor: "grey", padding: "5px"}}>
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </footer>
    );
}
export default Footer;