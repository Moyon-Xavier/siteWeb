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

function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    console.log("math " + match)
    console.log("math0 " + match[0])
    console.log("math1 " + match[1])
    console.log("math2 " + match[2])
    console.log("math3 " + match[3])
   
    if (match && match[2].length == 11) {
        return match[2];
    
    }else {
        var regExp = /^.*(www.youtube.com\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        console.log("math " + match)
        console.log("math0 " + match[0])
        console.log("math1 " + match[1])
        console.log("math2 " + match[2])
        console.log("math3 " + match[3])
        if (match && match[2].length == 11) {
          return match[2];
    
       // https://www.youtube.com/watch?v=bXrRq79nPlM
        } else {
            return 'error';
        }
        }
}

/**function replaceYTBUrl(ytUrl){
    return ytUrl.replace('/watch?v=', '/embed/');
}**/
function getAllYtbIframegetAllLink(element){
    var str =``;
    console.log(element)
    if(element.ytbLink==null || element.ytbLink==undefined ){
        return '';
    }

    element.ytbLink.forEach(link=>{str+=` <h4>${link.title}</h4>
    
                        <div class="youtube"><iframe src="https://www.youtube.com/embed/${getId(link.iframe)}" frameborder="0" allowfullscreen></iframe></div>`})
   return str;
}

function getAllLink(element){
    var str =``;
    if(element.link==null || element.link==undefined ){
        console.log(element.link+"==null");
        return '';
    }
    element.link.forEach(link=>{str+=`<a class="gitLink" href="${link.lien}" target="_blank">${link.title}</a>`})
    console.log("not null : "+ str);
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
                
                <article class="listLink">
                    ${getAllLink(element)}
                </article>
                <article>
                ${getAllYtbIframegetAllLink(element)}
                    </article>-
    
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


