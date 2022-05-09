console.log('wow');
$(document).ready(onReady);

function onReady() {
    /* EXAMPLE OF SOMETHING THAT WORKS
        $(`#Submit-Button`).on('click', submit);
            function submit(){
                console.log('wow');
                $('#Total').append("Ujjwal Adhikari");
    } 
    */
    $(`#Submit`).on('click', submit);
    $(`#Submit`).on('click', monthlyCalc);
    $(`.body`).on(`click`, '.delete-button', remove);
    
};
let monthly = 0;
// THIS FUNCTION IS AMAZING AND WORKSSS
function submit() {
    console.log('im in submit');
    let First = $(`#First-Name`).val();
    $("#First-Name").val('');
    let Last = $(`#Last-Name`).val();
    $("#Last-Name").val('');
    let ID = $(`#Id-Number`).val();
    $("#Id-Number").val('');
    let Title = $(`#Title`).val();
    $("#Title").val('');
    let AnnualSalary = $(`#Annual-Salary`).val();
    $("#Annual-Salary").val('');
    annual.push(AnnualSalary);

    monthly += AnnualSalary/12;

    $('#Total').empty();
    $("#Total").append('Monthly Cost ', monthly.toFixed(2));

    if (monthly > 20000) {
        $(".below").addClass('Red');

    }


    $(`.body`).prepend(`
        <tr>
            <td> ${First}</td>
            <td> ${Last}</td>
            <td> ${ID}</td>
            <td> ${Title}</td>
            <td> $${AnnualSalary}</td>
            <td> <button class="delete-button"> delete </button> </td>
        </tr>
        
    `);

}
function remove(event) {
    $(event.target).closest('tr').remove();

}


// function monthlyCalc() {
// //    // for (let i = 0; i < annual.length; i++) {
// //         monthly += annual[i];
// //     }
// //     monthly /= 12;

//  