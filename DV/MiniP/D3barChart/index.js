let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
let req = new XMLHttpRequest()

let data 
let values = []

let heightScale
let xScale 

let xAxisScale 
let yAxisScale

let width = 800
let height = 600
let padding = 20

let svg = d3.select('svg')

let drawCanavas = () => {
  svg.attr('width',width)
  svg.attr('height',height)
}

let generateScales = () =>{
 
      heightScale = d3.scaleLinear()
                    .domain([0,d3.max(values, (item) =>{
                      return item[1]
                    })])
                     /*Return max element year*/
                    .range([0,height - (2*padding)])
                    /*Return max height of bar*/
     xScale = d3.scaleLinear()
                .domain([0, values.length -1])
                .range([padding,width- padding])
    
      /*Changing dates for d3*/
      let datesArray = values.map((item) =>{
          return new Date(item[0])
      })
      console.log(datesArray)
      
      xAxisScale = d3.scaleTime()
                      .domain([d3.min(datesArray), d3.max(datesArray)])
                      .range([padding, width-padding])
                               
      YAxisScale = d3.scaleLinear()
                      .domain([0, d3.max(values , (item) => { return item[1]
                      })])
                      /*Return the items of poplulation from index 1*/
                      .range([height - padding, padding])
  
  
  
}
let drawBars = () =>{
  
}
let generateAxes = () =>{
		let xAxis = d3.axisBottom(xAxisScale)
     svg.append('g')
      .call(xAxis)
      .attr('id','x-axis')
    //let yAxis = d3.axisLeft(yAxisScale)
    
  
 
    

  
}

req.open('GET',url,true)
req.onload = () => {
    data = JSON.parse(req.responseText)
    values = data.data
    //console.log(values)
    drawCanavas()
    generateScales()
    generateAxes()
    
    
} 
req.send()

