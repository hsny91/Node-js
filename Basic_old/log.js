// Create Modul

let log={
    information:function(info){
        console.log('information ' + info)
    },
    fault:function(fault){
        console.log('Fault' + fault)
    }
}

module.exports=log // we can insert to this modüle to other file called log