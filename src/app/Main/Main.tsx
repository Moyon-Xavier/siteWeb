export default function Main(){
    return(
        <>
    <section className="AboutMe">
        <h2 className="AboutMeHead"></h2>
        <aside className="All">
            <section className="MyProfile">
                <section className="PictureAndId">
                    <section className="myImagePlusQuote">
                        <img src="./Photos/Accueil/XavierMoyon.jpg" alt="Xavier Moyon"/>
                        
                    </section>
                </section>
            </section>
            <section className="IdentityCard">
                <h2>Pour faire connaissance</h2>
                <p>Bonjour, je m'appelle Xavier Moyon, je suis étudiant en troisième année de BUT informatique en
                    parcours réalisation d'applications. Je suis également alternant dans l'entreprise E-Mothep depuis Octobre 2024
                    <br/><strong>"Pourquoi le BUT informatique "</strong> pourrait-on me demander ? Si j'ai
                    choisi cette
                    formation c'est
                    parce
                    que depuis la fin du collège j'ai pour projet de devenir développeur. C'est donc dans le but
                    de
                    réaliser ce projet que j'ai choisi cette formation qui m'a amené à développer divers
                    applications.
                    J'apprecie mettre ma créativité et ma détermination au service de mes projets et j'espère
                    pouvoir en
                    faire de même avec les vôtres.

                </p>
                <script src="./JS/Accueil/YearCalculator.js"></script>
            </section>
        </aside>

        <aside className="quota Diplome">
            <h2>Diplomes et Formations</h2>
            <section>
                <h5>BUT informatique (Parcours A : Developpement d'application) : 2022 - Maintenant</h5>
            </section>
            <section>
                <h5>Baccalauréat Général (Mention tres bien) : 2018 - 2021 </h5>
                <p>Lycée Marie Curie - Nogent-Sur-Oise
                    (60180)  Spécialités : Numérique Science informatique, Mathématiques <br/> Option : Maths
                    Expertes
                </p>

            </section>


            <button type="button" className="btn btn-outline-light"><a href="./Parcours.html">En savoir
                    plus</a></button>
            
        </aside>

        <aside className="quota projets">
            <h2>Mes Projets</h2>

            <button type="button" className="btn btn-outline-light"><a href="./projets.html">Mon Portefolio</a></button>
            <br/>
        </aside>

        <aside className="Competences">
            <h2>Mes Competences</h2>
            <aside className="TwoByTwo">
                <div className="C">
                    <h3>Spring Boot </h3>
                    <p className="appear">J'ai pu utiliser Spring Boot durant mes cours mais aussi lors de ma période en entreprise.
                        J'ai nottament pu utiliser Spring Boot dans l'objectif de developper des APIs REST dans des projets de developpement logiciels.
                    </p>
                </div>
            </aside>
            <aside className="TwoByTwo">


                <div className="C">
                    <h3>React </h3>
                    
                    <p className="appear">J'ai pu utiliser React lors de mes cours afin d'apprendre à développer des SPAs(Single Page App).</p>

                </div>
                

            </aside>
            <aside className="TwoByTwo">
                <div className="C">
                    <h3>NO-SQL </h3>

                    <p className="appear">Découverte de nouvelles distributions(MANGODB, Cassandra, Redis)</p>
                </div>


            </aside>
            <aside className="TwoByTwo">
                <div className="C">
                    <h3>HTML </h3>
                   
                    <p className="appear">J'ai commencé à apprendre cette compétence durant
                        mes cours de Numerique Sciences informatique en première, et j'ai ensuite eu envie de
                        l'appliquer
                        pour un projet d'espagnol (<a href="./projets.html#esp">lien vers
                            la description du projet</a>). Cependant lors de mon premier semestre en BUT,
                        j'ai rencontré des difficultés en HTML-CSS lors d'une de mes premières SAE
                        (<a href="./projets.html#105106">lien</a>), c'est pour cela que j'ai décidé
                        pendant l'interruption pédagogique de m'améliorer dans ce domaine et de
                        développer mon propre site web pour mon CV
                        (<a href="./projets.html">Lien vers le projet</a>)</p>
                    <p className="appearTel">J'ai commencé à apprendre cette compétence durant
                        mes cours de NSI en première. J'ai décidé
                        pendant l'interruption pédagogique de m'améliorer dans ce domaine et de
                        développer mon propre site web pour mon CV
                        (<a href="./projets.html">Lien vers le projet</a>)</p>
                </div>


                <div className="C">
                    <h3>CSS </h3>
 
                    <p className="appear">J'ai commencé à apprendre cette compétence durant
                        mes cours de NSI en première, et j'ai ensuite eu envie de l'appliquer
                        pour un projet d'espagnol (<a href="./projets.html">lien vers
                            la description du projet</a>). Cependant lors de mon premier semestre en BUT,
                        j'ai rencontré des difficultés en HTML-CSS lors d'une de mes premières SAE
                        (<a href="./projets.html#105106">lien</a>), c'est pour cela que j'ai décidé
                        pendant l'interruption pédagogique de m'améliorer dans ce domaine et de
                        développer mon propre site web pour mon CV
                        (<a href="./projets.html">Lien vers le projet</a>)</p>
                    <p className="appearTel">J'ai commencé à apprendre cette compétence durant
                        mes cours de NSI en première. J'ai décidé
                        pendant l'interruption pédagogique de m'améliorer dans ce domaine et de
                        développer mon propre site web pour mon CV
                        (<a href="./projets.html">Lien vers le projet</a>)</p>

                </div>

            </aside>
            <aside className="TwoByTwo">
                <div className="C">
                    <h3>SQL </h3>

                    <p className="appear">J'ai commencé à apprendre cette compétence durant
                        mes cours de NSI en première. Nous avions, à ce moment-là, des
                        tables contenant des films, des acteurs et des rôles.
                        J'ai pu approfondir mes connaissances dans ce domaine lorsque
                        je suis arrivé en BUT et que j'ai assisté à mes premiers cours
                        de BDD. Ces derniers m'ont permis de mieux comprendre l'utilité de
                        cette compétence ainsi que les nombreuses choses que nous pouvions
                        faire avec. </p>

                    <p className="appearTel">J'ai commencé à apprendre cette compétence durant
                        mes cours de NSI en première et les cours en
                        BUT m'ont permis de mieux comprendre l'utilité de
                        cette compétence ainsi que les nombreuses choses que nous pouvions
                        faire avec. </p>

                </div>
                <div className="C">
                    <h3>JAVA </h3>
                    
                    <p className="appear">J'ai découvert le JAVA lors de mon premier semestre en BUT.
                        Il nous avait été présenté sous une forme simplifiée, "Le Ijava",
                        une sorte d'équivalent du Java (en termes de Syntaxe)
                        mais qui cependant nous cachait les mécanismes d'objets.
                        Ce n'est qu'au deuxième semestre que nous avons réellement
                        programmé en JAVA lors de nos cours de
                        <abbr title="Developpement Orienté Objets">DEV-OO</abbr>
                        et de Qualité de Développement.
                    </p>
                    <p className="appearTel">J'ai découvert le JAVA lors de mon premier semestre en BUT.
                        Il nous avait été présenté sous une forme simplifiée, "Le Ijava",
                        Ce n'est qu'au deuxième semestre que nous avons réellement
                        programmé en JAVA lors de nos cours de
                        <abbr title="Developpement Orienté Objets">DEV-OO</abbr>
                        et de Qualité de Développement.
                    </p>

                </div>

            </aside>
            <aside className="TwoByTwo">

                <div className="C">
                    <h3>Commande Linux et Fonctionnement d'une Machine Virtuelle </h3>
                                       <p className="appear">J'ai découvert ces compétences pour la première fois
                        en NSI en 1ère sur un Raspberry. Cependant, avec l'arrivée de
                        l'épidémie du Covid-19, je n'ai pas pu réellement suivre cette partie
                        du cours et avoir l'enseignement nécessaire. Heureusement, lors de nos
                        cours de système, nous sommes revenus sur ces compétences. Nous avons
                        appris de nombreuses commandes Linux
                        (ls, cd, cat, touch, nano, wc, grep, ...) et nous
                        avons notamment vu comment nous pouvions créer une Machine virtuelle
                        ainsi que la manière dont nous pouvions la gérer
                        (gestion utilisateurs, gestionnaires de paquets).
                    </p>
                    <p className="appearTel">J'ai découvert ces compétences pour la première fois
                        en NSI en 1ère sur un Raspberry et je l'ai approfondi lors de mes
                        cours de système en BUT grace a l'apprentissage de nombreuses commandes Linux
                        (ls, cd, cat, touch, nano, wc, grep, ...),j'ai notamment
                        appris a créer une Machine virtuelle
                        á la gérer
                        (gestion utilisateurs, gestionnaires de paquets).
                    </p>


                </div>
                <div className="C">
                    <h3>PYTHON </h3>

                    <p className="appear">J'ai découvert Python pendant les vacances entre
                        la 3ème et la seconde, et je dois dire que mon premier programme
                        était assez laborieux. Cependant, j'avais réellement envie de
                        progresser, alors j'ai continué à travailler ma manière de programmer.
                        J'ai découvert toute cette logique qui me paraît aujourd'hui beaucoup
                        plus simple (boucle for et while, listes, dictionnaires, ...)
                        en regardant les vidéos de
                        <a href="https://www.youtube.com/watch?v=psaDHhZ0cPs&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR"
                            title="Lien Video Python">Graven</a>.
                        Mon apprentissage a continué en seconde via les cours de maths et
                        les petits programmes Python que nous pouvions faire.
                        Mais j'ai développé la plus grande partie de cette compétence
                        (objets, dichotomie, tri, ...) durant mes cours de NSI les deux années suivantes.
                    </p>
                    <p className="appearTel">J'ai découvert Python pendant les vacances entre
                        la 3ème et la seconde,
                        Mon apprentissage a continué en seconde via les cours de maths.
                        Mais j'ai développé la plus grande partie de cette compétence
                        (objets, dichotomie, tri, ...) durant mes cours de NSI les deux années suivantes.
                    </p>

                </div>

            </aside>

            <aside className="TwoByTwo">
                <div className="C">
                    <h3>Javascript </h3>


                </div>
                <div className="C">
                    <h3>Node JS </h3>
                    

                </div>

            </aside>

            <h2>Mes Competences non liées a l'informatique</h2>
            <aside className="TwoByTwo">
                <div className="C">
                    <h3>Etat d'esprit Agile </h3>
                   

                </div>
                <div className="C">
                    <h3>GIT </h3>

                </div>

            </aside>


        </aside>


        <aside className="Competences">
            <h2>Mes Savoirs Etre</h2>

            <aside className="TwoByTwo">
                <div className="C">
                    <h3>Esprit d'équipe </h3>
                </div>
                <div className="C">
                    <h3>Autonome </h3>
                </div>
            </aside>
            <aside className="TwoByTwo">
                <div className="C">
                    <h3>Communiquant </h3>
                </div>
                <div className="C">
                    <h3>Créatif</h3>
                </div>
            </aside>

        </aside>
        <aside className="quota passions">
            <h2>Mes Passions</h2>

            <h4>La Musique</h4><br/>
            <h4>L'aviron</h4><br/>


            <button type="button" className="btn btn-outline-light"><a href="./passions.html">En savoir
                    plus</a></button>
            <br/>
        </aside>
    </section>
    </>
    );
}