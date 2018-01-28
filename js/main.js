(function(){
  let cr = {
    nota:new Array(),
    cargaH:new Array(),
    materias:new Array(),
    crFinal: 0,
    init: function(){
      this.cacheDOM();
      this.events();
      this.crShow();
    },
    cacheDOM:function(){
      this.form = document.querySelector('form');
      this.materia = document.querySelector('#mat');
      this.ch = document.querySelector('#ch');
      this.nf = document.querySelector('#nf');
      this.cr = document.querySelector('#res-cr');
      this.list = document.querySelector('#mat-info');
      this.inputs = document.querySelectorAll('.input');
      this.infoControl = document.querySelector('.info-control');
      this.infoAdd = document.querySelector('.add-info');
    },
    events: function(){
      this.form.addEventListener('submit', this.testInfo);
      this.list.addEventListener('click', this.deleteInfo);
      for(let i = 0; i < this.inputs.length; i++){
        this.inputs[i].addEventListener('focus', this.focus);
        this.inputs[i].addEventListener('blur', this.blur);
      }
    },
    focus: function(e){
      e.target.parentElement.children[0].classList.add('outside');
    },
    blur: function(e){
      if(!e.target.value){e.target.parentElement.children[0].classList.remove('outside');}
    },
    testInfo: function(e){
      e.preventDefault();
      if(!cr.inputs[0].value || !cr.inputs[1] || !cr.inputs[2]){
        cr.msg('Por favor, preencha todos os campos.');
      }else{
        let Mat = cr.inputs[0].value;
        let NF = cr.inputs[1].value;
        let CHo = cr.inputs[2].value;
        cr.addInfo(Mat, NF, CHo);
      }
    },
    msg: function(msg){
      const alert = document.createElement('div');
      alert.className = 'alert';
      alert.appendChild(document.createTextNode(msg));
      this.infoAdd.insertBefore(alert, this.infoControl);
      setTimeout(function () {
        document.querySelector('.alert').remove();
      }, 1500);
    },
    addInfo: function(mat, nt, ch){
      this.materias.push(mat);
      this.nota.push(nt.replace(',', '.'));
      this.cargaH.push(ch);
      this.showInfo(nt, ch, mat);
      this.calc();
    },
    calc: function(){
      let nota = this.nota;
      let carga = this.cargaH;
      let mat = this.materias;
      let up = 0;
      let down = 0;
      for(let i = 0; i < mat.length; i++){
        up += Number(carga[i] * nota[i]);
        down += Number(carga[i]);
      };
      this.crFinal = up/down;
      this.crShow();
    },
    crShow: function(){
      this.cr.innerHTML = this.crFinal;
    },
    showInfo: function(nt, ch, mt){
      let row = document.createElement('tr');
      row.innerHTML = `
        <td>${mt}</td>
        <td>${nt}</td>
        <td>${ch}</td>
        <td class="center-text"><a href="#" class="del">X</a></td>
      `;
      this.list.appendChild(row);
    }
  }
  cr.init();
})()