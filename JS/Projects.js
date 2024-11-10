async function getProject() {
    const url = "http://localhost:8080/test/project/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error.message);
    }
}
async function getPeriod() {
    const url = "http://localhost:8080/test/period/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

getPeriod();
getProject();

function addElementToListProject(currentContainer,element){
    currentContainer.getElementsByClassName("listAllPeriodProject")[0].innerHTML+=`
                
                            <a href="#prono${element.prono}">${element.projectName}</a>
                                               `    
      
}

function getAllListOfAllSkill(element){
    var str =``;
    element.requirements.forEach(req=>{str+=`<li>${req.title}</li>`})
    return str;
}

function getElementsInGoodFormat(element){
    return `<section class="projectContainer" id="prono${element.prono}">
                <h3 class="header">${element.projectName}</h3>
                <article class="inline">
                    <img src="${element.imageURL}" alt="Projets401402 Photo">
                    <p> 
                        ${element.description}
                    </p>
                </article>
                <article class="inlineCapacity">
                    <section class="exemple Competences">
                        <h4>Compétences : </h4>
                        <ul>
                            ${getAllListOfAllSkill(element)}
    
                        </ul>
                    </section>
    
                </article>
                <article>
                    <a class="gitLink" href="https://github.com/Moyon-Xavier/BreakingKart" target="_blank">Lien du projet
                        git</a>
                </article>
                <!--<article>
    
                    <a class="gitLink" target="_blank"
                        href="https://drive.google.com/drive/folders/1yYfoV1HJpT0m1sm40zcvDDPPsZupidZf?usp=sharing">Livrable
                        non lié á l'informatique</a>
    
                </article>
                <article>
                        <h4>Vidéo muette de presentation de notre jeu (Partie communication)</h4>
    
                        <div class="youtube">
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/tzP7FwhkKw8?si=81FknygJRzN7szda"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
    
                        </div>
                    </article>-->
    
            </section>`
}
async function createProject(){
    
    var periodContainer = document.getElementById("periodContainer");
    var projects = await getProject()//.then(ele=>{console.log("then" + ele[0].name)})
        let current=-1;
        var currentPeriodContainer;
            
        projects.forEach(element => {
            if (element.period.perno!=current){
                current = element.period.perno;
                
                currentPeriodContainer=document.getElementById(`mainSectionPerno${current}`);
                console.log(currentPeriodContainer)
                console.log("Create");
            }
            addElementToListProject(currentPeriodContainer,element);
            
            currentPeriodContainer.innerHTML+=getElementsInGoodFormat(element);
        }
            
            );
    
    
}
async function createYearSection(){
    var periodContainer = document.getElementById("periodContainer");
    var years = await getPeriod()//.then(ele=>{console.log("then" + ele[0].name)})
    
        years.forEach(element => {
            periodContainer.innerHTML+=`
                <section id="mainSectionPerno${element.perno}" class="Year">
    
                    <aside class="gridItem Head">
                        <h2 id="perno${element.perno}">${element.name}</h2>
                    </aside>
                    <aside class="gridItem SelectButP">
                    <ul>
                        <li class="listAllPeriodProject">
                        </li>
                    </ul>
    
                </aside>`    
        });
    
    
}

createYearSection().then(createProject())


