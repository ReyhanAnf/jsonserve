
function help(wt){
idt='id = id dari canvas';
  xit='xi = sumbu x (bisa dalam bentuk array 1D!>';
  yit='yi = sumbu y (bisa dalam bentuk array 1D!>';
  bgct='bgct = warna point scatter \n(bisa dalam bentuk array 1D!>';
  pradt='prad = ukuran point scatter';
  legendt='legend = arti dalam warna tertentu';

yt='y = sumbu y (bisa dalam bentuk array 1D!>';
xtt='xtik = tick sumbu x, nilai dari sumbu x';
brt='br = warna line penghubung plot';
fillt='fill = area yang mencakup line';

ct='c = color -value berbentuk array 1D !>';
lbelt='lbel = label setiap line berbeda warna';

if(wt=='scatter'){
  scatt='function scatter(id, xi, yi , bgc, prad, legend)';
console.log(scatt,'\n',idt,'\n',xit,'\n',yit,'\n',bgct,'\n',pradt,'\n',legendt)

}else if(wt=='plot'){
  plott='function plot(id, y, xtik, bg, br, legend, fill)';
  console.log(plott,'\n',idt,'\n',yt,'\n',xtt,'\n',bgct,'\n',brt,'\n',legendt);

  
}else if(wt=='lines'){
   linest='function lines(id, y, legend, c, lbel, xtik)';
   console.log(linest,'\n',idt,'\n',yt,'\n',legendt,'\n',ct,'\n',lbelt,'\n',xtt);
}
  
  
};

function scatter(id, xi, yi , bgc, prad, legend){
if(typeof(xi[0])==='number'){
  if(typeof(bgc)==='boolean'){bgc='blue';}
  if(typeof(prad)==='undefined'){prad=3;}
  if(typeof(legend)==='undefined'){legend=false;}
let xy = [];

if(xi.length == yi.length){
  for(let i=0; i<xi.length; i++){
    xy.push({x:Number(xi[i]), y:Number(yi[i])})
  }
}else{
  alert('argument not shape');
}

new Chart(id, {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: prad,
      pointBackgroundColor: bgc,
      data: xy
    }]
  },
  options: {
    legend: {display: legend},
  }
});
}else if(typeof(xi[0])==='object'){
  if(typeof(bgc)==='boolean'){bgc='blue';}
  if(typeof(prad)==='undefined'){prad=3;}
  if(typeof(legend)==='undefined'){legend=false;}

rn = [];

for(let i=0;i<xi.length;i++){
  let xy = [];
  let c = '';
  w = [Math.random()*255, 
      Math.random()*255,
      Math.random()*255]
  c = `rgb(${w[0]},${w[1]},${w[2]})`;

    if(xi[i].length == yi[i].length){
     for(let j=0; j<xi[i].length; j++){
      xy.push({x:Number(xi[i][j]), y:Number(yi[i][j])});
    }
  }else{
    alert('argument not shape');
  }
  rn.push({
        pointRadius: prad,
        pointBackgroundColor: c,
        data: xy
      })
  }
new Chart(id, {
  type: "scatter",
  data: {
    datasets: rn
  },
  options: {
    legend: {display: legend},
  }
});
}

}

function plot(id, y, xtik, bg, br, legend, fill){
if(typeof(xtik)==='undefined'){xtik = [50,60,70,80,90,100,110,120,130,140,150];
}
if(typeof(bg)==='undefined'){bg='rgb(0,0,255)';}
if(typeof(fill)==='undefined'){fill=false;}
  if(typeof(br)==='undefined'){br='rgb(0,250,250)';}
  if(typeof(legend)==='undefined'){legend=false;}  

new Chart(id, {
  type: "line",
  data: {
    labels: xtik,
    datasets: [{
      fill: fill,
      lineTension: 0,
      backgroundColor: bg,
      borderColor: br,
      data: y
    }]
  },
  options: {
    legend: {display: legend},
    scales: {
      yAxes: [{ticks: {min: (y[0] - 10), max: (y[(y.length -1)] +10) }}],
    }
  }
});}

function lines(id, y, legend, c, lbel, xtik){
if(typeof(xtik)==='undefined'){xtik=[100,200,300,400,500,600,700,800,900,1000]
;}
if(typeof(label)==='undefined'){lbel=['a','b','c','d','e','f','g','h','i','j', 'k','l','m','n','o','p','q','r','s','t'];}
if(typeof(legend)==='undefined'){legend=true}
if(typeof(c)=='undefined'){
  c= [];
for(let i=0; i<y.length;i++){
  w = [Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)];
  c.push(`rgb(${w[0]},${w[1]},${w[2]})`);
}
}

data = [];

  for(let i=0; i<y.length;i++){
      data.push({data:y[i] ,borderColor: c[i],fill:false, label:lbel[i]});
    }
new Chart(id, {
  type: "line",
  data: {
    labels: xtik,
    datasets: data
  },
  options: {
    legend: {display: legend}
  }
});}


let x = [[55],[50,60,70]];
let y = [[6],[7,6.5,8]];
let y1 = [7,8,8,9,9,9,10,11,14,14,15];
let y3 = [
  [860,1140,1060,1060,1170,1110,1330,2210,7830,2478],
  [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
  [300,700,2000,-5000,6000,4000,2000,1000,200,100],
  [-3000,800,700,600,1000,1100,1100,1400,700,100]
  ];


// scatter('myChart', x, y, legend=true)
// plot('myChart2', y1)
// lines('myChart3', y3)

