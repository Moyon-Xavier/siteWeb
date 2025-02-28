export default function Header(){
    return(
        <>
        <header className="Selection">
        
            <section className="MenuSelect">
                <img src="./Photos/Header/MenuBar.jpg" alt="Menu"/>
                <aside className="HiddenMenu">
                    <a href="./projets.html">Mes Projets</a>
                    <a href="./Parcours.html">Mon parcours</a>
                    <a href="./passions.html">Mes Passions</a>
        
        
        
        
                </aside>
            </section>
            <h1>Xavier Moyon </h1>
            <a href="PDF/CV/XavierMoyon_CV.pdf" download="CV-Xavier-Moyon.pdf" target="_blank"><button type="button"
                    className="btn btn-outline-light">Télécharger CV</button></a>
        
        </header>
        </>
    );
}