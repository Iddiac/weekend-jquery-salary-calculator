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
};
// THIS FUNCTION IS AMAZING AND WORKSSS
function submit() {
    console.log('im in submit');
    let First = $(`#First-Name`).val();
    let Last = $(`#Last-Name`).val();
    let ID = $(`#Id-Number`).val();
    let Title = $(`#Title`).val();
    let AnnualSalary= $(`#Annual-Salary`).val();

    $(`.body`).prepend(`
        <tr>
            <td> ${First}</td>
            <td> ${Last}</td>
            <td> ${ID}</td>
            <td> ${Title}</td>
            <td> ${AnnualSalary}</td>


        </tr>
        
    `);

}