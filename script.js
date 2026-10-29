// Datos de la web: modificar aquí es más sencillo que repetir tarjetas HTML.
const technologies = [
  ['AWS','Cloud','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',null],['OpenShift','Kubernetes','redhatopenshift','EE0000'],
  ['GitLab','SCM & CI/CD','gitlab','FC6D26'],['Jenkins','CI/CD','jenkins','D24939'],
  ['Nexus','Artefactos','sonatype','6C45A5'],['ArgoCD','GitOps','argo','EF7B4D'],
  ['RHEL / Linux','Infraestructura','redhat','EE0000'],['WebLogic','Middleware','assets/tech/weblogic.png',null],
  ['JBoss','Middleware','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg',null],['Grafana','Monitorización','grafana','F46800'],
  ['Prometheus','Monitorización','prometheus','E6522C'],['Ceph','Almacenamiento','ceph','EF5C55']
];
// Tecnologías seleccionadas por puesto, basadas en el CV profesional.
// Los nombres permanecen visibles incluso si no carga un icono externo.
const jobs = [
  {date:'Sep 2025 – Actualidad',company:'Capgemini',role:'DevOps Engineer & Technical Lead',slug:'capgemini',stack:['OpenShift','GitLab','Jenkins','Nexus','ArgoCD','RHEL','Grafana']},
  {date:'Jun 2024 – Jul 2025',company:'Sofinco España',role:'Infrastructure Engineer · Middleware & DevOps',slug:'sofinco',stack:['WSO2','Jenkins','Talend','GitLab','ArgoCD','Kubernetes','Control-M','Axway','Tomcat','Grafana','RHEL','Oracle SQL']},
  {date:'Jun 2022 – Jun 2024',company:'DXC Technology',role:'Middleware & Cloud Administrator',slug:'dxc',stack:['WebLogic','AWS','WebSphere','Apache','IIS','LDAP','OHS','OBIEE','OAS','Dynatrace','Grafana','RHEL']},
  {date:'Mar 2021 – Jun 2022',company:'Indra',role:'Middleware Administrator',slug:'indra',stack:['WebLogic','JBoss','Jenkins','Rundeck','Tibco','Control-M','RHEL','Windows Server']},
  {date:'Jun 2020 – Mar 2021',company:'Quental Technologies',role:'Middleware Administrator',slug:'quental',stack:['WebLogic','JBoss','Oracle Service Bus','Oracle SQL','OEM','RHEL','Nagios','LDAP']},
  {date:'Nov 2019 – May 2020',company:'Sopra Steria',role:'Middleware Administrator',slug:'sopra-steria',stack:['WebSphere','IIS','JBoss','Tomcat','RHEL']},
  {date:'Ene 2019 – Nov 2019',company:'Tata Consultancy Services',role:'Middleware Administrator',slug:'tcs',stack:['JBoss','Tomcat','Apache','IIS','RHEL','Windows Server']},
  {date:'Abr 2018 – Ene 2019',company:'SIA Group',role:'IT Technical Consultant',slug:'sia',stack:['Apache','Tomcat','JBoss','SQL','PostgreSQL','MobileIron','Android','iOS']}
];
// Imágenes externas solo para marcas con identificador disponible. Algunos productos
// empresariales no disponen de SVG público estable y utilizan distintivo de texto.
const stackIcons = {
 'AWS':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
 'OpenShift':'https://cdn.simpleicons.org/redhatopenshift/EE0000',
 'GitLab':'https://cdn.simpleicons.org/gitlab/FC6D26',
 'Jenkins':'https://cdn.simpleicons.org/jenkins/D24939',
 'Nexus':'https://cdn.simpleicons.org/sonatype/9B63D9',
 'ArgoCD':'https://cdn.simpleicons.org/argo/EF7B4D',
 'Kubernetes':'https://cdn.simpleicons.org/kubernetes/326CE5',
 'RHEL':'https://cdn.simpleicons.org/redhat/EE0000',
 'Grafana':'https://cdn.simpleicons.org/grafana/F46800',
 'WebLogic':'assets/tech/weblogic.png',
 'JBoss':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg',
 'Apache':'https://cdn.simpleicons.org/apache/D22128',
 'Tomcat':'https://cdn.simpleicons.org/apachetomcat/F8DC75',
 'PostgreSQL':'https://cdn.simpleicons.org/postgresql/4169E1',
 'Dynatrace':'https://cdn.simpleicons.org/dynatrace/1496FF',
 'Windows Server':'https://cdn.simpleicons.org/windows/0078D4',
 'Android':'https://cdn.simpleicons.org/android/3DDC84',
 'iOS':'https://cdn.simpleicons.org/apple/7C8799',
 'Nagios':'https://cdn.simpleicons.org/nagios/222222',
 'Prometheus':'https://cdn.simpleicons.org/prometheus/E6522C'
};
const techGrid=document.querySelector('#techGrid');
for(const [name,description,slug,color] of technologies){
 const card=document.createElement('div');card.className='tech-card';
 const icon=document.createElement('img');icon.alt=`Logo de ${name}`;icon.loading='lazy';
 const fallback=document.createElement('span');fallback.className='tech-icon-fallback';fallback.textContent=name.slice(0,3).toUpperCase();
 if(slug){icon.src=slug.startsWith('https://') || slug.startsWith('assets/') ? slug : `https://cdn.simpleicons.org/${slug}/${color}`;icon.onerror=()=>{icon.style.display='none';fallback.style.display='flex'};}else{icon.style.display='none';fallback.style.display='flex'}
 const title=document.createElement('strong');title.textContent=name;const sub=document.createElement('span');sub.textContent=description;
 card.append(icon,fallback,title,sub);techGrid.append(card);
}
// Logos vinculados a fuentes públicas verificadas. Si falla alguno, se ve el nombre de la empresa.
// Se pueden sustituir por imágenes locales en assets/companies/ cuando se disponga del archivo oficial.
const companyLogos = {
  'capgemini': 'https://commons.wikimedia.org/wiki/Special:FilePath/Capgemini_201x_logo.svg',
  'sofinco': 'https://commons.wikimedia.org/wiki/Special:FilePath/Sofinco_2026.svg',
  'dxc': 'https://commons.wikimedia.org/wiki/Special:FilePath/DXC_Technology_logo_(2021).svg',
  'indra': 'https://commons.wikimedia.org/wiki/Special:FilePath/Indra_Group_logo.svg',
  // Logotipo original proporcionado por Luis, alojado en el repositorio.
  'quental': 'assets/companies/quental.png',
  'sopra-steria': 'https://commons.wikimedia.org/wiki/Special:FilePath/Sopra_Steria_logo.svg',
  'tcs': 'https://commons.wikimedia.org/wiki/Special:FilePath/Tcs-logo-1.svg',
  // Imagen de marca SIA publicada por Europa Press, de uso sujeto a las condiciones del titular.
  'sia': 'https://img.europapress.es/fotoweb/fotonoticia_20201117130223_1200.jpg'
};
const timeline=document.querySelector('#timeline');
for(const entry of jobs){
 const {date,company,role,slug,stack}=entry;
 const job=document.createElement('article');job.className='job';
 const dateEl=document.createElement('div');dateEl.className='job-date';dateEl.textContent=date;
 const line=document.createElement('div');line.className='job-line';
 const wordmark=document.createElement('span');wordmark.className='company-wordmark';wordmark.textContent=company;
 const logo=document.createElement('img');logo.className='company-logo';logo.alt=`Logo de ${company}`;logo.loading='lazy';logo.referrerPolicy='no-referrer';
 wordmark.style.display='block';
 logo.onload=()=>{wordmark.style.display='none'};
 logo.onerror=()=>{logo.remove();wordmark.style.display='block'};
 logo.src=companyLogos[slug] || `assets/companies/${slug}.svg`;
 const title=document.createElement('div');title.className='job-title';
 const strong=document.createElement('strong');strong.textContent=company;
 const small=document.createElement('small');small.textContent=role;
 title.append(strong,small);line.append(logo,wordmark,title);
 const stackList=document.createElement('div');stackList.className='job-stack';stackList.setAttribute('aria-label',`Tecnologías utilizadas en ${company}`);
 for(const name of stack){
   const item=document.createElement('span');item.className='job-tech';item.title=name;
   const logoUrl=stackIcons[name];
   if(logoUrl){
      const img=document.createElement('img');img.src=logoUrl;img.alt='';img.loading='lazy';
      img.onerror=()=>img.remove();item.append(img);
   }
   const nameSpan=document.createElement('span');nameSpan.textContent=name;item.append(nameSpan);stackList.append(item);
 }
 job.append(dateEl,line,stackList);timeline.append(job);
}
const btn=document.querySelector('#menuButton');const links=document.querySelector('#navLinks');btn.addEventListener('click',()=>{const isOpen=links.classList.toggle('open');btn.setAttribute('aria-expanded',String(isOpen))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');btn.setAttribute('aria-expanded','false')}));
document.querySelector('#currentYear').textContent=new Date().getFullYear();
