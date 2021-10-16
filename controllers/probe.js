const fs = require('fs')
const csv = require('csv-parser')
const results =[]


const probeGet= async(req, res)=>{
    let results =[]
    const Probe = req.app.get('models').Probe
    let probeValue
    if(req.query.room){
         probeValue = await Probe.find({room : req.query.room })
    }

    if(probeValue[0].url){
        
        fs.createReadStream(probeValue[0].url)
            .on('error', () => {
                // handle error
            })

            .pipe(csv({}))
            .on('data', (row) => {
                results.push(row)


            })

            .on('end', () => {
                res.json(results)
            })
    }


}

const probeCreat = async (req, res)=>{
    try {

      if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).json('No files were uploaded')
        }
        if(req.files){
            let file = req.files.probe
            let type = file.mimetype.split('/')[1]

            if(type !== 'csv'){
                return res.status(400).json('is note csv file')
            }
            let filename = new Date().getTime() +'_'+file.name
            const uploadTo = `public/csv/${filename}`
            const models = req.app.get('models')
            const newProbe = await new  models.Probe({
                url : uploadTo,
                probeType:req.body.probeType,
                room :"alpha",
            }).save()
            file.mv(uploadTo, (err) =>{
                if (err) {
                    res.json(err)
                } else {
                    res.json('successfully updated')
                }
            })


        }



    }catch(err){
        res.json(err)
    }



}


module.exports ={probeCreat,probeGet}