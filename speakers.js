const speakerDialog=document.querySelector('#speaker-dialog');
document.querySelector('#join-speakers').addEventListener('click',()=>speakerDialog.showModal());
speakerDialog.querySelector('.close').addEventListener('click',()=>speakerDialog.close());
const speakerForm=document.querySelector('#speaker-form');
speakerForm.addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#speaker-name').value.trim(),area=document.querySelector('#speaker-area').value.trim(),bio=document.querySelector('#speaker-bio').value.trim();if(!name||!area||!bio)return;const body=`Hola, me interesa ser parte del ecosistema de relatores y especialistas de Inspiratoria.\n\nNombre: ${name}\nÁreas de experiencia: ${area}\n\n${bio}`;document.querySelector('#speaker-draft-text').textContent=body;document.querySelector('#speaker-email').href='mailto:macarena@inspiratoria.org?subject='+encodeURIComponent('Ecosistema de relatores · '+name)+'&body='+encodeURIComponent(body);document.querySelector('#speaker-draft').hidden=false;});
speakerForm.addEventListener('input',()=>document.querySelector('#speaker-draft').hidden=true);
