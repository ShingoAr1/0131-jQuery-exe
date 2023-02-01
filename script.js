/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {
    // code goes here
    $('#addTask').click(function (event) {  
        var inputValue = $('.textBox').val();
            if (!inputValue) {
                alert("Error: Please enter a task first");
            }else{
                alert("New Task: "+ inputValue);
                const newTask = $(
                 `<div>${inputValue}
                     <button id="done" class="fa fa-check"></button>
                     <button id="delete" class="fa fa-trash"></button>
                    </div>`
                )
                $('.notCompleted').append(newTask)
            }
                
                $('#done').click(function () {
                  const doneTask = $(this).parent().parent();
                  doneTask.fadeOut(1000, function () {
                    doneTask.hide().appendTo('.completed').fadeIn(1000)
                  })
                })
                
                $('#delete').click(function(){
                    const deletedTask = $(this).parent();
                    deletedTask.fadeOut(1000, function () {
                        deletedTask.remove()
                    })
                })
                $('.textBox').val('');   
        
        
   })
});