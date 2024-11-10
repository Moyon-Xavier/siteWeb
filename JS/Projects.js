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
            
            currentPeriodContainer.getElementsByClassName("listAllPeriodProject")[0].innerHTML+=`
                
                            <a href="#prono${element.prono}">${element.projectName}</a>
                                               `    
        });
    
    
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
                            <!--<a href="#402">Projet 4A.02 : Developpement d'une application complexe</a>
                            <a href="#401">Projet 4A.01 : Developpement d'une API REST</a>
                            <a href="#301302">Projet 3.01-02 : Chasse au monstre</a>-->
                        </li>
                    </ul>
    
                </aside>`    
        });
    
    
}

createYearSection().then(createProject())


