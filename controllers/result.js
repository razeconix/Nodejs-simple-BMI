module.exports = (request, response) => {
    const meters = parseFloat(request.body.meters)
    const cm = parseFloat(request.body.cm)
    var   height = meters+(cm/100)
    const weight = request.body.kilos
    const bmi = (weight/(height*height)).toFixed( 2 )
    

    const context ={bmi}
    
  response.render('result',context)
}