require('dotenv').config()

const axios = require('axios')

let list = [];
let id = 0;

module.exports = {
    create: ( req, res ) => {
        console.log('Successful creation')
        const { task } = req.body;
        list.push([task]);
        res.status(200).json(list);
      },

    get: (req, res) => {
        res.status(200).json(list)
    },

    delete:( req,res ) => {
        console.log('This should delete')
        const { id }= req.params;
        list.forEach((e,i,a) => {
            if(i == id){
                a.splice(i,1)
            }
            res.status(200).json( list )
        })
        
    },
    updateComplete:(req,res) => {
        console.log('Successful update')
        const{ id } = req.params;
        list.forEach((e,i,a)=>{
            if(i == id){
                a[i]+="-complete"
            }
            res.status(200).json( list )
        })
    }
    
}

         