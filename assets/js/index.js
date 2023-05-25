$("#add_user").submit(function(event){
    alert("Data inserted successfully!!")
})

$("#update_user").submit(function(event){
    event.preventDefault(); //stop running default action
    var unindexed_array = $(this).serializeArray();//this kiyanne #update_user ekatama tamai
    var data = {}

    $.map(unindexed_array,function(n,i){
        //"n" return all the data of unindexed_array
        //"i" return the index of the unindexed_array

        data[n['name']] = n['value']
    })

    console.log(data);

    //update record
    var request= { //can use any name to "request" variable
        "url" : `http://localhost:8080/api/users/${data.id}`,
        "method":"PUT",
        "data":data 
    }
    $.ajax(request).done(function(response){ //if successfull request then you can use the "done" method
        alert("Data updated successfully!!!");
    })
})

if(window.location.pathname =="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        //delete record (rdirect to routes)
        var request= { //can use any name to "request" variable
            "url" : `http://localhost:8080/api/users/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){ //if successfull request then you can use the "done" method
                alert("Data deleted successfully!!!");
                location.reload();
            })
        }
    })

}