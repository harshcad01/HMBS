function togglePassword() {
    var passwordInput = document.getElementById("pass");
    var confirmPasswordInput = document.getElementById("conpass");
    var toggleCheckbox = document.getElementById("check");
    var toggleCheckbox1 = document.getElementById("check1");

    // Check if the checkbox is checked
    if (toggleCheckbox.checked) {
      // If checked, change the type attribute to "text" for both password fields
      passwordInput.type = "text";
    } else {
      // If not checked, change it back to "password" for both password fields
      passwordInput.type = "password";
    }


  if (toggleCheckbox1.checked) {
    // If checked, change the type attribute to "text" for both password fields
    confirmPasswordInput.type = "text";
  } else {
    // If not checked, change it back to "password" for both password fields
    confirmPasswordInput.type = "password";
  }
}


function updateRealTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var day = currentTime.toDateString();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;


  document.getElementById("show-time").innerHTML = hours + ":" + minutes + ":" + seconds + " on " + day ;
}
setInterval(updateRealTime, 1000);
updateRealTime();

 // Add custom JavaScript logic here
 $(document).ready(function() {
  // Search functionality
  $('#searchInput').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('.card-body > div').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



$(document).ready(function() {
  // Counter to keep track of the number of products
  let productCount = 0;

  // Function to add a new product row
  function addProductRow(productName, price, stock) {
    productCount++;
    const newRow = `
      <tr>
        <th scope="row">${productCount}</th>
        <td><input type="text" class="form-control product-name" value="${productName}"></td>
        <td><input type="text" class="form-control product-price" value="${price}"></td>
        <td><input type="text" class="form-control product-stock" value="${stock}"></td>
        <td>
          <!-- Add and Remove buttons -->
          <button type="button" class="btn btn-success btn-sm update-product-btn">Update</button>
          <button type="button" class="btn btn-danger btn-sm remove-product-btn">Remove</button>
        </td>
      </tr>
    `;
    $('#product-list').append(newRow);
  }

  // Event listener for Add Product button click
  $('#add-product-btn').click(function() {
    // Example: Add a new product with some default values
    addProductRow('New Product', '$0.00', '0');
  });

  // Event listener for Remove Product button click
  $(document).on('click', '.remove-product-btn', function() {
    $(this).closest('tr').remove();
  });

  // Event listener for Update Product button click
  $(document).on('click', '.update-product-btn', function() {
    const row = $(this).closest('tr');
    const productName = row.find('.product-name').val();
    const price = row.find('.product-price').val();
    const stock = row.find('.product-stock').val();

    // You can perform further actions with the updated product data here
    console.log('Updated Product Name:', productName);
    console.log('Updated Price:', price);
    console.log('Updated Stock:', stock);
  });
});